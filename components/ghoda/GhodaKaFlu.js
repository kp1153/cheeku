export default function GhodaKaFlu() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            इक्वाइन इन्फ्लुएंजा (घोड़ों का फ्लू) - घोड़ा
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                इक्वाइन इन्फ्लुएंजा घोड़ों में होने वाला एक अत्यधिक संक्रामक वायरल रोग है जो श्वसन तंत्र को प्रभावित करता है। यह इन्फ्लुएंजा A वायरस (H3N8 और H7N7) के कारण होता है। यह बहुत तेजी से फैलता है और घोड़ों के बड़े समूहों को प्रभावित कर सकता है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अचानक तेज बुखार (102-106°F / 39-41°C)</li>
                <li>सूखी, कठोर खांसी जो 2-3 सप्ताह तक रह सकती है</li>
                <li>नाक से पानी जैसा स्राव, बाद में गाढ़ा पीला-हरा</li>
                <li>आंखों से पानी आना</li>
                <li>भूख में कमी और सुस्ती</li>
                <li>सांस लेने में कठिनाई या तेज सांस</li>
                <li>गले की लिम्फ नोड्स में सूजन</li>
                <li>मांसपेशियों में दर्द और अकड़न</li>
                <li>काम करने की क्षमता में कमी</li>
                <li>सिर नीचे झुकाए रखना</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>इन्फ्लुएंजा A वायरस (H3N8 और H7N7 स्ट्रेन)</li>
                <li>संक्रमित घोड़े की खांसी या छींक से हवा में फैलाव</li>
                <li>संक्रमित उपकरण, कपड़े या हाथों से फैलाव</li>
                <li>भीड़भाड़ वाली जगहों पर तेजी से फैलता है</li>
                <li>कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>टीकाकरण न होना</li>
                <li>तनाव, यात्रा या प्रतियोगिताओं के दौरान</li>
                <li>ठंडा और नम मौसम</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>लक्षणों की पहचान और इतिहास</li>
                <li>शरीर का तापमान मापना</li>
                <li>नाक और गले से स्वैब लेकर वायरस की जांच</li>
                <li>PCR टेस्ट (वायरल जीन की पहचान)</li>
                <li>रक्त परीक्षण (एंटीबॉडी टेस्ट)</li>
                <li>फेफड़ों की जांच (स्टेथोस्कोप या अल्ट्रासाउंड)</li>
                <li>छाती का एक्स-रे (गंभीर मामलों में)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* भाग २ - उपचार और बचाव */}
      <div className="bg-zinc-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            उपचार और बचाव
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-zinc-800 font-semibold">
                ⚠️ महत्वपूर्ण: यह बीमारी बहुत तेजी से फैलती है। संक्रमित घोड़े को तुरंत अलग करें। पशु चिकित्सक को बुलाएं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. सहायक उपचार (कोई विशिष्ट एंटीवायरल नहीं):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>पूर्ण आराम - कम से कम 3-4 सप्ताह (खांसी के हर हफ्ते के लिए 1 सप्ताह आराम)</li>
                    <li>अलगाव - संक्रमित घोड़े को दूसरों से अलग रखें</li>
                    <li>ताजी हवा और अच्छी हवादार जगह</li>
                    <li>धूल-मुक्त, साफ वातावरण</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. बुखार और दर्द कम करने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फेनिलब्यूटाजोन</strong> - 2.2-4.4 mg/kg, मुंह से या IV, हर 12 घंटे</li>
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1 mg/kg, IV, हर 12-24 घंटे</li>
                    <li><strong>केटोप्रोफेन</strong> - 2.2 mg/kg, IV, दिन में एक बार</li>
                    <li>बुखार 102°F से ऊपर होने पर ही दें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. द्वितीयक बैक्टीरियल संक्रमण के लिए एंटीबायोटिक्स:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन</strong> - 22,000 IU/kg, IM, हर 12 घंटे (7-10 दिन)</li>
                    <li><strong>ट्राइमेथोप्रिम-सल्फा</strong> - 30 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>सेफ्टियोफर</strong> - 2.2 mg/kg, IM, दिन में एक बार</li>
                    <li><strong>जेंटामाइसिन</strong> - 6.6 mg/kg, IV (गंभीर निमोनिया में)</li>
                    <li>केवल पीले-हरे नाक के स्राव या बिगड़ते लक्षणों में दें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. खांसी और श्वसन सहायता:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ब्रोंकोडायलेटर</strong> - क्लेनब्यूटेरोल 0.8 mcg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>एक्सपेक्टोरेंट</strong> - डेम्ब्रेक्सीन या अमोनियम क्लोराइड</li>
                    <li><strong>म्यूकोलाइटिक</strong> - एसिटाइलसिस्टीन (नेब्युलाइजेशन)</li>
                    <li>गर्म पानी की भाप देना (स्टीम इनहेलेशन)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. पोषण और हाइड्रेशन:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>ताजा, साफ पानी हमेशा उपलब्ध रखें</li>
                    <li>नरम, धूल-मुक्त चारा (पानी में भिगोकर)</li>
                    <li>पौष्टिक दाना (अगर घोड़ा खाए)</li>
                    <li>इलेक्ट्रोलाइट सप्लीमेंट (बुखार में)</li>
                    <li>विटामिन C और E सप्लीमेंट - रोग प्रतिरोधक क्षमता बढ़ाने के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. इम्युनोमॉड्यूलेटर:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>इंटरफेरॉन अल्फा</strong> - रोग प्रतिरोधक क्षमता बढ़ाने के लिए</li>
                    <li><strong>प्रोबायोटिक्स</strong> - पाचन और इम्युनिटी के लिए</li>
                    <li>एंटीऑक्सीडेंट सप्लीमेंट</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. गंभीर मामलों में:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>IV फ्लूइड थेरेपी (डिहाइड्रेशन में)</li>
                    <li>ऑक्सीजन थेरेपी (सांस की गंभीर समस्या में)</li>
                    <li>नेब्युलाइजेशन थेरेपी</li>
                    <li>अस्पताल में भर्ती</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">घर पर देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>पूर्ण आराम - कम से कम 3-4 सप्ताह या जब तक खांसी पूरी तरह ठीक न हो</li>
                <li>नाक और आंखों को नियमित रूप से साफ करें</li>
                <li>गर्म पानी की भाप दिन में 2-3 बार (15-20 मिनट)</li>
                <li>तापमान रोज मापें और रिकॉर्ड करें</li>
                <li>धूल-मुक्त वातावरण बनाए रखें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>नियमित टीकाकरण सबसे महत्वपूर्ण:</strong></li>
                <li>शुरुआती टीका - 3 महीने की उम्र में</li>
                <li>बूस्टर डोज - पहले टीके के 4-6 सप्ताह बाद</li>
                <li>तीसरा बूस्टर - 6 महीने बाद</li>
                <li>वार्षिक बूस्टर - हर साल (उच्च जोखिम वाले घोड़ों में हर 6 महीने)</li>
                <li><strong>सामान्य बचाव:</strong></li>
                <li>नए घोड़ों को 2-3 सप्ताह अलग रखें (क्वारंटाइन)</li>
                <li>बीमार घोड़ों से दूर रखें</li>
                <li>साफ-सफाई और स्वच्छता बनाए रखें</li>
                <li>उपकरण और कपड़े साझा न करें</li>
                <li>भीड़भाड़ वाली जगहों पर सावधानी</li>
                <li>अच्छा पोषण और स्वस्थ जीवनशैली</li>
                <li>तनाव कम करें</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> इन्फ्लुएंजा बहुत तेजी से फैलता है। टीकाकरण ही सबसे अच्छा बचाव है। बीमार घोड़े को तुरंत अलग करें और पूरा आराम दें। जल्दबाजी में काम पर लगाने से निमोनिया हो सकता है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}