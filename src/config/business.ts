/**
 * Single source of truth for verified business information.
 * Based strictly on verified content from https://cabling.zoorepairs.com.au/.
 * Does not invent unverified street addresses, ratings, or arbitrary hours.
 */

export interface BusinessConfig {
  readonly name: string;
  readonly division: string;
  readonly phone: string;
  readonly phoneTel: string;
  readonly quoteUrl: string;
  readonly serviceArea: string;
  readonly canonicalDomain: string;
  readonly primaryServices: readonly string[];
}

export const business: BusinessConfig = {
  name: 'Zoo Computer Repairs',
  division: 'Data & Ethernet Installation',
  phone: '0477 319 160',
  phoneTel: '+61477319160',
  quoteUrl: 'https://www.zoorepairs.com.au/get-quote/',
  serviceArea: 'Brisbane & Surrounding Suburbs',
  canonicalDomain: 'https://cabling.zoorepairs.com.au',
  primaryServices: [
    'Home Office & Remote Work',
    'Low-Latency Gaming Rooms',
    '4K/8K Smart TV Streaming',
    'PoE Security Camera Cabling',
    'Business & Office Fit-Outs',
    'Wi-Fi Access Point Backhauling',
  ],
} as const;

export type Business = typeof business;
