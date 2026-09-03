import { Solution } from '../types';

export const solutionsData: Solution[] = [
  {
    id: 'interior-walls',
    slug: 'interior-wall-solutions',
    title: 'Interior Wall Systems & Luxury Finishes',
    tagline: 'Flawless velvet touch, washable protection & air-purifying low-VOC living spaces.',
    surfaceId: 'walls',
    description: 'A complete end-to-end system for indoor living rooms, bedrooms, and dining spaces—starting from moisture-resistant surface leveling to high-sheen, ultra-washable luxury emulsions.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Stains from crayons, coffee, turmeric, or oil ruining wall appearance',
      'Hairline plaster cracks and uneven lighting glare',
      'Flaking paint due to inadequate moisture-barrier preparation',
      'Strong toxic chemical smells from low-grade paints'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Surface Preparation & Putty',
        description: 'Apply 2 coats of Birla White Wall Care Putty with HP polymers to achieve a velvety smooth, water-resistant base.',
        productRecommended: 'Birla White Wall Care Putty'
      },
      {
        step: 2,
        title: 'Penetrating Acrylic Primer',
        description: 'Apply 1 coat of acrylic water-thinnable primer to seal porosity and ensure uniform topcoat opacity.',
        productRecommended: 'Asian Paints TruCare Primer'
      },
      {
        step: 3,
        title: 'Luxury Washable Topcoat',
        description: 'Apply 2 coats of Asian Paints Royale Glitz or British Paints 24 Carat with Teflon protection for stain-proof silken elegance.',
        productRecommended: 'Asian Paints Royale Glitz'
      }
    ],
    suitableCategories: ['interior-paints', 'wall-care', 'decorative-finishes'],
    recommendedBrandSlugs: ['asian-paints', 'soldier-paints', 'british-paints', 'berger-paints', 'birla-white']
  },
  {
    id: 'exterior-weather-shield',
    slug: 'exterior-weather-shield',
    title: 'Exterior Facade & Weather Shield Systems',
    tagline: 'Extreme sun, monsoon rain, dust & algae protection with long-term warranties.',
    surfaceId: 'exterior-walls',
    description: 'Advanced elastomeric and silicon-infused exterior coatings designed to shield your building envelope against harsh North Indian summer heat, dust storms, and heavy monsoon rains.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Black algae patches and fungal growth after heavy rains',
      'Color fading and chalking caused by intense UV solar radiation',
      'Fine thermal expansion cracks admitting moisture into interior walls',
      'Dust accumulation turning facades dull and grimy'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'High-Pressure Washing & Bio-Treatment',
        description: 'Clean exterior surface thoroughly and treat any active algae/fungal spots.',
        productRecommended: 'Bio-wash solution'
      },
      {
        step: 2,
        title: 'Crack Filling & Exterior Primer',
        description: 'Fill all structural fissures up to 3mm and apply 1 coat of exterior damping primer.',
        productRecommended: 'Dr. Fixit CrackX Paste'
      },
      {
        step: 3,
        title: 'Weatherproof Elastomeric Coating',
        description: 'Apply 2 generous coats of Asian Paints Apex Ultima or Dr. Fixit Raincoat Classic for 10-year weather protection.',
        productRecommended: 'Apex Ultima / Dr. Fixit Raincoat'
      }
    ],
    suitableCategories: ['exterior-paints', 'waterproofing', 'decorative-finishes'],
    recommendedBrandSlugs: ['asian-paints', 'pidilite', 'berger-paints', 'soldier-paints', 'ideal-coating']
  },
  {
    id: 'waterproofing-leakage',
    slug: 'waterproofing-leakage-solutions',
    title: 'Comprehensive Waterproofing & Damp Solutions',
    tagline: 'Permanent protection against ceiling dampness, roof ponding & bathroom seepage.',
    surfaceId: 'concrete',
    description: 'Engineered chemical systems engineered by Konkem and Pidilite for high hydrostatic pressure barriers, terrace coatings, basement tanking, and bonding new concrete to old.',
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Damp white salt patches (efflorescence) pushing paint off walls',
      'Ceiling leakage and water droplets under terrace slabs during monsoons',
      'Bathroom and sunken slab water migration into adjacent bedrooms',
      'Corrosion of structural steel reinforcement rebars'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Polymer Bonding Layer',
        description: 'Prepare a 1:1.5 slurry of Konkem K2 Bond SBR with cement to create an impermeable bond coat.',
        productRecommended: 'Konkem K2 Bond SBR'
      },
      {
        step: 2,
        title: 'Elastomeric Membrane Application',
        description: 'Apply 2 coats of Asian Paints SmartCare Damp Proof or Konkem K2 Seal with glass fiber mesh reinforcement.',
        productRecommended: 'SmartCare Damp Proof / Konkem K2 Seal'
      },
      {
        step: 3,
        title: 'Protective Screed Curing',
        description: 'Cast a protective slope screed modified with Dr. Fixit LW+ 101 to guide rainwater swiftly to drain spouts.',
        productRecommended: 'Dr. Fixit LW+ 101'
      }
    ],
    suitableCategories: ['waterproofing', 'construction-chemicals'],
    recommendedBrandSlugs: ['konkem', 'pidilite', 'asian-paints']
  },
  {
    id: 'wood-furniture-finishes',
    slug: 'wood-furniture-finishes',
    title: 'Italian Wood Finishes & Timber Restoration',
    tagline: 'High-end Italian PU, grain-enhancing stains, waterborne wood fillers & scratch-resistant lacquers.',
    surfaceId: 'wood',
    description: 'Transform solid teak, sheesham, oak, and natural wood veneers into showpieces with world-class Italian polyurethane coatings and specialized waterborne fillers.',
    heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Wood grain drying out, warping, or cracking in hot dry climates',
      'Yellowing or clouding of traditional spirit polishes over time',
      'White water rings and alcohol burn marks on dining tables',
      'Unpleasant toxic solvent fumes lingering in residential rooms'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Pore & Knot Filling',
        description: 'Fill all nail holes, grain cracks, and knots using odorless ICA 1kStuk Water-Based Wood Filler.',
        productRecommended: 'ICA 1kStuk Water-Based Wood Filler'
      },
      {
        step: 2,
        title: 'Sanding Sealer Foundation',
        description: 'Apply 2 coats of JACPL Charmwood Sanding Sealer or Taralac Basecoat to seal porosity and build solid film thickness.',
        productRecommended: 'JACPL Sanding Sealer'
      },
      {
        step: 3,
        title: 'Italian PU Topcoat',
        description: 'Spray apply 2 coats of ICA Pidilite Acquabella Italian PU in Ultra Matt or Glass Gloss for enduring velvet luxury.',
        productRecommended: 'ICA Pidilite Acquabella Italian PU'
      }
    ],
    suitableCategories: ['wood-finishes', 'adhesives'],
    recommendedBrandSlugs: ['ica-pidilite', 'ica', 'taralac', 'jacpl', 'jivanjor']
  },
  {
    id: 'tile-stone-maintenance',
    slug: 'tile-stone-maintenance',
    title: 'Tile, Stone & Grout Care Systems',
    tagline: 'Specialized cleaners, stain-proof epoxy grouts & high-shear polymer adhesives.',
    surfaceId: 'tiles',
    description: 'Professional architectural care systems from MYK LATICRETE designed to maintain bathroom tiles, kitchen backsplashes, and large format porcelain slabs in immaculate condition.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Hard water mineral scaling and stubborn post-construction cement haze on new tiles',
      'Discolored, blackened, or moldy grout lines between tiles',
      'Hollow sounding tiles or debonding due to ordinary cement mortar failure',
      'Turmeric, grease, and oil stains penetrating kitchen tile joints'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Deep Chemical Stain Removal',
        description: 'Wash tile surfaces with MYK LATICRETE Clenza TC to dissolve cement haze and mineral scales without damaging tile gloss.',
        productRecommended: 'MYK LATICRETE Clenza TC'
      },
      {
        step: 2,
        title: 'Stain-Proof Epoxy Regrouting',
        description: 'Rake out deteriorated cement grout and install Latapoxy SP-100 100% solid epoxy grout for lifetime stain immunity.',
        productRecommended: 'MYK LATICRETE Latapoxy SP-100'
      }
    ],
    suitableCategories: ['cleaning-solutions', 'construction-chemicals', 'adhesives'],
    recommendedBrandSlugs: ['myk-laticrete', 'pidilite']
  },
  {
    id: 'automotive-detailing',
    slug: 'automotive-detailing-systems',
    title: 'Automotive Refinishing & Paint Correction',
    tagline: 'Professional 3M compounding materials, swirl-free polishes & Esdee 2K PU clear coats.',
    surfaceId: 'automotive',
    description: 'Precision auto-body finishing and paint restoration systems trusted by top detailing studios and auto bodyshops for flawless depth of image and scratch correction.',
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    commonProblems: [
      'Spiderweb swirl marks and buffer holograms under sunlight',
      'Clear coat oxidation, bird drop etching, and micro-scratches',
      'Loss of optical gloss depth on dark vehicle paints',
      'Slow, messy multi-stage compounding cycles'
    ],
    recommendedSteps: [
      {
        step: 1,
        title: 'Defect Decontamination & Micro-Sanding',
        description: 'Decontaminate clear coat with clay bar and feather-sand deep scratches using 3M Trizact P3000.',
        productRecommended: '3M Trizact P3000'
      },
      {
        step: 2,
        title: '1-Step High-Gloss Compounding',
        description: 'Buff panels with 3M Perfect-It 1-Step Finishing Material using a rotary/DA polisher to eliminate scratches and produce mirror gloss.',
        productRecommended: '3M Perfect-It 1-Step Finishing Material'
      },
      {
        step: 3,
        title: 'Protective 2K Clear Topcoat (When Repainting)',
        description: 'Apply Esdee 2K PU Clear for factory-fresh UV defense and fuel spill resistance.',
        productRecommended: 'Esdee 2K PU Clear'
      }
    ],
    suitableCategories: ['automotive-compounds', 'protective-coatings'],
    recommendedBrandSlugs: ['3m', 'esdee-paints']
  }
];
