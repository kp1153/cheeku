export default function Colic() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            कॉलिक (पेट दर्द) - घोड़ा
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                कॉलिक घोड़ों में पेट दर्द की एक गंभीर स्थिति है जो पाचन तंत्र की विभिन्न समस्याओं से उत्पन्न होती है। यह घोड़ों में मृत्यु का एक प्रमुख कारण है। आंत में रुकावट, गैस, मरोड़ या सूजन के कारण होता है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>पेट में दर्द के कारण बेचैनी और घूमना</li>
                <li>बार-बार जमीन पर लेटना और उठना</li>
                <li>पेट की तरफ पैर से लात मारना</li>
                <li>जमीन पर लोटना या पलटने की कोशिश</li>
                <li>पसीना आना और तेज सांस लेना</li>
                <li>खाना-पीना बंद कर देना</li>
                <li>मल त्याग न होना या कम होना</li>
                <li>पेट फूलना या सख्त होना</li>
                <li>नाड़ी तेज होना (सामान्य 28-44 प्रति मिनट से अधिक)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अचानक आहार में बदलाव</li>
                <li>खराब गुणवत्ता का चारा या दाना</li>
                <li>पानी की कमी या पानी न पीना</li>
                <li>आंतों में रेत या मिट्टी जमा होना</li>
                <li>परजीवी संक्रमण (कीड़े)</li>
                <li>आंत में मरोड़ या रुकावट</li>
                <li>अधिक मात्रा में दाना खाना</li>
                <li>तनाव या अचानक गतिविधि में परिवर्तन</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>लक्षणों की जांच और व्यवहार का अवलोकन</li>
                <li>पेट की आवाज सुनना (स्टेथोस्कोप)</li>
                <li>नाड़ी, तापमान और श्वसन दर की जांच</li>
                <li>मलाशय की जांच (रेक्टल एग्जामिनेशन)</li>
                <li>नासोगैस्ट्रिक ट्यूब से पेट की जांच</li>
                <li>अल्ट्रासाउंड या एक्स-रे (गंभीर मामलों में)</li>
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
                ⚠️ महत्वपूर्ण: कॉलिक एक आपातकालीन स्थिति है। तुरंत पशु चिकित्सक को बुलाएं। देरी जानलेवा हो सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. दर्द निवारक (एनाल्जेसिक):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन (बैनामाइन)</strong> - 1.1 mg/kg शरीर भार, IV या IM, हर 12 घंटे में</li>
                    <li><strong>डिटोमिडीन (डोर्मोसेडान)</strong> - 0.01-0.02 mg/kg, IV, दर्द और बेचैनी कम करने के लिए</li>
                    <li><strong>ब्यूटोर्फानोल</strong> - 0.01-0.04 mg/kg, IV, गंभीर दर्द में</li>
                    <li><strong>ब्रांड:</strong> Banamine (Merck), Prevail, Finadyne</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. आंत की गति बढ़ाने वाली दवा:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>मेटोक्लोप्रामाइड</strong> - 0.25 mg/kg, IV, हर 6-8 घंटे</li>
                    <li><strong>लिडोकेन</strong> - 1.3 mg/kg IV बोलस, फिर 0.05 mg/kg/min निरंतर</li>
                    <li><strong>नियोस्टिगमीन</strong> - 0.004-0.02 mg/kg, SC (सावधानी से)</li>
                    <li>ये दवाएं आंत की सामान्य गति बहाल करने में मदद करती हैं</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. द्रव चिकित्सा (फ्लूइड थेरेपी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>लैक्टेटेड रिंगर सॉल्यूशन</strong> - IV, 40-80 ml/kg/hour</li>
                    <li><strong>नॉर्मल सैलाइन (0.9% NaCl)</strong> - IV, शरीर के द्रव संतुलन के लिए</li>
                    <li><strong>हाइपरटॉनिक सैलाइन (7.2%)</strong> - 4 ml/kg IV (सदमे में)</li>
                    <li>पेट में तरल पदार्थ देने के लिए नासोगैस्ट्रिक ट्यूब का उपयोग</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. जुलाब और स्मूदक:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>मिनरल ऑयल</strong> - 2-4 लीटर, नासोगैस्ट्रिक ट्यूब से</li>
                    <li><strong>मैग्नीशियम सल्फेट (एप्सम साल्ट)</strong> - 0.5-1 kg, पानी में घोलकर</li>
                    <li><strong>साइलियम (इसबगोल)</strong> - रेत या मिट्टी वाली रुकावट में उपयोगी</li>
                    <li><strong>डायोक्टाइल सोडियम सल्फोसक्सिनेट (DSS)</strong> - मल को नरम करने के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. एंटीबायोटिक्स (संक्रमण रोकने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेनिसिलिन</strong> - 22,000 IU/kg, IV या IM, हर 6 घंटे</li>
                    <li><strong>जेंटामाइसिन</strong> - 6.6 mg/kg, IV, दिन में एक बार</li>
                    <li><strong>सेफ्टियोफर</strong> - 2.2-4.4 mg/kg, IV या IM, दिन में दो बार</li>
                    <li>आंत के टूटने या गंभीर संक्रमण के खतरे में उपयोग</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. सर्जिकल उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>आंत में मरोड़ (टॉर्शन) या गंभीर रुकावट में सर्जरी आवश्यक</li>
                    <li>24 घंटे में सुधार न होने पर ऑपरेशन की जरूरत</li>
                    <li>समय पर सर्जरी से जीवन बचाया जा सकता है</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक उपचार (पशु चिकित्सक आने तक):</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>घोड़े को धीरे-धीरे चलाएं (लेकिन थकाएं नहीं)</li>
                <li>खाना-पानी तुरंत बंद कर दें</li>
                <li>लोटने से रोकने की कोशिश करें (चोट से बचाव)</li>
                <li>घोड़े को शांत और सुरक्षित जगह पर रखें</li>
                <li>नाड़ी, सांस और तापमान नोट करें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>नियमित और संतुलित आहार दें, अचानक बदलाव न करें</li>
                <li>ताजा और साफ पानी हमेशा उपलब्ध रखें</li>
                <li>उच्च गुणवत्ता का चारा और दाना दें</li>
                <li>नियमित व्यायाम और चरने का समय दें</li>
                <li>हर 2-3 महीने में कृमिनाशक दवा दें</li>
                <li>दांतों की नियमित जांच करवाएं</li>
                <li>तनाव कम करें और दिनचर्या स्थिर रखें</li>
                <li>अचानक ठंडा पानी न पिलाएं (विशेषकर गर्मी में)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> कॉलिक के लक्षण दिखते ही तुरंत पशु चिकित्सक को बुलाएं। हर मिनट महत्वपूर्ण है। देरी से घोड़े की जान जा सकती है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}