/** Copy for the three vehicle landing pages, English and Hindi. */

export type VehicleKey = 'taxi' | 'auto' | 'truck';

type Block = {
  meta: { title: string; description: string };
  crumb: string;
  eyebrow: string;
  h1: string;
  answer: string;
  problem: { h2: string; items: string[] };
  how: { h2: string; items: [string, string][] };
  example: { h2: string; p: string; rows: [string, string][]; total: [string, string]; note: string };
  faq: { q: string; a: string }[];
  related: { h2: string; links: [string, string][] };
  photo: string;
};

const en: Record<VehicleKey, Block> = {
  taxi: {
    meta: {
      title: 'Taxi Fleet Management App for Owners | Gaadi Tracker',
      description:
        'Cab owner app for Uber, Ola and Rapido fleets. Track km, platform earnings, CNG and driver commission for every car. Driver app works offline.',
    },
    crumb: 'Taxi and cab owners',
    eyebrow: 'For taxi and cab owners',
    h1: 'Taxi fleet management app for cab owners on Uber, Ola and Rapido',
    answer:
      'Gaadi Tracker is a cab owner app for fleets of 2 to 50 cars. Each driver logs odometer km, earnings by platform and CNG on their own phone. You see every car’s day, the driver’s commission and your profit without making a single call.',
    problem: {
      h2: 'What the platform payout screen doesn’t tell you',
      items: [
        'How many km the car actually did, and whether the driver used it for personal trips in between.',
        'How much CNG went in, and whether that ₹1,100 bill was really ₹1,100.',
        'What the driver earned on the other two platforms and on local trips.',
        'Who owes whom after this week’s advances and cash handovers.',
      ],
    },
    how: {
      h2: 'How Gaadi Tracker works for a cab fleet',
      items: [
        ['Earnings by platform', 'You name the platforms: Uber, Ola, Rapido, local trips. The driver picks one and types the amount. Reports split revenue by platform.'],
        ['Odometer in and out', 'Every shift starts and ends with a km reading, checked against the car’s last one. Km can’t go backwards.'],
        ['CNG in kg, petrol in litres', 'The driver sees only the fuel types that car uses. CNG is entered in kg, the way the pump bills it.'],
        ['Commission or rent, your call', 'Percentage, slab, daily rent or monthly salary, set per driver. The driver cost is worked out on every shift.'],
        ['Approvals', 'Edited km, a past trip or a service record waits for you. Approve a shift and it’s locked.'],
        ['Reports you can forward', 'Revenue, CNG, expenses, driver cost and profit by car, driver, platform or date range. Export as CSV or PDF.'],
      ],
    },
    example: {
      h2: 'One car, one month',
      p: 'TN 23 TK 4521, driven by Ravi on a 30% commission. October, straight from the Owner app report.',
      rows: [
        ['Uber', '₹61,200'],
        ['Ola', '₹22,940'],
        ['Local trips', '₹12,200'],
        ['Revenue', '₹96,340'],
        ['CNG', '− ₹21,780'],
        ['Parking, cleaning, app recharge', '− ₹6,150'],
        ['Ravi’s 30%', '− ₹28,902'],
      ],
      total: ['Profit on this car', '₹39,508'],
      note: 'Example figures. Your platforms, fuel prices and pay rules will differ.',
    },
    faq: [
      {
        q: 'Can I track Uber and Ola earnings separately for each car?',
        a: 'Yes. You add the platforms your drivers use, such as Uber, Ola, Rapido and local trips. The driver picks the platform each time they add earnings. Reports then show revenue by platform for each car, each driver or the whole fleet, for any date range, so you can see which platform pays best for each car.',
      },
      {
        q: 'What commission do cab owners usually give drivers?',
        a: 'It varies by city and by who pays for fuel. Many owners pay a percentage of the day’s revenue, others take a fixed daily rent and let the driver keep the rest, and some pay a monthly salary. Gaadi Tracker supports all three plus a slab model, and the calculator on our driver pay page shows what each one costs you on the same day.',
      },
      {
        q: 'Does the driver need internet to log a trip?',
        a: 'No. The Driver app works offline. Shifts, earnings, CNG, FASTag and expenses save on the phone and sync when the network returns. So the driver keeps working through basement parking, airport queues and dead zones.',
      },
    ],
    related: {
      h2: 'Read next',
      links: [
        ['/driver-salary-commission-calculator', 'Driver commission calculator'],
        ['/blog/driver-commission-uber-ola-cars', 'How to calculate driver commission for Uber and Ola cars'],
        ['/blog/stop-fuel-bill-padding', 'How to stop fuel bill padding'],
        ['/features', 'All features'],
      ],
    },
    photo: 'Photo: a white cab at a Chennai airport pickup bay, early morning',
  },

  auto: {
    meta: {
      title: 'Auto Rickshaw Owner App: Rent & Hisab | Gaadi Tracker',
      description:
        'For owners renting out autos. Track daily rent, km, LPG or CNG and every driver advance on your phone. Drivers log entries in their own app, even offline.',
    },
    crumb: 'Auto-rickshaw owners',
    eyebrow: 'For auto-rickshaw owners',
    h1: 'Auto rickshaw owner app for daily rent, km and driver hisab',
    answer:
      'Gaadi Tracker helps owners who run two or more autos keep the hisab straight. Drivers log km, earnings and LPG or CNG on their own phone. You set the daily rent or commission once, record advances, and both of you see the same balance.',
    problem: {
      h2: 'Why auto hisab goes wrong',
      items: [
        'Rent is collected in cash, sometimes in parts, and the notebook doesn’t say which day was paid.',
        'A ₹500 advance for a tyre gets forgotten by one side.',
        'Km aren’t written down, so you can’t tell when the service is due.',
        'One driver drives two shifts on the same auto and the numbers get mixed.',
      ],
    },
    how: {
      h2: 'How Gaadi Tracker works for autos',
      items: [
        ['Daily rent', 'Set the rent per driver. The driver keeps whatever the auto earns above it, and you see the rent against every shift.'],
        ['Advances and payments', 'Record an advance in your app; the driver records what they paid you in theirs. The balance shows “Balance to pay owner” or “Owner owes you”.'],
        ['Km on every shift', 'Odometer in and out, checked against the last reading. Service reminders by km or date, whichever comes first.'],
        ['LPG or CNG', 'The driver sees only the fuel your auto uses. CNG is entered in kg.'],
        ['Rapido and local trips', 'Add the platforms your drivers use, including plain local trips.'],
        ['Works without signal', 'Entries save on the phone and sync when the network returns.'],
      ],
    },
    example: {
      h2: 'One auto, one day',
      p: 'TN 11 F 2207, driven by Babu on a ₹400 daily rent.',
      rows: [
        ['Rapido', '₹780'],
        ['Local trips', '₹500'],
        ['Revenue', '₹1,280'],
        ['Rent to owner', '₹400'],
      ],
      total: ['Babu keeps', '₹880'],
      note: 'Example figures. Rent and earnings vary by city.',
    },
    faq: [
      {
        q: 'How do I track daily rent from my auto drivers?',
        a: 'Set a daily rent rule for each driver in the Owner app. Every shift the driver records then shows the rent you are due and what the driver keeps. Cash the driver hands you is recorded as a payment, and any advance you give is recorded too, so the running balance tells both of you exactly where things stand.',
      },
      {
        q: 'Is it worth using an app for just two or three autos?',
        a: 'If you collect rent in cash and give the odd advance, yes. Small fleets lose money to missed days, forgotten advances and late services, not to big frauds. Gaadi Tracker keeps those small things on record, where both of you can see them.',
      },
      {
        q: 'Can I pay an auto driver a commission instead of charging rent?',
        a: 'Yes. Gaadi Tracker supports four pay models per driver: percentage of revenue, slab, fixed daily rent and monthly salary. You can switch a driver from rent to commission whenever you agree on it. Old shifts keep the old rule, so past hisab doesn’t change.',
      },
    ],
    related: {
      h2: 'Read next',
      links: [
        ['/driver-salary-commission-calculator', 'Rent vs commission calculator'],
        ['/taxi-fleet-management-app', 'For taxi and cab owners'],
        ['/gaadi-tracker-vs-notebook-whatsapp', 'Gaadi Tracker vs notebook and WhatsApp'],
        ['/features', 'All features'],
      ],
    },
    photo: 'Photo: a row of autos at a stand, driver handing over cash',
  },

  truck: {
    meta: {
      title: 'Truck Fleet Management App for Lorry Owners | Gaadi Tracker',
      description:
        'Lorry and truck owner app: tons × rate earnings, diesel, FASTag, fuel average in km per litre, quarterly road tax reminders and driver advances.',
    },
    crumb: 'Lorry and truck owners',
    eyebrow: 'For lorry and truck owners',
    h1: 'Truck fleet management app for lorry owners and transporters',
    answer:
      'Gaadi Tracker is a fleet app for lorry, truck, van and bus owners in India. Drivers enter loads as tons × rate per ton, diesel, FASTag and trip expenses on their phone. You get fuel average and profit per vehicle, and a reminder before every quarter’s road tax.',
    problem: {
      h2: 'Where a lorry loses money quietly',
      items: [
        'Diesel bills on a long trip that nobody checks against km.',
        'Trip advances given in cash and never squared against expenses.',
        'Road tax paid late because the quarter turned while the lorry was on the road.',
        'Freight entered as a round number instead of tons × rate.',
      ],
    },
    how: {
      h2: 'How Gaadi Tracker works for lorries and trucks',
      items: [
        ['Tons × rate per ton', 'The driver enters the load weight and the rate. The app works out the earning, so 18.5 t at ₹1,450 is ₹26,825, not “around 27”.'],
        ['Fuel average', 'Km per litre for every lorry, truck, van and bus, from the odometer and the diesel entered. A sudden drop is worth a phone call.'],
        ['Quarterly road tax', 'A reminder before each quarter. Tap “Mark paid” once it’s done. Drivers see it too, but it never blocks a shift.'],
        ['Trip advances', 'Record “Diesel for Salem trip” as an advance. Expenses the driver enters are set against it in the balance.'],
        ['FASTag and expenses', 'FASTag recharges, parking, repairs and tyres, each in its own category.'],
        ['Reports by vehicle', 'Revenue, diesel, expenses, driver cost and profit per lorry, exportable as CSV or PDF.'],
      ],
    },
    example: {
      h2: 'One lorry, one month',
      p: 'TN 07 AV 2290, driven by Selvam on a monthly salary of ₹28,000. October.',
      rows: [
        ['Freight (tons × rate)', '₹1,84,500'],
        ['Diesel, 1,810 l', '− ₹71,240'],
        ['FASTag and trip expenses', '− ₹18,960'],
        ['Selvam’s salary', '− ₹28,000'],
      ],
      total: ['Profit on this lorry', '₹66,300'],
      note: 'Fuel average this month: 7,420 km ÷ 1,810 l = 4.1 km/l. Example figures.',
    },
    faq: [
      {
        q: 'When is road tax due for a lorry in India?',
        a: 'Where goods vehicles pay road tax quarterly, the quarters run April–June, July–September, October–December and January–March, and tax is paid in advance at the start of each one. Grace periods and late fees differ by state, so check with your RTO. Gaadi Tracker reminds you before each quarter for lorries, trucks, vans and buses, and you mark it paid in the app.',
      },
      {
        q: 'How do I calculate the fuel average of my truck?',
        a: 'Divide the km driven by the litres of diesel filled over the same period. If a lorry ran 7,420 km on 1,810 litres, its average is 4.1 km per litre. Gaadi Tracker does this for you from the odometer readings and diesel entries, per vehicle, so you notice when a lorry’s average falls without doing the sum yourself.',
      },
      {
        q: 'Can drivers enter freight as tons × rate?',
        a: 'Yes. For lorries and trucks the driver enters the load weight in tons and the rate per ton, and the app calculates the earning. The figures are stored, so you can check any load later. Reports add these up per vehicle, per driver and for any date range.',
      },
    ],
    related: {
      h2: 'Read next',
      links: [
        ['/blog/road-tax-due-dates-commercial-vehicles-india', 'Road tax due dates, quarter by quarter'],
        ['/blog/stop-fuel-bill-padding', 'How to stop fuel bill padding'],
        ['/driver-salary-commission-calculator', 'Driver salary calculator'],
        ['/features', 'All features'],
      ],
    },
    photo: 'Photo: a loaded lorry at a highway dhaba, evening',
  },
};

