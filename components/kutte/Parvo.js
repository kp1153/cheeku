"use client";
import { useState } from 'react';

export default function Parvo() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            पार्वो वायरस (कुत्तों में)
          </h2>
          <p className="text-xl text-gray-700">
            बहुत खतरनाक बीमारी - तुरंत इलाज जरूरी
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खूनी दस्त (बहुत बदबूदार)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बार-बार उल्टी</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• तेज बुखार</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना-पीना बंद</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बहुत कमजोरी</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पानी की कमी (डिहाइड्रेशन)</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• वायरल संक्रमण (अत्यधिक संक्रामक)</li>
                <li>• संक्रमित कुत्ते के मल से फैलता है</li>
                <li>• पिल्लों में ज्यादा खतरा (२ माह से १ साल)</li>
                <li>• टीकाकरण न होना</li>
                <li>• कमजोर रोग प्रतिरोधक क्षमता</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-red-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">आईवी ड्रिप</td>
                    <td className="p-3">तरल पदार्थ</td>
                    <td className="p-3">डॉक्टर के अनुसार</td>
                    <td className="p-3">पानी की कमी पूरी करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मेट्रोनिडाजोल</td>
                    <td className="p-3">इंजेक्शन/गोली</td>
                    <td className="p-3">१० मिग्रा/किलो</td>
                    <td className="p-3">संक्रमण रोकने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सेफ्ट्रियाक्सोन</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">२० मिग्रा/किलो</td>
                    <td className="p-3">एंटीबायोटिक</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ओंडानसेट्रोन</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">०.५ मिग्रा/किलो</td>
                    <td className="p-3">उल्टी रोकने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ओआरएस</td>
                    <td className="p-3">घोल</td>
                    <td className="p-3">थोड़ा-थोड़ा बार-बार</td>
                    <td className="p-3">पानी की कमी के लिए</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ समय पर टीकाकरण (६, ९, १२ सप्ताह)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पिल्लों को बाहर न ले जाएं (टीके से पहले)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ साफ-सफाई का ध्यान रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ संक्रमित कुत्तों से दूर रखें</p>
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
                <li>• खूनी दस्त दिखे</li>
                <li>• बार-बार उल्टी हो</li>
                <li>• पिल्ला बहुत कमजोर हो गया</li>
                <li>• पानी भी न पी पाए</li>
                <li>• तेज बुखार हो</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}