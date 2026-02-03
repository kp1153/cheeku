export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">रिफंड और रिटर्न नीति</h1>
        
        <p className="text-gray-600 mb-6">अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिटर्न योग्य उत्पाद</h2>
          <p className="text-gray-700 mb-3">निम्नलिखित स्थितियों में रिटर्न स्वीकार किया जाता है:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>क्षतिग्रस्त या दोषपूर्ण उत्पाद</li>
            <li>गलत उत्पाद डिलीवर हुआ हो</li>
            <li>एक्सपायर्ड उत्पाद मिला हो</li>
            <li>सील पैकिंग टूटी हुई हो</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">गैर-रिटर्न योग्य उत्पाद</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>दवाएं और इंजेक्शन (सुरक्षा कारणों से)</li>
            <li>खोली गई या उपयोग की गई वस्तुएं</li>
            <li>बिना बिल या पैकिंग के उत्पाद</li>
            <li>डिलीवरी के 7 दिन बाद</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिटर्न प्रक्रिया</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
            <li>डिलीवरी के 7 दिन के अंदर हमसे संपर्क करें</li>
            <li>ऑर्डर नंबर और समस्या का विवरण दें</li>
            <li>उत्पाद की फोटो भेजें (यदि क्षतिग्रस्त हो)</li>
            <li>हम पिकअप की व्यवस्था करेंगे</li>
            <li>उत्पाद वेरिफिकेशन के बाद रिफंड मिलेगा</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिफंड विकल्प</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>बैंक खाते में:</strong> 7-10 कार्य दिवस</li>
            <li><strong>वॉलेट/UPI:</strong> 5-7 कार्य दिवस</li>
            <li><strong>उत्पाद बदलना:</strong> 3-5 कार्य दिवस</li>
            <li><strong>स्टोर क्रेडिट:</strong> तुरंत</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिफंड राशि</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>पूर्ण रिफंड: क्षतिग्रस्त/गलत उत्पाद के मामले में</li>
            <li>आंशिक रिफंड: उत्पाद की स्थिति के आधार पर</li>
            <li>शिपिंग शुल्क वापसी योग्य नहीं (हमारी गलती को छोड़कर)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रद्दीकरण नीति</h2>
          <p className="text-gray-700 mb-3">ऑर्डर रद्द करने के नियम:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>शिपमेंट से पहले:</strong> पूर्ण रिफंड</li>
            <li><strong>शिपमेंट के बाद:</strong> रद्द नहीं कर सकते</li>
            <li><strong>ट्रांजिट में:</strong> रिटर्न नीति लागू होगी</li>
            <li>रद्दीकरण 24 घंटे में करें</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">एक्सचेंज नीति</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>क्षतिग्रस्त उत्पाद 7 दिन में बदले जाएंगे</li>
            <li>गलत उत्पाद का एक्सचेंज निःशुल्क</li>
            <li>स्टॉक उपलब्धता के आधार पर</li>
            <li>एक्सचेंज में 5-7 दिन लग सकते हैं</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">विशेष परिस्थितियां</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>डिलीवरी न होने पर पूर्ण रिफंड</li>
            <li>लंबी देरी के मामले में रद्द कर सकते हैं</li>
            <li>गलत चार्ज होने पर तुरंत वापसी</li>
            <li>दोहरा भुगतान होने पर स्वतः रिफंड</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिफंड ट्रैकिंग</h2>
          <p className="text-gray-700">
            रिफंड की स्थिति जानने के लिए:<br />
            - अपने अकाउंट में ऑर्डर हिस्ट्री देखें<br />
            - रिफंड रेफरेंस नंबर से ट्रैक करें<br />
            - हमसे संपर्क करें
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">संपर्क करें</h2>
          <p className="text-gray-700">
            रिटर्न/रिफंड से संबंधित मदद के लिए:<br />
            ईमेल: [आपका ईमेल]<br />
            फोन: [आपका फोन नंबर]<br />
            समय: सोमवार-शनिवार, 10 AM - 6 PM
          </p>
        </section>
      </div>
    </div>
  );
}