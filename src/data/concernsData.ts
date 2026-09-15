export interface ConcernItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  image: string;
  problemStatement: string;
  commonSymptoms: string[];
  recommendedSteps: {
    step: number;
    title: string;
    description: string;
    productRecommendation?: string;
  }[];
  suitableCategoryIds: string[];
  recommendedBrandSlugs: string[];
  recommendedProductSlugs: string[];
  practicalAdvice: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const concernsData: ConcernItem[] = [
  // 1. Interior Walls
  {
    id: 'interior-walls',
    slug: 'interior-walls',
    title: 'Interior Walls: Stains, Dullness & Uneven Surfaces',
    shortDesc: 'Solutions for washable living spaces, hairline crack repair, and velvety smooth luxury sheens.',
    badge: 'Popular Concern',
    iconName: 'Paintbrush',
    image: '/images/categories/interior-paints.jpg',
    problemStatement: 'Interior walls frequently suffer from food stains, kid scribbles, scuffs in high-traffic corridors, or uneven light reflection due to poor surface leveling.',
    commonSymptoms: [
      'Stains from tea, turmeric, coffee, or crayons penetrating into paint',
      'Flaking and chalking on dry walls due to low binder quality',
      'Visible roller streaks and brush marks under ambient lighting',
      'Strong, persistent chemical odors from solvent-heavy paints'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Leveling & Smoothing',
        description: 'Scrape loose paint and apply 2 coats of Birla White Wall Care Putty with HP polymers to eliminate undulations.',
        productRecommendation: 'Birla White Wall Care Putty'
      },
      {
        step: 2,
        title: 'Acrylic Primer Sealer',
        description: 'Apply 1 coat of acrylic water-thinnable primer to equalize suction and seal the porous putty.',
        productRecommendation: 'Asian Paints TruCare Primer'
      },
      {
        step: 3,
        title: 'Washable Luxury Emulsion',
        description: 'Apply 2 coats of Teflon-reinforced emulsion like Asian Paints Royale Glitz or British Paints 24 Carat.',
        productRecommendation: 'Asian Paints Royale Glitz'
      }
    ],
    suitableCategoryIds: ['interior-paints', 'wall-care', 'decorative-finishes'],
    recommendedBrandSlugs: ['asian-paints', 'berger-paints', 'nerolac', 'soldier-paints', 'birla-white'],
    recommendedProductSlugs: ['asian-paints-royale-glitz', 'berger-silk-glamor', 'birla-white-wall-care-putty'],
    practicalAdvice: [
      'Always allow 4 to 6 hours drying time between emulsion coats.',
      'For bedrooms and children’s rooms, insist on low-VOC, odorless paints for healthier indoor air quality.',
      'Check wall moisture with a digital meter before applying luxury topcoats.'
    ],
    faqs: [
      {
        question: 'Which paint is easiest to clean with children at home?',
        answer: 'Asian Paints Royale Glitz with Teflon surface protector is engineered specifically to resist oil, turmeric, and crayon stains with a simple damp sponge wipe.'
      },
      {
        question: 'Can I paint over existing interior emulsion without scraping?',
        answer: 'Yes, if the existing paint is firm and non-flaking. Clean off dust and oil, sand lightly with 180-grit paper to create a mechanical key, prime with an acrylic primer, and recoat.'
      }
    ]
  },

  // 2. Exterior Walls
  {
    id: 'exterior-walls',
    slug: 'exterior-walls',
    title: 'Exterior Walls: Heat, Dust, UV Fading & Algae',
    shortDesc: 'High-durability all-weather coatings engineered for Rajasthan sun, rain, and dust storms.',
    badge: 'Climate Shield',
    iconName: 'Sun',
    image: '/images/categories/exterior-paints.jpg',
    problemStatement: 'Exterior facades in Alwar endure temperature swings up to 47°C, driving rains, and abrasive desert winds that bleach colours and cause surface cracking.',
    commonSymptoms: [
      'Black and green algal patches growing after monsoon downpours',
      'Chalking and fading of vibrant colours caused by UV solar breakdown',
      'Hairline thermal expansion cracks letting rainwater seep into masonry',
      'Dust and dirt clinging to soft paint films, turning walls dreary'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Power Washing & Bio-Wash',
        description: 'Pressure wash external walls to eliminate loose dust and treat active algae colonies with fungicidal wash.',
        productRecommendation: 'Fungicidal Wash'
      },
      {
        step: 2,
        title: 'Crack Bridging & Exterior Primer',
        description: 'Fill fissures with fiber crack-filler paste and apply 1 coat of exterior penetrating primer.',
        productRecommendation: 'Dr. Fixit CrackX Paste'
      },
      {
        step: 3,
        title: 'Weatherproof Elastomeric Coating',
        description: 'Apply 2 coats of Asian Paints Apex Ultima or Berger WeatherCoat Long Life 10 with DPUR dirt-shedding polymers.',
        productRecommendation: 'Asian Paints Apex Ultima'
      }
    ],
    suitableCategoryIds: ['exterior-paints', 'waterproofing', 'decorative-finishes'],
    recommendedBrandSlugs: ['asian-paints', 'berger-paints', 'nerolac', 'pidilite', 'soldier-paints'],
    recommendedProductSlugs: ['asian-paints-apex-ultima', 'berger-weathercoat-long-life', 'pidilite-dr-fixit-raincoat'],
    practicalAdvice: [
      'Avoid painting exterior walls during peak afternoon summer heat; early morning or overcast days allow proper film curing.',
      'Opt for lighter exterior colour tones (creams, warm whites, sandstones) for superior solar reflectance and reduced AC load.'
    ],
    faqs: [
      {
        question: 'How long does Asian Paints Apex Ultima last in Alwar?',
        answer: 'Apex Ultima provides 7 years of comprehensive performance protection when applied over properly primed exterior plaster.'
      }
    ]
  },

  // 3. Waterproofing
  {
    id: 'waterproofing',
    slug: 'waterproofing',
    title: 'Comprehensive Waterproofing & Moisture Barriers',
    shortDesc: 'Structural polymer barriers preventing dampness, efflorescence (shora), and rebar corrosion.',
    badge: 'Structural Health',
    iconName: 'ShieldAlert',
    image: '/images/categories/waterproofing.jpg',
    problemStatement: 'Capillary moisture migration and high groundwater mineral salts destroy wall finishes and corrode reinforced concrete beams.',
    commonSymptoms: [
      'Fluffy white crystalline salt deposits (shora/efflorescence) lifting putty',
      'Damp, bubbling paint on the lower 3 to 4 feet of ground floor walls',
      'Musty damp odors in rooms and basements',
      'Rust stains bleeding through concrete ceiling plasters'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Substrate Exposure & Neutralization',
        description: 'Chop away salt-damaged plaster 1 foot beyond the damp line to reach bare brickwork. Treat with salt neutralizer.',
        productRecommendation: 'Chemical Salt Neutralizer'
      },
      {
        step: 2,
        title: 'Polymer Slurry Barrier',
        description: 'Apply a 2-coat slurry of Konkem K2 Bond SBR mixed with fresh Portland cement (1:1.5 ratio).',
        productRecommendation: 'Konkem K2 Bond SBR'
      },
      {
        step: 3,
        title: 'Waterproof Plaster & Topcoat',
        description: 'Replaster using cement mortar admixed with Dr. Fixit LW+ 101, followed by breathable damp-proof paint.',
        productRecommendation: 'Dr. Fixit LW+ 101'
      }
    ],
    suitableCategoryIds: ['waterproofing', 'construction-chemicals'],
    recommendedBrandSlugs: ['konkem', 'pidilite', 'asian-paints'],
    recommendedProductSlugs: ['konkem-k2-bond-sbr', 'pidilite-dr-fixit-lw-plus', 'asian-paints-smartcare-damp-proof'],
    practicalAdvice: [
      'Never mask rising dampness with regular wall putty; the moisture pressure will dislodge it within 30 days.',
      'Integral waterproofing liquid (admixture) must be added during fresh concrete casting for permanent protection.'
    ],
    faqs: [
      {
        question: 'Why does shora (salt efflorescence) return every year?',
        answer: 'Efflorescence returns because ground moisture continues rising through unsealed brick capillaries. Only a deep-penetrating polymer slurry barrier like Konkem K2 Bond can permanently halt the capillary climb.'
      }
    ]
  },

  // 4. Terrace Leakage
  {
    id: 'terrace-leakage',
    slug: 'terrace-leakage',
    title: 'Terrace Leakage & Roof Ponding',
    shortDesc: 'Permanent elastomeric liquid membranes bridging slab cracks with heat reduction benefits.',
    badge: 'Top Priority',
    iconName: 'Droplets',
    image: '/images/categories/waterproofing.jpg',
    problemStatement: 'Rainwater ponding on roof slabs seeps through thermal expansion cracks, causing wet ceilings and dripping fans.',
    commonSymptoms: [
      'Water droplets dripping from ceiling fan hooks or light conduits during rain',
      'Brown or yellow moisture patches expanding across upper-floor ceilings',
      'Ponding water resting in corners for days after rain due to bad slope',
      'Cracking along the parapet wall and roof floor junction'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Slope Correction & Crack V-Grooving',
        description: 'V-groove all visible slab fissures. Create a smooth 50mm curved mortar fillet along parapet corners using SBR mortar.',
        productRecommendation: 'Konkem K2 Bond SBR'
      },
      {
        step: 2,
        title: 'Crack Filling',
        description: 'Seal all prepared grooves with flexible, non-shrink polymer paste.',
        productRecommendation: 'Dr. Fixit CrackX Paste'
      },
      {
        step: 3,
        title: 'Elastomeric Liquid Membrane',
        description: 'Apply 2 coats of Asian Paints SmartCare Damp Proof reinforced with glass fiber mesh, extending 300mm up the parapet.',
        productRecommendation: 'Asian Paints SmartCare Damp Proof'
      }
    ],
    suitableCategoryIds: ['waterproofing', 'construction-chemicals'],
    recommendedBrandSlugs: ['asian-paints', 'konkem', 'pidilite'],
    recommendedProductSlugs: ['asian-paints-smartcare-damp-proof', 'konkem-k2-bond-sbr'],
    practicalAdvice: [
      'Ensure terrace drains are cleared and not blocked with fallen leaves or construction debris before monsoons.',
      'SmartCare Damp Proof provides up to 10°C surface temperature reduction, cooling your top-floor bedrooms naturally.'
    ],
    faqs: [
      {
        question: 'Can I do terrace waterproofing without breaking existing tiles or cement coba?',
        answer: 'Yes! Modern elastomeric membranes like Asian Paints SmartCare Damp Proof or Konkem K2 Seal can be applied directly over clean, prepared cement coba or China mosaic tiles without messy demolition.'
      }
    ]
  },

  // 5. Roof Leakage
  {
    id: 'roof-leakage',
    slug: 'roof-leakage',
    title: 'Roof Leakage & Sloped Concrete Seepage',
    shortDesc: 'High-adhesion waterproofing for tin sheds, asbestos roofs, and RCC sloping slabs.',
    badge: 'Heavy Rain Proof',
    iconName: 'ShieldAlert',
    image: '/images/categories/waterproofing.jpg',
    problemStatement: 'Sloping roof slabs, tin roofing joints, and rooftop rainwater channels suffer from leaks around J-bolts and overlaps.',
    commonSymptoms: [
      'Water running down sloped ceilings into wall corners',
      'Rusting of J-bolts and screw washers on industrial roofs',
      'Cracks around water tank supports and solar panel mountings',
      'Water penetration at roof expansion joints'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Bolt & Joint Sealing',
        description: 'Seal all roof screws, J-bolts, and sheet overlaps with elastomeric hybrid sealants.',
        productRecommendation: 'Waterproof Sealant'
      },
      {
        step: 2,
        title: 'Reinforced Coating',
        description: 'Apply liquid waterproof membrane with polyester fabric strip over joints.',
        productRecommendation: 'Asian Paints SmartCare Damp Proof'
      }
    ],
    suitableCategoryIds: ['waterproofing', 'protective-coatings'],
    recommendedBrandSlugs: ['asian-paints', 'pidilite', 'konkem'],
    recommendedProductSlugs: ['asian-paints-smartcare-damp-proof', 'pidilite-dr-fixit-raincoat'],
    practicalAdvice: [
      'Inspect roof anchor bolts annually before the monsoon season begins.',
      'Always seal water tank pipe penetrations with non-shrink grout.'
    ],
    faqs: [
      {
        question: 'Can cement paint fix a leaking roof?',
        answer: 'No. Cement paint is a decorative mineral wash, not a waterproof membrane. It has zero crack elongation and will leak under standing water.'
      }
    ]
  },

  // 6. Bathroom Leakage
  {
    id: 'bathroom-leakage',
    slug: 'bathroom-leakage',
    title: 'Bathroom Leakage & Sunken Slab Seepage',
    shortDesc: 'Permanent solutions for bathroom tile joints, plumbing traps, and adjacent bedroom dampness.',
    badge: 'Internal Seepage',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    problemStatement: 'Water escaping through porous tile cement joints seeps into the sunken slab, causing peeling paint on adjacent bedroom walls and downstairs ceilings.',
    commonSymptoms: [
      'Damp, peeling paint on the bedroom wall shared with the bathroom',
      'Black mold in tile corners and eroded cement grout joints',
      'Water droplets collecting on the ceiling of the room directly beneath the bathroom',
      'Persistent damp smell in bathroom cabinets and wardrobes'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Grout Removal & Tile Cleaning',
        description: 'Rake out deteriorated cement grout joints to a depth of 3mm to 5mm and clean with MYK Laticrete Clenza TC.',
        productRecommendation: 'MYK LATICRETE Clenza TC'
      },
      {
        step: 2,
        title: 'Epoxy Grouting',
        description: 'Install MYK LATICRETE Latapoxy SP-100 100% solid epoxy grout into all tile joints for permanent water and stain immunity.',
        productRecommendation: 'MYK LATICRETE Latapoxy SP-100'
      },
      {
        step: 3,
        title: 'Trap & Drain Sealing',
        description: 'Seal around floor drain traps with non-shrink polymer mortar.',
        productRecommendation: 'Konkem K2 Bond SBR'
      }
    ],
    suitableCategoryIds: ['cleaning-solutions', 'construction-chemicals', 'waterproofing'],
    recommendedBrandSlugs: ['myk-laticrete', 'konkem', 'pidilite'],
    recommendedProductSlugs: ['myk-laticrete-clenza-tc', 'myk-laticrete-latapoxy-sp100', 'konkem-k2-bond-sbr'],
    practicalAdvice: [
      'In 90% of cases, regrouting bathroom tiles with epoxy grout fixes bedroom wall dampness without breaking tiles!',
      'Epoxy grout never discolors, resists acid cleaners, and prevents mold growth permanently.'
    ],
    faqs: [
      {
        question: 'Do I need to break bathroom tiles to fix leakage?',
        answer: 'Not necessarily. If the sunken slab waterproofing is intact and the leak is coming through porous tile joints, regrouting with Latapoxy SP-100 epoxy grout creates a 100% waterproof seal over the existing tiles.'
      }
    ]
  },

  // 7. Wood Finishing
  {
    id: 'wood-finishing',
    slug: 'wood-finishing',
    title: 'Wood Finishing: Yellowing, Scratches & Dull Grains',
    shortDesc: 'Italian PU, water-based wood sealers, natural stains, and high-clarity furniture polishes.',
    badge: 'Craftsmanship',
    iconName: 'Layers',
    image: '/images/categories/wood-finishes.jpg',
    problemStatement: 'Natural timber, veneers, and solid teak doors lose luster, turn yellow from spirit polishes, or scratch easily under daily use.',
    commonSymptoms: [
      'Clouding or yellowing of traditional spirit / french polish over time',
      'White water rings and hot cup marks on dining and coffee tables',
      'Open wood pores absorbing grease and dust',
      'Cracks and shrinking at knot joints in wooden doors'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Pore & Knot Filling',
        description: 'Fill all nail holes, cracks, and pores with odorless ICA 1kStuk Water-Based Wood Filler.',
        productRecommendation: 'ICA 1kStuk Wood Filler'
      },
      {
        step: 2,
        title: 'Sanding Sealer Foundation',
        description: 'Apply 2 coats of sanding sealer to lock in wood grain and build solid film thickness.',
        productRecommendation: 'JACPL Charmwood Sanding Sealer'
      },
      {
        step: 3,
        title: 'Italian PU Topcoat',
        description: 'Spray 2 coats of ICA Pidilite Acquabella Italian PU for velvet-touch ultra-matt or high-gloss clarity.',
        productRecommendation: 'ICA Pidilite Acquabella Italian PU'
      }
    ],
    suitableCategoryIds: ['wood-finishes', 'adhesives'],
    recommendedBrandSlugs: ['ica-pidilite', 'ica', 'taralac', 'jacpl', 'jivanjor'],
    recommendedProductSlugs: ['ica-1kstuk-wood-filler', 'ica-pidilite-acquabella-pu', 'taralac-pu-super-clear'],
    practicalAdvice: [
      'Always sand with the wood grain, never across, to avoid cross-grain scratches.',
      'Water-based Italian PU provides non-yellowing clarity, keeping light oak, ash, and veneer natural.'
    ],
    faqs: [
      {
        question: 'What is the difference between Melamine and Italian PU polish?',
        answer: 'Melamine is an acid-curing finish that provides good scratch resistance, but can yellow slightly over years. Italian PU is non-yellowing, far more flexible, and offers superior resistance to hot liquids, wine, and tea stains.'
      }
    ]
  },

  // 8. Metal Painting
  {
    id: 'metal-painting',
    slug: 'metal-painting',
    title: 'Metal Painting: Rusting Gates, Railings & Grills',
    shortDesc: 'Anti-corrosive zinc chromate primers and high-gloss synthetic enamels that stop rust.',
    badge: 'Anti-Rust Tech',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    problemStatement: 'Iron safety doors, balcony railings, and structural steel corrode rapidly when exposed to humidity and rain without proper anti-rust priming.',
    commonSymptoms: [
      'Orange rust flaking and pitting iron railings and window grills',
      'Paint peeling off metal surfaces in large sheets due to poor primer bonding',
      'Chipping along gate edges caused by everyday mechanical impact',
      'Loss of gloss and dulling under intense solar exposure'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Mechanical Rust Removal',
        description: 'Scrape and wire-brush all loose rust scale down to bare metal using coarse emery paper.',
        productRecommendation: 'Wire Brush & Emery'
      },
      {
        step: 2,
        title: 'Anti-Corrosive Primer',
        description: 'Apply 1 generous coat of Zinc Chromate / Red Oxide metal primer to chemically passivate the steel.',
        productRecommendation: 'Zinc Chromate Primer'
      },
      {
        step: 3,
        title: 'High-Gloss Synthetic Enamel',
        description: 'Apply 2 coats of British Paints Shungloss or Wembley Super Gloss Enamel for long-lasting mirror shine.',
        productRecommendation: 'British Paints Shungloss'
      }
    ],
    suitableCategoryIds: ['protective-coatings', 'wood-finishes'],
    recommendedBrandSlugs: ['british-paints', 'wembley-paints', 'asian-paints'],
    recommendedProductSlugs: ['british-paints-shungloss', 'wembley-super-gloss-enamel'],
    practicalAdvice: [
      'Never apply enamel directly onto rusted metal; rust will continue corroding beneath the paint film.',
      'Thin enamel only with mineral turpentine oil (MTO) as specified on the can, never petrol or diesel.'
    ],
    faqs: [
      {
        question: 'Which primer should I use on brand new iron fabrication?',
        answer: 'Degrease fresh steel with solvent to remove manufacturing oil, then apply 1 coat of Yellow Zinc Chromate Primer followed by 2 coats of high-gloss synthetic enamel.'
      }
    ]
  },

  // 9. Automotive Paint / Coatings
  {
    id: 'automotive-paint',
    slug: 'automotive-paint',
    title: 'Automotive Paint, Clear Coats & Scratch Polishing',
    shortDesc: 'Professional 3M compounding materials, swirl removers, and Esdee 2K PU clear coats.',
    badge: 'Pro Detailers',
    iconName: 'Gauge',
    image: '/images/categories/automotive-paint.jpg',
    problemStatement: 'Car body panels develop swirl marks from dusty wiping, stone chip scratches, clear coat peeling, or oxidized faded clear coats under sunlight.',
    commonSymptoms: [
      'Cobweb swirls visible across car bonnets under bright sun or streetlights',
      'Loss of wet-look mirror gloss and surface feeling rough to the touch',
      'Faded, oxidized clear coats on older car and motorcycle panels',
      'Surface scuffs from minor parking scratches'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Decontamination & Micro-Sanding',
        description: 'Wash thoroughly and feather isolated deep scratches with 3M Trizact micro-fine abrasives.',
        productRecommendation: '3M Trizact P3000'
      },
      {
        step: 2,
        title: '1-Step High-Gloss Compounding',
        description: 'Buff panel with 3M Perfect-It 1-Step Finishing Material using purple foam pad for scratch elimination.',
        productRecommendation: '3M Perfect-It 1-Step Finishing Material'
      },
      {
        step: 3,
        title: '2K Polyurethane Clear Refinishing',
        description: 'When repainting, topcoat basecoat with Esdee 2K PU Clear for mirror gloss and fuel spill defense.',
        productRecommendation: 'Esdee 2K PU Clear'
      }
    ],
    suitableCategoryIds: ['automotive-compounds', 'protective-coatings'],
    recommendedBrandSlugs: ['3m', 'esdee-paints'],
    recommendedProductSlugs: ['3m-perfect-it-1-step', 'esdee-2k-pu-clear'],
    practicalAdvice: [
      'Always use dedicated automotive microfiber towels for wiping compound slurry to avoid re-introducing scratches.',
      'Store compound bottles at moderate temperatures away from direct sunlight.'
    ],
    faqs: [
      {
        question: 'Can 3M Perfect-It 1-Step remove deep scratches?',
        answer: 'It easily eliminates P3000 fine scratches and swirls. If a scratch has cut completely through the clear coat into the primer or bare metal, panel repainting with Esdee 2K PU is required.'
      }
    ]
  },

  // 10. Repainting
  {
    id: 'repainting',
    slug: 'repainting',
    title: 'Whole-Home Repainting & Renovation Upgrades',
    shortDesc: 'Complete renewal protocols to upgrade from old distemper to luxury washable emulsions.',
    badge: 'Home Renovation',
    iconName: 'Sparkles',
    image: '/images/categories/wall-care.jpg',
    problemStatement: 'Older homes in Alwar often have layers of cracking paint, yellowed walls, and dated colors that need a clean refresh without peeling later.',
    commonSymptoms: [
      'Multiple thick layers of old paint cracking like dried mud',
      'Old chalky distemper coming off on hands when touching the wall',
      'Nail holes, electrical chasing channels, and patched plaster fissures',
      'Desire to upgrade to modern designer shades and high washability'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Thorough Scraping & Washing',
        description: 'Scrape off all dead paint, wash away soot and grease from kitchens, and patch all plaster gouges.',
        productRecommendation: 'Scraper & Sandpaper'
      },
      {
        step: 2,
        title: 'Deep Penetrating Primer Coat',
        description: 'Apply 1 coat of acrylic primer to bind any lingering chalk particles and seal the old plaster.',
        productRecommendation: 'Asian Paints TruCare Primer'
      },
      {
        step: 3,
        title: 'Putty Touch-Up & Premium Emulsion',
        description: 'Touch up uneven patches with Birla White putty, sand smooth, and apply 2 coats of washable emulsion.',
        productRecommendation: 'Asian Paints Royale Glitz / British Paints 24 Carat'
      }
    ],
    suitableCategoryIds: ['interior-paints', 'exterior-paints', 'wall-care'],
    recommendedBrandSlugs: ['asian-paints', 'berger-paints', 'birla-white', 'soldier-paints'],
    recommendedProductSlugs: ['asian-paints-royale-glitz', 'birla-white-wall-care-putty'],
    practicalAdvice: [
      'Book a free moisture assessment before repainting to ensure you do not trap hidden moisture behind new paint.',
      'Cover all furniture, switchboards, and floors with drop cloths before starting work.'
    ],
    faqs: [
      {
        question: 'How long does it take to repaint a 3BHK flat in Alwar?',
        answer: 'A standard 3BHK interior repainting project with scraping, patching, primer, and 2 topcoats takes approximately 4 to 6 working days with a 3-member professional painter crew.'
      }
    ]
  }
];
