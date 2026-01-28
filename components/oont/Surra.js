export default function Surra() {
  return (
    <>
      {/* भाग १ - बीमारी की जानकारी */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            सुर्रा - ऊँट
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बीमारी के बारे में:</h3>
              <p className="text-zinc-700 leading-relaxed">
                सुर्रा ऊँटों की एक घातक रक्त परजीवी बीमारी है जो ट्राइपैनोसोमा इवांसी नामक प्रोटोजोआ से होती है। यह चिचड़ी (हॉर्स फ्लाई) और अन्य खून चूसने वाली मक्खियों द्वारा फैलती है। यह रोग तेजी से फैलता है और इलाज न होने पर मृत्यु दर 60-80% तक हो सकती है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">लक्षण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>तेज बुखार जो आता-जाता रहता है (103-106°F)</li>
                <li>गंभीर कमजोरी और सुस्ती</li>
                <li>पलकों, आंखों के नीचे और जबड़े में सूजन</li>
                <li>तेजी से वजन घटना</li>
                <li>पीली श्लेष्मा झिल्लियां (एनीमिया)</li>
                <li>कंपकंपी और लड़खड़ाकर चलना</li>
                <li>त्वचा पर चकत्ते और बालों का झड़ना</li>
                <li>दूध उत्पादन बंद हो जाना</li>
                <li>पेशाब में खून (गंभीर मामलों में)</li>
                <li>गर्भपात (गर्भवती ऊँटों में)</li>
                <li>अंतिम चरण में लकवा और मृत्यु</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">कारण:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>ट्राइपैनोसोमा इवांसी परजीवी (रक्त में रहता है)</li>
                <li>चिचड़ी (टैबनस मक्खी) के काटने से</li>
                <li>अन्य खून चूसने वाली मक्खियां (स्टोमोक्सिस)</li>
                <li>संक्रमित सुई या उपकरणों से</li>
                <li>संक्रमित ऊँट से यौन संपर्क</li>
                <li>वर्षा ऋतु में अधिक फैलता है (मक्खियों की संख्या बढ़ने से)</li>
                <li>जंगली जानवरों से पालतू ऊँटों में फैलना</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">निदान:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>नैदानिक लक्षणों की पहचान (बुखार, सूजन, एनीमिया)</li>
                <li>रक्त की माइक्रोस्कोपी जांच (परजीवी देखना)</li>
                <li>गीम्सा स्टेन वाली ब्लड स्मीयर जांच</li>
                <li>पीसीआर टेस्ट (सबसे सटीक)</li>
                <li>कार्ड एग्लूटिनेशन टेस्ट (CATT)</li>
                <li>हेमेटोक्रिट जांच (एनीमिया की पुष्टि)</li>
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
                ⚠️ महत्वपूर्ण: सुर्रा का शीघ्र निदान और उपचार बेहद जरूरी है। देरी होने पर ऊँट की मृत्यु हो सकती है। तुरंत पशु चिकित्सक को बुलाएं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">दवाइयाँ और इलाज:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">१. विशिष्ट एंटी-ट्राइपैनोसोमल दवाएं (मुख्य इलाज):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>सुरामीन सोडियम (नागानोल)</strong> - 10 mg/kg शरीर भार, IV, धीरे-धीरे, एक बार</li>
                    <li><strong>क्विनापाइरामीन सल्फेट/मिथाइलसल्फेट</strong> - 3-5 mg/kg, SC या IM, एकल खुराक</li>
                    <li><strong>डिमिनाजीन एसिटुरेट (बेरेनिल)</strong> - 3-7 mg/kg, IM, जरूरत पर 2-3 दिन बाद दोहराएं</li>
                    <li><strong>आइसोमेटामिडियम क्लोराइड</strong> - 0.5-1 mg/kg, IM, एकल खुराक</li>
                    <li><strong>मेलार्सोप्रोल</strong> - गंभीर मामलों में, 2-3.6 mg/kg IV, सावधानी से</li>
                    <li><strong>ब्रांड:</strong> Antrycide, Berenil, Samorin, Trypadim</li>
                    <li><strong>नोट:</strong> सुरामीन पहली पसंद है, सबसे प्रभावी और सुरक्षित</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">२. एनीमिया के लिए उपचार:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>आयरन डेक्सट्रान इंजेक्शन</strong> - 10-15 mg/kg, IM, साप्ताहिक 2-3 बार</li>
                    <li><strong>विटामिन B12 (साइनोकोबालामिन)</strong> - 1000-2000 mcg, IM, साप्ताहिक</li>
                    <li><strong>फोलिक एसिड</strong> - 5-10 mg, मुंह से, दैनिक</li>
                    <li><strong>कोबाल्ट-कॉपर मिक्सचर</strong> - 10-20 ml, मुंह से, साप्ताहिक</li>
                    <li><strong>ब्लड ट्रांसफ्यूजन</strong> - अत्यंत गंभीर एनीमिया में 4-6 लीटर</li>
                    <li><strong>ब्रांड:</strong> Feritas, Neurobin, Hemocare</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">३. सहायक देखभाल दवाएं:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>ग्लूकोज सैलाइन (5-10%)</strong> - 5-8 लीटर, IV, कमजोरी और निर्जलीकरण में</li>
                    <li><strong>रिंगर लैक्टेट सॉल्यूशन</strong> - 4-6 लीटर, IV, दैनिक</li>
                    <li><strong>कैल्शियम बोरोग्लूकोनेट (25%)</strong> - 200-400 ml, IV, धीरे-धीरे</li>
                    <li><strong>डेक्सामेथासोन</strong> - 10-20 mg, IM, सूजन कम करने के लिए, 3 दिन</li>
                    <li><strong>एंटीहिस्टामिन</strong> - एलर्जी से बचाव के लिए</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">४. विटामिन और टॉनिक:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>विटामिन A, D, E इंजेक्शन</strong> - 15-20 ml, IM, साप्ताहिक</li>
                    <li><strong>विटामिन C</strong> - 3-5 ग्राम, IV या मुंह से, दैनिक</li>
                    <li><strong>लिवर टॉनिक (सिलीमेरिन)</strong> - 20-30 ml, मुंह से, दो बार दैनिक</li>
                    <li><strong>मल्टीविटामिन पाउडर</strong> - 50 ग्राम, चारे में मिलाकर, दैनिक</li>
                    <li><strong>ब्रांड:</strong> Virbac ADE, Livfit, Hepagen</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">५. बुखार और दर्द निवारक:</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>पैरासिटामोल</strong> - 10-15 mg/kg, मुंह से, हर 12 घंटे</li>
                    <li><strong>फ्लूनिक्सिन मेग्लूमीन</strong> - 1.1 mg/kg, IV या IM, दैनिक</li>
                    <li><strong>मेलोक्सिकैम</strong> - 0.5 mg/kg, मुंह से, दैनिक</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <h4 className="font-semibold text-zinc-800 mb-2">६. प्रोफिलैक्सिस (बचाव के लिए दवा):</h4>
                  <ul className="list-disc list-inside text-zinc-700 space-y-1 ml-4">
                    <li><strong>क्विनापाइरामीन सल्फेट</strong> - 3 mg/kg, IM, हर 3 महीने में (प्रकोप क्षेत्र में)</li>
                    <li><strong>आइसोमेटामिडियम</strong> - 0.5 mg/kg, IM, हर 3-4 महीने</li>
                    <li>वर्षा ऋतु से पहले जरूर दें</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">तत्काल प्राथमिक देखभाल:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li>संक्रमित ऊँट को ठंडी छायादार जगह पर रखें</li>
                <li>पूर्ण आराम दें, कोई काम न कराएं</li>
                <li>हरा चारा, दलिया, गुड़ का पानी दें</li>
                <li>साफ और ताजा पानी भरपूर दें</li>
                <li>मक्खियों से बचाव करें</li>
                <li>अन्य ऊँटों से अलग रखें</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-xl font-semibold text-zinc-800 mb-3">बचाव के उपाय:</h3>
              <ul className="list-disc list-inside text-zinc-700 space-y-2">
                <li><strong>प्रोफिलैक्टिक दवा:</strong> प्रकोप क्षेत्र में हर 3 महीने में क्विनापाइरामीन इंजेक्शन दें</li>
                <li>मक्खी नियंत्रण - साइपरमेथ्रिन या डेल्टामेथ्रिन स्प्रे, साप्ताहिक</li>
                <li>बाड़े में कीटनाशक छिड़काव, हर 15 दिन में</li>
                <li>ऊँटों पर फ्लाई रिपेलेंट लगाएं</li>
                <li>नए ऊँट खरीदने से पहले रक्त जांच करवाएं</li>
                <li>संक्रमित ऊँट को तुरंत अलग करें और इलाज शुरू करें</li>
                <li>सुई और उपकरणों को उबालकर या फिनाइल से साफ करें</li>
                <li>जंगली जानवरों से दूर रखें</li>
                <li>पानी के गड्ढे और नमी वाली जगह साफ रखें (मक्खियों का प्रजनन स्थल)</li>
                <li>पौष्टिक आहार दें, रोग प्रतिरोधक क्षमता बढ़ाएं</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-zinc-800">
                <strong>याद रखें:</strong> सुर्रा अत्यंत घातक रोग है। तेज बुखार, कमजोरी और सूजन के लक्षण दिखते ही तुरंत रक्त जांच करवाएं और उपचार शुरू करें। प्रकोप क्षेत्र में प्रोफिलैक्टिक दवा नियमित रूप से दें। मक्खी नियंत्रण सबसे महत्वपूर्ण बचाव है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}