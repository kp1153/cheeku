export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">नियम और शर्तें</h1>
        
        <p className="text-gray-600 mb-6">अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">स्वीकृति</h2>
          <p className="text-gray-700">
            इस वेबसाइट/ऐप का उपयोग करके आप इन नियमों और शर्तों को स्वीकार करते हैं। यदि आप सहमत नहीं हैं, तो कृपया सेवा का उपयोग न करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">उत्पाद और सेवाएं</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>सभी उत्पाद विवरण यथासंभव सटीक हैं</li>
            <li>उत्पाद की उपलब्धता बदल सकती है</li>
            <li>कीमतें बिना सूचना के बदली जा सकती हैं</li>
            <li>उत्पाद केवल पशु चिकित्सा उपयोग के लिए हैं</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">ऑर्डर और भुगतान</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>ऑर्डर की पुष्टि ईमेल/SMS द्वारा की जाएगी</li>
            <li>भुगतान सुरक्षित गेटवे के माध्यम से होता है</li>
            <li>हम ऑर्डर स्वीकार या अस्वीकार करने का अधिकार सुरक्षित रखते हैं</li>
            <li>गलत या अधूरी जानकारी के कारण ऑर्डर रद्द हो सकता है</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">डिलीवरी</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>डिलीवरी समय अनुमानित है और बदल सकता है</li>
            <li>गलत पते की जिम्मेदारी ग्राहक की है</li>
            <li>डिलीवरी के समय उत्पाद की जांच करें</li>
            <li>देरी के मामले में हम सूचित करेंगे</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">रिटर्न और रिफंड</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>क्षतिग्रस्त/गलत उत्पाद 7 दिन में बदले जा सकते हैं</li>
            <li>दवाओं का रिटर्न स्वीकार नहीं किया जाता (सुरक्षा कारणों से)</li>
            <li>रिफंड 7-10 कार्य दिवसों में होगा</li>
            <li>रिटर्न के लिए मूल पैकेजिंग और बिल जरूरी</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">उत्पाद उपयोग</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>उत्पादों का उपयोग पशु चिकित्सक के निर्देशानुसार करें</li>
            <li>एक्सपायरी डेट जांचें</li>
            <li>गलत उपयोग की जिम्मेदारी हमारी नहीं</li>
            <li>प्रिस्क्रिप्शन दवाओं के लिए वैध प्रिस्क्रिप्शन आवश्यक</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">उपयोगकर्ता खाता</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>आप अपने खाते की सुरक्षा के लिए जिम्मेदार हैं</li>
            <li>सटीक जानकारी प्रदान करें</li>
            <li>खाते का दुरुपयोग निषिद्ध है</li>
            <li>हम बिना सूचना के खाता निलंबित कर सकते हैं</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">बौद्धिक संपदा</h2>
          <p className="text-gray-700">
            वेबसाइट पर सभी सामग्री (टेक्स्ट, इमेज, लोगो) हमारी संपत्ति है। अनुमति के बिना उपयोग निषिद्ध है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">दायित्व की सीमा</h2>
          <p className="text-gray-700">
            हम उत्पाद के गलत उपयोग, देरी, या अप्रत्यक्ष क्षति के लिए जिम्मेदार नहीं हैं। हमारी अधिकतम देयता ऑर्डर मूल्य तक सीमित है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">विवाद समाधान</h2>
          <p className="text-gray-700">
            किसी भी विवाद का समाधान पहले आपसी बातचीत से किया जाएगा। यदि आवश्यक हो तो भारतीय कानून के अधीन न्यायालय में जाया जा सकता है।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">नियमों में बदलाव</h2>
          <p className="text-gray-700">
            हम इन नियमों को किसी भी समय अपडेट कर सकते हैं। निरंतर उपयोग का मतलब नए नियमों की स्वीकृति है।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">संपर्क करें</h2>
          <p className="text-gray-700">
            किसी भी प्रश्न के लिए संपर्क करें:<br />
            ईमेल: [आपका ईमेल]<br />
            फोन: [आपका फोन नंबर]
          </p>
        </section>
      </div>
    </div>
  );
}