const hi: Record<VehicleKey, Block> = {
  taxi: {
    meta: {
      title: 'टैक्सी मालिकों के लिए फ़्लीट ऐप | Gaadi Tracker',
      description:
        'Uber, Ola और Rapido पर चलने वाली कैब के मालिकों का ऐप। हर कार की km, प्लेटफ़ॉर्म की कमाई, CNG और ड्राइवर कमीशन का हिसाब। ड्राइवर ऐप ऑफ़लाइन भी चलता है।',
    },
    crumb: 'टैक्सी और कैब मालिक',
    eyebrow: 'टैक्सी और कैब मालिकों के लिए',
    h1: 'Uber, Ola और Rapido वाली कैब के मालिकों के लिए टैक्सी फ़्लीट ऐप',
    answer:
      'Gaadi Tracker 2 से 50 कार वाले मालिकों के लिए कैब ओनर ऐप है। हर ड्राइवर अपने फ़ोन पर ओडोमीटर km, प्लेटफ़ॉर्म के हिसाब से कमाई और CNG डालता है। आप हर कार का दिन, ड्राइवर का कमीशन और अपना मुनाफ़ा बिना एक भी कॉल किए देखते हैं।',
    problem: {
      h2: 'प्लेटफ़ॉर्म की पेआउट स्क्रीन क्या नहीं बताती',
      items: [
        'कार असल में कितने km चली, और बीच में ड्राइवर ने निजी काम के लिए तो नहीं चलाई।',
        'कितनी CNG भरी गई, और ₹1,100 का बिल सच में ₹1,100 का था या नहीं।',
        'बाकी दो प्लेटफ़ॉर्म और लोकल ट्रिप पर ड्राइवर ने कितना कमाया।',
        'इस हफ़्ते के एडवांस और नकद लेन-देन के बाद किसे किसको कितना देना है।',
      ],
    },
    how: {
      h2: 'कैब फ़्लीट के लिए Gaadi Tracker कैसे काम करता है',
      items: [
        ['प्लेटफ़ॉर्म के हिसाब से कमाई', 'आप प्लेटफ़ॉर्म के नाम जोड़ते हैं: Uber, Ola, Rapido, लोकल ट्रिप। ड्राइवर एक चुनकर रकम डालता है। रिपोर्ट में कमाई प्लेटफ़ॉर्म के हिसाब से बंटी दिखती है।'],
        ['ओडोमीटर शुरू और आख़िर', 'हर शिफ़्ट km रीडिंग से शुरू और ख़त्म होती है, कार की पिछली रीडिंग से मिलाकर। km पीछे नहीं जा सकती।'],
        ['CNG kg में, पेट्रोल लीटर में', 'ड्राइवर को सिर्फ़ उसी कार के फ़्यूल दिखते हैं। CNG kg में डलती है, जैसे पंप का बिल आता है।'],
        ['कमीशन या किराया, आपकी मर्ज़ी', 'प्रतिशत, स्लैब, रोज़ का किराया या महीने की तनख़्वाह, हर ड्राइवर के लिए अलग। हर शिफ़्ट पर ड्राइवर का ख़र्च निकलता है।'],
        ['मंज़ूरी', 'बदली km, पुरानी ट्रिप या सर्विस की एंट्री आपके पास आती है। शिफ़्ट मंज़ूर करें तो वह लॉक हो जाती है।'],
        ['रिपोर्ट जो आगे भेज सकें', 'कार, ड्राइवर, प्लेटफ़ॉर्म या तारीख़ के हिसाब से कमाई, CNG, खर्च, ड्राइवर ख़र्च और मुनाफ़ा। CSV या PDF में एक्सपोर्ट।'],
      ],
    },
    example: {
      h2: 'एक कार, एक महीना',
      p: 'TN 23 TK 4521, रवि चलाता है, 30% कमीशन पर। अक्टूबर, सीधे मालिक ऐप की रिपोर्ट से।',
      rows: [
        ['Uber', '₹61,200'],
        ['Ola', '₹22,940'],
        ['लोकल ट्रिप', '₹12,200'],
        ['कुल कमाई', '₹96,340'],
        ['CNG', '− ₹21,780'],
        ['पार्किंग, सफ़ाई, ऐप रिचार्ज', '− ₹6,150'],
        ['रवि का 30%', '− ₹28,902'],
      ],
      total: ['इस कार पर मुनाफ़ा', '₹39,508'],
      note: 'उदाहरण के आंकड़े। आपके प्लेटफ़ॉर्म, फ़्यूल के दाम और पगार के नियम अलग होंगे।',
    },
    faq: [
      {
        q: 'क्या हर कार की Uber और Ola कमाई अलग देख सकते हैं?',
        a: 'हां। आप वे प्लेटफ़ॉर्म जोड़ते हैं जिन पर आपके ड्राइवर चलते हैं, जैसे Uber, Ola, Rapido और लोकल ट्रिप। कमाई डालते समय ड्राइवर प्लेटफ़ॉर्म चुनता है। फिर रिपोर्ट में हर कार, हर ड्राइवर या पूरे फ़्लीट की कमाई प्लेटफ़ॉर्म के हिसाब से, किसी भी तारीख़ के बीच दिखती है।',
      },
      {
        q: 'कैब मालिक ड्राइवर को आमतौर पर कितना कमीशन देते हैं?',
        a: 'यह शहर पर और इस पर निर्भर है कि फ़्यूल कौन भरता है। कई मालिक दिन की कमाई का प्रतिशत देते हैं, कुछ रोज़ का तय किराया लेकर बाकी ड्राइवर पर छोड़ते हैं, और कुछ महीने की तनख़्वाह देते हैं। Gaadi Tracker ये तीनों और स्लैब मॉडल भी सपोर्ट करता है। हमारे पगार कैलकुलेटर में एक ही दिन पर हर तरीके का ख़र्च देख सकते हैं।',
      },
      {
        q: 'क्या ट्रिप डालने के लिए ड्राइवर को इंटरनेट चाहिए?',
        a: 'नहीं। ड्राइवर ऐप ऑफ़लाइन चलता है। शिफ़्ट, कमाई, CNG, FASTag और खर्च फ़ोन में सेव होते हैं और नेटवर्क आने पर सिंक हो जाते हैं। इसलिए बेसमेंट पार्किंग और एयरपोर्ट की लाइन में भी काम रुकता नहीं।',
      },
    ],
    related: {
      h2: 'आगे पढ़ें',
      links: [
        ['/driver-salary-commission-calculator', 'ड्राइवर कमीशन कैलकुलेटर (English)'],
        ['/blog/driver-commission-uber-ola-cars', 'Uber और Ola कार में ड्राइवर कमीशन कैसे निकालें (English)'],
        ['/hi/auto-rickshaw-owner-app', 'ऑटो रिक्शा मालिकों के लिए'],
        ['/hi/truck-fleet-management-app', 'लॉरी और ट्रक मालिकों के लिए'],
      ],
    },
    photo: 'फ़ोटो: सुबह-सुबह चेन्नई एयरपोर्ट पिकअप पर खड़ी सफ़ेद कैब',
  },

  auto: {
    meta: {
      title: 'ऑटो रिक्शा मालिक ऐप: किराया और हिसाब | Gaadi Tracker',
      description:
        'ऑटो किराये पर देने वाले मालिकों के लिए। रोज़ का किराया, km, LPG या CNG और हर एडवांस का हिसाब फ़ोन पर। ड्राइवर अपने ऐप में एंट्री डालता है, बिना नेटवर्क भी।',
    },
    crumb: 'ऑटो रिक्शा मालिक',
    eyebrow: 'ऑटो रिक्शा मालिकों के लिए',
    h1: 'रोज़ के किराये, km और ड्राइवर हिसाब के लिए ऑटो रिक्शा मालिक ऐप',
    answer:
      'Gaadi Tracker दो या ज़्यादा ऑटो वाले मालिकों का हिसाब साफ़ रखता है। ड्राइवर अपने फ़ोन पर km, कमाई और LPG या CNG डालते हैं। आप रोज़ का किराया या कमीशन एक बार सेट करते हैं, एडवांस दर्ज करते हैं, और दोनों एक ही बैलेंस देखते हैं।',
    problem: {
      h2: 'ऑटो का हिसाब कहां बिगड़ता है',
      items: [
        'किराया नकद आता है, कभी टुकड़ों में, और कॉपी में नहीं लिखा होता कि किस दिन का मिला।',
        'टायर के लिए दिया ₹500 का एडवांस किसी एक को याद नहीं रहता।',
        'km लिखी नहीं जाती, तो सर्विस कब है पता नहीं चलता।',
        'एक ऑटो पर दो ड्राइवर दो शिफ़्ट चलाते हैं और आंकड़े मिल जाते हैं।',
      ],
    },
    how: {
      h2: 'ऑटो के लिए Gaadi Tracker कैसे काम करता है',
      items: [
        ['रोज़ का किराया', 'हर ड्राइवर का किराया सेट करें। उससे ऊपर की कमाई ड्राइवर की, और हर शिफ़्ट के सामने आपका किराया दिखता है।'],
        ['एडवांस और भुगतान', 'एडवांस आप अपने ऐप में दर्ज करें, ड्राइवर ने जो दिया वह उसके ऐप में। बैलेंस बताता है “मालिक को देना है” या “मालिक से लेना है”।'],
        ['हर शिफ़्ट की km', 'ओडोमीटर शुरू और आख़िर, पिछली रीडिंग से मिलाकर। km या तारीख़ से सर्विस रिमाइंडर, जो पहले आए।'],
        ['LPG या CNG', 'ड्राइवर को सिर्फ़ आपके ऑटो का फ़्यूल दिखता है। CNG kg में डलती है।'],
        ['Rapido और लोकल ट्रिप', 'जिन प्लेटफ़ॉर्म पर ड्राइवर चलते हैं वे जोड़ें, सीधी लोकल सवारी भी।'],
        ['नेटवर्क बिना भी', 'एंट्री फ़ोन में सेव रहती है और नेटवर्क आने पर सिंक होती है।'],
      ],
    },
    example: {
      h2: 'एक ऑटो, एक दिन',
      p: 'TN 11 F 2207, बाबू चलाता है, ₹400 रोज़ के किराये पर।',
      rows: [
        ['Rapido', '₹780'],
        ['लोकल ट्रिप', '₹500'],
        ['कुल कमाई', '₹1,280'],
        ['मालिक का किराया', '₹400'],
      ],
      total: ['बाबू के पास', '₹880'],
      note: 'उदाहरण के आंकड़े। किराया और कमाई शहर के हिसाब से अलग होते हैं।',
    },
    faq: [
      {
        q: 'ऑटो ड्राइवरों से रोज़ का किराया कैसे ट्रैक करें?',
        a: 'मालिक ऐप में हर ड्राइवर के लिए रोज़ के किराये का नियम सेट करें। फिर ड्राइवर की हर शिफ़्ट में दिखता है कि आपका किराया कितना है और ड्राइवर के पास कितना बचा। ड्राइवर जो नकद देता है वह भुगतान में और आपका दिया एडवांस भी दर्ज होता है, इसलिए चलता बैलेंस दोनों को साफ़ बताता है कि मामला कहां है।',
      },
      {
        q: 'दो-तीन ऑटो के लिए ऐप रखना ठीक है?',
        a: 'अगर किराया नकद आता है और कभी-कभी एडवांस देते हैं, तो हां। छोटे फ़्लीट का पैसा बड़ी धोखाधड़ी में नहीं, छूटे दिनों, भूले एडवांस और देर से हुई सर्विस में जाता है। Gaadi Tracker ये छोटी बातें दर्ज रखता है, जहां आप दोनों उन्हें देख सकें।',
      },
      {
        q: 'क्या किराये की जगह ऑटो ड्राइवर को कमीशन दे सकते हैं?',
        a: 'हां। Gaadi Tracker में हर ड्राइवर के लिए चार तरीके हैं: कमाई का प्रतिशत, स्लैब, रोज़ का तय किराया और महीने की तनख़्वाह। जब भी आप दोनों सहमत हों, ड्राइवर को किराये से कमीशन पर बदल सकते हैं। पुरानी शिफ़्टें पुराने नियम पर रहती हैं, इसलिए पिछला हिसाब नहीं बदलता।',
      },
    ],
    related: {
      h2: 'आगे पढ़ें',
      links: [
        ['/driver-salary-commission-calculator', 'किराया बनाम कमीशन कैलकुलेटर (English)'],
        ['/hi/taxi-fleet-management-app', 'टैक्सी और कैब मालिकों के लिए'],
        ['/hi/truck-fleet-management-app', 'लॉरी और ट्रक मालिकों के लिए'],
        ['/gaadi-tracker-vs-notebook-whatsapp', 'कॉपी और WhatsApp से तुलना (English)'],
      ],
    },
    photo: 'फ़ोटो: स्टैंड पर लगे ऑटो, ड्राइवर नकद देते हुए',
  },

  truck: {
    meta: {
      title: 'लॉरी और ट्रक मालिकों का फ़्लीट ऐप | Gaadi Tracker',
      description:
        'लॉरी और ट्रक मालिक ऐप: टन × रेट से कमाई, डीज़ल, FASTag, km प्रति लीटर एवरेज, हर तिमाही रोड टैक्स रिमाइंडर और ड्राइवर एडवांस।',
    },
    crumb: 'लॉरी और ट्रक मालिक',
    eyebrow: 'लॉरी और ट्रक मालिकों के लिए',
    h1: 'लॉरी मालिकों और ट्रांसपोर्टरों के लिए ट्रक फ़्लीट मैनेजमेंट ऐप',
    answer:
      'Gaadi Tracker भारत के लॉरी, ट्रक, वैन और बस मालिकों के लिए फ़्लीट ऐप है। ड्राइवर अपने फ़ोन पर माल टन × प्रति टन रेट से, डीज़ल, FASTag और ट्रिप खर्च डालते हैं। आपको हर गाड़ी का फ़्यूल एवरेज और मुनाफ़ा, और हर तिमाही के रोड टैक्स से पहले रिमाइंडर मिलता है।',
    problem: {
      h2: 'लॉरी का पैसा चुपचाप कहां जाता है',
      items: [
        'लंबी ट्रिप के डीज़ल बिल जिन्हें कोई km से नहीं मिलाता।',
        'नकद दिए ट्रिप एडवांस जिनका खर्च से हिसाब कभी नहीं होता।',
        'लॉरी रास्ते में थी और तिमाही बदल गई, रोड टैक्स देर से भरा।',
        'भाड़ा टन × रेट की जगह गोल रकम में लिखा गया।',
      ],
    },
    how: {
      h2: 'लॉरी और ट्रक के लिए Gaadi Tracker कैसे काम करता है',
      items: [
        ['टन × प्रति टन रेट', 'ड्राइवर माल का वज़न और रेट डालता है। ऐप कमाई निकालता है, तो 18.5 टन × ₹1,450 = ₹26,825, “लगभग 27” नहीं।'],
        ['फ़्यूल एवरेज', 'हर लॉरी, ट्रक, वैन और बस का km प्रति लीटर, ओडोमीटर और डाले गए डीज़ल से। अचानक गिरावट दिखे तो फ़ोन कर लीजिए।'],
        ['हर तिमाही रोड टैक्स', 'हर तिमाही से पहले रिमाइंडर। भर दें तो “Mark paid” दबाएं। ड्राइवर को भी दिखता है, पर शिफ़्ट कभी नहीं रुकती।'],
        ['ट्रिप एडवांस', '“सेलम ट्रिप का डीज़ल” एडवांस में दर्ज करें। ड्राइवर के डाले खर्च बैलेंस में उसके सामने गिने जाते हैं।'],
        ['FASTag और खर्च', 'FASTag रिचार्ज, पार्किंग, रिपेयर और टायर, हर एक की अलग श्रेणी।'],
        ['गाड़ी के हिसाब से रिपोर्ट', 'हर लॉरी की कमाई, डीज़ल, खर्च, ड्राइवर ख़र्च और मुनाफ़ा, CSV या PDF में एक्सपोर्ट।'],
      ],
    },
    example: {
      h2: 'एक लॉरी, एक महीना',
      p: 'TN 07 AV 2290, सेल्वम चलाता है, ₹28,000 महीने की तनख़्वाह पर। अक्टूबर।',
      rows: [
        ['भाड़ा (टन × रेट)', '₹1,84,500'],
        ['डीज़ल, 1,810 लीटर', '− ₹71,240'],
        ['FASTag और ट्रिप खर्च', '− ₹18,960'],
        ['सेल्वम की तनख़्वाह', '− ₹28,000'],
      ],
      total: ['इस लॉरी पर मुनाफ़ा', '₹66,300'],
      note: 'इस महीने फ़्यूल एवरेज: 7,420 km ÷ 1,810 लीटर = 4.1 km/लीटर। उदाहरण के आंकड़े।',
    },
    faq: [
      {
        q: 'भारत में लॉरी का रोड टैक्स कब भरना होता है?',
        a: 'जहां माल वाहनों का रोड टैक्स तिमाही में लगता है, वहां तिमाहियां अप्रैल–जून, जुलाई–सितंबर, अक्टूबर–दिसंबर और जनवरी–मार्च हैं, और टैक्स हर तिमाही की शुरुआत में पहले से भरा जाता है। छूट की अवधि और जुर्माना राज्य के हिसाब से अलग है, अपने RTO से पक्का कर लें। Gaadi Tracker लॉरी, ट्रक, वैन और बस के लिए हर तिमाही से पहले याद दिलाता है।',
      },
      {
        q: 'ट्रक का फ़्यूल एवरेज कैसे निकालें?',
        a: 'एक ही समय में चली km को भरे गए डीज़ल के लीटर से भाग दीजिए। अगर लॉरी 1,810 लीटर में 7,420 km चली, तो एवरेज 4.1 km प्रति लीटर है। Gaadi Tracker यह हिसाब हर गाड़ी के लिए ओडोमीटर रीडिंग और डीज़ल एंट्री से ख़ुद करता है, ताकि एवरेज गिरे तो आपको बिना जोड़-घटाव के पता चले।',
      },
      {
        q: 'क्या ड्राइवर भाड़ा टन × रेट में डाल सकता है?',
        a: 'हां। लॉरी और ट्रक के लिए ड्राइवर माल का वज़न टन में और प्रति टन रेट डालता है, ऐप कमाई निकालता है। आंकड़े सेव रहते हैं, इसलिए बाद में कोई भी लोड जांच सकते हैं। रिपोर्ट इन्हें हर गाड़ी, हर ड्राइवर और किसी भी तारीख़ के बीच जोड़ती है।',
      },
    ],
    related: {
      h2: 'आगे पढ़ें',
      links: [
        ['/blog/road-tax-due-dates-commercial-vehicles-india', 'रोड टैक्स की तारीख़ें, तिमाही दर तिमाही (English)'],
        ['/blog/stop-fuel-bill-padding', 'फ़्यूल बिल में हेराफेरी कैसे रोकें (English)'],
        ['/hi/taxi-fleet-management-app', 'टैक्सी और कैब मालिकों के लिए'],
        ['/hi/auto-rickshaw-owner-app', 'ऑटो रिक्शा मालिकों के लिए'],
      ],
    },
    photo: 'फ़ोटो: शाम को हाईवे ढाबे पर खड़ी भरी लॉरी',
  },
};

export const vehicles = { en, hi };

export const vehiclePath: Record<VehicleKey, string> = {
  taxi: '/taxi-fleet-management-app',
  auto: '/auto-rickshaw-owner-app',
  truck: '/truck-fleet-management-app',
};
