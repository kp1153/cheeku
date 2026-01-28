export default function Galghotoo() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            स्ट्रैंगल्स / गलघोंटू - घोड़ा
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                स्ट्रैंगल्स घोड़ों की एक अत्यधिक संक्रामक बैक्टीरियल बीमारी है जो स्ट्रेप्टोकोकस इक्वाई नामक बैक्टीरिया से होती है। यह ऊपरी श्वसन तंत्र को प्रभावित करती है और गले की लिम्फ नोड्स में गंभीर सूजन और फोड़े बनाती है। इसे "गलघोंटू" भी कहते हैं क्योंकि सूजी हुई ग्रंथियां सांस लेने में रुकावट पैदा कर सकती हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तेज बुखार (103-106°F / 39.5-41°C)</li>
                <li>भूख न लगना और निगलने में कठिनाई</li>
                <li>नाक से गाढ़ा पीला-हरा मवाद निकलना</li>
                <li>गले के नीचे और जबड़े के पास लिम्फ नोड्स में गंभीर सूजन</li>
                <li>सूजी हुई ग्रंथियों में दर्द और गर्मी</li>
                <li>सिर और गर्दन को फैलाकर रखना (सांस लेने के लिए)</li>
                <li>खांसी और घरघराहट</li>
                <li>सुस्ती और कमजोरी</li>
                <li>फोड़े फूटने पर मवाद का बहाव</li>
                <li>सांस लेने में कठिनाई (गंभीर मामलों में)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>स्ट्रेप्टोकोकस इक्वाई बैक्टीरिया का संक्रमण</li>
                <li>संक्रमित घोड़े के नाक/मुंह के स्राव से सीधा संपर्क</li>
                <li>संक्रमित बाल्टी, चारा, पानी के बर्तन से</li>
                <li>संक्रमित उपकरण, कपड़े, या हाथों से</li>
                <li>हवा के माध्यम से (छींक, खांसी से)</li>
                <li>कैरियर घोड़े जो बीमार नहीं दिखते लेकिन बैक्टीरिया फैलाते हैं</li>
                <li>युवा घोड़े (1-5 वर्ष) अधिक संवेदनशील</li>
                <li>भीड़भाड़, तनाव, खराब स्वच्छता</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>लक्षणों की पहचान (बुखार, गले की सूजन, नाक से मवाद)</li>
                <li>नाक/गले के स्वैब से बैक्टीरिया कल्चर</li>
                <li>PCR टेस्ट (बैक्टीरिया की पहचान)</li>
                <li>रक्त परीक्षण (एंटीबॉडी टेस्ट)</li>
                <li>फोड़े से मवाद का सैंपल लेकर जांच</li>
                <li>एंडोस्कोपी (गले की जांच)</li>
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
                ⚠️ महत्वपूर्ण: यह बीमारी अत्यधिक संक्रामक है। संक्रमित घोड़े को तुरंत अलग करें और सख्त क्वारंटाइन लागू करें। सभी उपकरण अलग रखें।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीबायोटिक्स (विवादास्पद - सावधानी से उपयोग):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन</strong> - 22,000-44,000 IU/kg, IM, हर 12 घंटे</li>
                    <li><strong>सेफ्टियोफर</strong> - 2.2-4.4 mg/kg, IM, हर 24 घंटे</li>
                    <li><strong>ट्राइमेथोप्रिम-सल्फा</strong> - 30 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>नोट:</strong> शुरुआती चरण में एंटीबायोटिक्स फोड़े बनने में रुकावट डाल सकते हैं</li>
                    <li>फोड़े फूटने के बाद या गंभीर जटिलताओं में ही दें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. दर्द और बुखार कम करने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फेनिलब्यूटाजोन</strong> - 2.2-4.4 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1 mg/kg, IV, हर 12-24 घंटे</li>
                    <li><strong>मेलोक्सिकैम</strong> - 0.6 mg/kg, मुंह से, हर 24 घंटे</li>
                    <li>दर्द और सूजन कम करने में मदद</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. फोड़े का उपचार (सबसे महत्वपूर्ण):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>गर्म सेंक (हॉट फोमेंटेशन) - दिन में 3-4 बार, 15-20 मिनट</li>
                    <li>फोड़े को पकने दें - जल्दबाजी न करें</li>
                    <li>पक जाने पर पशु चिकित्सक से लांस (चीरा) लगवाएं</li>
                    <li>मवाद पूरी तरह निकलने दें</li>
                    <li>घाव को रोज साफ करें - बीटाडीन या हाइड्रोजन पेरोक्साइड से</li>
                    <li>घाव खुला रखें ताकि मवाद बाहर निकलता रहे</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. श्वसन सहायता:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>गर्म पानी की भाप - दिन में 2-3 बार (यूकेलिप्टस ऑयल मिलाएं)</li>
                    <li><strong>ब्रोंकोडायलेटर</strong> - क्लेनब्यूटेरोल 0.8 mcg/kg (सांस की तकलीफ में)</li>
                    <li>नेब्युलाइजेशन - सेलाइन या दवा के साथ</li>
                    <li>गंभीर मामलों में ट्रेकियोस्टोमी (सर्जिकल एयरवे)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. पोषण और द्रव चिकित्सा:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>नरम, गीला चारा - निगलने में आसानी के लिए</li>
                    <li>उच्च गुणवत्ता का दाना (अगर खा सके)</li>
                    <li>ताजा, साफ पानी हमेशा उपलब्ध</li>
                    <li>IV फ्लूइड - अगर नहीं खा-पी रहा हो</li>
                    <li>नासोगैस्ट्रिक ट्यूब से तरल आहार (गंभीर मामलों में)</li>
                    <li>इलेक्ट्रोलाइट सप्लीमेंट</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. इम्यून सपोर्ट:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>विटामिन C - 10-20 ग्राम प्रतिदिन</li>
                    <li>विटामिन E - रोग प्रतिरोधक क्षमता के लिए</li>
                    <li>प्रोबायोटिक्स - आंत के स्वास्थ्य के लिए</li>
                    <li>अच्छा पोषण और आराम</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. जटिलताओं का उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>गट्टुरल पाउच एम्पाइमा:</strong> एंडोस्कोपिक लैवेज, लंबे समय तक एंटीबायोटिक्स</li>
                    <li><strong>बैस्टर्ड स्ट्रैंगल्स:</strong> आक्रामक एंटीबायोटिक थेरेपी, सर्जिकल ड्रेनेज</li>
                    <li><strong>पर्पुरा हेमोरेजिका:</strong> कॉर्टिकोस्टेरॉयड, प्लाज्मा थेरेपी</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">घर पर देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>पूर्ण अलगाव - कम से कम 4 सप्ताह या जब तक मवाद आना बंद न हो</li>
                <li>नाक और फोड़े से निकलने वाले मवाद को रोज साफ करें</li>
                <li>तापमान दिन में दो बार मापें</li>
                <li>गर्म, सूखी, हवादार जगह में रखें</li>
                <li>तनाव कम करें, पूरा आराम दें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>टीकाकरण:</strong></li>
                <li>स्ट्रैंगल्स वैक्सीन उपलब्ध है (इंट्रानेजल या इंजेक्शन)</li>
                <li>उच्च जोखिम वाले क्षेत्रों में टीकाकरण करें</li>
                <li>टीका 100% सुरक्षा नहीं देता लेकिन गंभीरता कम करता है</li>
                <li><strong>क्वारंटाइन प्रोटोकॉल:</strong></li>
                <li>सभी नए घोड़ों को 3-4 सप्ताह अलग रखें</li>
                <li>रोज तापमान जांचें</li>
                <li>किसी भी लक्षण पर तुरंत जांच</li>
                <li><strong>स्वच्छता और बायोसिक्योरिटी:</strong></li>
                <li>उपकरण साझा न करें</li>
                <li>संक्रमित क्षेत्र को डिसइन्फेक्ट करें (ब्लीच, वर्कॉन)</li>
                <li>बीमार घोड़ों के संपर्क से बचें</li>
                <li>हाथ धोना और कपड़े बदलना जरूरी</li>
                <li>पानी और चारे के बर्तन अलग रखें</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> स्ट्रैंगल्स बहुत संक्रामक है। कड़ा क्वारंटाइन और स्वच्छता जरूरी है। फोड़े को पकने दें, जल्दी एंटीबायोटिक देने से समस्या बढ़ सकती है। ठीक होने के बाद भी 4-6 सप्ताह तक सावधानी रखें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}