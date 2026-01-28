export default function Aantravishaktta() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            आंत्र विषाक्तता (एंटरोटॉक्सीमिया) - ऊँट
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                आंत्र विषाक्तता ऊँटों की एक अत्यंत घातक बीमारी है जो क्लोस्ट्रिडियम परफ्रिंजेंस नामक बैक्टीरिया के विषाक्त पदार्थों से होती है। यह बैक्टीरिया आंतों में तेजी से बढ़कर जहरीले टॉक्सिन पैदा करता है जो पूरे शरीर में फैल जाता है। रोग बहुत तेज़ी से बढ़ता है और 12-24 घंटे में मृत्यु हो सकती है। मृत्यु दर 80-90% तक हो सकती है अगर समय पर इलाज न हो।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अचानक मृत्यु (कभी-कभी बिना किसी लक्षण के)</li>
                <li>तीव्र पेट दर्द और बेचैनी</li>
                <li>पेट में तीव्र सूजन (गैस भरना)</li>
                <li>खूनी या काले रंग का दस्त</li>
                <li>तेज बुखार (104-106°F)</li>
                <li>भूख और पानी पीना बंद हो जाना</li>
                <li>गंभीर कमजोरी और लेटे रहना</li>
                <li>सांस लेने में तकलीफ</li>
                <li>पेट को छूने पर दर्द</li>
                <li>मुंह से झाग निकलना</li>
                <li>दांत पीसना और कराहना</li>
                <li>आंखों में दर्द का भाव</li>
                <li>अंतिम चरण में दौरे और बेहोशी</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>क्लोस्ट्रिडियम परफ्रिंजेंस बैक्टीरिया (टाइप C और D मुख्य)</li>
                <li>अचानक अधिक मात्रा में दाना या अनाज खिलाना</li>
                <li>चारे में अचानक बदलाव</li>
                <li>खराब या सड़ा हुआ चारा खाना</li>
                <li>अधिक प्रोटीन या कार्बोहाइड्रेट वाला भोजन</li>
                <li>लंबे समय तक भूखे रहने के बाद अधिक खाना</li>
                <li>गीला या फफूंदी लगा चारा</li>
                <li>मिट्टी में मौजूद बैक्टीरिया स्पोर</li>
                <li>कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>तनाव और थकान</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>नैदानिक लक्षणों की तेज़ी (अचानक बीमार होना)</li>
                <li>पेट की सूजन और गैस की जांच</li>
                <li>मृत्यु के बाद पोस्टमॉर्टम में आंतों की स्थिति</li>
                <li>आंतों के तरल पदार्थ की प्रयोगशाला जांच</li>
                <li>टॉक्सिन की पहचान (ELISA टेस्ट)</li>
                <li>बैक्टीरिया कल्चर टेस्ट</li>
                <li>रक्त जांच (गुर्दे और लीवर की क्षति)</li>
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
                ⚠️ अति महत्वपूर्ण: यह एक आपातकालीन स्थिति है। लक्षण दिखते ही तुरंत पशु चिकित्सक को बुलाएं। कुछ घंटों की देरी जानलेवा हो सकती है। बचाव (टीकाकरण) ही सबसे बेहतर उपाय है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटीटॉक्सिन (मुख्य इलाज - सबसे जरूरी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>क्लोस्ट्रिडियल एंटीटॉक्सिन (पॉलीवेलेंट)</strong> - 100-200 ml, IV, धीरे-धीरे, तुरंत दें</li>
                    <li><strong>टाइप C और D एंटीटॉक्सिन</strong> - 50-100 ml, IV या SC, जरूरत पर 12 घंटे बाद दोहराएं</li>
                    <li><strong>नोट:</strong> जितनी जल्दी दें उतना बेहतर, यह विष को निष्क्रिय करता है</li>
                    <li><strong>ब्रांड:</strong> Covexin, Enterovax, Clostrivax</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. एंटीबायोटिक्स (बैक्टीरिया को मारने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन जी (क्रिस्टलीन)</strong> - 40,000-60,000 IU/kg, IV, हर 6 घंटे</li>
                    <li><strong>पेनिसिलिन जी (प्रोकेन)</strong> - 20,000 IU/kg, IM, हर 12 घंटे, 5-7 दिन</li>
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (LA)</strong> - 20 mg/kg, IV, दिन में दो बार, 3-5 दिन</li>
                    <li><strong>मेट्रोनिडाजोल</strong> - 15-25 mg/kg, IV या मुंह से, हर 12 घंटे, 5-7 दिन</li>
                    <li><strong>एम्पिसिलिन</strong> - 10-20 mg/kg, IM या IV, हर 8 घंटे</li>
                    <li><strong>ब्रांड:</strong> Crystapen, Terramycin, Flagyl, Ampiclox</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. गैस और पेट की सूजन कम करने के लिए:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ट्रोकार और कैनुला</strong> - पेट में डालकर गैस निकालें (पशु चिकित्सक द्वारा)</li>
                    <li><strong>सिमेथिकोन (डाइमेथिकोन)</strong> - 100-200 ml, मुंह से, गैस तोड़ने के लिए</li>
                    <li><strong>टर्पेंटाइन तेल</strong> - 50-100 ml, 500 ml तेल में मिलाकर, मुंह से</li>
                    <li><strong>अदरक का रस</strong> - 100-150 ml, मुंह से</li>
                    <li><strong>सोडियम बाईकार्बोनेट</strong> - 50-100 ग्राम, पानी में घोलकर</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. दर्द निवारक और एंटी-शॉक थेरेपी:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1-2.2 mg/kg, IV, हर 12 घंटे</li>
                    <li><strong>ब्यूटाइलस्कोपोलामीन</strong> - 0.3 mg/kg, IV या IM, पेट दर्द के लिए</li>
                    <li><strong>डेक्सामेथासोन</strong> - 5-10 mg, IV, शॉक से बचाव, एक बार</li>
                    <li><strong>मेटामिजोल (डिपायरोन)</strong> - 20-40 mg/kg, IV, दर्द और बुखार के लिए</li>
                    <li><strong>ब्रांड:</strong> Finadyne, Buscopan, Novalgin</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. फ्लूइड थेरेपी (निर्जलीकरण और शॉक के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>रिंगर लैक्टेट</strong> - 8-12 लीटर, IV, तेज़ी से (पहले 2-3 घंटे में)</li>
                    <li><strong>सामान्य सैलाइन (0.9% NaCl)</strong> - 6-10 लीटर, IV, दैनिक</li>
                    <li><strong>ग्लूकोज सैलाइन (5%)</strong> - 4-6 लीटर, IV, ऊर्जा के लिए</li>
                    <li><strong>कैल्शियम बोरोग्लूकोनेट (25%)</strong> - 200-400 ml, IV, धीरे-धीरे</li>
                    <li><strong>इलेक्ट्रोलाइट पाउडर</strong> - मुंह से पानी में घोलकर, अगर पी सकता है</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. आंत की गतिशीलता बढ़ाने के लिए:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>नियोस्टिग्मिन</strong> - 5-10 mg, SC, सावधानी से (आंत में रुकावट न हो तो)</li>
                    <li><strong>मेटोक्लोप्रामाइड</strong> - 0.5 mg/kg, IM या IV, हर 8 घंटे</li>
                    <li><strong>खनिज तेल (Liquid Paraffin)</strong> - 2-4 लीटर, मुंह से, जहर को बाहर निकालने में मदद</li>
                    <li><strong>अरंडी का तेल</strong> - 500 ml-1 लीटर, मुंह से</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. सहायक उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>प्रोबायोटिक्स</strong> - 50-100 ग्राम, मुंह से, दो बार दैनिक, ठीक होने के बाद</li>
                    <li><strong>विटामिन B-कॉम्प्लेक्स</strong> - 20-30 ml, IM, दैनिक, 5-7 दिन</li>
                    <li><strong>विटामिन C</strong> - 3-5 ग्राम, IV, दैनिक</li>
                    <li><strong>लिवर टॉनिक</strong> - 30-50 ml, मुंह से, दो बार दैनिक</li>
                    <li><strong>ऑक्सीजन थेरेपी</strong> - अगर सांस लेने में तकलीफ हो</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तुरंत खाना-पानी बंद कर दें</li>
                <li>ऊँट को खड़ा रखने की कोशिश करें, लेटने न दें</li>
                <li>पेट की हल्की मालिश करें (अगर ऊँट सहन करे)</li>
                <li>गर्म पानी की बोतल पेट पर रखें</li>
                <li>तुरंत पशु चिकित्सक को बुलाएं</li>
                <li>शांत और ठंडे स्थान पर रखें</li>
                <li>अदरक का रस दे सकते हैं (अगर पी सकता है)</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय (सबसे महत्वपूर्ण):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>टीकाकरण (सबसे जरूरी):</strong> क्लोस्ट्रिडियल वैक्सीन (8-way या 10-way), साल में दो बार</li>
                <li><strong>बूस्टर डोज:</strong> पहली वैक्सीन के 3-4 सप्ताह बाद, फिर हर 6 महीने में</li>
                <li>चारे में अचानक बदलाव न करें, धीरे-धीरे बदलें (7-10 दिन में)</li>
                <li>अधिक मात्रा में दाना या अनाज एक बार में न दें</li>
                <li>खराब, सड़ा या फफूंदी लगा चारा न दें</li>
                <li>नियमित समय पर संतुलित भोजन दें</li>
                <li>लंबे समय तक भूखा न रखें</li>
                <li>ताजा और साफ पानी दें</li>
                <li>तनाव और थकान से बचाएं</li>
                <li>बाड़े में साफ-सफाई रखें</li>
                <li>गर्भवती और दुधारू ऊँटों का विशेष ध्यान रखें</li>
                <li>नए ऊँट लाने पर संगरोध अवधि रखें</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> आंत्र विषाक्तता बेहद घातक है और बहुत तेज़ी से बढ़ती है। बचाव (टीकाकरण) हज़ार गुना बेहतर है इलाज से। सभी ऊँटों को नियमित रूप से टीका लगवाएं। अचानक मृत्यु हो जाए तो पोस्टमॉर्टम जरूर करवाएं ताकि बाकी ऊँटों को बचाया जा सके। एक बार बीमारी हो जाए तो बचने की संभावना 10-20% ही होती है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}