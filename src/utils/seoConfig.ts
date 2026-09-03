import { Product, Brand, CategoryId } from '../types';
import { categoriesData } from '../data/categoriesData';
import { companyData } from '../data/companyData';
import { SEOProps } from '../components/SEOHead';

const BASE_URL = 'https://shubhamcolourhouse.com';

export function getPageSEO(
  activeTab: string,
  options?: {
    product?: Product | null;
    brand?: Brand | null;
    category?: CategoryId | 'all';
    brandFilter?: string | 'all';
  }
): SEOProps {
  switch (activeTab) {
    case 'home':
      return {
        title: 'Shubham Colour House | Premium Paints, Waterproofing & Surface Solutions in Alwar',
        description:
          "Alwar's premier showroom for Asian Paints, Berger, Nerolac, Soldier Paints, Konkem waterproofing, ICA Italian wood finishes, and complete surface chemistry since 1995. Get genuine factory stock and expert on-site testing.",
        keywords:
          'paint shop Alwar, Asian Paints Alwar, Berger Paints Alwar, Nerolac Alwar, Soldier Paints, Waterproofing Alwar, Konkem K2 Bond, MYK Laticrete, ICA Pidilite wood finish, 3M automotive polish, Jivanjor adhesives, paint dealer Scheme No 2 Alwar, computerized tinting Alwar',
        canonicalUrl: `${BASE_URL}/`,
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'HomeAndConstructionBusiness',
          name: companyData.name,
          legalName: companyData.legalName,
          foundingDate: '1995',
          description: companyData.subheading,
          url: BASE_URL,
          telephone: companyData.phonePrimary,
          email: companyData.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: `${companyData.mainStoreAddress.line1}, ${companyData.mainStoreAddress.landmark}`,
            addressLocality: companyData.mainStoreAddress.city,
            addressRegion: companyData.mainStoreAddress.state,
            postalCode: companyData.mainStoreAddress.pincode,
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 27.5645,
            longitude: 76.6025,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Sunday'],
              opens: '09:30',
              closes: '18:00',
            },
          ],
          priceRange: '₹₹',
        },
      };

    case 'products': {
      const selectedCat =
        options?.category && options.category !== 'all'
          ? categoriesData.find((c) => c.id === options.category)
          : null;

      if (selectedCat) {
        return {
          title: `${selectedCat.name} | Premium Coatings & Supplies | Shubham Colour House Alwar`,
          description: `Buy genuine ${selectedCat.name.toLowerCase()} in Alwar at Shubham Colour House. ${selectedCat.description} Authorized dealer rates and immediate delivery.`,
          keywords: `${selectedCat.name} Alwar, buy ${selectedCat.name}, ${selectedCat.name} prices Alwar, authorized dealer Alwar, Shubham Colour House`,
          canonicalUrl: `${BASE_URL}/#products?category=${selectedCat.id}`,
          ogType: 'website',
          ogImage: selectedCat.image,
        };
      }

      if (options?.brandFilter && options.brandFilter !== 'all') {
        const brandName = options.brandFilter.replace(/-/g, ' ').toUpperCase();
        return {
          title: `${brandName} Paints & Products Catalog | Shubham Colour House Alwar`,
          description: `Explore authentic ${brandName} paints, emulsions, primers, and chemicals available with dealer discounts and computerized tinting at Shubham Colour House Alwar.`,
          keywords: `${brandName} catalog Alwar, ${brandName} prices, buy ${brandName} Alwar, ${brandName} distributor`,
          canonicalUrl: `${BASE_URL}/#products?brand=${options.brandFilter}`,
          ogType: 'website',
        };
      }

      return {
        title: 'Architectural Paints, Waterproofing & Surface Coatings Catalogue | Shubham Colour House Alwar',
        description:
          'Explore our complete catalogue: interior luxury emulsions, exterior weather-proof coatings, waterproofing polymers, Italian wood finishes, tile adhesives, and automotive polishes in Alwar.',
        keywords:
          'paint catalogue Alwar, buy wall paint Alwar, waterproofing chemicals price, wood polish Alwar, Asian paints catalogue Alwar, Berger paint price list Alwar',
        canonicalUrl: `${BASE_URL}/#products`,
        ogType: 'website',
      };
    }

    case 'product-detail': {
      const product = options?.product;
      if (product) {
        return {
          title: `${product.name} | ${product.brandName} - Shubham Colour House Alwar`,
          description: `${product.name} by ${product.brandName}: ${product.shortBenefit} Pack sizes: ${product.availablePackSizes.join(', ')}. Genuine authorized stock available at Shubham Colour House, Alwar.`,
          keywords: `${product.name}, ${product.brandName} Alwar, ${product.categoryName} Alwar, buy ${product.name}, ${product.brandName} price Alwar, surface application ${product.applicationArea}`,
          canonicalUrl: `${BASE_URL}/#product/${product.slug}`,
          ogType: 'product',
          ogImage: product.image,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            image: product.image,
            description: product.description,
            brand: {
              '@type': 'Brand',
              name: product.brandName,
            },
            category: product.categoryName,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: companyData.name,
              },
            },
          },
        };
      }
      return {
        title: 'Product Details | Shubham Colour House Alwar',
        description: 'Explore detailed technical specifications, surface suitability, and pack sizes at Shubham Colour House Alwar.',
        canonicalUrl: `${BASE_URL}/#products`,
      };
    }

    case 'brands':
      return {
        title: 'Authorized Brands & Dealerships | Asian Paints, Berger, Nerolac & More | Shubham Colour House Alwar',
        description:
          'Authorized dealership and stockist for Asian Paints, Berger, Nerolac, Soldier Paints, Konkem, MYK Laticrete, ICA Pidilite, 3M, Jivanjor & Birla White in Alwar. 100% factory-sealed original stock.',
        keywords:
          'authorized paint dealer Alwar, Asian Paints distributor Alwar, Berger paints dealer, Nerolac stockist, Soldier paints Alwar, Konkem distributor, MYK Laticrete dealer Alwar',
        canonicalUrl: `${BASE_URL}/#brands`,
        ogType: 'website',
      };

    case 'brand-detail': {
      const brand = options?.brand;
      if (brand) {
        return {
          title: `${brand.name} Authorized Dealer & Stockist in Alwar | Shubham Colour House`,
          description: `Official authorized dealer of ${brand.name} in Alwar. ${brand.tagline}. ${brand.description.slice(0, 140)}... Genuine stock, manufacturer warranties, and computerized tinting.`,
          keywords: `${brand.name} Alwar, ${brand.name} authorized dealer, buy ${brand.name} in Alwar, ${brand.name} price list, ${brand.name} stockist Vijay Complex Alwar`,
          canonicalUrl: `${BASE_URL}/#brand/${brand.slug}`,
          ogType: 'website',
          ogImage: brand.bannerImage || brand.logo,
        };
      }
      return {
        title: 'Authorized Brand | Shubham Colour House Alwar',
        description: 'Authorized paint and surface chemical brand partner at Shubham Colour House Alwar.',
        canonicalUrl: `${BASE_URL}/#brands`,
      };
    }

    case 'solutions':
      return {
        title: 'Surface Solutions: Dampness, Seepage, Wood Polish & Tile Care | Shubham Colour House Alwar',
        description:
          'Proven problem-solving guides for wall dampness, ceiling seepage, white efflorescence, termite wood protection, and tile haze in Alwar with recommended technical products.',
        keywords:
          'wall dampness treatment Alwar, roof leakage repair, salt seepage cure, wood polish care, tile cleaner Alwar, anti-efflorescence chemical, bathroom waterproofing Alwar',
        canonicalUrl: `${BASE_URL}/#solutions`,
        ogType: 'website',
      };

    case 'colour-inspiration':
      return {
        title: 'Colour Inspiration, Palette Ideas & Digital Room Visualizer | Shubham Colour House Alwar',
        description:
          'Discover designer room colour combinations for living rooms, bedrooms, kitchens, and exterior facades. Explore curated fandeck swatches and computerized tinting codes in Alwar.',
        keywords:
          'room colour ideas, wall paint combinations, interior shades Alwar, colour inspiration, paint shade card, Asian Paints color visualizer, living room paint ideas',
        canonicalUrl: `${BASE_URL}/#colour-inspiration`,
        ogType: 'website',
      };

    case 'services':
      return {
        title: 'Painting Services, Moisture Testing & On-Site Consultation | Shubham Colour House Alwar',
        description:
          'Comprehensive painting services in Alwar: complimentary on-site moisture meter diagnosis, automated square-foot paint estimation, verified contractor referrals, and prompt site delivery.',
        keywords:
          'painters in Alwar, wall moisture test Alwar, house painting services, paint estimation Alwar, paint contractor Alwar, site delivery paints',
        canonicalUrl: `${BASE_URL}/#services`,
        ogType: 'website',
      };

    case 'projects':
      return {
        title: 'Completed Projects & Architectural Showcase | Shubham Colour House Alwar',
        description:
          'View real-world residential villas, commercial showrooms, industrial plants, and heritage restorations painted and protected with coatings from Shubham Colour House Alwar.',
        keywords:
          'paint projects Alwar, villa painting Alwar, hotel restoration Alwar, commercial painting showcase, architectural finishes Alwar',
        canonicalUrl: `${BASE_URL}/#projects`,
        ogType: 'website',
      };

    case 'about':
      return {
        title: 'About Us | 30+ Years of Painting Excellence Since 1995 | Shubham Colour House Alwar',
        description:
          'Established in 1995 in Alwar, Shubham Colour House has served 14,000+ homeowners and hundreds of architects with 100% genuine paints, waterproofing systems, and professional guidance.',
        keywords:
          'about Shubham Colour House, paint store history Alwar, Vijay Complex Scheme 2 Alwar, paint dealer legacy since 1995',
        canonicalUrl: `${BASE_URL}/#about`,
        ogType: 'website',
      };

    case 'contact':
      return {
        title: 'Contact Us & Showroom Location | Shubham Colour House Alwar',
        description:
          'Visit our showroom at Plot No. 43, Vijay Complex, Near Bhagat Singh Circle, Scheme No. 2, Alwar. Call +91 94140 17918 for computerized tinting, shade cards, or contractor quotes.',
        keywords:
          'contact Shubham Colour House, paint shop near Bhagat Singh Circle, Alwar paint store phone number, paint shop address Alwar, Vijay Complex Alwar',
        canonicalUrl: `${BASE_URL}/#contact`,
        ogType: 'website',
      };

    case 'legal-disclaimer':
      return {
        title: 'Digital Shade Disclaimer | Shubham Colour House Alwar',
        description:
          'Important technical note regarding digital screen color representation, display backlight calibrations, and physical manufacturer fandeck viewing at Shubham Colour House Alwar.',
        canonicalUrl: `${BASE_URL}/#legal-disclaimer`,
        ogType: 'website',
      };

    case 'legal-privacy':
      return {
        title: 'Privacy Policy | Shubham Colour House Alwar',
        description:
          'Privacy policy and customer data protection standards regarding quotations, phone inquiries, and site visits at Shubham Colour House Alwar.',
        canonicalUrl: `${BASE_URL}/#legal-privacy`,
        ogType: 'website',
      };

    case 'legal-terms':
      return {
        title: 'Terms of Service & Delivery | Shubham Colour House Alwar',
        description:
          'Retail and wholesale supply terms, manufacturer warranties, 100% genuine product guarantees, and local delivery policies at Shubham Colour House Alwar.',
        canonicalUrl: `${BASE_URL}/#legal-terms`,
        ogType: 'website',
      };

    default:
      return {
        title: 'Shubham Colour House | Premium Paints & Waterproofing in Alwar',
        description:
          'Premium paint showroom, architectural coatings, waterproofing, wood finishes, and complete surface solutions in Alwar since 1995.',
        canonicalUrl: `${BASE_URL}/`,
        ogType: 'website',
      };
  }
}
