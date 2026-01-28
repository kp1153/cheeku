export default function Enterotoxemia() {
  return (
    <>
      {/* भाग १ */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            आंत्र विषाक्तता (ओवरईटिंग रोग / गुर्दा गलन)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                यह क्लॉस्ट्रिडियम परफ्रिंजेंस बैक्टीरिया (मुख्यतः टाइप सी और डी) के विषाक्त पदार्थों से होता है। ये बैक्टीरिया आंत में सामान्य रूप से मौजूद होते हैं, लेकिन जब दाने या हरे चारे की मात्रा अचानक बढ़ती है तो तेजी से बढ़ते हैं। भेड़-बकरी पालन में यह बहुत घातक बीमारी है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>सबसे अच्छे, स्वस्थ और मोटे जानवर अचानक मर जाते हैं</li>
                <li>कई बार बिना किसी लक्षण के अचानक मौत</li>
                <li>पेट में तेज दर्द और फूलना</li>
                <li>जमीन पर लोटना और दांत पीसना</li>
                <li>दस्त (कभी-कभी खूनी)</li>
                <li>मिर्गी जैसे दौरे, पीछे की टाँगों में पक्षाघात</li>
                <li>आँखों के कोनों में सफेद झाग</li>
                <li>साँस तेज-तेज चलना</li>
                <li>कमजोरी और गिर पड़ना</li>
                <li>मृत्यु कुछ घंटों से 2 दिन में हो जाती है</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण और जोखिम:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अचानक दाना या हरा चारा बढ़ाना</li>
                <li>अधिक मात्रा में दूध देने वाली माताओं के बच्चे</li>
                <li>ताजा चारागाह में छोड़ना</li>
                <li>दाना खाने में अनियमितता</li>
                <li>पेट के कीड़े या अन्य बीमारी से कमजोर आंत</li>
                <li>3-10 सप्ताह के बच्चे सबसे ज्यादा प्रभावित</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <p className="text-zinc-700 leading-relaxed">
                मृत्यु के बाद जाँच में गुर्दे नरम और गले हुए मिलते हैं। आंत में खूनी तरल पदार्थ और गैस भरी होती है। आंतों की सामग्री का लैब टेस्ट करवाएँ।
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
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-zinc-800 font-semibold">
                अति महत्वपूर्ण: इलाज शायद ही सफल होता है क्योंकि बीमारी बहुत तेजी से बढ़ती है। रोकथाम ही सबसे अच्छा उपाय है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">आपातकालीन इलाज (तुरंत शुरू करें):</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीटॉक्सिन (सबसे जरूरी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>क्लॉस्ट्रिडियल एंटीटॉक्सिन (सी और डी)</strong> - 50-100 मिली, त्वचा के नीचे या नस में, जितनी जल्दी हो सके</li>
                    <li>अगर लक्षण दिखे तो तुरंत 15 मिली एंटीटॉक्सिन दें</li>
                    <li>झुंड के सभी जानवरों को आधी खुराक दें (रोकथाम के लिए)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. एंटीबायोटिक (बैक्टीरिया को मारने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन जी (प्रोकेन)</strong> - 44,000 यूनिट प्रति किलो, मांसपेशी में, दिन में दो बार</li>
                    <li><strong>ऑक्सीटेट्रासाइक्लिन</strong> - 10-20 मिग्रा प्रति किलो, दिन में एक बार</li>
                    <li><strong>मेट्रोनिडाजोल</strong> - 15-25 मिग्रा प्रति किलो (क्लॉस्ट्रिडिया के खिलाफ प्रभावी)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. सहायक उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेट दर्द की दवा:</strong> एट्रोपीन या हायोसिन</li>
                    <li><strong>सक्रिय चारकोल:</strong> 1-2 ग्राम प्रति किलो, मुँह से (विषाक्त पदार्थ सोखने के लिए)</li>
                    <li><strong>मैग्नीशियम सल्फेट (एप्सम साल्ट):</strong> 20-50 ग्राम, मुँह से (आंत खाली करने के लिए)</li>
                    <li><strong>ग्लूकोज सैलाइन:</strong> नस में, शॉक से बचाने के लिए</li>
                    <li><strong>बुखार की दवा:</strong> यदि जरूरत हो</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. तत्काल प्रबंधन:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>24 घंटे पूरा उपवास रखें</li>
                    <li>पानी थोड़ा-थोड़ा देते रहें</li>
                    <li>बीमार जानवर को शांत जगह पर रखें</li>
                    <li>दौरे पड़ने पर सिर को सहारा दें</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव (अत्यंत महत्वपूर्ण):</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-zinc-800 mb-2">टीकाकरण कार्यक्रम:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>बच्चों के लिए:</strong> 6-8 सप्ताह की उम्र में पहली खुराक, फिर 3-4 सप्ताह बाद दूसरी खुराक</li>
                    <li><strong>गर्भवती माताओं के लिए:</strong> बच्चा होने से 6 और 2 सप्ताह पहले दो खुराक</li>
                    <li><strong>वयस्कों के लिए:</strong> साल में दो बार बूस्टर</li>
                    <li>सीडीटी वैक्सीन (क्लॉस्ट्रिडियम सी, डी और टिटनेस) का उपयोग करें</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-zinc-800 mb-2">आहार प्रबंधन:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>चारा या दाना कभी अचानक न बदलें - कम से कम 7-10 दिन में धीरे-धीरे बढ़ाएँ</li>
                    <li>दाना नियमित समय पर और नियमित मात्रा में दें</li>
                    <li>हरा चारा सीमित मात्रा में दें (खासकर अल्फाल्फा)</li>
                    <li>भूखे जानवर को अचानक अधिक खाना न दें</li>
                    <li>युवा जानवरों को दाना धीरे-धीरे शुरू करें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">अन्य बचाव:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>नियमित डीवर्मिंग (स्वस्थ आंत के लिए)</li>
                    <li>तनाव कम करें</li>
                    <li>साफ-सफाई रखें</li>
                    <li>चरागाह बदलते समय सावधानी बरतें</li>
                    <li>जोखिम वाले समय पर झुंड के सभी जानवरों को एंटीटॉक्सिन दे सकते हैं</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> आंत्र विषाक्तता बहुत तेजी से फैलती है और इलाज शायद ही सफल होता है। नियमित टीकाकरण और सही आहार प्रबंधन ही इस बीमारी से बचने का एकमात्र प्रभावी तरीका है। आहार में कोई भी बदलाव धीरे-धीरे करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}