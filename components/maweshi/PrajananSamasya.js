"use client";
import { useState } from 'react';

export default function PrajananSamasya() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            प्रजनन समस्याएं
          </h2>
          <p className="text-xl text-gray-700">
            गर्मी न आना, रुका हुआ जेर, बांझपन का इलाज
          </p>
        </div>

        {/* मुख्य कंटेंट */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* मुख्य समस्याएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              मुख्य समस्याएं
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• गर्मी न आना (मद न आना)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• बार-बार गर्मी आना (गर्भ न ठहरना)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• रुका हुआ जेर (नाल न गिरना)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• गर्भपात हो जाना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• बच्चेदानी बाहर आना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold">• सफेद पानी आना (ल्यूकोरिया)</p>
              </div>
            </div>
          </div>

          {/* कारण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• कमजोरी और कुपोषण</li>
                <li>• विटामिन और खनिज की कमी</li>
                <li>• गर्भाशय में संक्रमण</li>
                <li>• हार्मोन असंतुलन</li>
                <li>• गलत समय पर गर्भाधान</li>
                <li>• अंडाशय में सिस्ट (गांठ)</li>
                <li>• ब्यांत के समय चोट लगना</li>
              </ul>
            </div>
          </div>
          {/* इलाज और दवाएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-purple-700 text-white">
                    <th className="p-3 text-left">समस्या</th>
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">रुका हुआ जेर</td>
                    <td className="p-3">ऑक्सीटोसिन इंजेक्शन</td>
                    <td className="p-3">२०-३० यूनिट</td>
                    <td className="p-3">जेर निकालने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">गर्मी न आना</td>
                    <td className="p-3">जीपीजी इंजेक्शन</td>
                    <td className="p-3">डॉक्टर के अनुसार</td>
                    <td className="p-3">हार्मोन संतुलन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">गर्मी न आना</td>
                    <td className="p-3">पीजीएफ२अल्फा</td>
                    <td className="p-3">२ इंजेक्शन (११ दिन के अंतर पर)</td>
                    <td className="p-3">गर्मी लाने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">संक्रमण</td>
                    <td className="p-3">सेफ्टीओफर इंजेक्शन</td>
                    <td className="p-3">१ मिली प्रति ५० किलो</td>
                    <td className="p-3">गर्भाशय संक्रमण</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सफेद पानी</td>
                    <td className="p-3">मेट्रोनिडाजोल बोलस</td>
                    <td className="p-3">गर्भाशय में डालने की</td>
                    <td className="p-3">संक्रमण साफ करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">कमजोरी</td>
                    <td className="p-3">कैल्शियम बोरोग्लूकोनेट</td>
                    <td className="p-3">४५० मिली (नस में)</td>
                    <td className="p-3">ताकत के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पोषण</td>
                    <td className="p-3">मिनरल मिक्सचर</td>
                    <td className="p-3">५०-१०० ग्राम रोज</td>
                    <td className="p-3">विटामिन-खनिज पूर्ति</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* कृत्रिम गर्भाधान की जानकारी */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔬</span>
              कृत्रिम गर्भाधान (एआई) की सही जानकारी
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-800">
                <li><strong>सही समय:</strong> गर्मी शुरू होने के १२-१८ घंटे बाद</li>
                <li><strong>पहचान:</strong> पशु बेचैन हो, बार-बार पेशाब करे, दूसरे पशुओं पर चढ़े</li>
                <li><strong>दोहराना:</strong> अगर पहली बार गर्भ न ठहरे तो १२ घंटे बाद दोबारा</li>
                <li><strong>गुणवत्ता:</strong> अच्छी नस्ल का बीज चुनें</li>
                <li><strong>सफाई:</strong> गर्भाधान से पहले साफ-सफाई जरूरी</li>
              </ul>
            </div>
          </div>

          {/* बचाव के उपाय */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पौष्टिक आहार दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित व्यायाम करवाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ मिनरल मिक्सचर नियमित दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ साफ-सफाई का ध्यान रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ गर्मी का सही समय पहचानें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ प्रशिक्षित एआई तकनीशियन बुलाएं</p>
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
                <li>• ब्यांत के २४ घंटे बाद भी जेर न गिरे</li>
                <li>• गर्भाशय बाहर निकल आए</li>
                <li>• बदबूदार स्राव आए</li>
                <li>• तेज बुखार हो</li>
                <li>• लगातार ३-४ बार गर्भ न ठहरे</li>
                <li>• ६ महीने से ज्यादा गर्मी न आए</li>
              </ul>
            </div>
          </div>

          {/* परामर्श बटन */}
          <div className="text-center mt-8">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}