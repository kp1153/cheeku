 "use client";
import { useState } from 'react';

export default function KidneyRog() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            किडनी (गुर्दे) की बीमारी
          </h2>
          <p className="text-xl text-gray-700">
            बुजुर्ग बिल्लियों में आम समस्या
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बहुत ज्यादा पानी पीना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बार-बार पेशाब करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• भूख न लगना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• वजन घटना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• उल्टी होना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• कमजोरी और सुस्ती</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• मुंह से बदबू</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बाल रूखे और बेजान</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• उम्र बढ़ना (७ साल से ऊपर)</li>
                <li>• संक्रमण</li>
                <li>• पानी कम पीना</li>
                <li>• अनुवांशिक कारण</li>
                <li>• जहरीले पदार्थ</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-purple-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">खुराक</th>
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">रेनल डाइट</td>
                    <td className="p-3">विशेष खाना</td>
                    <td className="p-3">रोज</td>
                    <td className="p-3">किडनी पर बोझ कम करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">फ्लूइड थेरेपी</td>
                    <td className="p-3">सबकट इंजेक्शन</td>
                    <td className="p-3">डॉक्टर के अनुसार</td>
                    <td className="p-3">पानी की कमी पूरी करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">एसिड न्यूट्रलाइजर</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">रोज</td>
                    <td className="p-3">पेट की एसिडिटी कम करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">फॉस्फेट बाइंडर</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">खाने के साथ</td>
                    <td className="p-3">फॉस्फेट कम करने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ब्लड प्रेशर दवा</td>
                    <td className="p-3">गोली</td>
                    <td className="p-3">डॉक्टर के अनुसार</td>
                    <td className="p-3">बीपी नियंत्रण</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🍽️</span>
              खाने में ध्यान दें
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• कम प्रोटीन वाला खाना</li>
                <li>• कम नमक</li>
                <li>• कम फॉस्फोरस</li>
                <li>• ओमेगा-३ फैटी एसिड</li>
                <li>• खूब पानी पिलाएं</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ खूब पानी पिलाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ गुणवत्ता वाला खाना दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित चेकअप (७ साल के बाद)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ वजन नियंत्रित रखें</p>
              </div>
            </div>
          </div>

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