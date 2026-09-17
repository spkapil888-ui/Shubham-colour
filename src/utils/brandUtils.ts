import { brandsData } from '../data/brandsData';
import { productsData } from '../data/productsData';
import { Brand, Product } from '../types';

/**
 * Normalized alias dictionary mapping various user search terms,
 * partial names, common misspellings, or related brand names to official slugs.
 */
const BRAND_ALIASES: Record<string, string> = {
  // Asian Paints
  'asian': 'asian-paints',
  'asianpaints': 'asian-paints',
  'asian-paint': 'asian-paints',
  'asianpaint': 'asian-paints',
  'royale': 'asian-paints',
  'apex': 'asian-paints',
  'smartcare': 'asian-paints',
  'tractor': 'asian-paints',

  // Berger Paints
  'berger': 'berger-paints',
  'bergerpaints': 'berger-paints',
  'berger-paint': 'berger-paints',
  'bergerpaint': 'berger-paints',
  'silk-glamor': 'berger-paints',
  'weathercoat': 'berger-paints',
  'bison': 'berger-paints',

  // Nerolac
  'nerolac-paints': 'nerolac',
  'nerolac-paint': 'nerolac',
  'kansai': 'nerolac',
  'kansai-nerolac': 'nerolac',
  'kansai-nerolac-paints': 'nerolac',
  'beauty-gold': 'nerolac',

  // Nippon
  'nippon': 'nippon-paint',
  'nipponpaint': 'nippon-paint',
  'nippon-paints': 'nippon-paint',

  // JSW
  'jsw': 'jsw-paints',
  'jswpaints': 'jsw-paints',
  'jsw-paint': 'jsw-paints',

  // Birla Opus / Birla White
  'birla': 'birla-opus',
  'opus': 'birla-opus',
  'birlaopus': 'birla-opus',
  'birla-white': 'birla-white',
  'birlawhite': 'birla-white',
  'jk-cement': 'birla-white',
  'jk-white': 'birla-white',

  // Shalimar
  'shalimar': 'shalimar-paints',
  'shalimarpaints': 'shalimar-paints',
  'shalimar-paint': 'shalimar-paints',

  // Jenson & Nicholson
  'jenson': 'jenson-nicholson',
  'nicholson': 'jenson-nicholson',
  'j-n': 'jenson-nicholson',
  'jn': 'jenson-nicholson',
  'jenson-and-nicholson': 'jenson-nicholson',

  // Astral
  'astral': 'astral-paints',
  'astralpaints': 'astral-paints',

  // Soldier
  'soldier': 'soldier-paints',
  'soldierpaints': 'soldier-paints',

  // British Paints
  'british': 'british-paints',
  'britishpaints': 'british-paints',

  // Konkem
  'konkem-k2': 'konkem',
  'k2': 'konkem',
  'k2-bond': 'konkem',

  // MYK Laticrete
  'laticrete': 'myk-laticrete',
  'myk': 'myk-laticrete',
  'clenza': 'myk-laticrete',

  // ICA
  'ica-italy': 'ica-pidilite',
  'ica-wood': 'ica-pidilite',

  // Pidilite
  'dr-fixit': 'pidilite',
  'drfixit': 'pidilite',
  'fevicol': 'pidilite',
  'm-seal': 'pidilite',
  'mseal': 'pidilite',
  'fevikwik': 'pidilite',

  // 3M
  '3m-car-care': '3m',
  '3m-india': '3m',
  '3m-polish': '3m',

  // Jacpl
  'jac': 'jacpl',

  // Wembley
  'wembley': 'wembley-paints',

  // Esdee
  'esdee': 'esdee-paints',

  // Ideal
  'ideal': 'ideal-coating',
};

/**
 * Resilient brand finder that handles slugs, full names, URL-encoded parameters,
 * aliases, and partial matches without ever throwing errors.
 */
export const findBrand = (slugOrName?: string | null): Brand | undefined => {
  if (!slugOrName) return undefined;

  let cleaned = '';
  try {
    cleaned = decodeURIComponent(slugOrName).trim().toLowerCase();
  } catch {
    cleaned = slugOrName.trim().toLowerCase();
  }

  // Remove route prefixes if included (e.g., 'brands/asian-paints' -> 'asian-paints')
  cleaned = cleaned.replace(/^(brands|brand)\//, '').replace(/\/+$/, '');
  const normalized = cleaned.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  if (!normalized) return undefined;

  // 1. Direct slug exact match
  const bySlug = brandsData.find(
    (b) => b.slug.toLowerCase() === cleaned || b.slug.toLowerCase() === normalized
  );
  if (bySlug) return bySlug;

  // 2. Direct name exact match (case-insensitive)
  const byName = brandsData.find(
    (b) =>
      b.name.toLowerCase() === cleaned ||
      b.name.toLowerCase() === normalized.replace(/-/g, ' ')
  );
  if (byName) return byName;

  // 3. Alias dictionary check
  if (BRAND_ALIASES[normalized]) {
    const aliasSlug = BRAND_ALIASES[normalized];
    const aliased = brandsData.find((b) => b.slug === aliasSlug);
    if (aliased) return aliased;
  }

  // 4. Substring / partial match
  const bySubstring = brandsData.find((b) => {
    const bSlug = b.slug.toLowerCase();
    const bName = b.name.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const cleanNoDash = normalized.replace(/-/g, '');
    return (
      bSlug.includes(normalized) ||
      normalized.includes(bSlug) ||
      bName.includes(cleanNoDash) ||
      cleanNoDash.includes(bName)
    );
  });
  if (bySubstring) return bySubstring;

  return undefined;
};

/**
 * Gets all products manufactured by a given brand.
 */
export const getBrandProducts = (brandSlug: string): Product[] => {
  return productsData.filter((p) => p.brandSlug === brandSlug);
};

/**
 * Gets related brands for exploration in detail or fallback pages.
 */
export const getRelatedBrands = (currentBrandSlug?: string, limit = 4): Brand[] => {
  return brandsData
    .filter((b) => b.slug !== currentBrandSlug)
    .slice(0, limit);
};
