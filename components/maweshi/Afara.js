"use client";
import { useState } from 'react';

export default function Afara() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            अफरा रोग (पेट फूलना)
          </h2>
          <p className="text-xl text-gray-700">
            पेट में गैस भरना - जानलेवा हो सकता है, तुरंत इलाज करें
          </p>
        </div>

        {/* मुख्य कंटेंट */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* लक्षण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पेट का बायां हिस्सा फूलना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बेचैनी और घबराहट</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बार-बार लेटना और उठना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना-पीना बंद करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• जुगाली न करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• सांस लेने में तकलीफ</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पेट पर थपथपाने से ड्रम जैसी आवाज</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• लार गिरना और मुंह से झाग</p>
              </div>
            </div>
          </div>

          {/* कारण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• अधिक हरा चारा खा लेना (खासकर बरसीम, लूसर्न)</li>
                <li>• गीला या ओस वाला चारा खाना</li>
                <li>• अधिक दाना या सड़ा हुआ चारा</li>
                <li>• गेहूं का भूसा ज्यादा खा लेना</li>
                <li>• पेट में किसी चीज का अटक जाना</li>
                <li>• अचानक चारा बदलना</li>
              </ul>
            </div>
          </div>
          {/* इलाज और दवाएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">टिम्पोल</td>
                    <td className="p-3">तरल दवा</td>
                    <td className="p-3">१००-२०० मिली</td>
                    <td className="p-3">गैस निकालने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ब्लोटोसिल</td>
                    <td className="p-3">तरल दवा</td>
                    <td className="p-3">१००-१५० मिली</td>
                    <td className="p-3">गैस और अफरा दूर करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">तारपीन का तेल</td>
                    <td className="p-3">तेल</td>
                    <td className="p-3">१००-२०० मिली</td>
                    <td className="p-3">गैस निकालने और पाचन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सरसों का तेल</td>
                    <td className="p-3">तेल</td>
                    <td className="p-3">२५०-५०० मिली</td>
                    <td className="p-3">पाचन तंत्र सुधारने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पाचक चूर्ण</td>
                    <td className="p-3">चूर्ण</td>
                    <td className="p-3">५०-१०० ग्राम</td>
                    <td className="p-3">पाचन सुधारने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मैग्नीशियम सल्फेट</td>
                    <td className="p-3">नमक</td>
                    <td className="p-3">२५०-५०० ग्राम</td>
                    <td className="p-3">पेट साफ करने के लिए</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* घरेलू उपचार */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🏠</span>
              घरेलू उपचार (हल्के अफरे में)
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-800">
                <li>• सरसों का तेल २५० मिली मुंह में डालें</li>
                <li>• हींग १०-२० ग्राम पानी में घोलकर पिलाएं</li>
                <li>• अजवाइन ५० ग्राम पानी में उबालकर पिलाएं</li>
                <li>• नीम की पत्ती पीसकर १०० ग्राम खिलाएं</li>
                <li>• पशु को चलाते रहें (गैस निकलने में मदद)</li>
                <li>• ठंडा पानी पेट पर डालें</li>
              </ul>
            </div>
          </div>

          {/* बचाव के उपाय */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ हरा चारा धीरे-धीरे बढ़ाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ गीला या ओस वाला चारा न दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ अचानक चारा न बदलें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ खाने से पहले सूखा चारा दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पानी हमेशा साफ रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित व्यायाम करवाएं</p>
              </div>
            </div>
          </div>

          {/* इमरजेंसी संकेत */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              तुरंत डॉक्टर से संपर्क करें यदि:
            </h3>
            <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500">
              <ul className="space-y-2 text-gray-800 font-medium">
                <li>• पेट बहुत ज्यादा फूल गया हो</li>
                <li>• सांस लेने में बहुत तकलीफ हो</li>
                <li>• पशु गिरने लगे या बेहोश हो</li>
                <li>• घरेलू इलाज से १-२ घंटे में आराम न हो</li>
                <li>• मुंह नीला पड़ने लगे</li>
                <li>• बहुत तेज बेचैनी हो</li>
              </ul>
            </div>
            <div className="mt-4 bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-900 font-semibold">
                ⚡ नोट: गंभीर अफरे में ट्रोकार से गैस निकालनी पड़ती है - यह सिर्फ डॉक्टर ही कर सकते हैं!
              </p>
            </div>
          </div>

          {/* परामर्श बटन */}
          <div className="text-center mt-8">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}