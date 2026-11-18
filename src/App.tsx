import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Users,
  Briefcase,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  Plane,
  Heart,
  Trophy,
  Compass,
  Wine,
  ShieldCheck,
  Clock,
  Award,
  ChevronDown,
  Send,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
} from 'lucide-react';
import { CONTACT_INFO, FLEET, SERVICES, TESTIMONIALS, FAQS } from './constants';
import type { Vehicle } from './types';

// Reference logos
import mmrImg from './assets/references/MMR-CR.webp';
import egstonImg from './assets/references/egston.svg';
import gpoaImg from './assets/references/gpoa.png';
import gymplImg from './assets/references/gympl.png';
import happyStarImg from './assets/references/hotel-happy-star.png';
import lahoferHotelImg from './assets/references/hotel-lahofer.webp';
import marielImg from './assets/references/hotel-mariel.webp';
import lahoferRedImg from './assets/references/lahofer_cervena.png';
import laufenImg from './assets/references/laufen.png';
import savanahImg from './assets/references/hotel-savanah.svg';
import msHnaniceImg from './assets/references/ms-hnanice.webp';
import nevogaImg from './assets/references/nevoga.png';
import saintGobainImg from './assets/references/saint-gobain.png';
import smSatovImg from './assets/references/sm-satov.webp';
import atletikaImg from './assets/references/tj-atletika.webp';
import florbalImg from './assets/references/tj-florbal.webp';
import viniceHnaniceImg from './assets/references/vinice-hnanice.webp';
import yageoImg from './assets/references/yageo-group.png';
import znojmoYellowImg from './assets/references/znojmo-zluta.png';

import './App.css';

const CLIENT_LOGOS = [
  { name: 'Laufen CZ', src: laufenImg },
  { name: 'Vinařství LAHOFER', src: lahoferRedImg },
  { name: 'Nevoga', src: nevogaImg },
  { name: 'Saint-Gobain', src: saintGobainImg },
  { name: 'Město Znojmo', src: znojmoYellowImg },
  { name: 'MMR ČR', src: mmrImg },
  { name: 'Vinice Hnanice', src: viniceHnaniceImg },
  { name: 'Hotel Savannah', src: savanahImg },
  { name: 'Hotel Happy Star', src: happyStarImg },
  { name: 'Hotel LAHOFER', src: lahoferHotelImg },
  { name: 'Egston', src: egstonImg },
  { name: 'Yageo Group', src: yageoImg },
  { name: 'TJ Znojmo Florbal', src: florbalImg },
  { name: 'TJ Znojmo Atletika', src: atletikaImg },
  { name: 'TJ Slovan Šatov', src: smSatovImg },
  { name: 'GPOA Znojmo', src: gpoaImg },
  { name: 'Gymnázium Znojmo', src: gymplImg },
  { name: 'MŠ Hnanice', src: msHnaniceImg },
  { name: 'Hotel Mariel', src: marielImg },
];

