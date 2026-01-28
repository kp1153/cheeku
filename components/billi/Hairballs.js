"use client";
import { useState } from 'react';

export default function Hairballs() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            हेयरबॉल्स (बाल गांठ)
          </h2>
          <p className="text-xl text-gray-700">
            बिल्लियों में बाल उल्टी की समस्या
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बार-बार उल्टी करने की कोशिश</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बाल की गांठ उल्टी में</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• कब्ज या दस्त</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना कम खाना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खांसी जैसी आवाज</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पेट फूलना</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• खुद को चाटने से बाल निगलना</li>
                <li>• लंबे बालों वाली नस्लें</li>
                <li>• बहुत ज्यादा चाटना (तनाव या त्वचा रोग)</li>
                <li>• कम फाइबर वाला खाना</li>
              </ul>
            </div>
          </div>

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
                    <th className="p-3 text-left">उपयोग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">लैक्सेटोन पेस्ट</td>
                    <td className="p-3">पेस्ट</td>
                    <td className="p-3">२-३ सेमी रोज</td>
                    <td className="p-3">बाल बाहर निकालने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पेट्रोलियम जेली</td>
                    <td className="p-3">जेली</td>
                    <td className="p-3">१ चम्मच सप्ताह में २ बार</td>
                    <td className="p-3">बाल फिसलाने के लिए</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">हाई फाइबर फूड</td>
                    <td className="p-3">विशेष खाना</td>
                    <td className="p-3">रोज</td>
                    <td className="p-3">पाचन सुधारने को</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">हेयरबॉल कंट्रोल फूड</td>
                    <td className="p-3">विशेष खाना</td>
                    <td className="p-3">रोज</td>
                    <td className="p-3">बाल गांठ रोकने को</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ रोज ब्रश करें (खासकर लंबे बाल वाली)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ हाई फाइबर खाना दें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ खूब पानी पिलाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ सप्ताह में २ बार लैक्सेटोन पेस्ट</p>
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
                <li>• कई दिनों से कब्ज हो</li>
                <li>• पेट बहुत फूल गया हो</li>
                <li>• बार-बार उल्टी करे लेकिन कुछ न निकले</li>
              </ul>
            </div>
          </div>

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