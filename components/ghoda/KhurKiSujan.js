export default function Laminitis() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            लैमिनाइटिस (खुर की सूजन) - घोड़ा
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                लैमिनाइटिस घोड़ों में खुर की एक गंभीर और दर्दनाक बीमारी है जिसमें खुर के अंदर की संवेदनशील परतें (लैमिनी) सूज जाती हैं। यह घोड़े को स्थायी रूप से लंगड़ा बना सकती है। खुर की हड्डी (कॉफिन बोन) घूम सकती है या नीचे धंस सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>गंभीर लंगड़ापन, विशेषकर अगले पैरों में</li>
                <li>चलने से इनकार या अनिच्छा</li>
                <li>खुरों में तेज गर्मी और तेज नाड़ी महसूस होना</li>
                <li>खड़े होते समय पिछले पैरों पर अधिक वजन डालना</li>
                <li>लेटे रहना और उठने में कठिनाई</li>
                <li>कठोर, लकड़ी जैसी चाल</li>
                <li>पैरों को आगे खींचकर खड़ा होना (फाउंडर स्टांस)</li>
                <li>बार-बार वजन बदलना, एक पैर से दूसरे पर</li>
                <li>तेज सांस लेना और पसीना आना (दर्द के कारण)</li>
                <li>बढ़ी हुई हृदय गति</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>अधिक मात्रा में दाना या हरा चारा खाना (विशेषकर वसंत में)</li>
                <li>मोटापा और मेटाबोलिक सिंड्रोम</li>
                <li>कुशिंग रोग (PPID - हार्मोन की समस्या)</li>
                <li>कठोर जमीन पर अधिक दौड़ना</li>
                <li>एक पैर पर अधिक वजन (दूसरे पैर की चोट के कारण)</li>
                <li>प्रसव के बाद (रिटेंड प्लेसेंटा)</li>
                <li>गंभीर बीमारी या संक्रमण के बाद</li>
                <li>ठंडे पानी से अधिक मात्रा में पानी पीना (गर्म होने पर)</li>
                <li>स्टेरॉयड दवाओं का अधिक उपयोग</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>लक्षणों और चाल की जांच</li>
                <li>खुर की गर्मी और धड़कन की जांच</li>
                <li>हूफ टेस्टर से दबाव देकर दर्द की जांच</li>
                <li>एक्स-रे से खुर की हड्डी की स्थिति देखना</li>
                <li>वेंग्राम टेस्ट (खुर में सूजन की जांच)</li>
                <li>रक्त परीक्षण (ACTH, इंसुलिन लेवल)</li>
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
                ⚠️ महत्वपूर्ण: लैमिनाइटिस एक आपातकालीन स्थिति है। तुरंत पशु चिकित्सक और फैरियर को बुलाएं। जल्दी इलाज न करने पर स्थायी विकलांगता हो सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. दर्द निवारक और सूजन कम करने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फेनिलब्यूटाजोन (ब्यूट)</strong> - 2.2-4.4 mg/kg, मुंह से या IV, हर 12 घंटे में</li>
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1 mg/kg, IV, हर 12-24 घंटे</li>
                    <li><strong>केटोप्रोफेन</strong> - 2.2 mg/kg, IV, दिन में एक बार</li>
                    <li><strong>फिरोकॉक्सिब</strong> - 0.1 mg/kg, मुंह से, दिन में एक बार</li>
                    <li><strong>ब्रांड:</strong> Equipalazone, Phenylzone, Finadyne</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. रक्त प्रवाह बढ़ाने वाली दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पेंटोक्सिफाइलाइन</strong> - 8.5 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>एस्पिरिन</strong> - 10-20 mg/kg, मुंह से, दिन में एक बार</li>
                    <li><strong>आइसॉक्सुप्रिन</strong> - 0.6 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li>ये दवाएं खुर में रक्त संचार सुधारती हैं</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. आइस थेरेपी (क्रायोथेरेपी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>शुरुआती 48-72 घंटों में बर्फ से खुर को ठंडा करें</li>
                    <li>बर्फ के पानी में खुर को 20-30 मिनट तक डुबोएं</li>
                    <li>हर 2-3 घंटे में दोहराएं</li>
                    <li>यह सूजन और दर्द कम करता है</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. खुर की देखभाल (फैरियर केयर):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>तुरंत घोड़े के जूते (शूज) हटा दें</li>
                    <li>विशेष थेरेप्यूटिक शूइंग या पैड लगाएं</li>
                    <li>हार्ट बार शूज़ या फ्रॉग सपोर्ट पैड्स का उपयोग</li>
                    <li>नरम बेडिंग पर रखें (रेत या रबर मैट)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. आहार प्रबंधन:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li>तुरंत दाना और हरा चारा बंद करें</li>
                    <li>केवल घास का सूखा चारा दें (कम शुगर वाला)</li>
                    <li>चारे को पानी में भिगोकर दें</li>
                    <li>वजन नियंत्रण बहुत जरूरी है</li>
                    <li>कम कार्बोहाइड्रेट, उच्च फाइबर आहार</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. सहायक दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>एसेप्रोमैज़ीन</strong> - 0.02-0.04 mg/kg, IV (रक्त प्रवाह के लिए)</li>
                    <li><strong>DMSO</strong> - सूजन कम करने के लिए</li>
                    <li><strong>गैबापेंटिन</strong> - गंभीर दर्द में, 5-20 mg/kg मुंह से</li>
                    <li><strong>ओमेप्राज़ोल</strong> - पेट की सुरक्षा के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. क्रोनिक लैमिनाइटिस के लिए:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>लेवोथायरोक्सिन</strong> - मेटाबोलिज्म सुधारने के लिए</li>
                    <li><strong>मेटफॉर्मिन</strong> - इंसुलिन प्रतिरोध में (पोनी/मिनिएचर में)</li>
                    <li>कुशिंग रोग हो तो <strong>पर्गोलाइड</strong> - 0.002 mg/kg, मुंह से</li>
                    <li>नियमित फैरियर विज़िट हर 4-6 सप्ताह में</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक उपचार:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>घोड़े को तुरंत स्टैंडिंग बंद करें, बैठने दें</li>
                <li>नरम जमीन या रेत पर रखें</li>
                <li>खुरों को बर्फ के पानी में डुबोएं</li>
                <li>खाना-पानी नियंत्रित करें</li>
                <li>घोड़े को चलने के लिए मजबूर न करें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>संतुलित आहार दें, अधिक दाना या हरा चारा न दें</li>
                <li>वजन नियंत्रण बहुत महत्वपूर्ण है</li>
                <li>वसंत ऋतु में चारागाह का समय सीमित करें</li>
                <li>नियमित व्यायाम करवाएं</li>
                <li>खुरों की नियमित सफाई और ट्रिमिंग</li>
                <li>कठोर जमीन पर तेज दौड़ से बचें</li>
                <li>ठंडे पानी से अधिक पानी न पिलाएं (गर्म होने पर)</li>
                <li>मोटे घोड़ों को डाइट पर रखें</li>
                <li>कुशिंग रोग की नियमित जांच करवाएं (बुजुर्ग घोड़ों में)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> लैमिनाइटिस गंभीर और स्थायी नुकसान कर सकती है। शुरुआती लक्षणों पर तुरंत ध्यान दें। रोकथाम सबसे अच्छा इलाज है। मोटापे से बचाव और आहार नियंत्रण सबसे जरूरी है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}