/**
 * Pricing: one place for every number. The page, the homepage strip, the FAQ
 * and the schema all read from here.
 *
 * Bill = max(0, vehicles − 2) × ₹49 a month, or × ₹490 a year.
 * Only Active and Inactive vehicles count; Disabled (sold/retired) are free.
 */
import { site, inr } from './site';

export const pricing = {
  freeVehicles: 2,
  perMonth: 49,
  perYear: 490, // 10 months' price: 2 months free
  fleetMax: 50, // 51+ is Enterprise
  sliderMax: 60,
  trialDays: 30,

  /** PLACEHOLDER: e.g. 'included in the price' or 'plus 18% GST'. Empty shows the marked placeholder. */
  gst: '',
  /** PLACEHOLDER: e.g. 'UPI, debit or credit card, or a payment link we send you'. */
  payments: '',
} as const;

export const gstText = pricing.gst || '[GST: included / +18%]';
export const paymentsText = pricing.payments || '[UPI / card / payment link]';
export const whatsappText = site.contactWhatsApp ? `+${site.contactWhatsApp}` : '[WhatsApp number]';

export type Period = 'month' | 'year';
export const paidVehicles = (n: number) => Math.max(0, n - pricing.freeVehicles);
export const bill = (n: number, period: Period = 'month') =>
  paidVehicles(n) * (period === 'year' ? pricing.perYear : pricing.perMonth);

/** Example rows used on the pricing page (no-JS table) and the homepage strip. */
export const examples = [2, 3, 5, 8, 15, 50].map((n) => ({ n, month: bill(n), year: bill(n, 'year') }));

