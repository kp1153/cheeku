export default function Chechak() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            चेचक - ऊँट
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                चेचक ऊँटों की एक गंभीर वायरल बीमारी है जो पॉक्स वायरस के कारण होती है। यह त्वचा पर दाने, फफोले और घाव पैदा करती है। संक्रमित ऊँट से सीधे संपर्क, हवा या संक्रमित उपकरणों से फैलता है। युवा ऊँटों में अधिक खतरनाक और मृत्यु दर 25-30% तक हो सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तेज बुखार (104-106°F) जो 5-7 दिन रहता है</li>
                <li>त्वचा पर लाल दाने जो फफोलों में बदल जाते हैं</li>
                <li>मुंह, नाक, होंठ और थन पर घाव</li>
                <li>सूजी हुई लसिका ग्रंथियां (गर्दन और जबड़े के नीचे)</li>
                <li>आंखों से पानी और स्राव</li>
                <li>नाक से म्यूकस निकलना</li>
                <li>भूख न लगना और कमजोरी</li>
                <li>दूध उत्पादन में भारी गिरावट (60-80%)</li>
                <li>वजन कम होना</li>
                <li>सांस लेने में तकलीफ (गंभीर मामलों में)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>कैमेलपॉक्स वायरस (Orthopoxvirus परिवार)</li>
                <li>संक्रमित ऊँट से सीधा संपर्क</li>
                <li>संक्रमित ऊँट की लार, नाक या फफोले का स्राव</li>
                <li>संक्रमित चारागाह या पानी</li>
                <li>मच्छर, मक्खी और अन्य कीड़ों द्वारा</li>
                <li>संक्रमित उपकरण और बर्तन</li>
                <li>कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>भीड़भाड़ और खराब स्वच्छता</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>त्वचा के घावों और लक्षणों की जांच</li>
                <li>बुखार और सूजी लसिका ग्रंथियों की पहचान</li>
                <li>फफोले के तरल पदार्थ की प्रयोगशाला जांच</li>
                <li>पीसीआर टेस्ट (वायरस की पुष्टि के लिए)</li>
                <li>इलेक्ट्रॉन माइक्रोस्कोपी (विशेष मामलों में)</li>
                <li>रक्त परीक्षण (एंटीबॉडी डिटेक्शन)</li>
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
                ⚠️ महत्वपूर्ण: चेचक का कोई विशिष्ट एंटीवायरल इलाज नहीं है। उपचार मुख्य रूप से सहायक और लक्षण आधारित होता है। संक्रमित ऊँट को तुरंत अलग करें।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीबायोटिक्स (द्वितीयक संक्रमण रोकने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (टेरामाइसिन)</strong> - 10-20 mg/kg शरीर भार, IM, दिन में एक बार, 5-7 दिन</li>
                    <li><strong>पेनिसिलिन-स्ट्रेप्टोमाइसिन कॉम्बो</strong> - 20,000 IU/kg पेनिसिलिन + 10 mg/kg स्ट्रेप्टोमाइसिन, IM, दिन में दो बार</li>
                    <li><strong>एनरोफ्लोक्सासिन</strong> - 5 mg/kg, IM या SC, दिन में एक बार, 5 दिन</li>
                    <li><strong>सेफ्ट्रियाक्सोन</strong> - 25 mg/kg, IM, दिन में एक बार</li>
                    <li><strong>ब्रांड:</strong> Terramycin, Penstrep, Baytril, Ceftaxim</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. बुखार और दर्द निवारक:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पैरासिटामोल (एसिटामिनोफेन)</strong> - 10-15 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1 mg/kg, IV या IM, दिन में एक बार</li>
                    <li><strong>मेलोक्सिकैम</strong> - 0.5 mg/kg, मुंह से या IM, दिन में एक बार</li>
                    <li><strong>फिनाइलब्यूटाजोन (ब्यूट)</strong> - 4.4 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>ब्रांड:</strong> Calpol, Finadyne, Melonex, Butazolidin</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. घाव और त्वचा के लिए स्थानीय उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>बीटाडीन सॉल्यूशन (10% पोविडोन आयोडीन)</strong> - घावों को दिन में 2-3 बार साफ करें</li>
                    <li><strong>पोटैशियम परमैंगनेट (1:1000)</strong> - घावों को धोने के लिए</li>
                    <li><strong>जेंशियन वायलेट (1-2%)</strong> - घावों पर लगाएं, सूखने में मदद करता है</li>
                    <li><strong>सिल्वर सल्फाडियाजीन क्रीम</strong> - जले हुए जैसे घावों पर</li>
                    <li><strong>नीम तेल या नारियल तेल</strong> - प्राकृतिक एंटीसेप्टिक, दिन में 2 बार</li>
                    <li><strong>बोरिक एसिड पाउडर</strong> - घावों को सूखा रखने के लिए</li>
                    <li><strong>ब्रांड:</strong> Betadine, Dermicool, Silverex, Himax</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. इम्यूनिटी बढ़ाने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>विटामिन A, D, E कॉम्बो इंजेक्शन</strong> - 10-15 ml, IM, साप्ताहिक 2-3 बार</li>
                    <li><strong>विटामिन C (एस्कॉर्बिक एसिड)</strong> - 2-3 ग्राम, IV, दिन में एक बार</li>
                    <li><strong>विटामिन B-कॉम्प्लेक्स</strong> - 15-20 ml, IM, हर दूसरे दिन</li>
                    <li><strong>मिनरल मिक्सचर</strong> - मुंह से, दैनिक</li>
                    <li><strong>इम्यूनोमॉड्यूलेटर (जैसे लिवामिसोल)</strong> - 2.5 mg/kg, SC, साप्ताहिक</li>
                    <li><strong>ब्रांड:</strong> Tribivet, Intavita, Polybion, Livamec</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. सहायक देखभाल:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>इलेक्ट्रोलाइट सॉल्यूशन</strong> - 5-10 लीटर, IV या मुंह से (निर्जलीकरण में)</li>
                    <li><strong>ग्लूकोज (5-10%)</strong> - 2-4 लीटर IV (कमजोरी में)</li>
                    <li><strong>एंटीहिस्टामिन (क्लोरफेनिरामाइन)</strong> - 0.5 mg/kg, IM, खुजली कम करने के लिए</li>
                    <li><strong>आई ड्रॉप्स (सिप्रोफ्लोक्सासिन)</strong> - आंखों के संक्रमण के लिए, दिन में 3-4 बार</li>
                    <li>पौष्टिक और सुपाच्य आहार - हरा चारा, दलिया, गुड़</li>
                    <li>ताजा और साफ पानी भरपूर मात्रा में</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. थन में संक्रमण का इलाज (दुधारू ऊँटों में):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>इंट्रामेमेरी एंटीबायोटिक ट्यूब</strong> - थन में सीधे डालें, दिन में दो बार</li>
                    <li><strong>एंटी-इन्फ्लेमेटरी क्रीम</strong> - थन पर बाहर से मालिश करें</li>
                    <li>दूध निकालना बंद करें जब तक संक्रमण ठीक न हो</li>
                    <li><strong>ब्रांड:</strong> Mastilac, Cloxamast</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>संक्रमित ऊँट को तुरंत अलग साफ बाड़े में रखें</li>
                <li>घावों को रोज धोएं और साफ रखें</li>
                <li>छाया में ठंडी जगह पर रखें</li>
                <li>मक्खियों से बचाव के लिए मच्छरदानी या जाली लगाएं</li>
                <li>नरम और पौष्टिक भोजन दें</li>
                <li>अन्य ऊँटों से कम से कम 50 मीटर दूर रखें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>टीकाकरण:</strong> कैमेलपॉक्स वैक्सीन साल में एक बार, सभी ऊँटों को</li>
                <li>नए ऊँट लाने पर 21 दिन की क्वारंटाइन अवधि जरूरी</li>
                <li>बाड़े की नियमित सफाई और कीटाणुशोधन (फिनाइल या ब्लीचिंग पाउडर)</li>
                <li>मच्छर और मक्खी नियंत्रण - कीटनाशक स्प्रे</li>
                <li>भीड़भाड़ से बचें, प्रति ऊँट कम से कम 20 वर्ग मीटर जगह</li>
                <li>साझा उपकरण, बर्तन, पानी के गर्त का इस्तेमाल न करें</li>
                <li>पौष्टिक आहार दें, रोग प्रतिरोधक क्षमता बनाए रखें</li>
                <li>संक्रमित ऊँट के संपर्क में आने के बाद हाथ और कपड़े धोएं</li>
                <li>बीमार ऊँट के बाद स्वस्थ ऊँट को न छुएं</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> चेचक के लक्षण दिखते ही तुरंत पशु चिकित्सक को बुलाएं। शीघ्र उपचार से ठीक होने की संभावना बढ़ जाती है और अन्य ऊँटों में फैलने से रोका जा सकता है। टीकाकरण सबसे बेहतर बचाव है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}