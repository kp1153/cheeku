"use client";
import { useState } from 'react';

export default function SardiJukam() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            सर्दी-जुकाम (श्वसन संक्रमण)
          </h2>
          <p className="text-xl text-gray-700">
            बिल्लियों में नाक-गला संक्रमण
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बार-बार छींकना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• नाक से पानी या मवाद</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• आंखों से पानी आना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना-पीना कम करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बुखार और सुस्ती</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• सांस लेने में आवाज</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• वायरल संक्रमण (फेलाइन हर्पीस, कैलिसी वायरस)</li>
                <li>• कमजोर रोग प्रतिरोधक क्षमता</li>
                <li>• ठंड और नमी</li>
                <li>• संक्रमित बिल्ली के संपर्क में आना</li>
                <li>• टीकाकरण न होना</li>
              </ul>
            </div>
          </div>

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
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">डॉक्सीसाइक्लिन</td>
                    <td className="p-3">गोली/सिरप</td>
                    <td className="p-3">५ मिग्रा/किलो</td>
                    <td className="p-3">एंटीबायोटिक</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">एल-लाइसिन</td>
                    <td className="p-3">पाउडर/पेस्ट</td>
                    <td className="p-3">२५०-५०० मिग्रा रोज</td>
                    <td className="p-3">रोग प्रतिरोधक बढ़ाने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">आई ड्रॉप</td>
                    <td className="p-3">बूंदें</td>
                    <td className="p-3">दिन में ३-४ बार</td>
                    <td className="p-3">आंखों के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">स्टीम थेरेपी</td>
                    <td className="p-3">घरेलू</td>
                    <td className="p-3">दिन में २-३ बार</td>
                    <td className="p-3">नाक खोलने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">विटामिन सप्लीमेंट</td>
                    <td className="p-3">सिरप</td>
                    <td className="p-3">डॉक्टर के अनुसार</td>
                    <td className="p-3">ताकत बढ़ाने को</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ समय पर टीकाकरण</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ गर्म और सूखी जगह रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पौष्टिक आहार दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ संक्रमित बिल्लियों से दूर रखें</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              तुरंत डॉक्टर से संपर्क करें यदि:
            </h3>
            <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500">
              <ul className="space-y-2 text-gray-800 font-medium">
                <li>• बिल्कुल खाना-पीना बंद कर दे</li>
                <li>• सांस लेने में बहुत तकलीफ हो</li>
                <li>• तेज बुखार हो</li>
                <li>• ३-४ दिन में सुधार न हो</li>
              </ul>
            </div>
          </div>

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