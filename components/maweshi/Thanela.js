"use client";
import { useState } from 'react';

export default function Thanela() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            थनैला रोग
          </h2>
          <p className="text-xl text-gray-700">
            गाय-भैंस में थन की सूजन और संक्रमण
          </p>
        </div>

        {/* मुख्य कंटेंट */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* लक्षण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• थन में सूजन और गर्माहट</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• दूध में खून या मवाद</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• दूध में दाने या झिल्ली</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• दूध उत्पादन में कमी</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• थन छूने पर दर्द</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बुखार (गंभीर मामलों में)</p>
              </div>
            </div>
          </div>

          {/* कारण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• गंदे और गीले फर्श पर रहना</li>
                <li>• दूध निकालते समय साफ-सफाई की कमी</li>
                <li>• जीवाणु संक्रमण</li>
                <li>• थन में चोट या घाव</li>
                <li>• अधूरा दूध निकालना</li>
              </ul>
            </div>
          </div>
          {/* इलाज और दवाएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">अवधि</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मास्टिलेप</td>
                    <td className="p-3">थन में डालने वाली</td>
                    <td className="p-3">प्रभावित थन में १ सिरिंज</td>
                    <td className="p-3">३-५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">टोपेंड</td>
                    <td className="p-3">थन में डालने वाली</td>
                    <td className="p-3">प्रभावित थन में १ सिरिंज</td>
                    <td className="p-3">३ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">जेंटामाइसिन</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">५-१० मिली</td>
                    <td className="p-3">५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सेफ्टीओफर</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">१ मिली प्रति ५० किलो</td>
                    <td className="p-3">३-५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मेलोनेक्स</td>
                    <td className="p-3">इंजेक्शन (दर्द निवारक)</td>
                    <td className="p-3">१०-१५ मिली</td>
                    <td className="p-3">३ दिन</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* बचाव के उपाय */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ दूध निकालने से पहले थन धोएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ साफ और सूखा बिछावन रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पूरा दूध निकालें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ दूध निकालने के बाद थन साफ करें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित थन की जांच करें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ सूखे पशु को थन में दवा दें</p>
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
                <li>• तेज बुखार (१०४°F से ऊपर)</li>
                <li>• थन में गलन या काला रंग</li>
                <li>• पशु खाना-पीना बंद कर दे</li>
                <li>• दूध में बदबू आए</li>
                <li>• २ दिन में सुधार न हो</li>
              </ul>
            </div>
          </div>

          {/* परामर्श बटन */}
          <div className="text-center mt-8">
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}