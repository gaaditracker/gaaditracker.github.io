export type Lang = 'en' | 'hi';

/** Pages that exist in both languages. Key = English path. */
export const translated: Record<string, string> = {
  '/': '/hi',
  '/taxi-fleet-management-app': '/hi/taxi-fleet-management-app',
  '/auto-rickshaw-owner-app': '/hi/auto-rickshaw-owner-app',
  '/truck-fleet-management-app': '/hi/truck-fleet-management-app',
};

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: [
      { href: '/features', label: 'Features' },
      { href: '/driver-salary-commission-calculator', label: 'Driver pay' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/blog', label: 'Guides' },
      { href: '/faq', label: 'FAQ' },
    ],
    forWho: 'Made for',
    vehicles: [
      { href: '/taxi-fleet-management-app', label: 'Taxi and cab fleets' },
      { href: '/auto-rickshaw-owner-app', label: 'Auto-rickshaw owners' },
      { href: '/truck-fleet-management-app', label: 'Lorry and truck owners' },
    ],
    getApp: 'Get the app',
    menu: 'Menu',
    close: 'Close',
    theme: 'Switch light or dark theme',
    langSwitch: { label: 'हिंदी', title: 'यह पेज हिंदी में पढ़ें' },
    footerTag: 'Know what every gaadi earned today, without calling the driver.',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerMore: [
      { href: '/gaadi-tracker-vs-notebook-whatsapp', label: 'vs notebook and WhatsApp' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy-policy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms' },
    ],
    madeIn: 'Made in India for Indian fleets.',
    badge: { pre: 'GET IT ON', store: 'Google Play' },
    ownerApp: 'Owner app',
    driverApp: 'Driver app',
    consent: {
      text: 'We use Google Analytics to see which pages help owners. No ads, no other trackers.',
      accept: 'Allow',
      decline: 'No thanks',
    },
  },
  hi: {
    skip: 'सीधे सामग्री पर जाएं',
    nav: [
      { href: '/features', label: 'फ़ीचर' },
      { href: '/driver-salary-commission-calculator', label: 'ड्राइवर पगार' },
      { href: '/pricing', label: 'कीमत' },
      { href: '/blog', label: 'गाइड' },
      { href: '/faq', label: 'सवाल' },
    ],
    forWho: 'किसके लिए',
    vehicles: [
      { href: '/hi/taxi-fleet-management-app', label: 'टैक्सी और कैब मालिक' },
      { href: '/hi/auto-rickshaw-owner-app', label: 'ऑटो रिक्शा मालिक' },
      { href: '/hi/truck-fleet-management-app', label: 'लॉरी और ट्रक मालिक' },
    ],
    getApp: 'ऐप डाउनलोड करें',
    menu: 'मेन्यू',
    close: 'बंद करें',
    theme: 'लाइट या डार्क थीम बदलें',
    langSwitch: { label: 'English', title: 'Read this page in English' },
    footerTag: 'हर गाड़ी ने आज कितना कमाया, ड्राइवर को फ़ोन किए बिना जानिए।',
    footerProduct: 'ऐप',
    footerCompany: 'कंपनी',
    footerMore: [
      { href: '/gaadi-tracker-vs-notebook-whatsapp', label: 'कॉपी और WhatsApp से तुलना' },
      { href: '/contact', label: 'संपर्क' },
      { href: '/privacy-policy', label: 'प्राइवेसी पॉलिसी' },
      { href: '/terms', label: 'शर्तें' },
    ],
    madeIn: 'भारत में, भारतीय गाड़ी मालिकों के लिए बना।',
    badge: { pre: 'इस पर पाएं', store: 'Google Play' },
    ownerApp: 'मालिक का ऐप',
    driverApp: 'ड्राइवर का ऐप',
    consent: {
      text: 'हम Google Analytics से देखते हैं कि कौन से पेज काम आते हैं। कोई विज्ञापन नहीं, कोई और ट्रैकर नहीं।',
      accept: 'ठीक है',
      decline: 'नहीं',
    },
  },
} as const;
