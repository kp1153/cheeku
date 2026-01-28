 export default function PetKeKeede() {
  return (
    <>
      {/* भाग १ */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            पेट के कीड़े (गैस्ट्रोइंटेस्टाइनल परजीवी)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                पेट के कीड़े भेड़-बकरी में सबसे बड़ी समस्या हैं, जो मृत्यु और उत्पादन में कमी का प्रमुख कारण हैं । बारबर पोल वर्म या हेमोनकस कॉन्टोर्टस सबसे खतरनाक परजीवी है । दक्षिण-पूर्वी क्षेत्र में कम से कम 48% फार्मों पर कीड़े सभी प्रकार की दवाओं के प्रति प्रतिरोधी हो चुके हैं ।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>वजन न बढ़ना या लगातार घटना</li>
                <li>खुरदरा, बेजान और मुर्झाया हुआ बाल</li>
                <li>पलकों का रंग सफेद होना (एनीमिया का संकेत - फैमाचा स्कोर 3 से ज्यादा) </li>
                <li>दस्त या कब्ज</li>
                <li>पेट फूला हुआ और "बॉटल जॉ" (जबड़े के नीचे सूजन)</li>
                <li>कमजोरी, सुस्ती और भूख न लगना</li>
                <li>युवा जानवरों में विकास रुकना</li>
                <li>गंभीर मामलों में अचानक मौत</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कीड़ों के प्रकार:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>बारबर पोल वर्म (हेमोनकस)</strong> - रक्तचूषक, सबसे खतरनाक</li>
                <li><strong>ब्राउन स्टोमक वर्म</strong> - पेट में रहता है</li>
                <li><strong>आंत के कीड़े</strong> - दस्त का कारण</li>
                <li><strong>फेफड़ों के कीड़े</strong> - खाँसी और साँस की तकलीफ</li>
                <li><strong>टेपवर्म (फीताकृमि)</strong> - कम नुकसान देता है</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <p className="text-zinc-700 leading-relaxed">
                मल परीक्षण (एफईसी - फीकल एग काउंट) करवाएँ। प्रभावी इलाज के लिए 95% या अधिक अंडे कम होने चाहिए । फैमाचा स्कोरिंग सिस्टम से पलकों का रंग देखें (1-5 स्कोर)।
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
                महत्वपूर्ण: अपने फार्म पर कौन सी दवा प्रभावी है, यह जानना जरूरी है। कई जगहों पर कीड़े दवाओं के प्रति प्रतिरोधी हो चुके हैं ।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कृमिनाशक दवाइयाँ:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. बेंजिमिडाजोल समूह ("सफेद दवाएँ"):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>फेनबेंडाजोल (सेफगार्ड, पैनाकर)</strong> - 10 मिग्रा प्रति किलो, मुँह से दें। 12-24 घंटे उपवास रखें, फिर दो खुराक 24 घंटे के अंतर पर । मांस के लिए 16 दिन, दूध के लिए 4 दिन इंतजार करें।</li>
                    <li><strong>एल्बेंडाजोल (वैल्बाजेन)</strong> - 20 मिग्रा प्रति किलो, मुँह से । गर्भवती में मत दें। टेपवर्म और लीवर फ्लूक पर भी काम करता है। मांस के लिए 9 दिन, दूध के लिए 7 दिन इंतजार करें।</li>
                    <li><strong>नोट:</strong> यह सबसे पुराना समूह है और इसमें प्रतिरोध सबसे ज्यादा है </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. मैक्रोसाइक्लिक लैक्टोन्स:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>आइवरमेक्टिन (आइवोमेक ड्रेंच)</strong> - 0.4 मिग्रा प्रति किलो, मुँह से । भेड़ वाला ड्रेंच इस्तेमाल करें, इंजेक्शन वाला नहीं। मांस के लिए 14 दिन, दूध के लिए 9 दिन इंतजार करें।</li>
                    <li><strong>मोक्सीडेक्टिन (साइडेक्टिन ड्रेंच)</strong> - 0.4 मिग्रा प्रति किलो, मुँह से। सिर्फ भेड़ का ओरल ड्रेंच इस्तेमाल करें । मांस के लिए 23 दिन, दूध के लिए 60 दिन इंतजार करें।</li>
                    <li><strong>नोट:</strong> मोक्सीडेक्टिन में प्रतिरोध तेजी से बढ़ रहा है क्योंकि यह आइवरमेक्टिन जैसा ही है </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. इमिडाजोथियाजोल (सबसे प्रभावी):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>लेवामिसोल (प्रोहिबिट, लेवासोल, ट्रैमिसोल)</strong> - 12 मिग्रा प्रति किलो, मुँह से । मध्य-अटलांटिक क्षेत्र के अधिकांश फार्मों पर यह सबसे प्रभावी है । वजन ध्यान से नापें। मांस के लिए 10 दिन, दूध के लिए 4 दिन इंतजार करें।</li>
                    <li><strong>मोरान्टेल (रुमाटेल)</strong> - 10 मिग्रा प्रति किलो । चारे में मिलाकर दें। मांस के लिए 30 दिन, दूध के लिए कोई प्रतीक्षा नहीं।</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. विशेष दवाएँ:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>क्लोसैन्टेल</strong> - बारबर पोल वर्म के लिए विशेष रूप से प्रभावी</li>
                    <li><strong>प्राजिक्वांटेल</strong> - टेपवर्म के लिए</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">महत्वपूर्ण सावधानियाँ:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>भेड़-बकरी दवाओं को जल्दी मेटाबोलाइज करते हैं, इसलिए खुराक गायों से ज्यादा चाहिए </li>
                <li>गाय के पोर-ऑन (त्वचा पर लगाने वाले) कभी मत इस्तेमाल करें </li>
                <li>जानवर का सही वजन नापकर ही दवा दें</li>
                <li>12-24 घंटे उपवास रखने से दवा ज्यादा प्रभावी होती है</li>
                <li>गर्भवती जानवरों में कुछ दवाएँ सुरक्षित नहीं हैं</li>
                <li>मांस और दूध की प्रतीक्षा अवधि जरूर मानें</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव और प्रबंधन:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>चयनात्मक डीवर्मिंग:</strong> सिर्फ उन्हीं जानवरों को दवा दें जिन्हें जरूरत है (फैमाचा स्कोर 3 से ज्यादा)</li>
                <li><strong>घुमाव चराई:</strong> चरागाह को बदल-बदलकर चराएँ (2-3 सप्ताह के बाद)</li>
                <li>गीली और दलदली जगह से बचें</li>
                <li>साफ पानी और चारा दें (जमीन से ऊपर)</li>
                <li>नए जानवर को 14 दिन अलग रखें और डीवर्मिंग करके ही झुंड में मिलाएँ </li>
                <li>अधिक भीड़ न रखें</li>
                <li>पौष्टिक आहार दें (प्रतिरोधक क्षमता बढ़ाने के लिए)</li>
                <li>एक ही दवा बार-बार मत दें, प्रतिरोध बढ़ता है </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> पहले फीकल एग काउंट टेस्ट करवाएँ और देखें कि आपके फार्म पर कौन सी दवा काम कर रही है । अंधाधुंध डीवर्मिंग न करें, इससे प्रतिरोध बढ़ता है। पशु चिकित्सक की सलाह लें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}