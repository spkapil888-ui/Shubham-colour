import { ColorSwatch, RoomVisualizerScene } from '../types';

export const colorSwatchesData: ColorSwatch[] = [
  // --- WARM PALETTE ---
  {
    id: 'c-rajasthan-terracotta',
    name: 'Alwar Heritage Terracotta',
    code: 'SCH-W101',
    hex: '#C05638',
    family: 'warm',
    description: 'A rich, grounded earthy clay tone inspired by traditional Rajasthani architectural brickwork and sun-drenched courtyards.',
    complementaryHex: '#F3E9DD',
    recommendedRoom: 'Living Room Feature Wall, Dining Alcove',
    moodTag: 'Welcoming & Grounded'
  },
  {
    id: 'c-amber-glow',
    name: 'Amber Sunrise Ochre',
    code: 'SCH-W102',
    hex: '#E59B36',
    family: 'warm',
    description: 'Golden morning light captured on textured plaster, infusing cozy radiance and energy into social spaces.',
    complementaryHex: '#2C3E50',
    recommendedRoom: 'Foyer, Kitchen Breakfast Bar',
    moodTag: 'Energizing & Radiant'
  },
  {
    id: 'c-crimson-velvet',
    name: 'Jaipur Crimson Rose',
    code: 'SCH-W103',
    hex: '#9E2A3B',
    family: 'warm',
    description: 'A deep velvet royal red that creates dramatic depth in formal living rooms and evening lounges.',
    complementaryHex: '#EAE6DF',
    recommendedRoom: 'Master Bedroom Niche, Formal Drawing Room',
    moodTag: 'Opulent & Regal'
  },
  {
    id: 'c-warm-apricot',
    name: 'Cashmere Apricot',
    code: 'SCH-W104',
    hex: '#E8B494',
    family: 'warm',
    description: 'Soft, delicate peach-apricot undertones that reflect warm ambient light effortlessly.',
    complementaryHex: '#4A5B6C',
    recommendedRoom: 'Bedroom, Dressing Area',
    moodTag: 'Gentle & Calming'
  },

  // --- COOL PALETTE ---
  {
    id: 'c-royal-indigo',
    name: 'Aravalli Twilight Indigo',
    code: 'SCH-C201',
    hex: '#1E3A8A',
    family: 'cool',
    description: 'Majestic deep oceanic blue evoking clear night skies over the historic Aravalli ranges.',
    complementaryHex: '#E0E7FF',
    recommendedRoom: 'Executive Study, Master Bed Accent Wall',
    moodTag: 'Authoritative & Serene'
  },
  {
    id: 'c-sage-whisper',
    name: 'Sariska Forest Sage',
    code: 'SCH-C202',
    hex: '#708E77',
    family: 'cool',
    description: 'Muted eucalyptus and woodland green that brings the restorative balance of nature indoors.',
    complementaryHex: '#FAF5EE',
    recommendedRoom: 'Living Space, Home Office, Bedroom',
    moodTag: 'Restorative & Organic'
  },
  {
    id: 'c-nordic-cyan',
    name: 'Breeze Aegean Cyan',
    code: 'SCH-C203',
    hex: '#38BDF8',
    family: 'cool',
    description: 'Crisp, invigorating sky blue that expands compact rooms with an airy, expansive aura.',
    complementaryHex: '#0F172A',
    recommendedRoom: 'Kids Study, Guest Bathroom, Sunroom',
    moodTag: 'Vibrant & Clean'
  },
  {
    id: 'c-deep-teal',
    name: 'Peacock Jewel Teal',
    code: 'SCH-C204',
    hex: '#0D6E6E',
    family: 'cool',
    description: 'A sophisticated blue-green with rich saturation that pairs gorgeously with brass fittings and light oak timber.',
    complementaryHex: '#F59E0B',
    recommendedRoom: 'Dining Room, Powder Room, Library',
    moodTag: 'Artistic & Luxurious'
  },

  // --- NEUTRAL PALETTE ---
  {
    id: 'c-sandstone-linen',
    name: 'Siliserh Sandstone Linen',
    code: 'SCH-N301',
    hex: '#E7DFD5',
    family: 'neutral',
    description: 'Timeless architectural greige with subtle warm stone undertones, delivering effortless elegance across entire homes.',
    complementaryHex: '#334155',
    recommendedRoom: 'Open Plan Living, Corridors, Ceilings',
    moodTag: 'Timeless & Versatile'
  },
  {
    id: 'c-pearl-travertine',
    name: 'Ivory Travertine Mist',
    code: 'SCH-N302',
    hex: '#F4EFEB',
    family: 'neutral',
    description: 'An off-white master shade that avoids the sterile chill of stark white, reflecting clean sunlight softly.',
    complementaryHex: '#1E293B',
    recommendedRoom: 'Whole House Basecoat, Minimalist Interiors',
    moodTag: 'Pure & Spacious'
  },
  {
    id: 'c-slate-graphite',
    name: 'Urban Slate Charcoal',
    code: 'SCH-N303',
    hex: '#334155',
    family: 'neutral',
    description: 'Contemporary deep architectural grey that creates sharp, modern contrast behind TV consoles and light fixtures.',
    complementaryHex: '#F8FAFC',
    recommendedRoom: 'Media Wall, Modern Kitchen Islands, Exterior Trim',
    moodTag: 'Architectural & Modern'
  },
  {
    id: 'c-warm-taupe',
    name: 'Mocha Velvet Taupe',
    code: 'SCH-N304',
    hex: '#9A8878',
    family: 'neutral',
    description: 'A cocooning brownish-grey that adds comfortable depth to reading corners and bedroom suites.',
    complementaryHex: '#FDFBF7',
    recommendedRoom: 'Master Bedroom, Lounge Area',
    moodTag: 'Cozy & Refined'
  },

  // --- BOLD & REGAL PALETTE ---
  {
    id: 'c-regal-violet',
    name: 'Imperial Royal Purple',
    code: 'SCH-B401',
    hex: '#6B21A8',
    family: 'bold',
    description: 'A striking brand accent color representing creativity, visionary aesthetics, and royal Rajasthani heritage.',
    complementaryHex: '#F3E8FF',
    recommendedRoom: 'Feature Niche, Boutique Boutique Backdrop, Art Wall',
    moodTag: 'Visionary & Bold'
  },
  {
    id: 'c-emerald-velvet',
    name: 'Maharaja Emerald Velvet',
    code: 'SCH-B402',
    hex: '#065F46',
    family: 'bold',
    description: 'Rich jewel-toned green that frames walnut wooden furniture and gold metallic accents with dramatic grace.',
    complementaryHex: '#FDE68A',
    recommendedRoom: 'Formal Dining, Executive Study',
    moodTag: 'Stately & Prestigious'
  },
  {
    id: 'c-marigold-burst',
    name: 'Festive Marigold Bloom',
    code: 'SCH-B403',
    hex: '#D97706',
    family: 'bold',
    description: 'A rich saffron-gold full of warmth and celebratory life, ideal for accent doorways and cultural spaces.',
    complementaryHex: '#1E1B4B',
    recommendedRoom: 'Pooja Room, Entrance Vestibule',
    moodTag: 'Celebratory & Auspicious'
  }
];

