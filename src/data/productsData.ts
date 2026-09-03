import { Product } from '../types';

export const productsData: Product[] = [
  // --- KONKEM WATERPROOFING ---
  {
    id: 'konkem-k2-bond-sbr',
    slug: 'konkem-k2-bond-sbr',
    name: 'Konkem K2 Bond SBR (Polymer Bonding Latex)',
    brandSlug: 'konkem',
    brandName: 'Konkem',
    categoryId: 'waterproofing',
    categoryName: 'Waterproofing',
    surfaceIds: ['concrete', 'walls'],
    applicationArea: 'Both',
    shortBenefit: 'Styrene butadiene copolymer latex for high-adhesion bonding coats, waterproof plaster & concrete repairs.',
    description: 'Konkem K2 Bond SBR is a modified Styrene Butadiene copolymer latex specifically designed for use as a bonding agent and waterproof modifier in cementitious systems. It improves tensile, flexural, and bond strength while rendering mortars impermeable to water.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Cold joints in concrete', 'Waterproof rendering of external walls', 'Repairing spalled concrete and floor toppings', 'Sunken slabs and bathroom waterproofing'],
    keyBenefits: [
      'Increases mortar bond strength and flexural strength',
      'Significantly reduces water permeability and efflorescence',
      'Non-toxic and suitable for potable water storage structures',
      'Enhances chemical and abrasion resistance of screeds'
    ],
    applications: ['Bond coat for old to new concrete', 'Waterproof additive in plastering mortars', 'Repair mortar modifier for structural columns and beams'],
    surfaceCompatibility: ['Reinforced Concrete (RCC)', 'Brick Masonry', 'Cement Sand Plasters', 'AAC Blocks'],
    availablePackSizes: ['1 Kg', '5 Kg', '10 Kg', '20 Kg', '200 Kg'],
    howToUseSteps: [
      'Surface Preparation: Clean the concrete substrate thoroughly of all dust, laitance, oil, and loose particles. Pre-wet the surface with clean water to achieve saturated surface dry (SSD) condition.',
      'Slurry Preparation for Bonding: Mix K2 Bond SBR with fresh Portland cement in ratio 1:1.5 by weight. Stir until a lump-free brushable consistency is obtained.',
      'Application: Apply the bonding slurry evenly using a stiff nylon brush. Place fresh concrete or repair mortar while the slurry coat is still tacky (wet-on-wet).',
      'Curing: Cure the modified plaster or repair area with water for minimum 3 to 5 days.'
    ],
    coverageApprox: 'Approx. 70-80 sq.ft / kg as bonding slurry coat depending on substrate porosity.',
    sheenOrTexture: 'Milky white liquid drying to clear tough polymer matrix',
    isFeatured: true
  },

  // --- MYK LATICRETE CLEANING & GROUTS ---
  {
    id: 'myk-laticrete-clenza-tc',
    slug: 'myk-laticrete-clenza-tc',
    name: 'MYK LATICRETE Clenza TC (Tile Cleaner)',
    brandSlug: 'myk-laticrete',
    brandName: 'MYK LATICRETE',
    categoryId: 'cleaning-solutions',
    categoryName: 'Cleaning Solutions',
    surfaceIds: ['tiles', 'concrete'],
    applicationArea: 'Both',
    shortBenefit: 'Fast-acting heavy duty tile & stone cleaner that dissolves cement stains, efflorescence and grime without hurting tile glaze.',
    description: 'MYK LATICRETE Clenza TC is a specialized multi-purpose cleaning liquid formulated to remove cementitious grout film, efflorescence, mineral deposits, and stubborn job-site dirt from ceramic tiles, vitrified porcelain, and masonry surfaces safely.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Post-construction tile clean up', 'Removing white efflorescence salts on tiles and pavers', 'Deep cleaning bathroom grout joints and shower stalls', 'Vitrified and glazed ceramic tile surfaces'],
    keyBenefits: [
      'Safely cleans without etching or dulling tile glazed finishes',
      'Rapidly breaks down hard water mineral scaling and grout haze',
      'Non-fuming and pleasant citrus fragrance formulation',
      'Economical dilution with water for everyday maintenance'
    ],
    applications: ['Interior & Exterior Tile Floors', 'Bathroom Wall Tiles', 'Kitchen Backsplashes', 'Patio & Balcony Stone Cladding'],
    surfaceCompatibility: ['Glazed Ceramic Tiles', 'Vitrified Tiles', 'Unglazed Porcelain', 'Granite & Acid-Resistant Stones'],
    availablePackSizes: ['500 ml', '1 Litre', '5 Litres'],
    howToUseSteps: [
      'Preparation: Wet the tile joints and surface with clean tap water before applying Clenza TC.',
      'Dilution: For heavy stains, use Clenza TC directly or dilute 1:1 with water. For light routine cleaning, dilute 1:4 with water.',
      'Application: Spread the solution across the tiles using a sponge or mop. Allow it to react for 3 to 5 minutes.',
      'Scrubbing & Rinsing: Scrub gently with a soft nylon brush or scrubbing pad, then wash off thoroughly with abundant clean water.'
    ],
    coverageApprox: 'Approx. 100 - 150 sq.ft per litre depending on dilution and stain severity.',
    sheenOrTexture: 'Clear liquid formulation',
    isFeatured: true
  },
  {
    id: 'myk-laticrete-latapoxy-sp100',
    slug: 'myk-laticrete-latapoxy-sp100',
    name: 'MYK LATICRETE Latapoxy SP-100 (100% Solid Epoxy Tile Grout)',
    brandSlug: 'myk-laticrete',
    brandName: 'MYK LATICRETE',
    categoryId: 'construction-chemicals',
    categoryName: 'Construction Chemicals',
    surfaceIds: ['tiles'],
    applicationArea: 'Both',
    shortBenefit: '100% solid, stain-free, chemical resistant, waterproof epoxy tile joint filler with lifetime color consistency.',
    description: 'Latapoxy SP-100 is an epoxy resin-based 3-component grout system specifically formulated for joints in ceramic, vitrified, and stone tiles in residential, commercial, and wet areas.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Kitchen countertops & backsplashes', 'Luxury walk-in showers & bathrooms', 'Swimming pools and jacuzzis', 'High-traffic commercial floor tiles'],
    keyBenefits: [
      '100% stain proof — resists oil, turmeric, tea, and acids',
      'Waterproof barrier preventing joint leakage beneath tiles',
      'Inhibits fungal and bacterial mold growth in damp areas',
      'Available in 40+ designer shade-matched colors'
    ],
    applications: ['Joint filling in vitrified tiles', 'Swimming pool mosaics', 'Hospital floors and food processing kitchens'],
    surfaceCompatibility: ['Ceramic & Vitrified Tiles', 'Glass Mosaics', 'Natural Granite', 'Marble & Quartz'],
    availablePackSizes: ['1 Kg Unit', '5 Kg Unit'],
    coverageApprox: 'Varies by tile size and joint width (approx. 50-70 sq.ft for 600x600mm tiles with 3mm joint).',
    sheenOrTexture: 'Ultra-smooth matte epoxy finish',
    isFeatured: false
  },

  // --- SOLDIER PAINTS (DISTINCT BRAND) ---
  {
    id: 'soldier-acrylic-distemper',
    slug: 'soldier-acrylic-distemper',
    name: 'Soldier Acrylic Distemper (Smooth Matt Interior)',
    brandSlug: 'soldier-paints',
    brandName: 'Soldier Paints',
    categoryId: 'interior-paints',
    categoryName: 'Interior Paints',
    surfaceIds: ['walls'],
    applicationArea: 'Interior',
    shortBenefit: 'Dependable, cost-effective water-based acrylic distemper delivering rich opacity and smooth matte coverage.',
    description: 'Soldier Acrylic Distemper provides homeowners and contractors with high-coverage, uniform matte interior wall finishing. Formulated with balanced acrylic binders and lightfast pigments for enduring protection on budget-conscious transformations.',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Rental residential units', 'Ceilings and bedroom walls', 'Low-budget interior renewals', 'Commercial godowns and shop interiors'],
    keyBenefits: [
      'High spreading rate providing maximum square footage per bucket',
      'Smooth, non-chalking velvety matte finish',
      'Fast-drying waterborne formulation with low odor',
      'Easy application by brush, roller or spray'
    ],
    applications: ['Interior plastered masonry', 'Asbestos sheets', 'Concrete ceilings'],
    surfaceCompatibility: ['Cured Cement Plaster', 'POP / Gypsum Ceilings', 'Primed Brickwork'],
    availablePackSizes: ['2 Kg', '5 Kg', '10 Kg', '20 Kg'],
    howToUseSteps: [
      'Surface Prep: Ensure wall is free from dust, grease, and loose old paint.',
      'Priming: Apply 1 coat of Soldier Decoprime or Water-Based Primer.',
      'Thinning: Add 500-600 ml clean water per 1 kg of distemper.',
      'Topcoats: Apply 2 uniform coats with a 4-hour interval between coats.'
    ],
    coverageApprox: 'Approx. 55-65 sq.ft / kg for 2 coats on primed surface.',
    sheenOrTexture: 'Smooth Classic Matte',
    isFeatured: true
  },
  {
    id: 'soldier-cement-paint',
    slug: 'soldier-cement-paint',
    name: 'Soldier Waterproofing Cement Paint',
    brandSlug: 'soldier-paints',
    brandName: 'Soldier Paints',
    categoryId: 'exterior-paints',
    categoryName: 'Exterior Paints',
    surfaceIds: ['exterior-walls', 'concrete'],
    applicationArea: 'Exterior',
    shortBenefit: 'Portland cement-based waterproof exterior coating formulated to bond tightly with porous masonry and boundary walls.',
    description: 'Soldier Waterproofing Cement Paint is formulated with fine white Portland cement, inorganic pigments, and water-repellent polymers. Ideal for masonry and exterior boundary walls exposed to direct weathering.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Boundary walls and parapets', 'Exposed exterior cement plasters', 'Farmhouse boundary fencing', 'Commercial exterior masonry'],
    keyBenefits: [
      'Direct chemical hydration bond with cementitious surfaces',
      'Effective rain barrier preventing moisture absorption',
      'Economical exterior weather protection'
    ],
    applications: ['Exterior brick and stone masonry', 'Unpainted cement plaster'],
    surfaceCompatibility: ['Fresh Plaster', 'Concrete Blocks', 'Asbestos Sheet Roofing'],
    availablePackSizes: ['5 Kg', '25 Kg Bags'],
    coverageApprox: 'Approx. 35-40 sq.ft / kg for 2 coats.',
    sheenOrTexture: 'Textured Mineral Matte',
    isFeatured: false
  },

  // --- ICA / ICA PIDILITE ITALIAN WOOD FINISHES ---
  {
    id: 'ica-1kstuk-wood-filler',
    slug: 'ica-1kstuk-wood-filler',
    name: 'ICA 1kStuk Water-Based Wood Filler',
    brandSlug: 'ica',
    brandName: 'ICA',
    categoryId: 'wood-finishes',
    categoryName: 'Wood Finishes',
    surfaceIds: ['wood', 'furniture'],
    applicationArea: 'Interior',
    shortBenefit: 'Ultra-fine Italian 1K water-based filler for wood pores, knots, and nail holes with zero odor and superb sandability.',
    description: 'ICA 1kStuk is an advanced single-component waterborne filler engineered in Italy for seamless repair of knots, imperfections, and open pores in natural timber and veneers. It dries rapidly without shrinking or cracking and takes stains evenly.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Restoring antique teak & rosewood furniture', 'Filling nail holes and hairline cracks in veneer sheets', 'Pre-coating pore preparation for luxury PU polishes', 'Modular kitchen wood components'],
    keyBenefits: [
      'Eco-friendly waterborne formula with zero toxic solvent fumes',
      'Zero shrinkage upon complete drying',
      'Micro-fine formulation sands smoothly with P220–P320 grit paper',
      'Available in natural wood shades (Teak, Walnut, Pine, Oak, Wenge, White)'
    ],
    applications: ['Solid Wood Joinery', 'Veneered MDF/Plywood', 'Hardwood Flooring', 'Carved Doors'],
    surfaceCompatibility: ['Teak', 'Oak', 'Walnut', 'Sheesham', 'Plywood Veneers', 'MDF'],
    availablePackSizes: ['250 g', '500 g', '1 Kg', '5 Kg'],
    howToUseSteps: [
      'Surface prep: Sand wood surface thoroughly along the grain using P150-P180 grit sandpaper.',
      'Application: Apply ICA 1kStuk with a stainless steel putty knife, pressing firmly into cracks and pores.',
      'Drying: Allow to dry for 30 to 45 minutes at room temperature.',
      'Sanding: Sand smooth using P240 or P320 grit sandpaper before applying primer or stain.'
    ],
    coverageApprox: 'Varies with wood porosity (approx. 100-150 sq.ft / kg for light grain filling).',
    sheenOrTexture: 'Smooth micro-porous grain finish',
    isFeatured: true
  },
  {
    id: 'ica-pidilite-acquabella-pu',
    slug: 'ica-pidilite-acquabella-pu',
    name: 'ICA Pidilite Acquabella Italian Water-Based PU',
    brandSlug: 'ica-pidilite',
    brandName: 'ICA Pidilite',
    categoryId: 'wood-finishes',
    categoryName: 'Wood Finishes',
    surfaceIds: ['wood', 'furniture'],
    applicationArea: 'Interior',
    shortBenefit: 'World-class Italian water-based Polyurethane clear finish providing velvet touch, anti-yellowing clarity, and zero odor.',
    description: 'ICA Pidilite Acquabella represents the pinnacle of luxury Italian wood finishing. Developed with low-VOC bio-resin technology, it offers superior scratch, stain, and heat resistance while preserving the raw tactile beauty of natural wood grains.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Luxury wooden dining tables', 'Custom architectural veneer wall panels', 'Wardrobes and bedside consoles', 'Kids room wooden furniture'],
    keyBenefits: [
      'Crystal clear transparency — does not yellow or darken wood over time',
      'European Toy Safety EN 71-3 compliant and ultra-low VOC',
      'Exceptional resistance to household liquids (wine, tea, oil, alcohol)',
      'Available in Ultra Matt (5% gloss), Satin, and High Gloss finishes'
    ],
    applications: ['Natural Veneers', 'Solid Hardwoods (Oak, Walnut, Ash)', 'Interior Joinery'],
    surfaceCompatibility: ['Natural Wood', 'Engineered Veneers', 'MDF Surfaces'],
    availablePackSizes: ['1 Litre', '4 Litres', '20 Litres'],
    coverageApprox: 'Approx. 80-100 sq.ft / litre per coat.',
    sheenOrTexture: 'Ultra Matte (Velvet Touch) / High Gloss Glass Finish',
    isFeatured: true
  },

  // --- 3M AUTOMOTIVE COMPOUNDS & POLISHES ---
  {
    id: '3m-perfect-it-1-step',
    slug: '3m-perfect-it-1-step',
    name: '3M Perfect-It 1-Step Finishing Material',
    brandSlug: '3m',
    brandName: '3M',
    categoryId: 'automotive-compounds',
    categoryName: 'Automotive Compounds & Polishes',
    surfaceIds: ['automotive'],
    applicationArea: 'Automotive',
    shortBenefit: 'Advanced 1-step rubbing and finishing material that cuts like a compound and polishes to a swirl-free mirror shine.',
    description: '3M Perfect-It 1-Step Finishing Material combines the cutting power of a compound with the high-gloss swirl-free finish of a polish in one operation. Eliminates P3000 and finer abrasive scratches quickly on modern automotive clear coats.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Automotive paint correction studios', 'Clear coat scratch & swirl removal', 'Restoring oxidized car body panels', 'High-end detailing workshops'],
    keyBenefits: [
      'Cuts time in half by replacing traditional multi-step compounding',
      'Leaves a deep, wet-look mirror gloss without holograms',
      'Easy wipe-off with clean microfiber towel',
      'Stays wet longer across large bonnet and roof panels'
    ],
    applications: ['Automobile Refinishing Clear Coats', 'OEM Factory Finishes', 'Gelcoats'],
    surfaceCompatibility: ['Automotive Clear Coats', 'Single-Stage Enamels', 'Polyurethane Automotive Tops'],
    availablePackSizes: ['500 g', '1 Kg Bottle'],
    howToUseSteps: [
      'Prep: Wash and decontaminate the car panel with clay bar. Sand isolated deep defects with 3M Trizact P3000/P8000 foam disc.',
      'Dispense: Apply a small quantity of 3M Perfect-It 1-Step onto the 3M Purple Foam Finishing Pad.',
      'Buffing: Buff at 1200-1500 RPM with moderate pressure in overlapping passes until the slurry turns translucent.',
      'Wipe Clean: Buff away residue with a 3M Ultrafine microfiber detailing cloth.'
    ],
    coverageApprox: 'Approx. 8-12 full vehicle detailing corrections per 1 kg bottle.',
    sheenOrTexture: 'Precision liquid micro-abrasive compound',
    isFeatured: true
  },

  // --- JIVANJOR ADHESIVES ---
  {
    id: 'jivanjor-water-shield',
    slug: 'jivanjor-water-shield',
    name: 'Jivanjor Water Shield (Water-Resistant Wood Adhesive)',
    brandSlug: 'jivanjor',
    brandName: 'Jivanjor',
    categoryId: 'adhesives',
    categoryName: 'Adhesives & Sealants',
    surfaceIds: ['wood', 'furniture'],
    applicationArea: 'Both',
    shortBenefit: 'Premium synthetic resin adhesive offering unmatched water resistance and bonding strength for modular furniture and kitchens.',
    description: 'Jivanjor Water Shield is a specialized synthetic resin emulsion glue formulated for high-humidity woodwork, kitchen cabinets, and bathroom vanity bonding. Resists boiling water cycles and provides enduring joint strength.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Modular kitchen under-sink cabinets', 'Bathroom vanities and door jambs', 'Balcony wooden furniture', 'Plywood to laminate bonding'],
    keyBenefits: [
      'Continuous water and moisture resistance',
      'High tack with fast 4 to 6 hour curing cycle',
      'Anti-fungal formulation preventing glue line rot',
      'Zero bubbles or delamination in laminate pressing'
    ],
    applications: ['Plywood Joinery', 'Laminate Pasting', 'Veneer Edge Banding', 'Solid Wood Mortise Joints'],
    surfaceCompatibility: ['Commercial Plywood', 'Marine Ply (BWP)', 'MDF/HDF', 'Solid Hardwood'],
    availablePackSizes: ['500 g', '1 Kg', '2 Kg', '5 Kg', '10 Kg', '20 Kg', '50 Kg'],
    coverageApprox: 'Approx. 45-50 sq.ft / kg depending on applicator notched trowel.',
    sheenOrTexture: 'Viscous white resin drying to translucent bond line',
    isFeatured: false
  },

  // --- JACPL WOOD FINISHES ---
  {
    id: 'jacpl-charmwood-melamine',
    slug: 'jacpl-charmwood-melamine',
    name: 'JACPL Charmwood Melamine Wood Finish',
    brandSlug: 'jacpl',
    brandName: 'JACPL',
    categoryId: 'wood-finishes',
    categoryName: 'Wood Finishes',
    surfaceIds: ['wood', 'furniture'],
    applicationArea: 'Interior',
    shortBenefit: 'Two-pack acid catalyzed wood finish offering hard scratch resistance and deep gloss/matt clarity.',
    description: 'JACPL Charmwood Melamine is an acid-curing 2-pack coating formulated to enhance and protect wooden furniture, doors, and timber handicrafts. Provides exceptional resistance to hot beverages, water rings, and daily wear.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Teak wood doors and window frames', 'Office desks and boardroom tables', 'Living room furniture & TV units'],
    keyBenefits: [
      'High scratch, abrasion, and heat resistance',
      'Available in High Gloss and Smooth Silk Matt',
      'Quick recoat interval (3-4 hours)',
      'Accentuates natural timber grain beauty'
    ],
    applications: ['Wood and Veneer Polish', 'Cabinetry', 'Wooden Artifacts'],
    surfaceCompatibility: ['Natural Hardwoods', 'Teak Veneers', 'Engineered Boards'],
    availablePackSizes: ['1 Litre', '4 Litres', '20 Litres Pack (Base + Catalyst)'],
    coverageApprox: 'Approx. 85-95 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Gloss (90%+) or Silky Matt',
    isFeatured: false
  },

  // --- IDEAL COATING DECORATIVE TEXTURES ---
  {
    id: 'ideal-coating-stone-texture',
    slug: 'ideal-coating-stone-texture',
    name: 'Ideal Coating Architectural Stone Plaster Texture',
    brandSlug: 'ideal-coating',
    brandName: 'Ideal Coating',
    categoryId: 'decorative-finishes',
    categoryName: 'Decorative Finishes & Textures',
    surfaceIds: ['walls', 'exterior-walls'],
    applicationArea: 'Both',
    shortBenefit: 'Rich architectural mineral texture replicating natural travertine stone, rustic sandstone, and concrete finishes.',
    description: 'Ideal Coating Stone Texture is an acrylic-mineral co-polymer textured wall coating formulated with crushed graded quartz and marble aggregates. It masks minor masonry hairline cracks and creates opulent tactile facades.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Living room feature walls and accent niches', 'Luxury bungalow exterior elevations', 'Hotel reception lobbies and restaurant pillars', 'Commercial showroom interiors'],
    keyBenefits: [
      'Breathable, flexible formulation bridges minor hairline cracks',
      'Resistant to UV photodegradation, rain, and fungal algae',
      'Washable and long-lasting 3D relief texture',
      'Available in custom tintable earth tones'
    ],
    applications: ['Interior Accent Walls', 'Exterior Villa Facades', 'Columns & Porticos'],
    surfaceCompatibility: ['Cement Plaster', 'RCC Concrete', 'Gypsum Boards', 'Exterior Fibre Cement Sheets'],
    availablePackSizes: ['25 Kg Bucket', '50 Kg Pack'],
    coverageApprox: 'Approx. 80-120 sq.ft / 25 kg bucket depending on texture thickness.',
    sheenOrTexture: 'Granite Stone / Rustic Trowel Matte Texture',
    isFeatured: true
  },

  // --- ESDEE PAINTS AUTO & INDUSTRIAL ---
  {
    id: 'esdee-2k-pu-clear',
    slug: 'esdee-2k-pu-clear',
    name: 'Esdee Paints 2K Polyurethane Automotive Clear Coat',
    brandSlug: 'esdee-paints',
    brandName: 'Esdee Paints',
    categoryId: 'automotive-compounds',
    categoryName: 'Automotive Compounds & Polishes',
    surfaceIds: ['automotive', 'metal'],
    applicationArea: 'Automotive',
    shortBenefit: 'High-solids 2-component Polyurethane clear coat offering mirror gloss DOI, UV resistance, and chemical protection.',
    description: 'Esdee 2K PU Clear is an acrylic-polyurethane two-pack clear varnish designed for topcoating basecoats in automotive refinishing and industrial steel structures requiring maximum weatherability and gloss retention.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Automotive repainting & custom detailing', 'Commercial vehicle finishing', 'Industrial machinery clear protection'],
    keyBenefits: [
      'Extreme gloss with exceptional optical clarity',
      'Resists petrol spills, acid rain, and road grit abrasion',
      'Non-yellowing UV absorbers prevent clear coat peeling'
    ],
    applications: ['Car, Bike & Bus Body Refinishing', 'Metallic Basecoat Sealing'],
    surfaceCompatibility: ['Automotive Basecoats', 'Primed Metal Panels'],
    availablePackSizes: ['1 Litre', '5 Litres (with Hardener)'],
    coverageApprox: 'Approx. 100 sq.ft / litre per coat.',
    sheenOrTexture: 'Mirror Gloss Clear Film',
    isFeatured: false
  },

  // --- BRITISH PAINTS ---
  {
    id: 'british-paints-24-carat',
    slug: 'british-paints-24-carat',
    name: 'British Paints 24 Carat Super Premium Interior Emulsion',
    brandSlug: 'british-paints',
    brandName: 'British Paints',
    categoryId: 'interior-paints',
    categoryName: 'Interior Paints',
    surfaceIds: ['walls'],
    applicationArea: 'Interior',
    shortBenefit: 'Ultra-luxurious washable interior emulsion infused with Teflon surface protector and velvet pearl glow.',
    description: 'British Paints 24 Carat is formulated with 100% pure acrylic latex and stain-guard polymers. Resists daily household stains (coffee, crayons, ketchup) and gives walls an opulent silken sheen.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Master bedrooms & drawing rooms', 'Luxury apartment interiors', 'High-end guest spaces'],
    keyBenefits: [
      'Teflon surface protector provides effortless stain washability',
      'Anti-fungal and anti-bacterial protection for healthy indoor air',
      'Over 2,000 fade-resistant vibrant shades'
    ],
    applications: ['Interior plastered walls', 'POP cornices and ceilings'],
    surfaceCompatibility: ['Primed Plaster', 'Gypsum Board', 'Cement Putty'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 130-150 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Rich Velvet Sheen',
    isFeatured: false
  },
  {
    id: 'british-paints-shungloss',
    slug: 'british-paints-shungloss',
    name: 'British Paints Shungloss Synthetic Enamel',
    brandSlug: 'british-paints',
    brandName: 'British Paints',
    categoryId: 'protective-coatings',
    categoryName: 'Protective Coatings',
    surfaceIds: ['metal', 'wood'],
    applicationArea: 'Both',
    shortBenefit: 'Heavy-duty mirror gloss synthetic enamel with high alkyd resin build for metal gates, railings and woodwork.',
    description: 'Shungloss Synthetic Enamel delivers a sparkling mirror-like finish that repels moisture, rust, and dirt on metal and wooden surfaces exposed to the elements.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Iron security gates, grills, and railings', 'Wooden doors and window shutters', 'Machinery and structural steel'],
    keyBenefits: [
      'High gloss retention and mirror shine',
      'Tough enamel film resists chipping and peeling',
      'Anti-rust barrier on primed metal'
    ],
    applications: ['Ferrous Metal Surfaces', 'Timber Frames'],
    surfaceCompatibility: ['Primed Mild Steel', 'Cast Iron', 'Natural Wood'],
    availablePackSizes: ['500 ml', '1 Litre', '4 Litres', '20 Litres'],
    coverageApprox: 'Approx. 100-110 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'High Mirror Gloss',
    isFeatured: false
  },

  // --- PIDILITE / DR FIXIT ---
  {
    id: 'pidilite-dr-fixit-raincoat',
    slug: 'pidilite-dr-fixit-raincoat',
    name: 'Dr. Fixit Raincoat Classic (Elastomeric Waterproof Coating)',
    brandSlug: 'pidilite',
    brandName: 'Pidilite',
    categoryId: 'waterproofing',
    categoryName: 'Waterproofing',
    surfaceIds: ['exterior-walls'],
    applicationArea: 'Exterior',
    shortBenefit: 'Elastomeric waterproof exterior coating with 110-micron film thickness that stretches to bridge cracks.',
    description: 'Dr. Fixit Raincoat Classic provides a dual-benefit exterior system: vibrant aesthetic color choices combined with heavy-duty waterproofing. Its flexible film bridges up to 1.5mm hairline cracks and withstands driving monsoon rain.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Exterior bungalow facades facing heavy monsoon rain', 'Repainting old cracked exterior walls', 'Preventing internal seepage through outer walls'],
    keyBenefits: [
      'Twice as thick as ordinary exterior paints for genuine waterproofing',
      'Crack-bridging elastomeric flexibility',
      'Resists algae, fungus, and salt efflorescence buildup'
    ],
    applications: ['Exterior Concrete and Plastered Walls', 'Parapets and Overhangs'],
    surfaceCompatibility: ['Cement Plaster', 'Concrete Slabs', 'Old Exterior Coatings'],
    availablePackSizes: ['4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 35-40 sq.ft / litre for 2 coats at recommended 110-micron DFT.',
    sheenOrTexture: 'Smooth Protective Sheen',
    isFeatured: true
  },
  {
    id: 'pidilite-dr-fixit-lw-plus',
    slug: 'pidilite-dr-fixit-lw-plus',
    name: 'Dr. Fixit LW+ 101 (Integral Waterproofing Liquid)',
    brandSlug: 'pidilite',
    brandName: 'Pidilite',
    categoryId: 'construction-chemicals',
    categoryName: 'Construction Chemicals',
    surfaceIds: ['concrete', 'walls'],
    applicationArea: 'Both',
    shortBenefit: 'Specialized liquid plasticizer and integral waterproofing additive for all cement concretes and plasters.',
    description: 'Dr. Fixit LW+ 101 improves the workability of fresh mortar and concrete, eliminates internal bleeding and segregation, and forms an impermeable barrier against dampness and rebar rusting.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Foundation RCC casting', 'Roof slab casting', 'External and internal plastering mortars', 'Bricklaying mortars'],
    keyBenefits: [
      'Reduces water-cement ratio while enhancing workability',
      'Prevents cracking and damp patches on finished walls',
      'Protects structural steel rebar from corrosion'
    ],
    applications: ['RCC Slabs', 'Plaster Mortars', 'Foundation Footings'],
    surfaceCompatibility: ['OPC / PPC Cement Mixtures'],
    availablePackSizes: ['200 ml', '1 Litre', '5 Litres', '10 Litres', '20 Litres', '100 Litres', '200 Litres'],
    coverageApprox: '200 ml per 50 kg bag of cement.',
    sheenOrTexture: 'Liquid admixture',
    isFeatured: false
  },

  // --- TARALAC WOOD POLISH ---
  {
    id: 'taralac-pu-super-clear',
    slug: 'taralac-pu-super-clear',
    name: 'Taralac PU Super Clear Polyurethane Wood Finish',
    brandSlug: 'taralac',
    brandName: 'Taralac',
    categoryId: 'wood-finishes',
    categoryName: 'Wood Finishes',
    surfaceIds: ['wood', 'furniture'],
    applicationArea: 'Interior',
    shortBenefit: 'Non-yellowing Polyurethane clear topcoat designed for exceptional clarity and durability on natural wooden surfaces.',
    description: 'Taralac PU Super Clear is formulated with refined polyurethane polymers to highlight the warm depth of grain in teak, sheesham, and mahogany. Resistant to water rings, household stains, and daily abrasion.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Solid wood furniture', 'Wooden staircase treads and handrails', 'Ceiling wooden rafters and panels'],
    keyBenefits: [
      'High solids formula gives rich film thickness in fewer coats',
      'Resistant to hot cups, water, and household cleaning chemicals',
      'Available in Gloss and Semi-Gloss Matt'
    ],
    applications: ['Natural Wood Polish', 'Veneered Boards'],
    surfaceCompatibility: ['Hardwoods', 'Plywood Veneers', 'Bamboo Panels'],
    availablePackSizes: ['1 Litre', '4 Litres', '20 Litres'],
    coverageApprox: 'Approx. 80-90 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Super Clear High Gloss / Silky Matt',
    isFeatured: false
  },

  // --- WEMBLEY PAINTS ---
  {
    id: 'wembley-super-gloss-enamel',
    slug: 'wembley-super-gloss-enamel',
    name: 'Wembley Synthetic Super Gloss Enamel',
    brandSlug: 'wembley-paints',
    brandName: 'Wembley Paints',
    categoryId: 'protective-coatings',
    categoryName: 'Protective Coatings',
    surfaceIds: ['metal', 'wood'],
    applicationArea: 'Both',
    shortBenefit: 'Time-tested high-gloss alkyd enamel providing mirror shine and tough protection for steel and wood fabrication.',
    description: 'Wembley Super Gloss Enamel offers exceptional flow and leveling, resulting in a smooth, brushmark-free surface on iron grills, machinery, and timber surfaces.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Wrought iron railings and safety doors', 'Commercial steel structures', 'Wooden doors and shutters'],
    keyBenefits: [
      'Long-lasting brilliant gloss luster',
      'Excellent weather and moisture barrier',
      'Smooth easy flow with roller or brush'
    ],
    applications: ['Metal Fabrication', 'Wood Trim & Mouldings'],
    surfaceCompatibility: ['Mild Steel', 'Cast Iron', 'Wood'],
    availablePackSizes: ['500 ml', '1 Litre', '4 Litres', '20 Litres'],
    coverageApprox: 'Approx. 95-105 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'High Gloss Enamel',
    isFeatured: false
  },

  // --- ASIAN PAINTS ---
  {
    id: 'asian-paints-royale-glitz',
    slug: 'asian-paints-royale-glitz',
    name: 'Asian Paints Royale Glitz (Ultra Luxury Interior Emulsion)',
    brandSlug: 'asian-paints',
    brandName: 'Asian Paints',
    categoryId: 'interior-paints',
    categoryName: 'Interior Paints',
    surfaceIds: ['walls'],
    applicationArea: 'Interior',
    shortBenefit: 'Ultra-luxury interior emulsion with Teflon surface protector, metallic sheen & ultra-washable stain defense.',
    description: 'Asian Paints Royale Glitz is the ultimate luxury finish for interior walls, combining high sheen with stain repellent technology that makes tough stains like turmeric, tea, and crayons vanish with a single wipe.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Living rooms & master suites', 'High-traffic family areas', 'Luxury residential apartments'],
    keyBenefits: [
      'Teflon surface protector provides unmatched stain washability',
      'Crackle-free smooth finish with brilliant light reflection',
      'Green Assure certified low-VOC formula with zero ammonia smell'
    ],
    applications: ['Living Rooms', 'Bedrooms', 'Dining Areas', 'Ceilings'],
    surfaceCompatibility: ['Plastered Walls', 'POP & Gypsum', 'Concrete Surfaces'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 140-160 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Luxury Metallic Sheen / Ultra Velvet Matte',
    isFeatured: true
  },
  {
    id: 'asian-paints-apex-ultima',
    slug: 'asian-paints-apex-ultima',
    name: 'Asian Paints Apex Ultima (Weatherproof Exterior Emulsion)',
    brandSlug: 'asian-paints',
    brandName: 'Asian Paints',
    categoryId: 'exterior-paints',
    categoryName: 'Exterior Paints',
    surfaceIds: ['exterior-walls'],
    applicationArea: 'Exterior',
    shortBenefit: 'High-performance exterior emulsion with Colour Stay technology, anti-algal protection & 7-year performance warranty.',
    description: 'Asian Paints Apex Ultima is engineered with advanced silicone additives and dirt-pickup-resistance polymers to keep exterior walls looking clean, vibrant, and protected under intense Indian heat and monsoon downpours.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Independent villas & bungalows', 'Residential multi-storey buildings', 'Extreme weather exposed facades'],
    keyBenefits: [
      'DPUR (Dirt Pick Up Resistance) keeps walls looking freshly painted',
      'Advanced anti-algal biopack protects against black spots',
      'UV-resistant pigments retain color vibrancy for years'
    ],
    applications: ['Exterior Plastered Walls', 'Boundary Walls', 'Exterior Facades'],
    surfaceCompatibility: ['Cement Plaster', 'RCC Concrete', 'Exterior Fiber Boards'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 55-65 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Rich Exterior Sheen',
    isFeatured: true
  },
  {
    id: 'asian-paints-smartcare-damp-proof',
    slug: 'asian-paints-smartcare-damp-proof',
    name: 'Asian Paints SmartCare Damp Proof (Rooftop & Wall Waterproofing)',
    brandSlug: 'asian-paints',
    brandName: 'Asian Paints',
    categoryId: 'waterproofing',
    categoryName: 'Waterproofing',
    surfaceIds: ['concrete', 'exterior-walls'],
    applicationArea: 'Exterior',
    shortBenefit: 'Fiber-reinforced elastomeric liquid waterproofing membrane with crack bridging and heat-reflectance up to 10°C.',
    description: 'SmartCare Damp Proof is a polyurethane and acrylic elastomeric liquid coating reinforced with synthetic fibers. Creates a thick, seamless water-repellent membrane over terraces, roofs, and exterior parapets.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Building terraces and roofs', 'Sunken slabs and balconies', 'Exterior vertical walls prone to dampness'],
    keyBenefits: [
      'Bridges cracks up to 2mm with 600% elongation capacity',
      'Reduces surface temperature up to 10°C with high solar reflectance',
      '8-year waterproofing warranty on terrace applications'
    ],
    applications: ['Terraces', 'Parapet Walls', 'Sloped Concrete Roofs'],
    surfaceCompatibility: ['Concrete Slabs', 'Brick Bat Coba', 'Exterior Plaster'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 10-12 sq.ft / litre for full multi-coat membrane.',
    sheenOrTexture: 'Seamless Elastomeric White / Light Grey Membrane',
    isFeatured: true
  },

  // --- BERGER PAINTS ---
  {
    id: 'berger-silk-glamor',
    slug: 'berger-silk-glamor',
    name: 'Berger Silk Glamor (Luxury Interior Emulsion)',
    brandSlug: 'berger-paints',
    brandName: 'Berger Paints',
    categoryId: 'interior-paints',
    categoryName: 'Interior Paints',
    surfaceIds: ['walls'],
    applicationArea: 'Interior',
    shortBenefit: 'Formulated with crystal reflective technology and pure acrylic emulsion for a radiant metallic shimmer.',
    description: 'Berger Silk Glamor provides exceptional aesthetic beauty for discerning interior spaces. Its smooth finish enhances room lighting with radiant shimmer and is formulated to be 100% washable.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Designer living rooms', 'Feature walls & entry foyers', 'Boutique office suites'],
    keyBenefits: [
      'Crystal Reflective Technology enhances room brightness',
      'Ultra-washable finish easily cleans everyday grime',
      'Green Horizon certified low VOC'
    ],
    applications: ['Interior Walls', 'Ceilings'],
    surfaceCompatibility: ['Smooth Cement Plaster', 'POP Base'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 130-150 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Metallic Silken Glow',
    isFeatured: false
  },
  {
    id: 'berger-weathercoat-long-life',
    slug: 'berger-weathercoat-long-life',
    name: 'Berger WeatherCoat Long Life 10 (PU & Silicon Exterior)',
    brandSlug: 'berger-paints',
    brandName: 'Berger Paints',
    categoryId: 'exterior-paints',
    categoryName: 'Exterior Paints',
    surfaceIds: ['exterior-walls'],
    applicationArea: 'Exterior',
    shortBenefit: '10-year warranty exterior paint combining Polyurethane and Silicon for extreme heavy-rain defense.',
    description: 'Berger WeatherCoat Long Life 10 uses a unique blend of Polyurethane and Silicon polymers that shed water instantly and prevent algae from taking root, even in high humidity climates.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    idealFor: ['High rainfall and monsoon-prone zones', 'Modern bungalow exteriors', 'Commercial facades'],
    keyBenefits: [
      '10-year comprehensive performance warranty',
      'PU + Silicon dual protective barrier',
      'Anti-fungal and anti-algal bio-shield'
    ],
    applications: ['Exterior Masonry', 'Boundary Walls'],
    surfaceCompatibility: ['Cement Plaster', 'RCC Concrete'],
    availablePackSizes: ['1 Litre', '4 Litres', '10 Litres', '20 Litres'],
    coverageApprox: 'Approx. 50-60 sq.ft / litre for 2 coats.',
    sheenOrTexture: 'Rich Protective Exterior Sheen',
    isFeatured: false
  },

  // --- BIRLA WHITE WALL CARE ---
  {
    id: 'birla-white-wall-care-putty',
    slug: 'birla-white-wall-care-putty',
    name: 'Birla White Wall Care Putty (White Cement Based)',
    brandSlug: 'birla-white',
    brandName: 'Birla White & JK Cement',
    categoryId: 'wall-care',
    categoryName: 'Wall Care & Putty',
    surfaceIds: ['walls', 'concrete'],
    applicationArea: 'Both',
    shortBenefit: 'Extra HP polymers provide water-resistance, superior 93%+ whiteness, and an ultra-smooth base for paint.',
    description: 'Birla White Wall Care Putty binds with the base plaster through chemical hydration, creating a waterproof, smooth white surface that prevents peeling, flaking, and dampness from affecting topcoat paints.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    idealFor: ['Fresh plaster preparation before painting', 'Leveling minor wall imperfections', 'Interior and exterior smooth leveling'],
    keyBenefits: [
      'Contains Extra HP Polymers for superior water resistance',
      '93%+ whiteness index brings out true paint shade brilliance',
      'Reduces paint consumption by up to 25%'
    ],
    applications: ['Interior & Exterior Plastered Walls', 'Ceilings'],
    surfaceCompatibility: ['Fresh Plaster', 'Concrete Surfaces', 'AAC Block Walls'],
    availablePackSizes: ['1 Kg', '5 Kg', '20 Kg', '30 Kg', '40 Kg Bags'],
    howToUseSteps: [
      'Preparation: Clean wall of dirt, dust, and grease. Moisten surface with water before application.',
      'Mixing: Mix Birla White Wall Care Putty with 36-38% clean water by weight. Stir mechanically to form a lump-free paste.',
      'Application: Apply 1st coat from bottom to top using a putty blade (1.5mm thickness). Allow 4-6 hours drying.',
      '2nd Coat: Apply 2nd coat (1.0mm thickness). Allow to dry for 10-12 hours, then gently sand with 320-grit waterproof paper if needed.'
    ],
    coverageApprox: 'Approx. 14-16 sq.ft / kg for 2 coats (total thickness 1.5mm).',
    sheenOrTexture: 'Smooth Velvety White Matt Base',
    isFeatured: true
  }
];
