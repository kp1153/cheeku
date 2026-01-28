export default function Pneumonia() {
  return (
    <>
      {/* भाग १ */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            निमोनिया (फेफड़ों का संक्रमण)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                निमोनिया मुख्य रूप से पास्चुरेला मल्टोसिडा और माइकोप्लाज्मा बैक्टीरिया से होता है। ठंड, नमी, भीड़भाड़ और खराब हवादार शेड में यह तेजी से फैलता है। युवा और कमजोर जानवर ज्यादा प्रभावित होते हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तेज बुखार (104-106°F)</li>
                <li>लगातार खाँसी और छींक</li>
                <li>साँस तेज-तेज और मुश्किल से लेना</li>
                <li>नाक से गाढ़ा बलगम (पीला या हरा)</li>
                <li>आँखों से पानी आना</li>
                <li>भूख पूरी तरह बंद हो जाना</li>
                <li>कमजोरी, सुस्ती और अलग-थलग रहना</li>
                <li>मुँह से साँस लेना</li>
                <li>गंभीर मामलों में मृत्यु (2-4 दिन में)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>बैक्टीरियल:</strong> पास्चुरेला, माइकोप्लाज्मा</li>
                <li><strong>वायरल:</strong> पी.आई-3, आरएसवी</li>
                <li>ठंड और नमी में अचानक बदलाव</li>
                <li>खराब हवादार और गंदे शेड</li>
                <li>अमोनिया गैस से जलन</li>
                <li>तनाव (परिवहन, दुधारू होना)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <p className="text-zinc-700 leading-relaxed">
                लक्षणों के आधार पर। स्टेथोस्कोप से फेफड़ों में घरघराहट सुनाई देती है। एक्स-रे से पुष्टि होती है। नाक के स्वैब से बैक्टीरिया कल्चर किया जा सकता है।
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
                महत्वपूर्ण: निमोनिया में तुरंत इलाज शुरू करना जरूरी है। ओक्सीटेट्रासाइक्लिन और एनरोफ्लॉक्सासिन दोनों प्रभावी हैं। देरी से जान जा सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीबायोटिक (प्रथम पंक्ति):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन एलए (टेरामाइसिन, बायोमाइसिन)</strong> - 20 मिग्रा प्रति किलो, मांसपेशी में, दिन में एक बार 5-7 दिन तक</li>
                    <li><strong>एनरोफ्लॉक्सासिन (बेट्रिल)</strong> - 5-10 मिग्रा प्रति किलो, दिन में एक बार 3-5 दिन</li>
                    <li><strong>टुलाथ्रोमाइसिन (ड्रैक्सिन)</strong> - 2.5 मिग्रा प्रति किलो, त्वचा के नीचे, एक ही खुराक</li>
                    <li><strong>फ्लोरफेनिकॉल (न्यूफ्लोर)</strong> - 20 मिग्रा प्रति किलो, दिन में दो बार 3-5 दिन</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. द्वितीय पंक्ति एंटीबायोटिक (गंभीर मामलों में):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>सेफ्टियोफर (नैक्सेल, एक्सीड)</strong> - 1-2 मिग्रा प्रति किलो, दिन में एक बार 5 दिन</li>
                    <li><strong>पेनिसिलिन जी (प्रोकेन)</strong> - 22,000 यूनिट प्रति किलो, दिन में दो बार</li>
                    <li><strong>टिल्मिकोसिन (माइकोटिल)</strong> - केवल त्वचा के नीचे</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. सहायक दवाएँ:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>बुखार और दर्द निवारक:</strong> मेलोक्सिकैम (0.5 मिग्रा प्रति किलो) या फ्लूनिक्सिन (2.2 मिग्रा प्रति किलो)</li>
                    <li><strong>खाँसी की दवा:</strong> ब्रोम्हेक्सिन या एम्ब्रोक्सॉल सिरप</li>
                    <li><strong>ब्रोन्कोडायलेटर:</strong> एमिनोफिलिन</li>
                    <li><strong>विटामिन इंजेक्शन:</strong> विटामिन ए, डी और ई</li>
                    <li><strong>विटामिन सी:</strong> 500 मिग्रा, दिन में एक बार</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. द्रव चिकित्सा:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>ग्लूकोज सैलाइन (5-10%) - 500 मिली-1 लीटर, नस में या त्वचा के नीचे</li>
                    <li>मल्टीविटामिन ड्रिप के साथ</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">देखभाल और प्रबंधन:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>गर्म, सूखी और हवादार जगह में रखें</li>
                <li>ठंडी हवा से बचाएँ</li>
                <li>बीमार जानवर को अलग रखें</li>
                <li>भाप देने से राहत मिलती है</li>
                <li>छाती पर मालिश करें</li>
                <li>नरम, पौष्टिक और गर्म चारा दें</li>
                <li>गुनगुना पानी पिलाएँ</li>
                <li>तनाव से बचाएँ</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव (सबसे महत्वपूर्ण):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>टीकाकरण:</strong> पास्चुरेला और माइकोप्लाज्मा के खिलाफ टीका (साल में दो बार)</li>
                <li>शेड में अच्छी हवा का प्रबंध</li>
                <li>ठंड और बरसात में विशेष देखभाल</li>
                <li>भीड़भाड़ न रखें (प्रति जानवर 3-4 वर्ग मीटर जगह)</li>
                <li>शेड की नियमित सफाई और कीटाणुनाशक का छिड़काव</li>
                <li>अमोनिया गैस जमा न होने दें</li>
                <li>नए जानवर को क्वारंटीन में रखें</li>
                <li>पौष्टिक आहार और साफ पानी</li>
                <li>तनाव कम करें</li>
                <li>कमजोर और युवा जानवरों का विशेष ध्यान</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> निमोनिया में समय पर इलाज बहुत जरूरी है। 24-48 घंटे की देरी जानलेवा हो सकती है। लंबे समय तक काम करने वाले ऑक्सीटेट्रासाइक्लिन सबसे अच्छी पसंद है। पशु चिकित्सक से तुरंत संपर्क करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}