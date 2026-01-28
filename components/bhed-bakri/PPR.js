export default function PPR() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            पी.पी.आर (छोटे मवेशियों की प्लेग)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                पी.पी.आर एक तीव्र वायरल रोग है जो मुख्य रूप से भेड़ और बकरियों को प्रभावित करता है । इस बीमारी में मृत्यु दर 80-100% तक हो सकती है । यह मॉर्बिलीवायरस परिवार का वायरस है जो खसरा और कुत्तों के डिस्टेंपर वायरस से संबंधित है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अचानक तेज बुखार (104-106°फारेनहाइट)</li>
                <li>नाक और आँखों से गाढ़ा पानी बहना</li>
                <li>मुँह, होंठ और जीभ में छाले और घाव</li>
                <li>गंभीर दस्त (हरे-भूरे रंग का, कभी खूनी)</li>
                <li>साँस लेने में तकलीफ और खाँसी</li>
                <li>नाक से बदबूदार बलगम निकलना</li>
                <li>भूख पूरी तरह बंद हो जाना</li>
                <li>तेजी से कमजोर होना और वजन घटना</li>
                <li>गर्भपात हो सकता है</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">रोग का फैलाव:</h3>
              <p className="text-zinc-700 leading-relaxed">
                बीमार जानवरों के स्राव और मल-मूत्र से यह रोग फैलता है । भीड़भाड़ वाली जगहों पर तेजी से फैलता है। संक्रमित जानवरों के साँस के जरिए वायरस स्वस्थ जानवरों में प्रवेश करता है ।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <p className="text-zinc-700 leading-relaxed">
                लक्षणों के आधार पर प्रारंभिक निदान किया जाता है । पुष्टि के लिए पीसीआर टेस्ट और एलिसा टेस्ट किया जाता है। खून, लिम्फ नोड्स और टॉन्सिल की जाँच की जाती है।
              </p>
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
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-zinc-800 font-semibold">
                महत्वपूर्ण: पी.पी.आर का कोई सीधा इलाज नहीं है । केवल सहायक उपचार दिया जाता है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीबायोटिक (द्वितीयक संक्रमण रोकने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (टेरामाइसिन/एलए-200)</strong> - 20 मिग्रा प्रति किलो शरीर भार , मांसपेशी में इंजेक्शन, दिन में एक बार 5-7 दिन तक</li>
                    <li><strong>टाइलोसिन</strong> - भेड़-बकरी में उपयोगी पाया गया , 10 मिग्रा प्रति किलो, दिन में एक बार</li>
                    <li><strong>पेनिसिलिन + स्ट्रेप्टोमाइसिन</strong> - संयुक्त इंजेक्शन, निमोनिया रोकने के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. द्रव चिकित्सा (डीहाइड्रेशन के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>शरीर के द्रव संतुलन को बहाल करने के लिए तरल पदार्थ चिकित्सा आवश्यक है </li>
                    <li><strong>ग्लूकोज सैलाइन</strong> - नस में या त्वचा के नीचे, 500 मिली-1 लीटर प्रतिदिन</li>
                    <li><strong>ओआरएस घोल</strong> - मुँह से पिलाएँ</li>
                    <li><strong>रिंगर लैक्टेट</strong> - गंभीर डीहाइड्रेशन में</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. आंत्र शामक (दस्त रोकने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>मेट्रोनिडाजोल</strong> - 10 मिग्रा प्रति किलो शरीर भार, दिन में एक बार </li>
                    <li><strong>सल्फाडिमिडीन</strong> - 100 मिग्रा प्रति किलो, पहले दिन, फिर 50 मिग्रा प्रति किलो</li>
                    <li>लेवामिसोल 1.5%  - कीड़ों के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. विटामिन और सहायक दवाएँ:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>विटामिन बी-कॉम्प्लेक्स</strong> - ऊर्जा और रिकवरी के लिए आवश्यक </li>
                    <li><strong>विटामिन ए और डी</strong> - इंजेक्शन रूप में</li>
                    <li><strong>मल्टीमिनरल सप्लीमेंट</strong> - कमजोरी दूर करने के लिए</li>
                    <li><strong>बुखार की दवा</strong> - पैरासिटामोल या मेलोक्सिकैम</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. मुँह के घावों का उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>नींबू और संतरे के रस से घाव धोना प्रभावी पाया गया है </li>
                    <li>पोटाश या बोरिक एसिड का घोल (1% घोल में)</li>
                    <li>ग्लिसरीन + टिंचर आयोडीन</li>
                    <li>एंटीसेप्टिक स्प्रे (बीटाडीन)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">देखभाल और प्रबंधन:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>गर्म और ड्राफ्ट-मुक्त जगह में रखें, अच्छी फीडिंग और नर्सिंग जरूरी है </li>
                <li>बीमार जानवर को तुरंत अलग कर दें</li>
                <li>नरम, पौष्टिक चारा दें</li>
                <li>ताजा, साफ पानी हमेशा उपलब्ध रखें</li>
                <li>शेड की नियमित सफाई और कीटाणुनाशक का छिड़काव करें</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव (सबसे महत्वपूर्ण):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>पी.पी.आर का टीका सबसे प्रभावी बचाव है </li>
                <li><strong>टीकाकरण कार्यक्रम:</strong> हर साल एक बार पी.पी.आर वैक्सीन लगवाएँ</li>
                <li>3-4 महीने की उम्र में पहला टीका</li>
                <li>नए जानवर को 15-20 दिन अलग रखें</li>
                <li>बीमारी के प्रकोप वाले क्षेत्र से जानवर न खरीदें</li>
                <li>मेलों और बाजारों से लाए जानवरों की विशेष निगरानी</li>
                <li>पशु चिकित्सा अधिकारियों को तुरंत सूचित करें यदि पी.पी.आर के लक्षण दिखें </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> पी.पी.आर से बचाव ही सबसे अच्छा उपाय है। नियमित टीकाकरण जरूर कराएँ। 2030 तक इस बीमारी को पूरी तरह खत्म करने का वैश्विक लक्ष्य है ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}