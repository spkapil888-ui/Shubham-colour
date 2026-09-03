import { Brand } from '../types';

export const brandsData: Brand[] = [
  // ==========================================
  // FEATURED PAINT BRANDS (TOP SECTION)
  // ==========================================
  {
    slug: 'asian-paints',
    name: 'Asian Paints',
    tagline: 'Har Ghar Kuch Kehta Hai',
    logo: '/images/brands/asian-paints.webp',
    categories: ['interior-paints', 'exterior-paints', 'waterproofing', 'wood-finishes', 'wall-care'],
    description: 'India’s largest paint and décor company, delivering industry-leading emulsions, SmartCare waterproofing systems, and luxury Royale finishes.',
    foundedOrOrigin: 'India (Est. 1942)',
    officialRefUrl: 'https://www.asianpaints.com',
    keyHighlights: [
      'Royale Luxury Emulsion with Teflon surface protector',
      'Apex Ultima all-weather exterior paint with 10-year warranty',
      'SmartCare comprehensive waterproofing solutions',
      'TruCare acrylic putty and moisture-resistant primers'
    ],
    keyProductsSummary: ['Royale Glitz', 'Apex Ultima', 'Tractor Emulsion', 'SmartCare Damp Proof', 'TruCare Wall Putty'],
    applications: ['Living Rooms', 'Exterior Facades', 'Bathrooms', 'Roofs & Terraces', 'Furniture Polish'],
    whyChoose: ['Unrivalled shade consistency', 'Washable stain-resistant finishes', 'Tested for extreme Indian climates'],
    specialBadge: 'Authorized Dealer',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'berger-paints',
    name: 'Berger Paints',
    tagline: 'Paint Your Imagination',
    logo: '/images/brands/berger-paints.png',
    categories: ['interior-paints', 'exterior-paints', 'waterproofing', 'wall-care'],
    description: 'Second largest paint company in India, celebrated for Silk Glamor luxury interior emulsion, WeatherCoat Long Life exterior protection, and Green Horizon eco certifications.',
    foundedOrOrigin: 'India (Est. 1923)',
    officialRefUrl: 'https://www.bergerpaints.com',
    keyHighlights: [
      'Silk Glamor luxury emulsion with ultra-smooth metallic sheen',
      'WeatherCoat Long Life exterior paint with PU & Silicon technology',
      'Bison Acrylic Emulsion for vibrant interior economy',
      'BreatheEasy low-VOC and zero-heavy-metal formulation'
    ],
    keyProductsSummary: ['Silk Glamor', 'WeatherCoat Long Life', 'Bison Emulsion', 'Homeshield Waterproof Putty'],
    applications: ['Living Rooms & Bedrooms', 'Exterior Bungalows', 'Moisture Prone Walls', 'Offices'],
    whyChoose: ['Advanced Silicon & PU exterior barrier', 'Low odor & Green Pro certified', 'High opacity and smooth leveling'],
    specialBadge: 'Authorized Dealer',
    bannerImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'nerolac',
    name: 'Nerolac Paints',
    tagline: 'Colours That Care (Kansai Nerolac)',
    logo: '/images/brands/nerolac.png',
    categories: ['interior-paints', 'exterior-paints', 'wood-finishes'],
    description: 'Kansai Nerolac is a leader in Japanese coating technology, delivering eco-clean paints, HD sheen emulsions, and Excel Total exterior protection.',
    foundedOrOrigin: 'Japan / India (Est. 1920)',
    officialRefUrl: 'https://www.nerolac.com',
    keyHighlights: [
      'Impressions HD Luxury Emulsion with Micro-Embedded Silicon technology',
      'Excel Mica Marble exterior paint with heat radiation shields',
      'Beauty Gold washable acrylic emulsion',
      'Lead-free and ultra-low VOC commitment'
    ],
    keyProductsSummary: ['Impressions HD', 'Excel Mica Marble', 'Beauty Gold', 'Perma Waterproofing'],
    applications: ['Premium Home Interiors', 'Extreme Sun-Facing Facades', 'Wood & Metal Accents'],
    whyChoose: ['Japanese coating durability', 'Formaldehyde-absorbing wall technology', 'True-tone color vibrancy'],
    specialBadge: 'Authorized Dealer',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'nippon-paint',
    name: 'Nippon Paint',
    tagline: 'Inspired by You (The Paint Expert)',
    logo: '/images/brands/nippon-paint.png',
    categories: ['interior-paints', 'exterior-paints', 'wall-care'],
    description: 'Asia’s premier paint manufacturer delivering cutting-edge Japanese coating technology, advanced anti-viral and anti-bacterial wall solutions, and ultra-durable exterior weather protection.',
    foundedOrOrigin: 'Japan (Est. 1881)',
    officialRefUrl: 'https://www.nipponpaint.co.in/',
    keyHighlights: [
      'Japanese advanced polymer technology with silver-ion antimicrobial defense',
      'Spotless Nxt ultra-washable interior finishes with active stain repellent',
      'Weatherbond Pro exterior protection against extreme sun, rain, and fungal spores',
      'Low-VOC Green Pro certified eco-friendly formulations safe for families'
    ],
    keyProductsSummary: ['Spotless Nxt', 'Weatherbond Pro', 'AeroShield', 'Breeze Star Emulsion'],
    applications: ['Modern Living Spaces', 'Exterior Elevations', 'Hospitals & Clinics', 'Children’s Bedrooms'],
    whyChoose: ['Pioneering Japanese coating chemistry', 'Exceptional washability & stain resistance', 'Eco-safe Green Pro certified'],
    specialBadge: 'Japanese Innovation',
    bannerImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'jsw-paints',
    name: 'JSW Paints',
    tagline: 'Think Beautiful. Every Colour Has A Story.',
    logo: '/images/brands/jsw-paints.svg',
    categories: ['interior-paints', 'exterior-paints', 'wood-finishes', 'wall-care'],
    description: 'India’s first 100% water-based paint brand from the JSW Group, offering any colour at one transparent price across luxury emulsions, exterior weather-guards, and enamels.',
    foundedOrOrigin: 'India (JSW Group)',
    officialRefUrl: 'https://www.jswpaints.in/',
    keyHighlights: [
      '100% water-based decorative range eliminating toxic chemical solvents',
      'Revolutionary "Any Colour One Price" pricing policy for consumer clarity',
      'Halo Luxury Emulsion with silky sheen and anti-bacterial protection',
      'Aurus all-weather exterior shield with anti-algal dirt pick-up resistance'
    ],
    keyProductsSummary: ['Halo Luxury Emulsion', 'Aurus Weather Guard', 'Pixa Elegance', 'I-Wash Water-Based Enamel'],
    applications: ['Bedrooms & Living Halls', 'Exterior Facades', 'Doors & Windows', 'Commercial Spaces'],
    whyChoose: ['100% water-based solvent-free chemistry', 'Any Colour One Price transparency', 'Vibrant light-fast color retention'],
    specialBadge: 'Water-Based Pioneer',
    bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'birla-opus',
    name: 'Birla Opus',
    tagline: 'Make Life Beautiful',
    logo: '/images/brands/birla-opus.webp',
    categories: ['interior-paints', 'exterior-paints', 'waterproofing', 'wall-care'],
    description: 'The high-technology decorative paints powerhouse from Aditya Birla Group, engineered with next-generation resin chemistries, extraordinary washability, and warranty-backed protection.',
    foundedOrOrigin: 'India (Aditya Birla Group)',
    officialRefUrl: 'https://www.birlaopus.com/',
    keyHighlights: [
      'Aditya Birla Group’s multi-facility state-of-the-art automated manufacturing',
      'Micro-particle crystalline sheen with self-cleaning exterior surface',
      'Next-gen durability with warranty-backed waterproofing barrier',
      'Ultra-smooth surface fill wall putty & polymer primers'
    ],
    keyProductsSummary: ['Opus Style Luxury Emulsion', 'Opus Calista', 'Opus Prime Putty', 'Opus All-Weather Shield'],
    applications: ['Luxury Residences', 'High-Rise Exteriors', 'Architectural Interiors', 'Waterproof Basements'],
    whyChoose: ['Aditya Birla trust and quality assurance', 'Superior coverage per litre', 'High scrub and scuff resistance'],
    specialBadge: 'Next-Gen Paints',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'shalimar-paints',
    name: 'Shalimar Paints',
    tagline: 'India’s First Paint Company (Est. 1902)',
    logo: '/images/brands/shalimar-paints.png',
    categories: ['interior-paints', 'exterior-paints', 'wood-finishes', 'wall-care'],
    description: 'India’s pioneer paint company with over 120 years of iconic heritage, renowned for painting landmark national infrastructure (Howrah Bridge, Rashtrapati Bhavan) and durable architectural emulsions.',
    foundedOrOrigin: 'India (Est. 1902)',
    officialRefUrl: 'https://www.shalimarpaints.com/',
    keyHighlights: [
      'Historic pioneer behind India\'s most iconic monumental infrastructure',
      'Signature luxury interior emulsion with smooth velvet finish',
      'Weather Pro exterior protection tested against harsh seasonal monsoon cycles',
      'Superlac industrial-grade high-gloss wood and metal enamels'
    ],
    keyProductsSummary: ['Signature Luxury Emulsion', 'Weather Pro Exterior', 'Superlac Hi-Gloss Enamel', 'Shalimar Wall Care'],
    applications: ['Heritage Properties', 'Residential Homes', 'Steel & Metal Structures', 'Exterior Facades'],
    whyChoose: ['120+ years of proven formulation trust', 'Rich color depth and solid hiding', 'Reliable protection in industrial and tropical zones'],
    specialBadge: 'Heritage Pioneer (120+ Yrs)',
    bannerImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'jenson-nicholson',
    name: 'Jenson & Nicholson',
    tagline: 'The Most Trusted Name in Colours',
    logo: '/images/brands/jenson-nicholson.png',
    categories: ['interior-paints', 'exterior-paints', 'wood-finishes'],
    description: 'One of India’s oldest and most respected paint makers, creator of legendary brands like Robbialac and Brolac, offering enduring exterior protections and silky interior emulsions.',
    foundedOrOrigin: 'India (Est. 1922)',
    officialRefUrl: 'https://www.jensonnicholson.com/',
    keyHighlights: [
      'Legendary Robbialac decorative brand heritage loved across generations',
      'Brolac hard-wearing polyurethane enamel for doors and metal railings',
      'Superior weather-coat formulas resisting fungal and algal growth',
      'Exceptional gloss retention and smooth brush-levelling'
    ],
    keyProductsSummary: ['Robbialac Luxury Emulsion', 'Brolac Polyurethane Enamel', 'Special Effects Texture', 'J&N Exterior Shield'],
    applications: ['Heritage Bungalows', 'Wooden Furniture & Doors', 'Exterior Boundary Walls', 'Living Spaces'],
    whyChoose: ['Century-old legacy in paint engineering', 'High hardness and abrasion resistance', 'Rich satin and high-gloss selections'],
    specialBadge: 'Century of Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'astral-paints',
    name: 'Astral Paints',
    tagline: 'Building Bonds of Colour & Chemistry',
    logo: '/images/brands/astral-paints.svg',
    categories: ['interior-paints', 'exterior-paints', 'waterproofing', 'wall-care'],
    description: 'From India’s renowned building materials giant Astral Limited, offering high-performance decorative emulsions, water-shielding primers, and heavy-duty polymer wall putties.',
    foundedOrOrigin: 'India (Astral Limited)',
    officialRefUrl: 'https://www.astralpaints.com/',
    keyHighlights: [
      'Backed by Astral\'s leadership in advanced building polymers and resins',
      'Insignia ultra-smooth interior emulsion with rich velvety depth',
      'Integrated DampStop waterproofing primers preventing bubbling and peeling',
      'High-elasticity acrylic crack fillers and base putties'
    ],
    keyProductsSummary: ['Insignia Luxury Emulsion', 'RustGuard Metal Primer', 'Astral DampStop Shield', 'TruWall Acrylic Putty'],
    applications: ['Modern Homes', 'Terraces & Wet Areas', 'Metal Railings & Grills', 'Apartment Complexes'],
    whyChoose: ['Cutting-edge polymer technology from Astral', 'Resists efflorescence and paint peeling', 'Comprehensive wall preparation ecosystem'],
    specialBadge: 'Polymer Engineering',
    bannerImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=80'
  },

  // ==========================================
  // SPECIALTY & TRUSTED BRANDS (FOLLOWING SECTION)
  // ==========================================
  {
    slug: 'soldier-paints',
    name: 'Soldier Paints',
    tagline: 'Tough Protection. Superior Value.',
    logo: '/images/brands/soldier-paints.webp',
    categories: ['interior-paints', 'exterior-paints', 'wall-care'],
    description: 'A dedicated, high-durability decorative paint brand offering resilient acrylic distempers, cement paints, and budget-friendly architectural finishes engineered for dependable everyday coverage.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://www.nerolac.com/decorative-paint-products/soldier-paints.html',
    keyHighlights: [
      'Soldier Acrylic Distemper with smooth matte finish',
      'Soldier Waterproofing Cement Paint for exterior boundary walls',
      'High opacity formulation requiring fewer coats',
      'Exceptional value-to-coverage ratio for residential projects'
    ],
    keyProductsSummary: ['Soldier Acrylic Distemper', 'Soldier Cement Paint', 'Soldier High-Cover Emulsion'],
    applications: ['Ceilings & Walls', 'Rental Properties', 'Boundary Walls', 'Large Commercial Areas'],
    whyChoose: ['Cost-effective volume coverage', 'Quick drying and easy application', 'Reliable anti-flaking formulation'],
    specialBadge: 'Distinct Brand Identity',
    bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'british-paints',
    name: 'British Paints',
    tagline: 'Colours of Joy Since 1919',
    logo: '/images/brands/british-paints.png',
    categories: ['interior-paints', 'exterior-paints', 'protective-coatings'],
    description: 'Historic paint brand established in 1919 offering proven architectural coatings, high-durability synthetic enamels (Shungloss), and heat-reflective exterior emulsions (Expa Cool).',
    foundedOrOrigin: 'India / UK Heritage (Est. 1919)',
    officialRefUrl: 'https://britishpaints.in/',
    keyHighlights: [
      '24 Carat Super Premium Interior Emulsion with velvet sheen',
      'Expa Cool heat reflective exterior paint reducing surface temperature',
      'Shungloss Synthetic Enamel for gleaming metal and wood finishes',
      'British Acrylic Wall Putty'
    ],
    keyProductsSummary: ['24 Carat Luxury Emulsion', 'Expa Cool Exterior Emulsion', 'Shungloss Enamel', 'Mastercraft Primer'],
    applications: ['Residential Interiors', 'Exterior Bungalow Walls', 'Metal Gates & Railings', 'Timber Trim'],
    whyChoose: ['Century-old formulation heritage', 'Rich color depth and anti-fungal action', 'Excellent washability'],
    specialBadge: 'Heritage Brand',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'konkem',
    name: 'Konkem',
    tagline: 'Engineered Construction & Waterproofing Chemistry',
    logo: '/images/brands/konkem.svg',
    categories: ['waterproofing', 'construction-chemicals', 'protective-coatings'],
    description: 'Pioneering construction chemical manufacturer specializing in high-performance waterproofing systems, SBR bonding agents like K2 Bond SBR, repair mortars, and elastomeric protective membranes.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://konkem.com/products/waterproofing/k2-bond-sbr',
    keyHighlights: [
      'K2 Bond SBR styrene butadiene copolymer bonding latex',
      'Superior anti-efflorescence and water barrier additives',
      'Micro-concrete and structural crack repair formulations',
      'Excellent adhesion to concrete, brick, and masonry'
    ],
    keyProductsSummary: ['K2 Bond SBR', 'K2 Proof Integral Liquid', 'K2 Seal 2K Polymer Membrane', 'K2 Micro Concrete'],
    applications: ['Water Tanks', 'Basements & Podiums', 'Terraces & Sunken Slabs', 'Plaster Mortar Modifier'],
    whyChoose: ['Tested industrial polymers', 'Prevents rebar corrosion', 'High bond strength under hydrostatic pressure'],
    specialBadge: 'Technical Partner',
    bannerImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'myk-laticrete',
    name: 'MYK LATICRETE',
    tagline: 'World Leader in Tile & Stone Installation Systems',
    logo: '/images/brands/myk-laticrete.png',
    categories: ['cleaning-solutions', 'construction-chemicals', 'adhesives'],
    description: 'Global benchmark for ceramic, tile & stone installation, tile cleaning agents like Clenza TC, epoxy grouts (Latapoxy), and specialty construction solutions.',
    foundedOrOrigin: 'Joint Venture (USA / India)',
    officialRefUrl: 'https://myklaticrete.com/products/cleaning-solutions/clenza-tc/',
    keyHighlights: [
      'Clenza TC high-efficiency fast-acting tile and stone cleaner',
      'Latapoxy 100% solid epoxy waterproof stain-proof tile grout',
      'Laticrete 315 / 335 polymer-fortified tile adhesive mortars',
      'Specialized care formulations that safeguard tile enamel'
    ],
    keyProductsSummary: ['Clenza TC Tile Cleaner', 'Latapoxy SP-100 Grout', 'Laticrete 335 Super Flex', 'Clenza EF Efflorescence Remover'],
    applications: ['Bathroom Tiles & Grout', 'Kitchen Backsplashes', 'Swimming Pools', 'Large Format Porcelain Slabs'],
    whyChoose: ['Zero acid burn on tile glaze', '100% stain-resistant epoxy grouts', 'Superior shear bond strength'],
    specialBadge: 'Specialty Cleaning & Grouts',
    bannerImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'ica-pidilite',
    name: 'ICA Pidilite',
    tagline: 'Italian Wood Finishes Made in India',
    logo: '/images/brands/ica-pidilite.svg',
    categories: ['wood-finishes', 'decorative-finishes'],
    description: 'A prestigious joint venture bringing Italian luxury wood coatings to India. Offers world-class Polyurethane (PU), water-based coatings, high-gloss polyesters, and bespoke wood finishes for elite architectural carpentry.',
    foundedOrOrigin: 'Italy / India JV',
    officialRefUrl: 'https://www.icapidilite.com/',
    keyHighlights: [
      'Fine Italian Polyurethane (PU) finishes in Gloss and Matt',
      'Glass and mirror-like polyester mirror finishes',
      'Non-yellowing clear coats with UV absorbers',
      'Eco-friendly water-based wood coatings with zero toxic emissions'
    ],
    keyProductsSummary: ['Acquabella Water-Based PU', 'Lucido High Gloss Polyester', 'FineWood NC Stain', 'Naturwood Invisible Finish'],
    applications: ['Veneer Furniture', 'Solid Wood Dining Tables', 'Modular Kitchen Shutters', 'Architectural Paneling'],
    whyChoose: ['Authentic Italian design flair', 'Exceptional scratch & heat resistance', 'Preserves natural tactile wood grain'],
    specialBadge: 'Luxury Italian Finish',
    bannerImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'ica',
    name: 'ICA (Industria Chimica Adriatica)',
    tagline: 'Innovation & Sustainability in Wood Coatings',
    logo: '/images/brands/ica.svg',
    categories: ['wood-finishes', 'wall-care'],
    description: 'World-renowned Italian chemical group producing high-tech water-based coatings, bio-based wood systems, and specialized surface fillers such as 1kStuk water-based wood filler.',
    foundedOrOrigin: 'Civitanova Marche, Italy',
    officialRefUrl: 'https://www.icaspa.com/ww/en/',
    keyHighlights: [
      '1kStuk 1K water-based filler for wood with ultra-fine grain penetration',
      'Bio-based interior wood coating systems',
      'High-performance exterior water-based joinery finishes',
      'Strict European environmental compliance'
    ],
    keyProductsSummary: ['1kStuk Waterbased Wood Filler', 'Bio Water-Based Clear', 'Monocoat Exterior Wood Shield'],
    applications: ['Wood Restoration', 'Furniture Carpentry', 'Interior Wood Joinery', 'Architectural Timber Work'],
    whyChoose: ['Zero solvent odor', 'Micro-smooth sandability', 'Perfect stain color matching'],
    specialBadge: 'Original Italian Group',
    bannerImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: '3m',
    name: '3M',
    tagline: 'Science. Applied to Life.',
    logo: '/images/brands/3m.png',
    categories: ['automotive-compounds', 'protective-coatings'],
    description: 'Global science and materials leader providing industry-standard automotive compounds, rubbing materials, 1-step finishing compounds, scratch removers, and machine polishes.',
    foundedOrOrigin: 'USA',
    officialRefUrl: 'https://www.3mindia.in/3M/en_IN/p/c/compounds-polishes/i/automotive/',
    keyHighlights: [
      '3M Perfect-It 1-Step Finishing Material',
      'Fast Cut Plus Extreme rubbing compound for clear coat defects',
      'Machine Polish for ultra-deep swirl-free mirror gloss',
      'Premium paste wax and synthetic sealant protection'
    ],
    keyProductsSummary: ['3M Perfect-It 1-Step Compound', '3M Fast Cut Plus Compound', '3M Ultrafina SE Polish', '3M Quick Wax'],
    applications: ['Car Body Refinishing', 'Paint Correction & Scratch Removal', 'Detailing Studios', 'Marine & Gelcoat Polishing'],
    whyChoose: ['Industry-grade defect elimination', 'Dust-free clean buffing action', 'Hologram-free mirror surface'],
    specialBadge: 'Automotive Refinishing',
    bannerImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'pidilite',
    name: 'Pidilite',
    tagline: 'Building Bonds. Waterproofing India.',
    logo: '/images/brands/pidilite.png',
    categories: ['waterproofing', 'adhesives', 'construction-chemicals'],
    description: 'India’s foremost adhesives and construction chemical conglomerate, famous for Dr. Fixit waterproofing systems, Fevicol woodworking resins, and Roff tile adhesives.',
    foundedOrOrigin: 'India (Est. 1959)',
    officialRefUrl: 'https://www.pidilite.com/',
    keyHighlights: [
      'Dr. Fixit LW+ integral waterproofing for concrete and plaster',
      'Dr. Fixit Raincoat elastomeric waterproof exterior wall coating',
      'Fevicol Marine and Fevicol SH waterproof wood glues',
      'Roff tile fixing adhesives and epoxy joint fillers'
    ],
    keyProductsSummary: ['Dr. Fixit LW+ 101', 'Dr. Fixit Raincoat Classic', 'Dr. Fixit Sureseal', 'Fevicol Marine', 'Roff New Construction Tile Adhesive'],
    applications: ['Foundation to Roof Waterproofing', 'Carpentry & Plywood Bonding', 'Tile Fixing & Grouting'],
    whyChoose: ['India’s most trusted waterproofing brand', 'Complete warranty-backed system', 'Wide contractor training support'],
    specialBadge: 'Complete Surface Solutions',
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'jivanjor',
    name: 'Jivanjor',
    tagline: 'Jode Mazbooti Se (Jubilant Agri & Consumer Products)',
    logo: '/images/brands/jivanjor.png',
    categories: ['adhesives', 'wood-finishes'],
    description: 'Premier adhesives brand under Jubilant Agri & Consumer Products offering synthetic resin adhesives, all-rounder adhesives, and specialized moisture-resistant bonding solutions for carpenters.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://www.jivanjor.com/',
    keyHighlights: [
      'Jivanjor Water Shield 100% water-resistant wood adhesive',
      'Jivanjor All Rounder multi-purpose woodworking resin',
      'Jivanjor Lamino specialized formulation for laminate-to-plywood bonding',
      'Fast tack and high tensile shear strength'
    ],
    keyProductsSummary: ['Jivanjor Water Shield', 'Jivanjor All Rounder', 'Jivanjor Lamino', 'Jivanjor Fast X'],
    applications: ['Modular Kitchen Cabinets', 'Laminate Pasting', 'Veneer Pressing', 'Solid Wood Joinery'],
    whyChoose: ['Zero bubbling in laminates', 'High water and steam resistance', 'Faster setting time for rapid fabrication'],
    specialBadge: 'Master Adhesive Partner',
    bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'jacpl',
    name: 'JACPL (Jubilant Agri & Consumer Products Ltd)',
    tagline: 'Professional Wood Coating Systems',
    logo: '/images/brands/jacpl.png',
    categories: ['wood-finishes', 'protective-coatings'],
    description: 'Specialized industrial and decorative wood finishes division supplying Melamine coats, PU polishes, sanding sealers, and touch-up stains for furniture manufacturers.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://www.jacpl.co.in/category/wood-finishes',
    keyHighlights: [
      'Charmwood Melamine Gloss and Matt finishes',
      'High-solids Sanding Sealer for rapid pore filling',
      'Polyurethane topcoats for high-traffic wooden flooring and tables',
      'Rich pigmented stains preserving wood grain depth'
    ],
    keyProductsSummary: ['Charmwood Melamine', 'Charmwood PU Clear', 'Charmwood Sanding Sealer', 'Charmwood Stains'],
    applications: ['Wooden Doors & Frames', 'Dining Tables & Chairs', 'Office Workstations', 'Wooden Handicrafts'],
    whyChoose: ['High scratch and alcohol resistance', 'Fast drying rate', 'Non-fading rich grain tone'],
    specialBadge: 'Wood Finish Specialists',
    bannerImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'ideal-coating',
    name: 'Ideal Coating',
    tagline: 'Decorative Wall Textures & Architectural Protection',
    logo: '/images/brands/ideal-coating.png',
    categories: ['decorative-finishes', 'protective-coatings', 'exterior-paints'],
    description: 'Expert manufacturer of textured wall finishes, stone finishes, mineral plasters, and protective coatings designed for luxury architectural projects and modern facades.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://idealcoating.in/',
    keyHighlights: [
      'Architectural stone and travertine plaster textures',
      'Heritage rustic trowel finishes and roller textures',
      'Heavy-duty exterior weather-proof textured coatings',
      'UV-stable pigments preventing color fading on exterior walls'
    ],
    keyProductsSummary: ['Ideal Stone Texture', 'Ideal Rustic Plaster', 'Ideal Roller Texture Finish', 'Ideal Protective Clear Coat'],
    applications: ['Commercial Facades', 'Villa Feature Walls', 'Hotel Lobbies', 'Boundary Architecture'],
    whyChoose: ['Resists hairline wall cracks', 'Adds luxurious 3D tactile depth', 'Weather and algae proof'],
    specialBadge: 'Architectural Textures',
    bannerImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'esdee-paints',
    name: 'Esdee Paints',
    tagline: 'High Performance Industrial & Automotive Coatings',
    logo: '/images/brands/esdee-paints.png',
    categories: ['automotive-compounds', 'protective-coatings'],
    description: 'Specialists in high-durability Polyurethane (PU) automotive refinishes, industrial epoxies, quick-drying primers, and protective chemical coatings.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://esdeepaints.com/index.html',
    keyHighlights: [
      'Automotive 2K PU Clear Coats with brilliant gloss retention',
      'Industrial Epoxy Primers with anti-corrosion barrier',
      'Fast-drying NC primers and putties for auto body repair',
      'Resistant to petrol, diesel, and extreme weather'
    ],
    keyProductsSummary: ['Esdee 2K PU Clear', 'Esdee Auto Refinish NC Putty', 'Esdee Epoxy Zinc Chromate Primer'],
    applications: ['Automobile Refinishing', 'Machinery & Steel Fabrication', 'Commercial Vehicles', 'Metal Tanks'],
    whyChoose: ['Superior gloss DOI (Distinctness of Image)', 'High hardness and scratch resistance', 'Fast cure times'],
    specialBadge: 'Industrial & Auto PU',
    bannerImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'taralac',
    name: 'Taralac',
    tagline: 'The Master of Wood Coatings',
    logo: '/images/brands/taralac.png',
    categories: ['wood-finishes', 'protective-coatings'],
    description: 'Dedicated wood finishing brand known for crystal-clear Polyurethane coats, fast-sealing sanding bases, touch-up wood stains, and furniture lacquers.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://taralac.com/',
    keyHighlights: [
      'Taralac PU Wood Finish with exceptional clarity and shine',
      'Taralac Quick-Dry Sanding Sealer',
      'Solvent and water-based Wood Stains with vibrant natural tones',
      'Protects timber from moisture warping and UV darkening'
    ],
    keyProductsSummary: ['Taralac PU Super Clear', 'Taralac Sanding Sealer 101', 'Taralac Concentrated Wood Stains'],
    applications: ['Teak & Sheesham Furniture', 'Wooden Flooring', 'Wall Paneling & Ceilings', 'Carved Doors'],
    whyChoose: ['Crystal clear transparency without ambering', 'Smooth brush and spray levelling', 'Long-lasting surface gloss'],
    specialBadge: 'Wood Polish Specialist',
    bannerImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'wembley-paints',
    name: 'Wembley Paints',
    tagline: 'Durable Finishes. Timeless Protection.',
    logo: '/images/brands/wembley-paints.png',
    categories: ['wood-finishes', 'protective-coatings', 'interior-paints'],
    description: 'Well-established manufacturer offering heavy-duty synthetic enamels, quick-drying wood varnishes, zinc primers, and gloss topcoats trusted by painters for decades.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://www.wembleypaints.com/',
    keyHighlights: [
      'Wembley Synthetic Super Gloss Enamel',
      'Wembley French Polish and Spirit Varnishes',
      'Red Oxide and Zinc Yellow metal primers',
      'Excellent flow and high film build'
    ],
    keyProductsSummary: ['Wembley Super Gloss Enamel', 'Wembley French Polish', 'Wembley Metal Primer'],
    applications: ['Iron Grills & Gates', 'Wooden Handicrafts', 'Industrial Metal Surfaces', 'Domestic Furniture'],
    whyChoose: ['Tough enamel film that withstands weathering', 'Classic high-gloss luster', 'Trusted contractor reliability'],
    specialBadge: 'Enamel & Polish',
    bannerImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'birla-white',
    name: 'Birla White & JK Cement',
    tagline: 'The White Cement Advantage',
    logo: '/images/brands/birla-white-jk-cement.svg',
    categories: ['wall-care', 'construction-chemicals'],
    description: 'India’s gold standard for White Portland Cement, Wall Care Putty, and polymer-modified surface levelers creating flawless white foundations.',
    foundedOrOrigin: 'India',
    officialRefUrl: 'https://www.birlawhite.com',
    keyHighlights: [
      'Wall Care Putty with HP Polymers preventing paint peeling',
      'White Cement for decorative marble terrazzo and tile grouting',
      'Levelplast water-resistant plaster base',
      'Superior 90%+ whiteness index'
    ],
    keyProductsSummary: ['Birla White Wall Care Putty', 'Birla White Cement', 'JK WallMaxX Putty'],
    applications: ['Fresh Plaster Preparation', 'Ceiling Smoothing', 'Moisture Sealing Basecoat'],
    whyChoose: ['Prevents efflorescence bleeding', 'Increases topcoat paint life by 2x', 'Ultra-smooth velvety texture'],
    specialBadge: 'Surface Preparation Standard',
    bannerImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80'
  }
];
