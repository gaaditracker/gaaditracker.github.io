/**
 * FAQ answers are written to stand alone (40–80 words) so search engines and
 * AI assistants can quote them without the surrounding page.
 * `home: true` puts a question on the homepage too.
 */
import { pricingFaqs } from './pricing';

export type QA = { q: string; a: string; home?: boolean };

export const faqGroups: { title: string; items: QA[] }[] = [
  {
    title: 'The basics',
    items: [
      {
        home: true,
        q: 'What is Gaadi Tracker?',
        a: 'Gaadi Tracker is a fleet management and driver hisab app for vehicle owners in India. It comes as two Android apps. The owner uses Gaadi Tracker Owner to see shifts, earnings, fuel and expenses for every vehicle. Each driver uses Gaadi Tracker Driver to start and end shifts with odometer readings and to log earnings, fuel, FASTag and expenses. It suits fleets of 2 to 50 vehicles.',
      },
      {
        q: 'Who is Gaadi Tracker for?',
        a: 'It is for owners running 2 to 50 vehicles in India: cab and taxi fleets on Uber, Ola or Rapido, auto-rickshaw owners, lorry and truck transporters, and van or bus operators. If you check your drivers’ earnings over WhatsApp calls and keep km in a notebook, Gaadi Tracker replaces that with entries the driver makes on their own phone and you see on yours.',
      },
      {
        home: true,
        q: 'Which vehicles and fuels does it support?',
        a: 'Cars and cabs, auto-rickshaws, lorries, trucks, vans and buses. You name the platforms your drivers earn on, such as Uber, Ola, Rapido or local trips. Lorry and truck earnings are entered as tons × rate per ton. Fuel can be petrol, diesel, CNG in kg, or LPG, and the driver only sees the fuel types that vehicle uses.',
      },
      {
        q: 'Do I need two apps?',
        a: 'Yes, and that is deliberate. You install Gaadi Tracker Owner on your phone. Each driver installs Gaadi Tracker Driver on theirs. You add your vehicles and drivers in the Owner app, create each driver’s login and assign a vehicle to each driver. Both apps share one account, so everything a driver enters shows up for you.',
      },
      {
        q: 'Is there an iPhone version?',
        a: 'Not at the moment. Gaadi Tracker Owner and Gaadi Tracker Driver are Android apps, available on Google Play. Most drivers in Indian fleets use Android phones, so that is where we started. If you need iPhone support for the owner app, write to us from the contact page so we know there is demand.',
      },
    ],
  },
  {
    title: 'Drivers and shifts',
    items: [
      {
        home: true,
        q: 'Can drivers use the app without internet?',
        a: 'Yes. The Driver app works offline. A driver can start a shift, add earnings, fuel, FASTag and expenses, and end the shift with no signal. Entries are saved on the phone and sync to your Owner app when the network comes back. This matters on highways, ghat roads and in basement parking where the signal drops.',
      },
      {
        home: true,
        q: 'Can a driver change km or earnings after a shift?',
        a: 'A driver can edit shift times and km, add a past trip they forgot to record (up to one year back), or record a service. Each of these goes to the owner for approval. If the owner rejects it, the original entry comes back automatically. Once the owner approves a shift, it is locked and nobody can edit it.',
      },
      {
        q: 'What stops a driver from entering a wrong odometer reading?',
        a: 'The app checks every reading against the vehicle’s last one. A start km below the last closing reading is blocked, and an end km that isn’t higher than the start km is blocked too. So km can’t go backwards between shifts, and a driver can’t close a shift with zero or negative distance. Edits after the fact need your approval.',
      },
      {
        home: true,
        q: 'Can my drivers see my reports or other drivers’ data?',
        a: 'No. You and your drivers use two separate apps. A driver signs in with the login you create and sees only their own shifts, entries, pay and balance. Reports, other drivers, fleet totals and profit stay in the Owner app. This keeps settlement conversations about one driver’s own numbers.',
      },
      {
        q: 'What happens when a driver forgets to start a shift?',
        a: 'The driver adds it later as a past trip, with the date, times, km and entries. Past trips can go back up to one year. The trip does not count until you approve it in the Owner app. If you reject it, it is removed. This keeps the record complete without letting anyone add trips silently.',
      },
    ],
  },
  {
    title: 'Pay and hisab',
    items: [
      {
        home: true,
        q: 'How do I calculate my driver’s share on a 30% commission?',
        a: 'Multiply the day’s revenue by 30%. If Ravi earned ₹3,450 on Uber, his share is ₹3,450 × 0.30 = ₹1,035, and ₹2,415 is left for you before fuel and expenses. In Gaadi Tracker you set the 30% rule once for that driver, and the app works out the driver cost on every shift. Change the rule later and old shifts keep the old rate.',
      },
      {
        q: 'How does slab commission work?',
        a: 'You set a daily revenue slab and two percentages. If the day’s revenue is below the slab, the lower percentage applies to the whole day. At or above the slab, the higher percentage applies to the whole day. With a ₹3,000 slab at 25% and 32%, a ₹2,800 day pays ₹700 and a ₹3,450 day pays ₹1,104. It rewards drivers who push for a better day.',
      },
      {
        q: 'How is monthly salary converted to a daily cost?',
        a: 'Gaadi Tracker spreads the monthly salary across 26 working days. A driver on ₹18,200 a month costs ₹700 for each shift worked, so your reports show the real driver cost per vehicle per day. This lets you compare a salaried driver with a commission or rent driver on the same terms, using the same profit figure.',
      },
      {
        q: 'What does the driver’s balance show?',
        a: 'The balance is a running total of the cash side of the hisab: revenue collected minus expenses the driver paid, plus advances you gave, minus payments the driver made to you. The driver sees it as “Balance to pay owner” or “Owner owes you”. You see the same figure for each driver in the Owner app, with every advance and payment listed.',
      },
      {
        q: 'If I change a driver’s pay rule, are old shifts recalculated?',
        a: 'No, unless you choose that. By default a new rule applies from the next shift, and every earlier shift keeps the rule it was recorded with. You can also back-date a rule to a date you pick, and shifts from that date are recalculated for you and the driver. Shifts before it are left alone.',
      },
    ],
  },
  {
    title: 'Vehicles, reminders and reports',
    items: [
      {
        q: 'When is road tax due for a lorry in India?',
        a: 'In states that collect road tax on goods vehicles quarterly, the quarters are April–June, July–September, October–December and January–March, and tax is paid in advance at the start of each quarter. Grace periods and penalties differ by state, so check your state transport department. Gaadi Tracker reminds you before each quarter for lorries, trucks, vans and buses, and you tap “Mark paid” once it is done.',
      },
      {
        q: 'How do service reminders work?',
        a: 'For each vehicle you set a service interval by km, by date, or both, for example every 10,000 km or every 6 months. Whichever comes first triggers the reminder. You see it as an alert in the Owner app, and the driver sees it before starting a shift. The driver reminder never blocks the shift; it only makes sure the service isn’t forgotten.',
      },
      {
        q: 'What reports can I see?',
        a: 'Revenue, fuel, expenses, driver cost and profit, by vehicle, by driver, by platform or for any date range. For lorries, trucks, vans and buses you also see fuel average in km per litre, or km per kg for CNG. Reports can be exported as CSV or PDF to share with your accountant or partner.',
      },
      {
        q: 'What happens to a vehicle I sell?',
        a: 'Mark it Disabled. Its driver is unassigned, it disappears from daily lists, and all its past shifts stay in your reports. If a vehicle is only off the road for a while, for repairs or an accident, mark it Inactive instead. An inactive vehicle keeps its assigned driver, so nothing needs setting up again when it returns.',
      },
    ],
  },
  { title: 'Pricing', items: pricingFaqs },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
export const homeFaqs = allFaqs.filter((i) => i.home);

export const homeFaqsHi: QA[] = [
  {
    q: 'Gaadi Tracker क्या है?',
    a: 'Gaadi Tracker भारत के गाड़ी मालिकों के लिए फ़्लीट मैनेजमेंट और ड्राइवर हिसाब ऐप है। इसमें दो Android ऐप हैं। मालिक Gaadi Tracker Owner में हर गाड़ी की शिफ़्ट, कमाई, फ़्यूल और खर्च देखता है। हर ड्राइवर Gaadi Tracker Driver में ओडोमीटर रीडिंग के साथ शिफ़्ट शुरू और ख़त्म करता है, और कमाई, फ़्यूल, FASTag और खर्च डालता है। यह 2 से 50 गाड़ियों के लिए बना है।',
  },
  {
    q: 'क्या ड्राइवर बिना इंटरनेट के ऐप चला सकता है?',
    a: 'हां। ड्राइवर ऐप ऑफ़लाइन चलता है। नेटवर्क न हो तब भी ड्राइवर शिफ़्ट शुरू कर सकता है, कमाई, फ़्यूल, FASTag और खर्च डाल सकता है और शिफ़्ट ख़त्म कर सकता है। एंट्री फ़ोन में सेव रहती है और नेटवर्क आते ही आपके ऐप में पहुंच जाती है। हाईवे, घाट रोड और बेसमेंट पार्किंग में यह काम आता है।',
  },
  {
    q: '30% कमीशन पर ड्राइवर का हिस्सा कैसे निकालें?',
    a: 'दिन की कमाई को 30% से गुणा कीजिए। रवि ने Uber पर ₹3,450 कमाए, तो उसका हिस्सा ₹3,450 × 0.30 = ₹1,035 है, और फ़्यूल व खर्च से पहले आपके पास ₹2,415 बचते हैं। Gaadi Tracker में आप उस ड्राइवर के लिए 30% नियम एक बार सेट करते हैं, फिर ऐप हर शिफ़्ट पर हिसाब ख़ुद लगाता है। बाद में नियम बदलें तो पुरानी शिफ़्टें पुराने रेट पर रहती हैं।',
  },
  {
    q: 'क्या ड्राइवर शिफ़्ट के बाद km या कमाई बदल सकता है?',
    a: 'ड्राइवर शिफ़्ट का समय और km बदल सकता है, भूली हुई पुरानी ट्रिप जोड़ सकता है (एक साल पीछे तक) या सर्विस दर्ज कर सकता है। हर बदलाव मालिक की मंज़ूरी के लिए जाता है। मालिक रिजेक्ट करे तो पुरानी एंट्री अपने आप वापस आ जाती है। मालिक के मंज़ूर करने के बाद शिफ़्ट लॉक हो जाती है और कोई उसे नहीं बदल सकता।',
  },
  {
    q: 'क्या ड्राइवर मेरी रिपोर्ट या दूसरे ड्राइवरों का डेटा देख सकता है?',
    a: 'नहीं। आप और आपके ड्राइवर दो अलग ऐप इस्तेमाल करते हैं। ड्राइवर आपके बनाए लॉगिन से साइन इन करता है और सिर्फ़ अपनी शिफ़्ट, एंट्री, पगार और बैलेंस देखता है। रिपोर्ट, दूसरे ड्राइवर, कुल आंकड़े और मुनाफ़ा सिर्फ़ मालिक ऐप में रहते हैं।',
  },
  {
    q: 'कौन सी गाड़ियां और फ़्यूल चलते हैं?',
    a: 'कार और कैब, ऑटो रिक्शा, लॉरी, ट्रक, वैन और बस। आप वे प्लेटफ़ॉर्म जोड़ते हैं जिन पर आपके ड्राइवर कमाते हैं, जैसे Uber, Ola, Rapido या लोकल ट्रिप। लॉरी और ट्रक की कमाई टन × प्रति टन रेट से डलती है। फ़्यूल पेट्रोल, डीज़ल, kg में CNG या LPG हो सकता है, और ड्राइवर को सिर्फ़ उसी गाड़ी के फ़्यूल दिखते हैं।',
  },
];
