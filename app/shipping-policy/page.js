export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">शिपिंग और डिलीवरी नीति</h1>
        
        <p className="text-gray-600 mb-6">अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी समय</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>शहरी क्षेत्र:</strong> 3-5 कार्य दिवस</li>
            <li><strong>ग्रामीण क्षेत्र:</strong> 5-7 कार्य दिवस</li>
            <li><strong>दूरस्थ क्षेत्र:</strong> 7-10 कार्य दिवस</li>
            <li><strong>एक्सप्रेस डिलीवरी:</strong> 1-2 दिन (चुनिंदा क्षेत्रों में)</li>
          </ul>
          <p className="text-gray-600 mt-3 text-sm">
            * समय अनुमानित है और मौसम, त्योहार या अन्य कारणों से बदल सकता है
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">शिपिंग शुल्क</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>₹500 से ऊपर के ऑर्डर पर मुफ्त डिलीवरी</li>
            <li>₹500 से कम: ₹50 शिपिंग शुल्क</li>
            <li>दूरस्थ क्षेत्रों में अतिरिक्त ₹30</li>
            <li>एक्सप्रेस डिलीवरी: ₹100 अतिरिक्त</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">ऑर्डर प्रोसेसिंग</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
            <li>ऑर्डर प्राप्ति की पुष्टि (ईमेल/SMS)</li>
            <li>24 घंटे में प्रोसेसिंग शुरू</li>
            <li>पैकिंग और गुणवत्ता जांच</li>
            <li>शिपिंग पार्टनर को सौंपना</li>
            <li>ट्रैकिंग नंबर भेजना</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">ऑर्डर ट्रैकिंग</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>शिपमेंट के बाद ट्रैकिंग नंबर SMS/Email पर मिलेगा</li>
            <li>अपने अकाउंट में ऑर्डर स्टेटस देखें</li>
            <li>रियल-टाइम अपडेट प्राप्त करें</li>
            <li>डिलीवरी पार्टनर की वेबसाइट पर भी ट्रैक कर सकते हैं</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी प्रक्रिया</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>डिलीवरी पर्सन आपको कॉल करेगा</li>
            <li>OTP या ID proof की आवश्यकता हो सकती है</li>
            <li>पैकेज खोलकर उत्पाद जांचें</li>
            <li>क्षति की स्थिति में स्वीकार न करें</li>
            <li>डिलीवरी कन्फर्मेशन पर साइन करें</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी क्षेत्र</h2>
          <p className="text-gray-700 mb-3">हम निम्न क्षेत्रों में डिलीवरी करते हैं:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>पूरे भारत में (कुछ दूरस्थ क्षेत्रों को छोड़कर)</li>
            <li>सभी प्रमुख शहर और कस्बे</li>
            <li>ग्रामीण क्षेत्र (पिनकोड उपलब्धता के आधार पर)</li>
          </ul>
          <p className="text-gray-600 mt-3 text-sm">
            * चेकआउट पर अपना पिनकोड चेक करें
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">पैकेजिंग</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>सुरक्षित और मजबूत पैकिंग</li>
            <li>तापमान संवेदनशील उत्पादों के लिए विशेष पैकिंग</li>
            <li>नाजुक वस्तुओं के लिए बुलबुला रैप</li>
            <li>पर्यावरण अनुकूल सामग्री का उपयोग</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी में देरी</h2>
          <p className="text-gray-700 mb-3">देरी के संभावित कारण:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>खराब मौसम या प्राकृतिक आपदा</li>
            <li>त्योहार या छुट्टियों का सीजन</li>
            <li>गलत/अधूरा पता</li>
            <li>लॉजिस्टिक पार्टनर की समस्याएं</li>
          </ul>
          <p className="text-gray-700 mt-3">
            देरी की स्थिति में हम आपको सूचित करेंगे।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी न होने पर</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>यदि 3 बार डिलीवरी प्रयास विफल हो</li>
            <li>पैकेज वापस भेजा जाएगा</li>
            <li>री-शिपिंग शुल्क लग सकता है</li>
            <li>या पूर्ण रिफंड का विकल्प</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">पता बदलना</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>शिपमेंट से पहले पता बदल सकते हैं</li>
            <li>तुरंत हमसे संपर्क करें</li>
            <li>शिपमेंट के बाद पता नहीं बदला जा सकता</li>
            <li>सही पता देने की जिम्मेदारी आपकी है</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">क्षतिग्रस्त डिलीवरी</h2>
          <p className="text-gray-700 mb-3">यदि पैकेज क्षतिग्रस्त मिले:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
            <li>डिलीवरी स्वीकार न करें</li>
            <li>तुरंत हमसे संपर्क करें</li>
            <li>क्षति की फोटो लें (यदि स्वीकार कर लिया हो)</li>
            <li>24 घंटे में रिपोर्ट करें</li>
            <li>हम तुरंत रिप्लेसमेंट भेजेंगे</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">संपर्क करें</h2>
          <p className="text-gray-700">
            शिपिंग से संबंधित किसी भी सहायता के लिए:<br />
            ईमेल: [आपका ईमेल]<br />
            फोन: [आपका फोन नंबर]<br />
            व्हाट्सएप: [नंबर]<br />
            समय: सोमवार-शनिवार, 10 AM - 6 PM
          </p>
        </section>
      </div>
    </div>
  );
}