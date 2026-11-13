import type { Service, Vehicle, ContactInfo } from './types';

// Medailonky vozidel (hlavní fotky)
import eckoMain from './assets/vozidla/ecko.JPG';
import vianoMain from './assets/vozidla/viano.JPG';
import sprinterZlatyMain from './assets/vozidla/sprinter_zlaty.JPG';
import sprinterCernyMain from './assets/vozidla/sprinter_cerny.JPG';
import setraMain from './assets/vozidla/setra.JPG';

// Galerie - Mercedes-Benz E-Class (6 fotek)
import ecko1 from './assets/vozidla/ecko/IMG_0724.JPG';
import ecko2 from './assets/vozidla/ecko/IMG_0739.JPG';
import ecko3 from './assets/vozidla/ecko/IMG_0748.JPG';
import ecko4 from './assets/vozidla/ecko/IMG_0767.JPG';
import ecko5 from './assets/vozidla/ecko/IMG_0769.JPG';
import ecko6 from './assets/vozidla/ecko/IMG_0770.JPG';

// Galerie - Mercedes-Benz Viano (6 fotek)
import viano1 from './assets/vozidla/viano/IMG_0780.JPG';
import viano2 from './assets/vozidla/viano/IMG_0782.JPG';
import viano3 from './assets/vozidla/viano/IMG_0787.JPG';
import viano4 from './assets/vozidla/viano/IMG_0789.JPG';
import viano5 from './assets/vozidla/viano/IMG_0793.JPG';
import viano6 from './assets/vozidla/viano/IMG_0796.JPG';

// Galerie - Mercedes-Benz Sprinter Zlatý (6 fotek)
import sz1 from './assets/vozidla/sprinter_zlaty/IMG_0819.JPG';
import sz2 from './assets/vozidla/sprinter_zlaty/IMG_0833.JPG';
import sz3 from './assets/vozidla/sprinter_zlaty/IMG_0835.JPG';
import sz4 from './assets/vozidla/sprinter_zlaty/IMG_0837.JPG';
import sz5 from './assets/vozidla/sprinter_zlaty/IMG_0843.JPG';
import sz6 from './assets/vozidla/sprinter_zlaty/IMG_0845.JPG';

// Galerie - Mercedes-Benz Sprinter Černý (6 fotek)
import sc1 from './assets/vozidla/sprinter_cerny/IMG_0860.JPG';
import sc2 from './assets/vozidla/sprinter_cerny/IMG_0867.JPG';
import sc3 from './assets/vozidla/sprinter_cerny/IMG_0869.JPG';
import sc4 from './assets/vozidla/sprinter_cerny/IMG_0870.JPG';
import sc5 from './assets/vozidla/sprinter_cerny/IMG_0874.JPG';
import sc6 from './assets/vozidla/sprinter_cerny/IMG_0877.JPG';

// Galerie - Autobus Setra (6 fotek)
import setra1 from './assets/vozidla/setra/IMG_0893.JPG';
import setra2 from './assets/vozidla/setra/IMG_0897.JPG';
import setra3 from './assets/vozidla/setra/IMG_0899.JPG';
import setra4 from './assets/vozidla/setra/IMG_0909.JPG';
import setra5 from './assets/vozidla/setra/IMG_0910.JPG';
import setra6 from './assets/vozidla/setra/IMG_0911.JPG';

export const CONTACT_INFO: ContactInfo = {
  owner: 'Petr Chochola',
  address: 'Vančurova 13, 669 02 Znojmo',
  phones: ['+420 608 707 225'],
  email: 'petrchochola@seznam.cz',
  ico: '49407891',
};

export const SERVICES: Service[] = [
  {
    id: 'airport',
    title: 'Přeprava na letiště a zpět',
    description: 'Komfortní transfery na letiště Vídeň, Praha, Brno či Bratislava. Sledujeme přílety a počkáme na vás přímo u terminálu.',
  },
  {
    id: 'corporate',
    title: 'Firemní a VIP přeprava',
    description: 'Reprezentativní doprava pro management, obchodní partnery, firemní konference, teambuildingy i pravidelný svoz zaměstnanců.',
  },
  {
    id: 'excursions',
    title: 'Zájezdy, školy a výlety',
    description: 'Bezpečná autobusová a mikrobusová doprava na poznávací zájezdy po ČR i celé Evropě, školní výlety a exkurze.',
  },
  {
    id: 'sports',
    title: 'Doprava pro sportovní kluby',
    description: 'Spolehlivé svozy sportovních týmů a fanoušků na zápasy, turnaje a soustředění s dostatkem místa pro všechnu výbavu.',
  },
  {
    id: 'weddings',
    title: 'Svatební servis a oslavy',
    description: 'Elegantní vozy Mercedes-Benz pro ženicha a nevěstu i mikrobusy pro bezpečný rozvoz všech svatebních hostů.',
  },
  {
    id: 'wine-cellars',
    title: 'Vinné sklípky & Drink and Drive',
    description: 'Degustační večery na Znojemsku, rozvoz z oslav a společenských akcí nebo expresní přeprava zásilek 24/7.',
  },
];