export const roomVisualizerScenes: RoomVisualizerScene[] = [
  {
    id: 'scene-living-room',
    name: 'Modern Minimalist Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    defaultHex: '#E7DFD5',
    lightingOptions: [
      { id: 'daylight', name: 'Natural Daylight', overlayFilter: 'brightness(1.02) contrast(1.01)' },
      { id: 'warm-sunset', name: 'Golden Sunset (3000K)', overlayFilter: 'sepia(0.12) hue-rotate(-10deg) brightness(1.03)' },
      { id: 'evening-cozy', name: 'Warm Evening LED (2700K)', overlayFilter: 'sepia(0.2) brightness(0.96) contrast(1.05)' }
    ]
  },
  {
    id: 'scene-master-bedroom',
    name: 'Serene Master Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    defaultHex: '#708E77',
    lightingOptions: [
      { id: 'daylight', name: 'Morning Soft Light', overlayFilter: 'brightness(1.02)' },
      { id: 'warm-sunset', name: 'Warm Bedside Lamps', overlayFilter: 'sepia(0.22) brightness(0.98)' },
      { id: 'evening-cozy', name: 'Dimmed Ambient Mode', overlayFilter: 'sepia(0.15) brightness(0.92)' }
    ]
  },
  {
    id: 'scene-modern-kitchen',
    name: 'Contemporary Modular Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    defaultHex: '#334155',
    lightingOptions: [
      { id: 'daylight', name: 'Under-Cabinet Task Light (4000K)', overlayFilter: 'brightness(1.04)' },
      { id: 'warm-sunset', name: 'Pendant Warm Glow (3000K)', overlayFilter: 'sepia(0.14) brightness(1.0)' },
      { id: 'evening-cozy', name: 'Night Mood Lighting', overlayFilter: 'brightness(0.9)' }
    ]
  },
  {
    id: 'scene-exterior-villa',
    name: 'Architectural Bungalow Elevation',
    category: 'Exterior Villa',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    defaultHex: '#F4EFEB',
    lightingOptions: [
      { id: 'daylight', name: 'Bright Midday Sun', overlayFilter: 'brightness(1.05) contrast(1.02)' },
      { id: 'warm-sunset', name: 'Sunset Facade Uplighting', overlayFilter: 'sepia(0.25) hue-rotate(-15deg) brightness(0.98)' },
      { id: 'evening-cozy', name: 'Night Architectural Spotlights', overlayFilter: 'brightness(0.85) contrast(1.1)' }
    ]
  }
];

