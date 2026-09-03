export type CategoryId = 
  | 'interior-paints'
  | 'exterior-paints'
  | 'waterproofing'
  | 'wood-finishes'
  | 'adhesives'
  | 'wall-care'
  | 'cleaning-solutions'
  | 'automotive-compounds'
  | 'decorative-finishes'
  | 'protective-coatings'
  | 'construction-chemicals';

export type SurfaceId =
  | 'walls'
  | 'exterior-walls'
  | 'wood'
  | 'furniture'
  | 'tiles'
  | 'concrete'
  | 'metal'
  | 'automotive';

export interface Category {
  id: CategoryId;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  accentColor: string; // Hex for tag/accent
  badgeText?: string;
  iconName: string;
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  categories: CategoryId[];
  description: string;
  foundedOrOrigin?: string;
  officialRefUrl: string;
  keyHighlights: string[];
  keyProductsSummary: string[];
  applications: string[];
  whyChoose: string[];
  specialBadge?: string;
  bannerImage: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandSlug: string;
  brandName: string;
  categoryId: CategoryId;
  categoryName: string;
  surfaceIds: SurfaceId[];
  applicationArea: 'Interior' | 'Exterior' | 'Both' | 'Automotive' | 'Industrial' | 'Surface Care';
  shortBenefit: string;
  description: string;
  image: string;
  idealFor: string[];
  keyBenefits: string[];
  applications: string[];
  surfaceCompatibility: string[];
  availablePackSizes: string[];
  availableFinishes?: string[];
  howToUseSteps?: string[];
  coverageApprox?: string;
  sheenOrTexture?: string;
  isFeatured?: boolean;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  surfaceId: SurfaceId;
  description: string;
  heroImage: string;
  commonProblems: string[];
  recommendedSteps: {
    step: number;
    title: string;
    description: string;
    productRecommended: string;
  }[];
  suitableCategories: CategoryId[];
  recommendedBrandSlugs: string[];
}

export interface ColorSwatch {
  id: string;
  name: string;
  code: string;
  hex: string;
  family: 'warm' | 'cool' | 'neutral' | 'bold' | 'earthy' | 'pastel';
  description: string;
  complementaryHex: string;
  recommendedRoom: string;
  moodTag: string;
}

export interface RoomVisualizerScene {
  id: string;
  name: string;
  category: 'Living Room' | 'Bedroom' | 'Kitchen' | 'Exterior Villa' | 'Office Studio';
  image: string;
  defaultHex: string;
  lightingOptions: {
    id: 'daylight' | 'warm-sunset' | 'evening-cozy';
    name: string;
    overlayFilter: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Interiors' | 'Exteriors' | 'Wood Finishes' | 'Waterproofing' | 'Commercial';
  location: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  productsUsed: string[];
  brandsUsed: string[];
  year: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}