const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  // Lightbox state
  const [activeVehicle, setActiveVehicle] = useState<Vehicle | null>(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inquiry Form state
  const [selectedCarForm, setSelectedCarForm] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (videoReady) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % FLEET.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [videoReady]);

  const openVehicleGallery = (vehicle: Vehicle, startIdx = 0) => {
    setActiveVehicle(vehicle);
    setPhotoIdx(startIdx);
    document.body.style.overflow = 'hidden';
  };

  const closeVehicleGallery = () => {
    setActiveVehicle(null);
    document.body.style.overflow = '';
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeVehicle) return;
    setPhotoIdx((prev) => (prev + 1) % activeVehicle.gallery.length);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeVehicle) return;
    setPhotoIdx((prev) => (prev - 1 + activeVehicle.gallery.length) % activeVehicle.gallery.length);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!activeVehicle) return;
      if (e.key === 'Escape') closeVehicleGallery();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeVehicle]);

  const scrollToFormWithVehicle = (vehicle: Vehicle, e?: React.MouseEvent) => {
    e?.stopPropagation();
    closeVehicleGallery();
    setSelectedCarForm(`${vehicle.model} (${vehicle.capacity})`);
    const el = document.getElementById('poptavka');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getServiceIcon = (id: string) => {
    const props = { size: 26 };
    switch (id) {
      case 'airport':
        return <Plane {...props} />;
      case 'corporate':
        return <Briefcase {...props} />;
      case 'excursions':
        return <Compass {...props} />;
      case 'sports':
        return <Trophy {...props} />;
      case 'weddings':
        return <Heart {...props} />;
      case 'wine-cellars':
        return <Wine {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="v3-site">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="topbar-item">
              <Phone size={14} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
            <span className="topbar-sep">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="topbar-item">
              <Mail size={14} />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="topbar-right">
            <span className="topbar-badge">
              <MapPin size={13} /> Znojmo • ČR • Celá Evropa
            </span>
            <span className="topbar-sep">|</span>
            <span>Tradice od roku 1993</span>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header className="v3-header">
        <div className="container v3-header-inner">
          <a href="#" className="v3-brand">
            <div className="v3-brand-mark">CH</div>
            <div className="v3-brand-text">
              <span className="v3-brand-title">Autodoprava Chochola</span>
              <span className="v3-brand-sub">Osobní • Mikrobusová • Autobusová</span>
            </div>
          </a>

          <nav className="v3-nav">
            <a href="#vozovy-park">Naše vozy</a>
            <a href="#sluzby">Služby</a>
            <a href="#jak-to-funguje">Jak to funguje</a>
            <a href="#recenze">Recenze</a>
            <a href="#faq">Časté dotazy</a>
            <a href="#poptavka">Kontakt</a>
          </nav>

          <div className="v3-header-cta">
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="v3-phone-pill">
              <Phone size={16} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
            <a href="#poptavka" className="v3-btn v3-btn-primary">
              <span>Rezervovat odvoz</span>
              <ArrowRight size={16} />
            </a>
            <button
              type="button"
              className="v3-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="v3-mobile-drawer">
            <nav className="v3-mobile-links">
              <a href="#vozovy-park" onClick={() => setMobileMenuOpen(false)}>Naše vozy</a>
              <a href="#sluzby" onClick={() => setMobileMenuOpen(false)}>Služby</a>
              <a href="#jak-to-funguje" onClick={() => setMobileMenuOpen(false)}>Jak to funguje</a>
              <a href="#recenze" onClick={() => setMobileMenuOpen(false)}>Recenze a reference</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Časté dotazy</a>
              <a href="#poptavka" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </nav>
            <div className="v3-mobile-actions">
              <a
                href="#poptavka"
                onClick={() => setMobileMenuOpen(false)}
                className="v3-btn v3-btn-primary v3-w-full"
              >
                <CalendarCheck size={18} />
                <span>Nezávazná poptávka</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phones[0]}`} className="v3-btn v3-btn-light v3-w-full">
                <Phone size={18} />
                <span>Zavolat: {CONTACT_INFO.phones[0]}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION - Video background + Clean typography + Direct CTA buttons */}
        <section className="v3-hero">
          <div className="v3-hero-media" aria-hidden="true">
            {FLEET.map((car, i) => (
              <div
                key={car.id}
                className={`v3-hero-slide ${i === heroSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${car.image})` }}
              />
            ))}
            <video
              className={`v3-hero-video ${videoReady ? 'ready' : ''}`}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => setVideoReady(true)}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="v3-hero-overlay" />
          </div>

          <div className="container v3-hero-inner">
            <div className="v3-hero-box">
              <div className="v3-hero-eyebrow">
                <span className="v3-dot" />
                <span>Spolehlivá přeprava osob ze Znojma od roku 1993</span>
              </div>

              <h1>
                Odvoz na letiště, firemní přeprava i zájezdové autobusy
              </h1>

              <p className="v3-hero-lead">
                Cestujte v maximálním pohodlí a bezpečí s profesionálními řidiči. Přepravíme
                jednotlivce v luxusním <strong>Mercedesu třídy E (4 místa)</strong>, rodiny ve{' '}
                <strong>Vianu (7 míst)</strong>, skupiny v <strong>mikrobusech Sprinter (20 míst)</strong>{' '}
                i velké výpravy v <strong>autokaru Setra (52 míst)</strong>.
              </p>

              <div className="v3-hero-buttons">
                <a href="#poptavka" className="v3-btn v3-btn-primary v3-btn-lg">
                  <span>Poptat přepravu / Spočítat cenu</span>
                  <ArrowRight size={19} />
                </a>
                <a href="#vozovy-park" className="v3-btn v3-btn-glass v3-btn-lg">
                  <span>Prohlédnout vozový park</span>
                </a>
              </div>

              <div className="v3-hero-metrics">
                <div className="v3-metric-item">
                  <strong>30+ let</strong>
                  <span>zkušeností v dopravě</span>
                </div>
                <div className="v3-metric-divider" />
                <div className="v3-metric-item">
                  <strong>4 až 52 míst</strong>
                  <span>vlastní flotila vozů</span>
                </div>
                <div className="v3-metric-divider" />
                <div className="v3-metric-item">
                  <strong>100% spolehlivost</strong>
                  <span>miliony km bez nehod</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLEET SECTION - Simple, bright & clean with 6-photo modal gallery */}
        <section id="vozovy-park" className="v3-section v3-bg-soft">
          <div className="container">
            <div className="v3-section-head">
              <span className="v3-tag">Náš vozový park</span>
              <h2>Seznamte se s našimi moderními a pohodlnými vozy</h2>
              <p>
                Vyberte si vůz přesně podle počtu cestujících. Kliknutím na kartu vozu otevřete
                fotogalerii exteriéru a interiéru (6 fotografií u každého vozu).
              </p>
            </div>

            <div className="v3-fleet-grid">
              {FLEET.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="v3-vehicle-card"
                  onClick={() => openVehicleGallery(vehicle, 0)}
                >
                  <div className="v3-vehicle-media">
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="v3-vehicle-img"
                      loading="lazy"
                    />
                    {vehicle.badge && <span className="v3-vehicle-badge">{vehicle.badge}</span>}
                    <div className="v3-vehicle-capacity-pill">
                      <Users size={15} />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="v3-vehicle-hover-bar">
                      <Camera size={17} />
                      <span>Rozkliknout galerii ({vehicle.gallery.length} fotek)</span>
                    </div>
                  </div>

                  <div className="v3-vehicle-body">
                    <div className="v3-vehicle-title-wrap">
                      <h3>{vehicle.model}</h3>
                      <p className="v3-vehicle-sub">{vehicle.subtitle}</p>
                    </div>

                    <div className="v3-vehicle-QuickSpecs">
                      <span className="v3-spec-chip">
                        <Users size={14} /> {vehicle.capacity}
                      </span>
                      {vehicle.luggage && (
                        <span className="v3-spec-chip">
                          <Briefcase size={14} /> {vehicle.luggage}
                        </span>
                      )}
                    </div>

                    <ul className="v3-vehicle-features">
                      {vehicle.features.map((feat, i) => (
                        <li key={i}>
                          <span className="v3-check-icon">
                            <Check size={13} />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="v3-vehicle-footer">
                      <button
                        type="button"
                        className="v3-btn-card-gallery"
                        onClick={(e) => {
                          e.stopPropagation();
                          openVehicleGallery(vehicle, 0);
                        }}
                      >
                        <Camera size={16} />
                        <span>Fotogalerie ({vehicle.gallery.length})</span>
                      </button>
                      <button
                        type="button"
                        className="v3-btn-card-book"
                        onClick={(e) => scrollToFormWithVehicle(vehicle, e)}
                      >
                        <span>Poptat vůz</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - 3 Simple Steps (inspired by airportpickupbrno.cz) */}
        <section id="jak-to-funguje" className="v3-section v3-bg-white">
          <div className="container">
            <div className="v3-section-head">
              <span className="v3-tag">Jednoduchý postup</span>
              <h2>A jak to celé funguje?</h2>
              <p>
                Ozvěte se nám pomocí formuláře na konci stránky nebo telefonicky, domluvíme detaily
                a v den odjezdu už se o nic nemusíte starat.
              </p>
            </div>

            <div className="v3-steps-grid">
              <div className="v3-step-card">
                <div className="v3-step-num">01</div>
                <h3>Nezávazná poptávka a kalkulace</h3>
                <p>
                  Napíšete nám odkud, kam a v kolika lidech jedete. Obratem vám potvrdíme dostupnost
                  a přesnou cenu bez skrytých poplatků.
                </p>
              </div>
              <div className="v3-step-card">
                <div className="v3-step-num">02</div>
                <h3>Přistavení vozu přesně na čas</h3>
                <p>
                  V domluvený čas vás vyzvedne profesionální řidič v perfektně připraveném a čistém
                  voze přímo na vaší adrese nebo u příletové haly.
                </p>
              </div>
              <div className="v3-step-card">
                <div className="v3-step-num">03</div>
                <h3>Pohodlná jízda bez starostí</h3>
                <p>
                  Užijete si klidnou a bezpečnou cestu ať už míříte na letiště Vídeň/Praha, na
                  firemní akci, svatbu nebo vícedenní zájezd po Evropě.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="sluzby" className="v3-section v3-bg-soft">
          <div className="container">
            <div className="v3-section-head">
              <span className="v3-tag">Naše služby</span>
              <h2>Kompletní dopravní servis na míru</h2>
              <p>
                Ať už potřebujete odvoz na letiště, přepravu pro firmu, autobus pro školní výlet
                nebo svatební odvoz, vždy dorazíte včas a v pohodlí.
              </p>
            </div>

            <div className="v3-services-grid">
              {SERVICES.map((srv) => (
                <div key={srv.id} className="v3-service-card">
                  <div className="v3-service-icon">{getServiceIcon(srv.id)}</div>
                  <h3>{srv.title}</h3>
                  <p>{srv.description}</p>
                  <a href="#poptavka" className="v3-service-link">
                    <span>Poptat službu</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="v3-why-banner">
              <div className="v3-why-item">
                <ShieldCheck size={24} className="v3-why-ico" />
                <div>
                  <strong>Bezpečnost na 1. místě</strong>
                  <span>Pravidelně servisované vozy Mercedes-Benz &amp; Setra</span>
                </div>
              </div>
              <div className="v3-why-item">
                <Clock size={24} className="v3-why-ico" />
                <div>
                  <strong>Dochvilnost a sledování letů</strong>
                  <span>Při zpoždění letadla na vás na letišti vždy počkáme</span>
                </div>
              </div>
              <div className="v3-why-item">
                <Award size={24} className="v3-why-ico" />
                <div>
                  <strong>Férové smluvní ceny</strong>
                  <span>Jasná kalkulace předem pro soukromé osoby i firmy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS & CLIENT REFERENCES (inspired by airportpickupbrno.cz & kodlak.cz) */}
        <section id="recenze" className="v3-section v3-bg-white">
          <div className="container">
            <div className="v3-section-head">
              <span className="v3-tag">Reference a hodnocení</span>
              <h2>Co říkají naši klienti?</h2>
              <p>
                Zakládáme si na dlouhodobé důvěře soukromých zákazníků, škol, sportovních klubů i
                nejvýznamnějších firem na Znojemsku.
              </p>
            </div>

            <div className="v3-reviews-grid">
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="v3-review-card">
                  <div className="v3-stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="v3-review-quote">„{item.quote}“</p>
                  <div className="v3-review-author">
                    <div className="v3-author-avatar">{item.author.charAt(0)}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Logos Ticker */}
            <div className="v3-partners-box">
              <span className="v3-partners-label">
                Důvěřují nám významné firmy, hotely a instituce:
              </span>
              <div className="v3-marquee-wrap">
                <div className="v3-marquee-track">
                  {MARQUEE_LOGOS.map((logo, idx) => (
                    <div key={`${logo.name}-${idx}`} className="v3-marquee-logo">
                      <img src={logo.src} alt={logo.name} title={logo.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="v3-section v3-bg-soft">
          <div className="container v3-faq-container">
            <div className="v3-section-head">
              <span className="v3-tag">Otázky a odpovědi</span>
              <h2>Na co se často ptáte</h2>
              <p>Odpovědi na nejčastější dotazy ohledně rezervace a průběhu přepravy.</p>
            </div>

            <div className="v3-faq-list">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`v3-faq-item ${isOpen ? 'open' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="v3-faq-question">
                      <h3>{faq.question}</h3>
                      <span className="v3-faq-chevron">
                        <ChevronDown size={20} />
                      </span>
                    </div>
                    {isOpen && <div className="v3-faq-answer">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INQUIRY FORM & CONTACT SECTION AT THE BOTTOM */}
        <section id="poptavka" className="v3-section v3-contact-section">
          <div className="container">
            <div className="v3-section-head">
              <span className="v3-tag">Rezervace a kontakt</span>
              <h2>Poptat přepravu nebo spočítat cenu</h2>
              <p>
                Vyplňte nezávaznou poptávku a my se vám co nejdříve ozveme s cenovou nabídkou, nebo
                nám rovnou zavolejte na <strong>{CONTACT_INFO.phones[0]}</strong>.
              </p>
            </div>

            <div className="v3-contact-grid">
              {/* Left Info Column */}
              <div className="v3-contact-info-col">
                <div className="v3-contact-box">
                  <h3>Přímý kontakt</h3>
                  <p className="v3-contact-sub">
                    Jsme vám k dispozici pro rychlé objednávky i dlouhodobou firemní spolupráci.
                  </p>

                  <div className="v3-contact-items">
                    <a href={`tel:${CONTACT_INFO.phones[0]}`} className="v3-contact-row">
                      <div className="v3-contact-ico">
                        <Phone size={20} />
                      </div>
                      <div>
                        <span>Telefonní dispečink</span>
                        <strong>{CONTACT_INFO.phones[0]}</strong>
                      </div>
                    </a>

                    <a href={`mailto:${CONTACT_INFO.email}`} className="v3-contact-row">
                      <div className="v3-contact-ico">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span>E-mailová adresa</span>
                        <strong>{CONTACT_INFO.email}</strong>
                      </div>
                    </a>

                    <div className="v3-contact-row">
                      <div className="v3-contact-ico">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <span>Sídlo firmy ({CONTACT_INFO.owner})</span>
                        <strong>{CONTACT_INFO.address}</strong>
                        <small>IČO: {CONTACT_INFO.ico}</small>
                      </div>
                    </div>
                  </div>

                  <div className="v3-map-embed">
                    <iframe
                      title="Mapa sídla Autodoprava Chochola Znojmo"
                      src="https://www.google.com/maps?q=Van%C4%8Durova+13,+Znojmo&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="v3-form-col">
                <form className="v3-booking-form" onSubmit={handleFormSubmit}>
                  <h3>Nezávazný poptávkový formulář</h3>
                  <p>Stačí vyplnit základní údaje o cestě – ozveme se vám s potvrzením a cenou.</p>

                  <div className="v3-form-grid-2">
                    <div className="v3-field">
                      <label htmlFor="v3-from">Odkud *</label>
                      <input
                        id="v3-from"
                        type="text"
                        placeholder="Město nebo adresa vyzvednutí (např. Znojmo)"
                        required
                      />
                    </div>
                    <div className="v3-field">
                      <label htmlFor="v3-to">Kam *</label>
                      <input
                        id="v3-to"
                        type="text"
                        placeholder="Cíl cesty (např. Letiště Vídeň / Praha)"
                        required
                      />
                    </div>
                  </div>

                  <div className="v3-form-grid-3">
                    <div className="v3-field">
                      <label htmlFor="v3-date">Datum odjezdu *</label>
                      <input id="v3-date" type="date" required />
                    </div>
                    <div className="v3-field">
                      <label htmlFor="v3-time">Čas odjezdu</label>
                      <input id="v3-time" type="time" />
                    </div>
                    <div className="v3-field">
                      <label htmlFor="v3-passengers">Počet osob *</label>
                      <input
                        id="v3-passengers"
                        type="number"
                        min={1}
                        max={100}
                        placeholder="Např. 4"
                        required
                      />
                    </div>
                  </div>

                  <div className="v3-field">
                    <label htmlFor="v3-car">Vyberte typ vozu</label>
                    <select
                      id="v3-car"
                      value={selectedCarForm}
                      onChange={(e) => setSelectedCarForm(e.target.value)}
                    >
                      <option value="">Doporučte mi vhodný vůz podle počtu osob</option>
                      {Array.from(
                        new Map(FLEET.map((v) => [`${v.model} (${v.capacity})`, v])).values()
                      ).map((v) => {
                        const val = `${v.model} (${v.capacity})`;
                        return (
                          <option key={v.id} value={val}>
                            {v.model} — {v.capacity} ({v.subtitle})
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="v3-form-grid-2">
                    <div className="v3-field">
                      <label htmlFor="v3-name">Jméno a příjmení / Firma *</label>
                      <input id="v3-name" type="text" placeholder="Vaše jméno" required />
                    </div>
                    <div className="v3-field">
                      <label htmlFor="v3-phone">Telefon *</label>
                      <input id="v3-phone" type="tel" placeholder="+420 777 000 000" required />
                    </div>
                  </div>

                  <div className="v3-field">
                    <label htmlFor="v3-email">E-mail *</label>
                    <input id="v3-email" type="email" placeholder="vas@email.cz" required />
                  </div>

                  <div className="v3-field">
                    <label htmlFor="v3-note">Zpráva / Doplňující informace</label>
                    <textarea
                      id="v3-note"
                      rows={3}
                      placeholder="Např. číslo letu, požadavek na zpáteční odvoz, dětskou sedačku apod."
                    />
                  </div>

                  <button type="submit" className="v3-btn v3-btn-primary v3-btn-submit">
                    {formSubmitted ? (
                      <>
                        <CheckCircle2 size={20} />
                        <span>Děkujeme! Vaše poptávka je připravena</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Odeslat nezávaznou poptávku</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="v3-footer">
        <div className="container v3-footer-inner">
          <div className="v3-footer-col">
            <div className="v3-brand v3-brand-footer">
              <div className="v3-brand-mark">CH</div>
              <div className="v3-brand-text">
                <span className="v3-brand-title">Autodoprava Chochola</span>
                <span className="v3-brand-sub">Tradice od roku 1993</span>
              </div>
            </div>
            <p className="v3-footer-desc">
              Spolehlivá osobní, mikrobusová a autobusová doprava ze Znojma. Letištní transfery,
              firemní přeprava a zájezdy po celé ČR i Evropě.
            </p>
          </div>

          <div className="v3-footer-col">
            <h4>Rychlá navigace</h4>
            <ul>
              <li><a href="#vozovy-park">Vozový park (4 až 52 míst)</a></li>
              <li><a href="#sluzby">Naše služby</a></li>
              <li><a href="#jak-to-funguje">Jak to funguje</a></li>
              <li><a href="#recenze">Recenze a reference</a></li>
              <li><a href="#poptavka">Nezávazná poptávka</a></li>
            </ul>
          </div>

          <div className="v3-footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><strong>{CONTACT_INFO.owner}</strong></li>
              <li>{CONTACT_INFO.address}</li>
              <li>IČO: {CONTACT_INFO.ico}</li>
              <li><a href={`tel:${CONTACT_INFO.phones[0]}`}>{CONTACT_INFO.phones[0]}</a></li>
              <li><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="container v3-footer-bottom">
          <span>© {new Date().getFullYear()} Autodoprava Petr Chochola Znojmo. Všechna práva vyhrazena.</span>
        </div>
      </footer>

      {/* Floating WhatsApp / Quick Action Button */}
      <a
        href={`https://wa.me/420608707225?text=${encodeURIComponent(
          'Dobrý den, rád bych poptal cenu přepravy:\nOdkud: \nKam: \nDatum a počet osob: '
        )}`}
        target="_blank"
        rel="noreferrer"
        className="v3-whatsapp-float"
        aria-label="Napsat na WhatsApp"
      >
        <MessageCircle size={22} />
        <div className="v3-wa-text">
          <strong>WhatsApp</strong>
          <span>Rychlá poptávka</span>
        </div>
      </a>

      {/* LIGHTBOX MODAL GALLERY FOR 6 VEHICLE PHOTOS */}
      {activeVehicle && (
        <div className="v3-lightbox-backdrop" onClick={closeVehicleGallery}>
          <div className="v3-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="v3-lightbox-header">
              <div>
                <div className="v3-lightbox-title-row">
                  <h3>{activeVehicle.model}</h3>
                  <span className="v3-lightbox-cap">{activeVehicle.capacity}</span>
                </div>
                <p>
                  {activeVehicle.subtitle} • Fotografie {photoIdx + 1} z{' '}
                  {activeVehicle.gallery.length}
                </p>
              </div>

              <div className="v3-lightbox-actions">
                <button
                  type="button"
                  className="v3-btn v3-btn-primary v3-btn-sm"
                  onClick={(e) => scrollToFormWithVehicle(activeVehicle, e)}
                >
                  <CalendarCheck size={16} />
                  <span>Poptat tento vůz</span>
                </button>
                <button
                  type="button"
                  className="v3-lightbox-close"
                  onClick={closeVehicleGallery}
                  aria-label="Zavřít galerii"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="v3-lightbox-stage">
              <button
                type="button"
                className="v3-lightbox-arrow prev"
                onClick={prevPhoto}
                aria-label="Předchozí fotka"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={activeVehicle.gallery[photoIdx]}
                alt={`${activeVehicle.model} - foto ${photoIdx + 1}`}
                className="v3-lightbox-img"
              />

              <button
                type="button"
                className="v3-lightbox-arrow next"
                onClick={nextPhoto}
                aria-label="Další fotka"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="v3-lightbox-thumbs">
              {activeVehicle.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  className={`v3-thumb-item ${i === photoIdx ? 'active' : ''}`}
                  onClick={() => setPhotoIdx(i)}
                >
                  <img src={imgUrl} alt={`Náhled ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