export const FLEET: Vehicle[] = [
  {
    id: 'e-class',
    model: 'Mercedes-Benz Třídy E',
    subtitle: 'Business & VIP limuzína',
    badge: 'Business Class',
    capacity: '4 místa',
    luggage: '4 velká zavazadla',
    features: [
      'Celokožený klimatizovaný interiér',
      'Maximální ticho a pohodlí na dlouhé trasy',
      'Ideální pro letištní transfery a VIP hosty',
    ],
    image: eckoMain,
    gallery: [ecko1, ecko2, ecko3, ecko4, ecko5, ecko6],
  },
  {
    id: 'viano',
    model: 'Mercedes-Benz Viano',
    subtitle: 'Komfortní minivan pro rodiny a menší skupiny',
    badge: 'Minivan',
    capacity: '7 míst',
    luggage: '7 velkých zavazadel',
    features: [
      'Pohodlná kožená sedadla s loketními opěrkami',
      'Dvouzónová klimatizace v celém voze',
      'Prostorný kufr pro kufry, kočárky či lyže',
    ],
    image: vianoMain,
    gallery: [viano1, viano2, viano3, viano4, viano5, viano6],
  },
  {
    id: 'sprinter-gold',
    model: 'Mercedes-Benz Sprinter (Zlatý)',
    subtitle: 'Zájezdový mikrobus s nadstandardní výbavou',
    badge: 'Minibus 20 míst',
    capacity: '20 míst',
    luggage: 'Velký zavazadlový prostor',
    features: [
      'Polohovatelná zájezdová sedadla',
      'Výkonná klimatizace a nezávislé topení',
      'Mikrofon pro průvodce a tažné zařízení',
    ],
    image: sprinterZlatyMain,
    gallery: [sz1, sz2, sz3, sz4, sz5, sz6],
  },
  {
    id: 'sprinter-black',
    model: 'Mercedes-Benz Sprinter (Černý)',
    subtitle: 'Reprezentativní černý mikrobus pro skupiny a firmy',
    badge: 'VIP Minibus 20 míst',
    capacity: '20 míst',
    luggage: 'Velký zavazadlový prostor',
    features: [
      'Komfortní polohovatelná sedadla',
      'Tónovaná panoramatická skla a klimatizace',
      'Skvělá volba pro firemní akce, sportovce i svatby',
    ],
    image: sprinterCernyMain,
    gallery: [sc1, sc2, sc3, sc4, sc5, sc6],
  },
  {
    id: 'setra',
    model: 'Autobus Setra',
    subtitle: 'Dálkový zájezdový autokar pro velké výpravy',
    badge: 'Autokar 52 míst',
    capacity: '52 míst',
    luggage: 'Obří podpalubní kufr',
    features: [
      'Luxusní dálkový autokar s palubním WC',
      'Klimatizace, kuchyňka, kávovar a lednice',
      'Ideální pro zájezdy po ČR i celé Evropě',
    ],
    image: setraMain,
    gallery: [setra1, setra2, setra3, setra4, setra5, setra6],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Vyzkoušeli jsme přepravu na letiště do Vídně a byli jsme maximálně spokojení. Řidič přijel přesně na čas, pomohl nám se zavazadly a po příletu z dovolené už na nás čekal u terminálu. Cesta zcela bez stresu z parkování!',
    author: 'Manželé Dvořákovi',
    role: 'Transfer Znojmo – Letiště Vídeň',
  },
  {
    id: 2,
    quote:
      'S panem Chocholou spolupracujeme pravidelně při dopravě na firemní akce i přepravě zahraničních návštěv. Auta jsou vždy perfektně čistá, řidiči profesionální a domluva naprosto spolehlivá.',
    author: 'Ing. Marek Novotný',
    role: 'Firemní klientela, Znojmo',
  },
  {
    id: 3,
    quote:
      'Objednali jsme si mikrobus Sprinter na svatbu a následný večerní rozvoz hostů. Vše klaplo na jedničku, krásné čisté auto a velmi ochotný pan řidič. Všem vřele doporučujeme!',
    author: 'Veronika & Lukáš K.',
    role: 'Svatební přeprava hostů',
  },
];

export const FAQS = [
  {
    question: 'Pro kolik osob dokážete zajistit přepravu?',
    answer:
      'Díky vlastnímu rozmanitému vozovému parku přepravíme jak jednotlivce či páry v luxusním Mercedesu třídy E (4 místa), rodiny v minivanu Mercedes Viano (7 míst), menší skupiny ve dvou mikrobusech Mercedes Sprinter (každý 20 míst), tak i velké výpravy v zájezdovém autobusu Setra (52 míst).',
  },
  {
    question: 'Co když má můj let při návratu zpoždění?',
    answer:
      'Číslo vašeho letu sledujeme online. Pokud má letadlo zpoždění, čas příjezdu řidiče automaticky přizpůsobíme a na letišti na vás bez problémů počkáme v příletové hale.',
  },
  {
    question: 'Jak zjistím přesnou cenu za jízdu?',
    answer:
      'Stačí vyplnit krátký poptávkový formulář na konci této stránky nebo nám zavolat na +420 608 707 225. Cenu vám vždy spočítáme férově a předem na míru podle trasy, počtu osob a zvoleného vozu.',
  },
  {
    question: 'Jezdíte pouze ze Znojma, nebo i do zahraničí?',
    answer:
      'Sídlíme ve Znojmě, ale zajišťujeme vnitrostátní i mezinárodní přepravu po celé České republice a Evropě (Rakousko, Slovensko, Německo, Itálie, Chorvatsko, Polsko a další země).',
  },
];