export interface ColorPaletteItem {
  id: string;
  name: string;
  mood: string;
  description: string;
  suitableFor: string;
  colors: {
    name: string;
    code: string;
    hex: string;
    role: string;
  }[];
}

export const colorPalettesData: ColorPaletteItem[] = [
  {
    id: 'pal-heritage-warmth',
    name: 'Alwar Heritage & Earth',
    mood: 'Warm, Welcoming & Majestic',
    description: 'A rich combination inspired by Rajasthani fort architecture and desert sunset tones.',
    suitableFor: 'Living Rooms, Dining Halls, Heritage Homestays',
    colors: [
      { name: 'Alwar Heritage Terracotta', code: 'SCH-W101', hex: '#C05638', role: 'Main Accent' },
      { name: 'Amber Sunrise Ochre', code: 'SCH-W102', hex: '#E59B36', role: 'Secondary Tone' },
      { name: 'Cashmere Apricot', code: 'SCH-W104', hex: '#E8B494', role: 'Base Neutral' }
    ]
  },
  {
    id: 'pal-aravalli-mist',
    name: 'Aravalli Mist & Twilight',
    mood: 'Calm, Sophisticated & Modern',
    description: 'Cool mountain sky and mineral tones that expand smaller rooms and reduce visual stress.',
    suitableFor: 'Master Suites, Executive Workstations, Study Rooms',
    colors: [
      { name: 'Aravalli Twilight Indigo', code: 'SCH-C201', hex: '#1E3A8A', role: 'Statement Wall' },
      { name: 'Silken Teal Oasis', code: 'SCH-C202', hex: '#0D9488', role: 'Feature Niche' },
      { name: 'Morning Mist Blue', code: 'SCH-C203', hex: '#93C5FD', role: 'Ceiling & Trim' }
    ]
  },
  {
    id: 'pal-sandstone-luxury',
    name: 'Sandstone & Warm Cashmere',
    mood: 'Timeless, Neutral & Opulent',
    description: 'Understated high-end neutrals that pair beautifully with brass fixtures and teakwood furniture.',
    suitableFor: 'Full Interior Villas, Open Plan Living, Boutique Hotels',
    colors: [
      { name: 'Cashmere Apricot', code: 'SCH-W104', hex: '#E8B494', role: 'Wall Tone' },
      { name: 'Jaipur Crimson Rose', code: 'SCH-W103', hex: '#9E2A3B', role: 'Pillars & Borders' },
      { name: 'Amber Sunrise Ochre', code: 'SCH-W102', hex: '#E59B36', role: 'Feature Light' }
    ]
  },
  {
    id: 'pal-nature-botanical',
    name: 'Sariska Forest & Slate',
    mood: 'Organic, Fresh & Restorative',
    description: 'Verdant greens paired with grounded charcoal and stone for an indoor sanctuary feeling.',
    suitableFor: 'Bedrooms, Balconies, Reading Corners, Cafe Interiors',
    colors: [
      { name: 'Silken Teal Oasis', code: 'SCH-C202', hex: '#0D9488', role: 'Main Feature' },
      { name: 'Aravalli Twilight Indigo', code: 'SCH-C201', hex: '#1E3A8A', role: 'Contrast Border' },
      { name: 'Morning Mist Blue', code: 'SCH-C203', hex: '#93C5FD', role: 'Base Background' }
    ]
  }
];
