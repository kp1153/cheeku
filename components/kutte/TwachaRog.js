"use client";
import { useState } from 'react';

export default function TwachaRog() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            त्वचा रोग (खुजली और फंगल)
          </h2>
          <p className="text-xl text-gray-700">
            त्वचा संक्रमण और एलर्जी का इलाज
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• लगातार खुजली</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• गोल-गोल गंजे पैच</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• त्वचा लाल और सूजी हुई</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बाल झड़ना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• त्वचा से बदबू</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पपड़ी या पपड़ी जैसी त्वचा</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• फंगल इन्फेक्शन (रिंगवर्म)</li>
                <li>• एलर्जी (खाने से या वातावरण से)</li>
                <li>• बैक्टीरियल संक्रमण</li>
                <li>• घुन (माइट्स) का संक्रमण</li>
                <li>• कमजोर रोग प्रतिरोधक क्षमता</li>
              </ul>
            </div>
          </div>

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
                    <td className="p-3 font-semibold">केटोकोनाजोल शैंपू</td>
                    <td className="p-3">शैंपू</td>
                    <td className="p-3">सप्ताह में २ बार</td>
                    <td className="p-3">फंगल इन्फेक्शन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">आइट्राकोनाजोल</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">५ मिग्रा/किलो</td>
                    <td className="p-3">गंभीर फंगल इन्फेक्शन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">एपोक्वेल</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">०.४-०.६ मिग्रा/किलो</td>
                    <td className="p-3">खुजली और एलर्जी</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">प्रेडनिसोलोन</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">०.५ मिग्रा/किलो</td>
                    <td className="p-3">सूजन कम करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सेफालेक्सिन</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">१५-३० मिग्रा/किलो</td>
                    <td className="p-3">बैक्टीरियल संक्रमण</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित नहलाना</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ सूखा और साफ रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पौष्टिक आहार दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ एलर्जी वाले खाने से बचें</p>
              </div>
            </div>
          </div>

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