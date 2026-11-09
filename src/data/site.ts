import { SITE_URL, BASE_PATH } from './site-url.mjs';

/** Internal link or file path → the same path under the site's base folder. Leaves #anchors and full URLs alone. */
export const url = (p: string) => (p.startsWith('/') && !p.startsWith('//') ? BASE_PATH + p : p);

/**
 * Every value marked PLACEHOLDER is listed in PLACEHOLDERS.md.
 * Change them here; the whole site reads from this file.
 */
export const site = {
  name: 'Gaadi Tracker',
  url: SITE_URL,
  description:
    'Gaadi Tracker is a fleet management and driver hisab app for taxi, auto and truck owners in India. Drivers log km, earnings, fuel and expenses on their phone. The owner sees every shift, settles driver pay and gets road tax and service reminders.',
  category: 'Fleet management and driver hisab app for taxi, auto and truck owners in India',

  /** Show dashed outlines and labels on screenshot, photo and testimonial slots. Set false at launch. */
  showPlaceholders: false,

  contactEmail: 'support@gaaditracker.in', // PLACEHOLDER
  contactPhone: '+91 00000 00000', // PLACEHOLDER
  contactHours: 'Monday to Saturday, 10 am to 6 pm', // PLACEHOLDER
  contactWhatsApp: '', // PLACEHOLDER: e.g. '919000000000' (digits only). Empty hides the link.
  formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME', // PLACEHOLDER

  ga4Id: '', // PLACEHOLDER: e.g. 'G-XXXXXXXXXX'. Empty means no analytics script at all.
  searchConsoleToken: '', // PLACEHOLDER: content of the google-site-verification meta tag.

  social: [
    // PLACEHOLDER: add profile URLs; they also feed the Organization `sameAs`.
  ] as string[],

  apps: {
    owner: {
      name: 'Gaadi Tracker Owner',
      packageId: 'com.developerssays.gaadimate.owner',
    },
    driver: {
      name: 'Gaadi Tracker Driver',
      packageId: 'com.developerssays.gaadimate',
    },
  },
} as const;

export type AppKey = keyof typeof site.apps;

export function playUrl(app: AppKey, campaign: string, lang: 'en' | 'hi' = 'en') {
  const id = site.apps[app].packageId;
  const referrer = encodeURIComponent(
    `utm_source=website&utm_medium=${campaign}&utm_campaign=${app}_install&utm_content=${lang}`,
  );
  return `https://play.google.com/store/apps/details?id=${id}&hl=${lang === 'hi' ? 'hi' : 'en_IN'}&referrer=${referrer}`;
}

export const playStoreListing = (app: AppKey) =>
  `https://play.google.com/store/apps/details?id=${site.apps[app].packageId}`;

/** Dates shown as "Last updated" on guides. */
export const formatDate = (d: Date, lang: 'en' | 'hi' = 'en') =>
  d.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export const inr = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN');
