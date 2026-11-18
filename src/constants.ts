import type { Service, Vehicle, ContactInfo } from './types';

// Medailonky vozidel (hlavní exteriérové fotky z public/vozidla/)
const eckoMain = '/vozidla/mercedes-tridy-e.jpg';
const vianoMain = '/vozidla/mercedes-viano.jpg';
const sprinterZlatyMain = '/vozidla/mercedes-sprinter-zlaty.jpg';
const sprinterCernyMain = '/vozidla/mercedes-sprinter-cerny.jpg';
const setraMain = '/vozidla/autobus-setra.jpg';

// Galerie - Mercedes-Benz Třídy E (01 až 06)
const ecko1 = '/vozidla/ecko/mercedes-tridy-e-01.jpg';
const ecko2 = '/vozidla/ecko/mercedes-tridy-e-02.jpg';
const ecko3 = '/vozidla/ecko/mercedes-tridy-e-03.jpg';
const ecko4 = '/vozidla/ecko/mercedes-tridy-e-04.jpg';
const ecko5 = '/vozidla/ecko/mercedes-tridy-e-05.jpg';
const ecko6 = '/vozidla/ecko/mercedes-tridy-e-06.jpg';

// Galerie - Mercedes-Benz Viano (01 až 06)
const viano1 = '/vozidla/viano/mercedes-viano-01.jpg';
const viano2 = '/vozidla/viano/mercedes-viano-02.jpg';
const viano3 = '/vozidla/viano/mercedes-viano-03.jpg';
const viano4 = '/vozidla/viano/mercedes-viano-04.jpg';
const viano5 = '/vozidla/viano/mercedes-viano-05.jpg';
const viano6 = '/vozidla/viano/mercedes-viano-06.jpg';

// Galerie - Mercedes-Benz Sprinter Zlatý (01 až 06)
const sz1 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-01.jpg';
const sz2 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-02.jpg';
const sz3 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-03.jpg';
const sz4 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-04.jpg';
const sz5 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-05.jpg';
const sz6 = '/vozidla/sprinter-zlaty/mercedes-sprinter-zlaty-06.jpg';

// Galerie - Mercedes-Benz Sprinter Černý (01 až 06)
const sc1 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-01.jpg';
const sc2 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-02.jpg';
const sc3 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-03.jpg';
const sc4 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-04.jpg';
const sc5 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-05.jpg';
const sc6 = '/vozidla/sprinter-cerny/mercedes-sprinter-cerny-06.jpg';

// Galerie - Autobus Setra (01 až 06)
const setra1 = '/vozidla/setra/autobus-setra-01.jpg';
const setra2 = '/vozidla/setra/autobus-setra-02.jpg';
const setra3 = '/vozidla/setra/autobus-setra-03.jpg';
const setra4 = '/vozidla/setra/autobus-setra-04.jpg';
const setra5 = '/vozidla/setra/autobus-setra-05.jpg';
const setra6 = '/vozidla/setra/autobus-setra-06.jpg';

export const CONTACT_INFO: ContactInfo = {
  owner: 'Petr Chochola',
  address: 'Vančurova 13, 669 02 Znojmo',
  phones: ['+420 608 707 225'],
  email: 'petrchochola@seznam.cz',
  ico: '64432157',
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
    model: 'Mercedes-Benz Sprinter',
    subtitle: 'Zájezdový mikrobus s nadstandardní výbavou',
    badge: 'Minibus 20 míst',
    capacity: '20 míst',
    luggage: 'Velký zavazadlový prostor',
    features: [
      'Polohovatelná zájezdová sedadla',
      'Výkonná klimatizace a nezávislé topení',
      'Mikrofon pro průvodce, TV a tažné zařízení',
    ],
    image: sprinterZlatyMain,
    gallery: [sz1, sz2, sz3, sz4, sz5, sz6],
  },
  {
    id: 'sprinter-black',
    model: 'Mercedes-Benz Sprinter',
    subtitle: 'Zájezdový mikrobus s nadstandardní výbavou',
    badge: 'Minibus 20 míst',
    capacity: '20 míst',
    luggage: 'Velký zavazadlový prostor',
    features: [
      'Polohovatelná zájezdová sedadla',
      'Výkonná klimatizace a nezávislé topení',
      'Mikrofon pro průvodce, TV a tažné zařízení',
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
