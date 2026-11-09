import { site, playStoreListing } from './site';

const abs = (path: string) => new URL(path, site.url).toString().replace(/\/$/, '') || site.url;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#org`,
  name: site.name,
  url: site.url,
  logo: { '@type': 'ImageObject', url: `${site.url}/logo.png`, width: 1024, height: 1024 },
  description: site.description,
  email: site.contactEmail,
  sameAs: [playStoreListing('owner'), playStoreListing('driver'), ...site.social],
});

export const apps = () =>
  (['owner', 'driver'] as const).map((k) => ({
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: site.apps[k].name,
    operatingSystem: 'Android',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Fleet management',
    description:
      k === 'owner'
        ? 'Owner app of Gaadi Tracker. See live shifts, approve driver changes, set driver pay rules, get road tax and service reminders, and export reports by vehicle, driver, platform or date.'
        : 'Driver app of Gaadi Tracker. Start and end shifts with odometer readings, add earnings, fuel, FASTag and expenses, see your balance with the owner. Works offline.',
    downloadUrl: playStoreListing(k),
    installUrl: playStoreListing(k),
    inLanguage: ['en-IN', 'hi-IN'],
    countriesSupported: 'IN',
    publisher: { '@id': `${site.url}/#org` },
    // `offers` is added once pricing is final (see PLACEHOLDERS.md).
  }));

export const faqPage = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const breadcrumbs = (trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

export const article = (a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated: Date;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  datePublished: a.published.toISOString(),
  dateModified: a.updated.toISOString(),
  image: abs(a.image),
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', name: site.name, url: site.url },
  publisher: { '@id': `${site.url}/#org` },
});

export { abs };
