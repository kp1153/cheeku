"use client";
import { useState } from 'react';

export default function TicksFlea() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            टिक्स और पिस्सू
          </h2>
          <p className="text-xl text-gray-700">
            बाहरी परजीवी - खुजली और संक्रमण
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बहुत खुजली होना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बाल झड़ना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• त्वचा पर लाल दाने</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• टिक्स दिखाई देना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• काले दाने जैसे पिस्सू</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• कमजोरी (खून चूसने से)</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-yellow-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">फिप्रोनिल स्प्रे</td>
                    <td className="p-3">स्प्रे</td>
                    <td className="p-3">पूरे शरीर पर</td>
                    <td className="p-3">टिक्स-पिस्सू मारने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">आइवरमेक्टिन</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">०.२ मिग्रा/किलो</td>
                    <td className="p-3">टिक्स इलाज</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">एक्टिवेट टिक कॉलर</td>
                    <td className="p-3">कॉलर</td>
                    <td className="p-3">गले में पहनाएं</td>
                    <td className="p-3">बचाव के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">सिमपारिका गोली</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">महीने में १ बार</td>
                    <td className="p-3">टिक्स-पिस्सू रोकथाम</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">परमेथ्रिन शैंपू</td>
                    <td className="p-3">शैंपू</td>
                    <td className="p-3">सप्ताह में १ बार</td>
                    <td className="p-3">नहलाने के लिए</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित टिक कॉलर पहनाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ महीने में १ बार दवा दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ घास और झाड़ियों से दूर रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ घर में साफ-सफाई रखें</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}