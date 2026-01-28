export default function Pneumonia() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">
            निमोनिया (Pneumonia) – ऊँट
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                बीमारी के बारे में:
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                निमोनिया ऊँटों की एक गंभीर श्वसन रोग है जिसमें फेफड़ों में
                संक्रमण और सूजन हो जाती है। यह रोग बैक्टीरिया, वायरस या
                सेकेंडरी संक्रमण के कारण होता है और समय पर इलाज न मिलने पर
                मृत्यु तक हो सकती है। ठंड, धूल, लंबी यात्रा और कमजोर प्रतिरक्षा
                इसके प्रमुख जोखिम कारक हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                लक्षण:
              </h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तेज बुखार (104–106°F)</li>
                <li>तेज, कठिन या आवाज के साथ सांस लेना</li>
                <li>नाक से पानी या मवाद निकलना</li>
                <li>खांसी (सूखी या गीली)</li>
                <li>भूख न लगना</li>
                <li>सुस्ती और कमजोरी</li>
                <li>लेटे रहना, चलने में अनिच्छा</li>
                <li>होंठ या जीभ का नीला पड़ना (गंभीर अवस्था)</li>
                <li>दूध उत्पादन में कमी</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                कारण:
              </h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>बैक्टीरिया:</strong> Pasteurella, Mannheimia, Mycoplasma</li>
                <li><strong>वायरस:</strong> श्वसन वायरल संक्रमण</li>
                <li>ठंडी हवा, बारिश, नमी</li>
                <li>लंबी दूरी की यात्रा से तनाव</li>
                <li>धूल भरा वातावरण</li>
                <li>कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>अन्य रोगों के बाद सेकेंडरी इन्फेक्शन</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                निदान:
              </h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>क्लिनिकल लक्षणों के आधार पर</li>
                <li>स्टेथोस्कोप से फेफड़ों की जांच</li>
                <li>रक्त जांच (CBC)</li>
                <li>नाक स्राव का लैब टेस्ट</li>
                <li>एक्स-रे / अल्ट्रासाउंड (यदि उपलब्ध)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* भाग २ - उपचार और बचाव */}
      <div className="bg-zinc-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-700 mb-6">
            उपचार और बचाव
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="font-semibold text-zinc-800">
                ⚠️ चेतावनी: निमोनिया एक जानलेवा रोग है। लक्षण दिखते ही इलाज
                शुरू करें। देरी जानलेवा हो सकती है।
              </p>
            </div>

            {/* दवाइयाँ */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">
                दवाइयाँ और इलाज:
              </h3>

              <div className="space-y-4">

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">
                    1. एंटीबायोटिक (मुख्य इलाज):
                  </h4>
                  <ul className="list-disc list-inside text-zinc-700 ml-4 space-y-1">
                    <li><strong>ऑक्सीटेट्रासाइक्लिन (LA)</strong> – 20 mg/kg, IM, हर 72 घंटे, 3 खुराक</li>
                    <li><strong>सेफ्टियोफर</strong> – 2–4 mg/kg, IM, 3–5 दिन</li>
                    <li><strong>एनरोफ्लोक्सासिन</strong> – 5 mg/kg, IM, 5 दिन</li>
                    <li><strong>टायलोसिन</strong> – 10 mg/kg, IM, 3–5 दिन</li>
                    <li><strong>ब्रांड:</strong> Terramycin LA, Baytril, Excenel</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">
                    2. बुखार और सूजन के लिए:
                  </h4>
                  <ul className="list-disc list-inside text-zinc-700 ml-4 space-y-1">
                    <li><strong>मेलॉक्सिकैम</strong> – 0.5 mg/kg, IM, रोज</li>
                    <li><strong>फ्लुनिक्सिन मेग्लूमिन</strong> – 1.1 mg/kg, IM</li>
                    <li><strong>पैरासिटामोल</strong> – सहायक रूप में</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">
                    3. सांस में राहत के लिए:
                  </h4>
                  <ul className="list-disc list-inside text-zinc-700 ml-4 space-y-1">
                    <li><strong>ब्रोंकोडायलेटर सिरप</strong></li>
                    <li><strong>स्टीम थेरेपी</strong> – दिन में 2 बार</li>
                    <li><strong>नेब्युलाइजेशन</strong> (यदि सुविधा हो)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">
                    4. सपोर्टिव थेरेपी:
                  </h4>
                  <ul className="list-disc list-inside text-zinc-700 ml-4 space-y-1">
                    <li>IV फ्लूइड (डिहाइड्रेशन में)</li>
                    <li>विटामिन B-कॉम्प्लेक्स</li>
                    <li>विटामिन A, D, E</li>
                    <li>मल्टीविटामिन-मिनरल</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>ठंडी हवा और बारिश से बचाएं</li>
                <li>लंबी यात्रा के बाद आराम दें</li>
                <li>धूल-रहित और हवादार बाड़ा</li>
                <li>पौष्टिक आहार और साफ पानी</li>
                <li>कमजोर ऊँटों पर विशेष निगरानी</li>
                <li>समय पर इलाज और पूरा कोर्स</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> निमोनिया में अधूरा इलाज
                सबसे बड़ा खतरा है। एंटीबायोटिक कोर्स पूरा करें,
                भले ही ऊँट 2–3 दिन में ठीक दिखने लगे।
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
