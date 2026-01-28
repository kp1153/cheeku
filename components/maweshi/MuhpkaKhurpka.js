"use client";
import { useState } from 'react';

export default function MuhpkaKhurpka() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            मुंहपका-खुरपका रोग
          </h2>
          <p className="text-xl text-gray-700">
            अत्यधिक संक्रामक वायरल बीमारी - तुरंत इलाज जरूरी
          </p>
        </div>

        {/* मुख्य कंटेंट */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* लक्षण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• तेज बुखार (१०४-१०६°F)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• मुंह में छाले और लार गिरना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खुरों में घाव और लंगड़ापन</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• थन पर छाले</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना-पीना बंद करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• दूध उत्पादन में भारी गिरावट</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• मुंह चपचपाना और आवाज करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• कमजोरी और सुस्ती</p>
              </div>
            </div>
          </div>

          {/* कारण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• वायरल संक्रमण (अत्यधिक संक्रामक)</li>
                <li>• संक्रमित पशु के संपर्क में आना</li>
                <li>• संक्रमित चारा या पानी</li>
                <li>• हवा के माध्यम से फैलाव</li>
                <li>• टीकाकरण न होना</li>
                <li>• गंदगी और भीड़-भाड़ वाले स्थान</li>
              </ul>
            </div>
          </div>
          {/* इलाज और दवाएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">अवधि</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मेलोनेक्स</td>
                    <td className="p-3">इंजेक्शन (बुखार)</td>
                    <td className="p-3">१५-२० मिली</td>
                    <td className="p-3">३-५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पैरासिटामोल बोलस</td>
                    <td className="p-3">गोली (बुखार)</td>
                    <td className="p-3">२-३ गोली</td>
                    <td className="p-3">३ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ऑक्सीटेट्रासाइक्लिन</td>
                    <td className="p-3">इंजेक्शन (संक्रमण)</td>
                    <td className="p-3">१० मिली</td>
                    <td className="p-3">५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">विटामिन बी-कॉम्प्लेक्स</td>
                    <td className="p-3">इंजेक्शन (ताकत)</td>
                    <td className="p-3">१० मिली</td>
                    <td className="p-3">५-७ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ग्लिसरीन बोरेक्स</td>
                    <td className="p-3">मुंह में लगाने की</td>
                    <td className="p-3">दिन में २-३ बार</td>
                    <td className="p-3">जब तक ठीक हो</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पोटाशियम परमैंगनेट</td>
                    <td className="p-3">खुर धोने की</td>
                    <td className="p-3">पतला घोल</td>
                    <td className="p-3">रोज</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">कॉपर सल्फेट</td>
                    <td className="p-3">खुर में लगाने की</td>
                    <td className="p-3">पाउडर या पेस्ट</td>
                    <td className="p-3">रोज</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* बचाव के उपाय */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित टीकाकरण (साल में २ बार)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ संक्रमित पशु को अलग रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ साफ-सफाई का विशेष ध्यान</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नए पशु को अलग रखकर जांचें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ चारा-पानी साफ रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ बाहरी लोगों का आना-जाना कम करें</p>
              </div>
            </div>
          </div>

          {/* विशेष सावधानियां */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚡</span>
              विशेष सावधानियां
            </h3>
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-400">
              <ul className="space-y-2 text-gray-800 font-medium">
                <li>• यह बीमारी बहुत तेजी से फैलती है</li>
                <li>• संक्रमित पशु को तुरंत अलग करें</li>
                <li>• उपयोग के बर्तन अलग रखें</li>
                <li>• पशु चिकित्सा विभाग को सूचित करें</li>
                <li>• मरे पशु को गहरा दबाएं या जलाएं</li>
                <li>• टीकाकरण सबसे बेहतर बचाव है</li>
              </ul>
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
                <li>• तेज बुखार (१०४°F से ऊपर)</li>
                <li>• पशु बिल्कुल खाना-पीना बंद कर दे</li>
                <li>• सांस लेने में दिक्कत हो</li>
                <li>• दिल की धड़कन बहुत तेज हो</li>
                <li>• पशु लड़खड़ाने लगे</li>
              </ul>
            </div>
          </div>

          {/* परामर्श बटन */}
          <div className="text-center mt-8">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}