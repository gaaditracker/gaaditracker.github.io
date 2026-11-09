/**
 * Builds a 1200×630 share image for every English page at build time.
 * Uses the real logo PNG and the site's own fonts (Google Sans).
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const pages: Record<string, { kicker: string; title: string; figure?: string }> = {
  home: { kicker: 'Fleet management app for taxi, auto and truck owners', title: 'Know what every gaadi earned today, without calling the driver.', figure: '48,392 km' },
  'taxi-fleet-management-app': { kicker: 'For taxi and cab owners', title: 'Uber, Ola and Rapido earnings, km and CNG for every car.', figure: '₹3,450' },
  'auto-rickshaw-owner-app': { kicker: 'For auto-rickshaw owners', title: 'Daily rent, km and driver advances, settled.', figure: '₹400 / day' },
  'truck-fleet-management-app': { kicker: 'For lorry and truck owners', title: 'Tons × rate, diesel, fuel average and road tax reminders.', figure: '4.1 km/l' },
  'driver-salary-commission-calculator': { kicker: 'Driver pay calculator', title: 'Percentage, slab, daily rent or salary. See what each one costs you.', figure: '30% = ₹1,035' },
  features: { kicker: 'Features', title: 'Two apps. One for you, one for each driver.' },
  pricing: { kicker: 'Pricing', title: 'Gaadi Tracker plans for fleet owners.' },
  faq: { kicker: 'FAQ', title: 'Questions owners ask about Gaadi Tracker.' },
  blog: { kicker: 'Guides', title: 'Guides for fleet owners in India.' },
  'gaadi-tracker-vs-notebook-whatsapp': { kicker: 'Comparison', title: 'Gaadi Tracker vs a notebook and WhatsApp.' },
  contact: { kicker: 'Contact', title: 'Talk to the Gaadi Tracker team.' },
  'privacy-policy': { kicker: 'Privacy policy', title: 'How Gaadi Tracker handles your data.' },
  terms: { kicker: 'Terms of use', title: 'Terms for the Gaadi Tracker apps and website.' },
  '404': { kicker: 'Gaadi Tracker', title: 'Page not found.' },
};

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  const all = { ...pages };
  for (const p of posts) all[`blog--${p.id}`] = { kicker: 'Guide', title: p.data.title };
  return Object.entries(all).map(([slug, data]) => ({ params: { slug }, props: data }));
}) satisfies GetStaticPaths;

const font = (file: string) => fs.readFileSync(path.join(process.cwd(), 'node_modules/@fontsource', file));
const fonts = [
  { name: 'GS', data: font('google-sans/files/google-sans-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
  { name: 'GS', data: font('google-sans/files/google-sans-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'GS', data: font('google-sans/files/google-sans-latin-ext-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
  { name: 'GS', data: font('google-sans/files/google-sans-devanagari-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
];
const logo = `data:image/png;base64,${fs.readFileSync(path.join(process.cwd(), 'public/logo.png')).toString('base64')}`;

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { kicker, title, figure } = props as { kicker: string; title: string; figure?: string };
  const tree = h('div', { width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', padding: '64px 72px', fontFamily: 'GS', color: '#1d1d1f', position: 'relative' }, [
    h('div', { display: 'flex', alignItems: 'center', gap: 18 }, [
      { type: 'img', props: { src: logo, width: 64, height: 64, style: { borderRadius: 14 } } },
      h('div', { fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }, 'Gaadi Tracker'),
    ]),
    h('div', { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40 }, [
      h('div', { display: 'flex', flexDirection: 'column', gap: 20, width: figure ? 720 : 1000 }, [
        h('div', { fontSize: 26, fontWeight: 500, color: '#6e6e73' }, kicker),
        h('div', { fontSize: title.length > 60 ? 58 : 68, fontWeight: 600, lineHeight: 1.08, letterSpacing: -1.5 }, title),
      ]),
      ...(figure
        ? [h('div', { display: 'flex', padding: '18px 26px', borderRadius: 18, background: '#1d1d1f', color: '#FFD8A8', fontSize: 42, fontWeight: 500, whiteSpace: 'nowrap' }, figure)]
        : []),
    ]),
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
      h('div', { display: 'flex', width: 120, height: 8, borderRadius: 4, background: '#F76707' }),
      h('div', { fontSize: 24, fontWeight: 500, color: '#6e6e73' }, 'gaaditracker.in'),
    ]),
  ]);
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
