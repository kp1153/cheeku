export default function KhurpkaMuhpka() {
  return (
    <>
      {/* भाग १ */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            खुरपका-मुँहपका रोग (एफएमडी)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                यह एक गंभीर, अत्यधिक संक्रामक वायरल रोग है जो मुख्य रूप से गाय और सूअर को प्रभावित करता है, लेकिन भेड़-बकरी में भी होता है । वयस्क भेड़-बकरी में यह अक्सर हल्का या बिना लक्षण के होता है, लेकिन बच्चों में गंभीर हो सकता है ।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>बुखार (2-6 दिन तक रहता है) </li>
                <li>मुँह, जीभ और होंठों पर छाले</li>
                <li>खुरों के बीच, एड़ी और थनों पर छाले </li>
                <li>लंगड़ापन (पहला लक्षण)</li>
                <li>अधिक लार टपकना</li>
                <li>खाना-पीना बंद हो जाना</li>
                <li>दूध उत्पादन में अचानक गिरावट</li>
                <li>युवा जानवरों में मृत्यु दर 20% या अधिक हो सकती है </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">रोग का फैलाव:</h3>
              <p className="text-zinc-700 leading-relaxed">
                बीमार जानवरों के स्राव, दूध, वीर्य और चारे के माध्यम से फैलता है। वायरस हवा के जरिए भी फैल सकता है । संक्रमित उपकरण, वाहन, कपड़े और चारे से भी फैलता है । भेड़-बकरी 3-8 दिन में बीमारी दिखाती हैं ।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <p className="text-zinc-700 leading-relaxed">
                लंगड़ापन और छालों को ध्यान से देखने पर पता चलता है । आरटी-पीसीआर टेस्ट और एंटीजन एलिसा से पुष्टि होती है । भारत में यह रोग सूचित करना अनिवार्य है।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* भाग २ */}
      <div className="bg-zinc-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            उपचार और बचाव
          </h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-zinc-800 font-semibold">
                महत्वपूर्ण: एफएमडी का कोई सीधा इलाज नहीं है। केवल सहायक उपचार और दर्द निवारक दी जाती हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीबायोटिक (द्वितीयक संक्रमण रोकने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (टेरामाइसिन एलए-200)</strong> - 10-20 मिग्रा प्रति किलो, मांसपेशी या नस में, दिन में एक बार 5 दिन</li>
                    <li><strong>पेनिसिलिन-स्ट्रेप्टोमाइसिन</strong> - संक्रमण रोकने के लिए</li>
                    <li><strong>सेफ्टियोफर (नैक्सेल)</strong> - 2.2 मिग्रा प्रति किलो, दिन में एक बार 3-5 दिन</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. दर्द निवारक और सूजन कम करने वाली:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>मेलोक्सिकैम</strong> - 0.5 मिग्रा प्रति किलो, दिन में एक बार</li>
                    <li><strong>फ्लूनिक्सिन (बैनामाइन)</strong> - 2.2 मिग्रा प्रति किलो</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. मुँह और खुर के घावों का उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>पोटाश या बोरिक एसिड का घोल (1-2% घोल) से मुँह धोएँ</li>
                    <li>ग्लिसरीन + टिंचर आयोडीन (1:1) घावों पर लगाएँ</li>
                    <li>खुरों को जिंक सल्फेट के घोल (5-10%) से साफ करें</li>
                    <li>एंटीसेप्टिक स्प्रे (बीटाडीन) लगाएँ</li>
                    <li>कॉपर सल्फेट पाउडर (नील थोथा) खुरों में भरें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. सहायक देखभाल:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>ग्लूकोज सैलाइन ड्रिप (कमजोरी में)</li>
                    <li>विटामिन बी-कॉम्प्लेक्स और सी इंजेक्शन</li>
                    <li>नरम, पौष्टिक चारा (घास को बारीक काटकर)</li>
                    <li>ताजा, साफ पानी हमेशा उपलब्ध रखें</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">देखभाल और प्रबंधन:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>बीमार जानवर को तुरंत अलग करें (क्वारंटीन में)</li>
                <li>कीटाणुनाशक जैसे आयोडीन या फिनाइल से शेड की सफाई करें </li>
                <li>मुलायम बिस्तर और सूखी जगह दें</li>
                <li>सभी उपकरणों को कीटाणुरहित करें</li>
                <li>जानवरों का आवागमन बंद करें</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव (सबसे महत्वपूर्ण):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>टीकाकरण:</strong> हर 6 महीने में एफएमडी का टीका लगवाएँ (सभी सात प्रकारों के खिलाफ प्रभावी नहीं होता)</li>
                <li>नए जानवर को 21 दिन अलग रखें</li>
                <li>प्रकोप वाले क्षेत्र से जानवर न लाएँ</li>
                <li>बाहरी लोगों और वाहनों का प्रवेश सीमित करें</li>
                <li>जूतों और उपकरणों को कीटाणुरहित करें</li>
                <li>संदिग्ध मामलों की तुरंत रिपोर्ट करें</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> यह अत्यधिक संक्रामक बीमारी है। संदेह होने पर तुरंत पशु चिकित्सा अधिकारियों को सूचित करें । टीकाकरण ही सबसे अच्छा बचाव है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}