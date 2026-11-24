import { Testimonial } from '../types';

export const companyData = {
  name: 'Shubham Colour House',
  legalName: 'Shubham Colour House Private Firm',
  establishedYear: 1995,
  tagline: 'Transforming Spaces Through Colour',
  subheading: "Alwar's Premier Destination for Architectural Coatings, Italian Wood Finishes, Waterproofing & Surface Chemistry.",
  
  // Contacts
  phonePrimary: '+91 63673 34283',
  phoneTel: '+916367334283',
  phoneDisplay: '+91 63673 34283',
  phoneRaw: '916367334283',
  whatsappNumber: '916367334283',
  whatsappDisplay: '+91 63673 34283',
  whatsappEnquiryMessage: 'Hi Shubham Colour House, please share available paint shades and prices.',
  whatsappLink: 'https://wa.me/916367334283?text=Hi%20Shubham%20Colour%20House%2C%20please%20share%20available%20paint%20shades%20and%20prices.',
  email: 'info@shubhamcolourhouse.com',
  emailSecondary: 'support@shubhamcolourhouse.com',
  
  // Addresses
  mainStoreAddress: {
    line1: 'Plot No. 43, Vijay Complex, Shop No. 2',
    landmark: 'Near Bhagat Singh Circle, Scheme No. 2',
    city: 'Alwar',
    state: 'Rajasthan',
    pincode: '301001',
    country: 'India',
    fullFormatted: 'Plot No. 43, Vijay Complex, Shop No. 2, near Bhagat Singh Circle, Scheme No. 2, Alwar, Rajasthan – 301001, India',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14199.12456789!2d76.6025!3d27.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299a9b1234567%3A0x123456789abcdef!2sScheme%20No%202%2C%20Alwar%2C%20Rajasthan%20301001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Plot+No.+43+Vijay+Complex+Shop+No+2+near+Bhagat+Singh+Circle+Scheme+No+2+Alwar+Rajasthan+301001'
  },
  
  businessHours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 8:30 PM' },
    { days: 'Sunday', hours: '9:30 AM – 6:00 PM' }
  ],
  
  stats: [
    { value: '1995', label: 'Founded in Alwar', prefix: 'Since', suffix: '' },
    { value: '14,000+', label: 'Delighted Homeowners', prefix: '', suffix: '' },
    { value: '17,000+', label: 'Projects Completed', prefix: '', suffix: '' },
    { value: '18+', label: 'Authorized World Brands', prefix: '', suffix: '' },
    { value: '100%', label: 'Commitment to Quality', prefix: '', suffix: '' }
  ],

  trustPillars: [
    {
      title: 'Legacy Since 1995',
      description: 'Three decades of unwavering integrity, serving three generations of homeowners, architects, and master contractors in Alwar.',
      icon: 'Award'
    },
    {
      title: '100% Genuine Authorized Stock',
      description: 'Direct procurement partnerships with Asian Paints, Berger, Nerolac, Soldier Paints, Konkem, MYK Laticrete, ICA Pidilite, 3M, and Pidilite.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Expert On-Site Guidance',
      description: 'Technical surface diagnosis, moisture meter dampness testing, computerized computerized shade matching, and free material estimation.',
      icon: 'Sparkles'
    },
    {
      title: 'Comprehensive Surface Ecosystem',
      description: 'From concrete roof waterproofing and Italian wood PU to tile cleaning chemistry and automotive compounds—all under one roof.',
      icon: 'Layers'
    }
  ]
};

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh Singhal',
    role: 'Villa Owner',
    location: 'Scheme No. 2, Alwar',
    quote: 'We renovated our 4,500 sq.ft bungalow using Asian Paints Royale Glitz and Dr. Fixit Raincoat recommended by Shubham Colour House. Their on-site dampness check and color guidance saved us significant cost and gave our home an exquisite finish.',
    rating: 5,
    projectType: 'Full House Renovation',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Ar. Niharika Sharma',
    role: 'Architect & Interior Designer',
    location: 'Alwar & Jaipur',
    quote: 'As an architect, finding authentic Italian PU finishes like ICA Pidilite Acquabella and Konkem waterproofing chemicals locally in Alwar was difficult until we partnered with Shubham Colour House. Outstanding technical knowledge and reliable delivery.',
    rating: 5,
    projectType: 'Commercial & Luxury Residential',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Suresh Chandra Sharma',
    role: 'Master Painting Contractor',
    location: 'Lajpat Nagar & Scheme No. 2, Alwar',
    quote: 'I have been purchasing paints and adhesives from Shubham Colour House since 2002. They have the most reliable stock of Soldier Paints, Birla White Putty, Jivanjor glues, and MYK Laticrete tile products in the entire region.',
    rating: 5,
    projectType: 'Contractor Partner',
    date: 'December 2025'
  }
];

export const faqsData = [
  {
    question: 'How do I choose between Asian Paints Royale, Berger Silk, and Soldier Paints?',
    answer: 'Choice depends on room usage, desired sheen, and budget. Asian Paints Royale and Berger Silk Glamor provide ultra-washable, high-sheen finishes ideal for drawing rooms and master suites. Soldier Paints provides exceptional coverage distempers and emulsions for ceilings, rental units, and large square-foot areas where budget-efficiency with durability is desired. Our store experts help you optimize shade combinations for each specific room.'
  },
  {
    question: 'Can you solve severe wall dampness and peeling paint permanently?',
    answer: 'Yes. Simply painting over dampness is a temporary fix that will peel again. We diagnose the root cause—such as external crack seepage, capillary rise from the plinth, or bathroom leaks. We supply specialized polymer systems like Konkem K2 Bond SBR and Asian Paints SmartCare Damp Proof to treat the substrate before applying breathable waterproof putty and topcoats.'
  },
  {
    question: 'Do you supply genuine Italian wood coatings like ICA and ICA Pidilite?',
    answer: 'Yes! We are an authorized distributor for ICA and ICA Pidilite wood finishing systems, offering Italian Polyurethane (PU), water-based bio coatings, 1kStuk wood fillers, and high-gloss polyesters for custom furniture and veneer paneling.'
  },
  {
    question: 'Do you provide verified painters and on-site consultations in Alwar?',
    answer: 'Yes. We offer free on-site consultations where our team visits your site to measure areas, check moisture levels, and provide detailed computerized paint estimates. We also connect you with trained, certified painters for reliable execution.'
  },
  {
    question: 'What is MYK LATICRETE Clenza TC used for?',
    answer: 'Clenza TC is a heavy-duty tile and stone cleaner that safely removes post-construction cement film, grout haze, hard water scale, and efflorescence from ceramic and vitrified tiles without damaging the surface glaze.'
  }
];
