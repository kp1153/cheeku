export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">गोपनीयता नीति</h1>
        
        <p className="text-gray-600 mb-6">अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">जानकारी संग्रह</h2>
          <p className="text-gray-700 mb-3">
            हम निम्नलिखित जानकारी एकत्र करते हैं:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>नाम और संपर्क विवरण</li>
            <li>पता और डिलीवरी की जानकारी</li>
            <li>भुगतान की जानकारी (सुरक्षित तरीके से)</li>
            <li>ऑर्डर इतिहास</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">जानकारी का उपयोग</h2>
          <p className="text-gray-700 mb-3">
            आपकी जानकारी का उपयोग निम्न के लिए किया जाता है:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>ऑर्डर प्रोसेसिंग और डिलीवरी</li>
            <li>ग्राहक सेवा और सहायता</li>
            <li>उत्पाद अपडेट की सूचना</li>
            <li>सेवा में सुधार</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डेटा सुरक्षा</h2>
          <p className="text-gray-700">
            हम आपकी जानकारी को सुरक्षित रखने के लिए उद्योग-मानक सुरक्षा उपाय अपनाते हैं। भुगतान की जानकारी एन्क्रिप्टेड तरीके से संसाधित की जाती है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">तृतीय पक्ष साझाकरण</h2>
          <p className="text-gray-700">
            हम आपकी व्यक्तिगत जानकारी तृतीय पक्ष को नहीं बेचते। केवल ऑर्डर पूर्ति के लिए आवश्यक सेवा प्रदाताओं (जैसे डिलीवरी पार्टनर, भुगतान गेटवे) के साथ साझा किया जाता है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">कुकीज़</h2>
          <p className="text-gray-700">
            हमारी वेबसाइट बेहतर अनुभव प्रदान करने के लिए कुकीज़ का उपयोग करती है। आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को अक्षम कर सकते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">आपके अधिकार</h2>
          <p className="text-gray-700 mb-3">
            आपको निम्नलिखित अधिकार हैं:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>अपनी जानकारी देखने का अधिकार</li>
            <li>जानकारी सुधारने का अधिकार</li>
            <li>डेटा हटाने का अधिकार</li>
            <li>विपणन संचार से ऑप्ट-आउट करने का अधिकार</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">संपर्क करें</h2>
          <p className="text-gray-700">
            गोपनीयता से संबंधित प्रश्नों के लिए संपर्क करें:
          </p>
          <p className="text-gray-700 mt-2">
            ईमेल: [आपका ईमेल]<br />
            फोन: [आपका फोन नंबर]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">नीति में बदलाव</h2>
          <p className="text-gray-700">
            हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। महत्वपूर्ण बदलावों की सूचना आपको दी जाएगी।
          </p>
        </section>
      </div>
    </div>
  );
}