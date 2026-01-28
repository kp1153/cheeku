export default function Khujli() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            खुजली (मैंज/स्कैबीज) - ऊँट
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                खुजली या मैंज ऊँटों की एक अत्यंत संक्रामक त्वचा रोग है जो सूक्ष्म परजीवी कीड़ों (माइट्स) के कारण होता है। यह त्वचा की सतह पर या भीतर रहकर तीव्र खुजली, पपड़ी और बालों का झड़ना पैदा करता है। सार्कोप्टिक मैंज सबसे गंभीर प्रकार है और तेजी से पूरे झुंड में फैल सकता है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तीव्र खुजली, खासकर रात में और गर्म मौसम में</li>
                <li>त्वचा पर पपड़ी और मोटी परतें (क्रस्ट)</li>
                <li>बालों का झड़ना, गंजे धब्बे बनना</li>
                <li>त्वचा का मोटा होना और सिकुड़ना (हाथी की त्वचा जैसा)</li>
                <li>त्वचा पर लालिमा और सूजन</li>
                <li>खरोंचने से घाव और रक्तस्राव</li>
                <li>बेचैनी और नींद में कमी</li>
                <li>वजन घटना और कमजोरी</li>
                <li>दूध उत्पादन में कमी (30-50%)</li>
                <li>पहले सिर, गर्दन, पैर से शुरू होकर पूरे शरीर में फैलना</li>
                <li>गंभीर मामलों में त्वचा से दुर्गंध</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>सार्कोप्टिक मैंज:</strong> सार्कोप्टेस स्कैबी माइट (त्वचा के अंदर घुसकर रहता है)</li>
                <li><strong>सोरोप्टिक मैंज:</strong> सोरोप्टेस माइट (त्वचा की सतह पर)</li>
                <li><strong>कोरियोप्टिक मैंज:</strong> कोरियोप्टेस माइट (पैरों में)</li>
                <li>संक्रमित ऊँट से सीधा संपर्क</li>
                <li>संक्रमित बिस्तर, रस्सी, कंबल से</li>
                <li>संक्रमित बाड़े और उपकरणों से</li>
                <li>भीड़भाड़ और खराब स्वच्छता</li>
                <li>कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>कुपोषण और विटामिन की कमी</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>त्वचा की नैदानिक जांच (खुजली, पपड़ी, गंजापन)</li>
                <li>त्वचा स्क्रैपिंग टेस्ट (माइक्रोस्कोप से माइट्स देखना)</li>
                <li>पपड़ी का पोटैशियम हाइड्रॉक्साइड (KOH) टेस्ट</li>
                <li>त्वचा बायोप्सी (गंभीर मामलों में)</li>
                <li>रक्त जांच (एलर्जी और संक्रमण की पुष्टि)</li>
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
                ⚠️ महत्वपूर्ण: खुजली अत्यधिक संक्रामक है। संक्रमित ऊँट को तुरंत अलग करें और पूरे झुंड का इलाज एक साथ करें। अधूरा इलाज से दोबारा संक्रमण हो सकता है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. एंटी-पैरासिटिक इंजेक्शन (मुख्य इलाज):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>आइवरमेक्टिन</strong> - 200-300 mcg/kg शरीर भार, SC, 14 दिन बाद दोहराएं (कम से कम 2-3 खुराक)</li>
                    <li><strong>डोरामेक्टिन</strong> - 300 mcg/kg, SC या IM, 14 दिन बाद दोहराएं</li>
                    <li><strong>मोक्सीडेक्टिन</strong> - 200 mcg/kg, SC, 14 दिन बाद दोहराएं</li>
                    <li><strong>एबामेक्टिन</strong> - 200 mcg/kg, SC, 14 दिन बाद दोहराएं</li>
                    <li><strong>ब्रांड:</strong> Ivomec, Noromectin, Dectomax, Bimectin</li>
                    <li><strong>नोट:</strong> एक ही खुराक काफी नहीं, कम से कम 2-3 बार जरूर दें</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. बाहरी स्प्रे और डिप (त्वचा पर लगाने के लिए):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>साइपरमेथ्रिन स्प्रे (10%)</strong> - पूरे शरीर पर, सप्ताह में 2 बार, 4-6 सप्ताह</li>
                    <li><strong>डेल्टामेथ्रिन स्प्रे</strong> - पूरे शरीर पर, सप्ताह में 2 बार</li>
                    <li><strong>अमिट्राज (Amitraz) डिप/स्प्रे (12.5%)</strong> - 500 ppm घोल, पूरे शरीर पर नहलाएं, हर 7-10 दिन</li>
                    <li><strong>सल्फर (गंधक) पाउडर (5-10%)</strong> - तेल में मिलाकर प्रभावित हिस्सों पर लगाएं</li>
                    <li><strong>फिप्रोनिल स्प्रे</strong> - प्रभावित क्षेत्रों पर, साप्ताहिक</li>
                    <li><strong>ब्रांड:</strong> Butox, Taktic, Ectomec Spray, Negasunt</li>
                    <li><strong>नोट:</strong> स्प्रे करने से पहले पपड़ी हटाएं, दवा त्वचा तक पहुंचनी चाहिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. त्वचा की सफाई और उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>बेंजोइल पेरोक्साइड शैम्पू (2.5-5%)</strong> - पपड़ी हटाने के लिए, हर 3-4 दिन</li>
                    <li><strong>क्लोरहेक्सिडीन शैम्पू (4%)</strong> - त्वचा संक्रमण से बचाव, हर 5 दिन</li>
                    <li><strong>सल्फर सोप/शैम्पू</strong> - प्रभावित हिस्सों पर, हर 3 दिन</li>
                    <li><strong>नीम तेल या करंज तेल</strong> - प्राकृतिक एंटी-पैरासिटिक, रोज लगाएं</li>
                    <li><strong>सल्फर + लाइम सल्फर डिप</strong> - पारंपरिक उपचार, प्रभावी</li>
                    <li><strong>ब्रांड:</strong> Sebazole, Chlorxy, Neem Gold</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. द्वितीयक संक्रमण के लिए एंटीबायोटिक्स:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (LA)</strong> - 20 mg/kg, IM, हर 3 दिन, 3-4 खुराक</li>
                    <li><strong>एनरोफ्लोक्सासिन</strong> - 5 mg/kg, IM, दैनिक, 5-7 दिन</li>
                    <li><strong>सेफ्टियोफर</strong> - 2 mg/kg, IM, दैनिक, 3-5 दिन</li>
                    <li><strong>ब्रांड:</strong> Terramycin LA, Baytril, Excenel</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. खुजली और सूजन कम करने के लिए:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>एंटीहिस्टामिन (क्लोरफेनिरामाइन)</strong> - 0.5 mg/kg, IM, दिन में 2 बार</li>
                    <li><strong>डेक्सामेथासोन</strong> - 5-10 mg, IM, पहले 3 दिन (गंभीर खुजली में)</li>
                    <li><strong>फिनाइलब्यूटाजोन</strong> - 4 mg/kg, मुंह से, दैनिक</li>
                    <li><strong>हाइड्रोकॉर्टिसोन क्रीम</strong> - स्थानीय रूप से प्रभावित हिस्सों पर</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. पोषण और इम्यूनिटी:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>विटामिन A, D, E इंजेक्शन</strong> - 15-20 ml, IM, साप्ताहिक</li>
                    <li><strong>जिंक सल्फेट</strong> - 500 mg, मुंह से, दैनिक (त्वचा स्वास्थ्य के लिए)</li>
                    <li><strong>बायोटिन</strong> - 20 mg, मुंह से, दैनिक</li>
                    <li><strong>ओमेगा-3 फैटी एसिड सप्लीमेंट</strong> - त्वचा की मरम्मत के लिए</li>
                    <li><strong>मल्टीविटामिन-मिनरल पाउडर</strong> - 50 ग्राम, चारे में, दैनिक</li>
                    <li><strong>ब्रांड:</strong> Tribivet, Zincomin, Megavit</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">७. पारंपरिक/घरेलू उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>नीम की पत्तियों का काढ़ा</strong> - त्वचा धोने के लिए, दैनिक</li>
                    <li><strong>हल्दी + सरसों का तेल पेस्ट</strong> - प्रभावित हिस्सों पर लगाएं</li>
                    <li><strong>तंबाकू का पानी</strong> - 250 ग्राम तंबाकू + 5 लीटर पानी, उबालकर स्प्रे करें</li>
                    <li><strong>गंधक + सरसों तेल</strong> - मिलाकर त्वचा पर लगाएं</li>
                    <li><strong>करंज तेल + नींबू का रस</strong> - बराबर मात्रा में मिलाकर लगाएं</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>संक्रमित ऊँट को तुरंत अलग करें</li>
                <li>सभी पपड़ी और मोटी परत को ब्रश से हटाएं</li>
                <li>गर्म पानी और शैम्पू से त्वचा धोएं</li>
                <li>एंटी-पैरासिटिक स्प्रे पूरे शरीर पर करें</li>
                <li>कान, पैर की उंगलियों के बीच भी दवा लगाएं</li>
                <li>पुराने बिस्तर, रस्सी जला दें</li>
                <li>पौष्टिक आहार दें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>नियमित निरीक्षण:</strong> सभी ऊँटों की त्वचा साप्ताहिक जांच करें</li>
                <li><strong>नए ऊँट की क्वारंटाइन:</strong> 21 दिन अलग रखें और जांच करें</li>
                <li><strong>प्रोफिलैक्टिक स्प्रे:</strong> साइपरमेथ्रिन, महीने में 1-2 बार</li>
                <li><strong>बाड़े की सफाई:</strong> हर 15 दिन में अच्छे से साफ करें और कीटाणुनाशक से धोएं</li>
                <li><strong>उपकरणों की सफाई:</strong> ब्रश, रस्सी, कंबल को फिनाइल या उबलते पानी से धोएं</li>
                <li>भीड़भाड़ से बचें, हवादार बाड़ा रखें</li>
                <li>पौष्टिक आहार दें, विटामिन-मिनरल की कमी न होने दें</li>
                <li>बरसात के मौसम में विशेष सावधानी बरतें</li>
                <li>झुंड का इलाज एक साथ करें, एक-दो ऊँट का नहीं</li>
                <li>इलाज पूरा करें, बीच में न छोड़ें</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> खुजली का पूर्ण इलाज में 4-6 सप्ताह लग सकते हैं। धैर्य रखें और नियमित उपचार जारी रखें। एक ही इंजेक्शन या स्प्रे से माइट्स पूरी तरह नहीं मरते। कम से कम 2-3 बार इलाज दोहराना जरूरी है। पूरे झुंड का एक साथ इलाज करें, वर्ना दोबारा संक्रमण हो जाएगा।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}