export const plans = [
  {
    id: 'free',
    name: 'Free',
    vehicles: '1–2 vehicles',
    price: '₹0',
    unit: 'forever',
    line: 'For an owner with one or two gaadis.',
    cta: { label: 'Start free', href: '#download' },
    lead: '',
    items: [
      'Up to 2 vehicles',
      'Unlimited drivers',
      'Unlimited shifts, earnings, fuel and expense entries',
      'Driver balance',
      'Works offline',
    ],
  },
  {
    id: 'fleet',
    name: 'Fleet',
    vehicles: '3–50 vehicles',
    price: inr(pricing.perMonth),
    unit: 'per vehicle / month',
    line: `First 2 vehicles always free. Or ${inr(pricing.perYear)} per vehicle a year.`,
    cta: { label: `Start ${pricing.trialDays}-day free trial`, href: '#download' },
    lead: 'Everything in Free, plus:',
    items: [
      'All 4 driver pay rules: percentage, slab, daily rent, salary',
      'Approve or reject driver changes',
      'Lock approved shifts',
      'Service and road tax reminders',
      'Full reports with CSV and PDF export',
      'Push notifications',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    vehicles: '51+ vehicles',
    price: 'Custom',
    unit: '',
    line: 'Talk to us for the best price.',
    cta: { label: 'Talk to us', href: '#enterprise' },
    lead: 'Everything in Fleet, plus:',
    items: [
      'Best price per vehicle',
      'Help importing vehicles and drivers',
      'Dedicated WhatsApp support',
      'Training call for drivers',
      'Monthly report by email',
    ],
  },
] as const;

/** Comparison table. true = included, false = not, string = shown as text. */
export const comparison: { group: string; rows: [string, boolean | string, boolean | string, boolean | string][] }[] = [
  {
    group: 'Price',
    rows: [
      ['Vehicles', '1–2', '3–50', '51+'],
      ['Price per vehicle', '₹0', '₹49 / month or ₹490 / year', 'Custom'],
      ['Drivers and driver logins', 'Free, unlimited', 'Free, unlimited', 'Free, unlimited'],
    ],
  },
  {
    group: 'Daily hisab',
    rows: [
      ['Shifts with odometer readings', true, true, true],
      ['Earnings, fuel and expense entries', true, true, true],
      ['Driver balance', true, true, true],
      ['Works offline', true, true, true],
    ],
  },
  {
    group: 'Control',
    rows: [
      ['All 4 driver pay rules', false, true, true],
      ['Approve or reject driver changes', false, true, true],
      ['Lock approved shifts', false, true, true],
      ['Service and road tax reminders', false, true, true],
      ['Full reports with CSV and PDF export', false, true, true],
      ['Push notifications', false, true, true],
    ],
  },
  {
    group: 'Help',
    rows: [
      ['Help importing vehicles and drivers', false, false, true],
      ['Dedicated WhatsApp support', false, false, true],
      ['Training call for drivers', false, false, true],
      ['Monthly report by email', false, false, true],
    ],
  },
];

/** Each answer stands alone (40–80 words) so search engines and AI assistants can quote it. */
export const pricingFaqs: { q: string; a: string }[] = [
  {
    q: 'Is Gaadi Tracker really free for 2 vehicles?',
    a: 'Yes. With 1 or 2 vehicles you pay ₹0, with no time limit and no card. The Free plan covers unlimited drivers, unlimited shifts, earnings, fuel and expense entries, each driver’s balance, and offline use. Every new fleet also gets all Fleet features free for 30 days. You start paying only when you add a third vehicle, and then it is ₹49 a month for that vehicle.',
  },
  {
    q: 'Do I pay for drivers?',
    a: 'No. Drivers are always free. There is no charge per driver and no charge per login. You pay only for vehicles, and the first 2 vehicles are free. Add as many drivers as you need, for example a day driver and a night driver on the same cab, and each one gets their own login for the Gaadi Tracker Driver app at no extra cost.',
  },
  {
    q: 'How is my monthly bill calculated?',
    a: 'Take the number of Active and Inactive vehicles, subtract the 2 free ones, and multiply by ₹49. The bill never goes below ₹0. So 3 vehicles cost ₹49 a month, 5 cost ₹147, 8 cost ₹294, 15 cost ₹637 and 50 cost ₹2,352. Disabled vehicles, the ones you have sold or retired, are not counted. On yearly billing it is ₹490 per paid vehicle a year.',
  },
  {
    q: 'What happens when I add my 3rd vehicle?',
    a: 'Your fleet moves from the Free plan to the Fleet plan. You pay ₹49 a month for the third vehicle, or ₹490 a year, and the first 2 vehicles stay free. Nothing else changes: your vehicles, drivers, shifts and reports carry on exactly as before. Each vehicle you add after that adds ₹49 a month, up to 50 vehicles.',
  },
  {
    q: 'What happens if I grow past 50 vehicles?',
    a: 'You are never blocked. From the 51st vehicle you qualify for Enterprise pricing, a custom price per vehicle that we agree with you. While we agree it, you keep using every feature at ₹49 per vehicle a month. Enterprise also includes help importing vehicles and drivers, dedicated WhatsApp support, a training call for your drivers and a monthly report by email.',
  },
  {
    q: 'Do sold or retired vehicles count?',
    a: 'No. When you sell or retire a vehicle, set its status to Disabled in the Owner app. Disabled vehicles are free and are not part of your bill, but their past shifts stay in your reports. Only Active and Inactive vehicles count. Inactive is for a vehicle that is off the road for a while, for example in the workshop, and it keeps its driver.',
  },
  {
    q: 'Can I pay yearly?',
    a: 'Yes. Yearly billing is ₹490 per paid vehicle a year, the price of 10 months, so you get 2 months free. The first 2 vehicles are still free. For example, 8 vehicles on yearly billing cost 6 × ₹490 = ₹2,940 a year. That works out to ₹245 a month, against ₹294 a month on monthly billing.',
  },
  {
    q: 'How do I pay?',
    a: `You pay for Gaadi Tracker by ${paymentsText}. The bill is in Indian rupees and is worked out from the number of Active and Inactive vehicles in your fleet, minus the 2 free ones. Drivers never pay anything. If you have a question about a payment, write to us from the contact page and we will sort it out with you.`,
  },
  {
    q: 'What happens if I stop paying?',
    a: 'Your fleet is paused. Your data is not deleted: every vehicle, driver, shift and report is kept safe, and it all comes back when you pay. You can also bring your bill down instead, by setting vehicles you have sold or retired to Disabled, or by going back to 2 vehicles, which is free.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every new fleet gets all Fleet features free for 30 days, and no card is needed. That includes the four driver pay rules, approvals, shift locking, service and road tax reminders, full reports with export, and push notifications. Use it with your real vehicles and drivers for a month and see what the numbers show you before you pay anything.',
  },
  {
    q: 'Is GST included?',
    a: `Prices are ${gstText}. All prices on this page are in Indian rupees: ₹49 per paid vehicle a month, or ₹490 per paid vehicle a year, with the first 2 vehicles always free and drivers always free. Enterprise prices for 51 or more vehicles are agreed with you directly. If you need GST details on your bill, tell us when you contact us.`,
  },
];
