"use client";
import { useState } from 'react';

export default function Langdapan() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* हेडिंग */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            लंगड़ापन और खुर रोग
          </h2>
          <p className="text-xl text-gray-700">
            खुरों में संक्रमण, घाव और लंगड़ापन का इलाज
          </p>
        </div>

        {/* मुख्य कंटेंट */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          
          {/* लक्षण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🩺</span>
              लक्षण पहचानें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• लंगड़ाकर चलना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खुर में सूजन और गर्माहट</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खुरों से बदबू आना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खुर में मवाद या खून</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• पशु खड़े होने से मना करे</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• बुखार (संक्रमण होने पर)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• खाना-पीना कम करना</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800">• दूध उत्पादन में कमी</p>
              </div>
            </div>
          </div>

          {/* कारण */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              मुख्य कारण
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• गंदे और गीले फर्श पर रहना</li>
                <li>• कीचड़ और गोबर में रहना</li>
                <li>• खुरों की सफाई न करना</li>
                <li>• कठोर या पथरीली जमीन पर चलना</li>
                <li>• खुरों में पत्थर या कांटा चुभना</li>
                <li>• जीवाणु संक्रमण (फुट रॉट)</li>
                <li>• खुरों का अधिक बढ़ जाना</li>
              </ul>
            </div>
          </div>
          {/* इलाज और दवाएं */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💊</span>
              इलाज और दवाएं
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-orange-700 text-white">
                    <th className="p-3 text-left">दवा का नाम</th>
                    <th className="p-3 text-left">प्रकार</th>
                    <th className="p-3 text-left">उपयोग</th>
                    <th className="p-3 text-left">अवधि</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पोटाशियम परमैंगनेट</td>
                    <td className="p-3">घोल (धोने की)</td>
                    <td className="p-3">खुर धोने के लिए</td>
                    <td className="p-3">रोज २-३ बार</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">कॉपर सल्फेट</td>
                    <td className="p-3">पाउडर/पेस्ट</td>
                    <td className="p-3">घाव में लगाने के लिए</td>
                    <td className="p-3">रोज १ बार</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">बोरिक एसिड पाउडर</td>
                    <td className="p-3">पाउडर</td>
                    <td className="p-3">खुर में छिड़कने के लिए</td>
                    <td className="p-3">रोज</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">आयोडीन टिंचर</td>
                    <td className="p-3">तरल</td>
                    <td className="p-3">घाव साफ करने के लिए</td>
                    <td className="p-3">रोज</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">ऑक्सीटेट्रासाइक्लिन स्प्रे</td>
                    <td className="p-3">स्प्रे</td>
                    <td className="p-3">संक्रमण रोकने के लिए</td>
                    <td className="p-3">रोज २ बार</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">पेनिसिलिन इंजेक्शन</td>
                    <td className="p-3">इंजेक्शन</td>
                    <td className="p-3">गंभीर संक्रमण में</td>
                    <td className="p-3">५ दिन</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">मेलोनेक्स</td>
                    <td className="p-3">इंजेक्शन (दर्द)</td>
                    <td className="p-3">दर्द और सूजन कम करने को</td>
                    <td className="p-3">३ दिन</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* इलाज की विधि */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔧</span>
              इलाज कैसे करें (कदम-दर-कदम)
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <ol className="space-y-3 text-gray-800 list-decimal list-inside">
                <li><strong>सफाई:</strong> पहले खुर को गुनगुने पानी से धोएं</li>
                <li><strong>काटना:</strong> अगर खुर बढ़ गया हो तो काटें</li>
                <li><strong>घाव साफ करें:</strong> पोटाशियम परमैंगनेट के घोल से धोएं</li>
                <li><strong>दवा लगाएं:</strong> कॉपर सल्फेट या आयोडीन लगाएं</li>
                <li><strong>पट्टी बांधें:</strong> साफ कपड़े से पट्टी करें</li>
                <li><strong>सूखा रखें:</strong> पशु को सूखी जगह पर रखें</li>
                <li><strong>रोज दोहराएं:</strong> जब तक ठीक न हो</li>
              </ol>
            </div>
          </div>

          {/* बचाव के उपाय */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛡️</span>
              बचाव कैसे करें
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ फर्श सूखा और साफ रखें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित खुर की सफाई करें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ ६ महीने में खुर कटाई करें</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ फुट बाथ (खुर नहाने का गड्ढा) बनाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ नियमित व्यायाम करवाएं</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800">✓ पौष्टिक आहार दें (जिंक, बायोटिन)</p>
              </div>
            </div>
          </div>

          {/* फुट बाथ की जानकारी */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛁</span>
              फुट बाथ कैसे बनाएं
            </h3>
            <div className="bg-purple-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-800">
                <li>• २-३ फीट लंबा और १ फीट चौड़ा गड्ढा बनाएं</li>
                <li>• ६-८ इंच गहरा रखें</li>
                <li>• कॉपर सल्फेट या फॉर्मेलिन का घोल भरें</li>
                <li>• सप्ताह में २-३ बार पशुओं को इससे गुजारें</li>
                <li>• हर १५ दिन में घोल बदलें</li>
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
                <li>• खुर से खून बहुत ज्यादा बह रहा हो</li>
                <li>• बदबू बहुत तेज हो</li>
                <li>• पशु बिल्कुल खड़ा न हो पाए</li>
                <li>• तेज बुखार हो</li>
                <li>• ३-४ दिन में आराम न हो</li>
                <li>• खुर का हिस्सा टूट गया हो</li>
              </ul>
            </div>
          </div>

          {/* परामर्श बटन */}
          <div className="text-center mt-8">
            <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
              ऑनलाइन परामर्श बुक करें
            </button>
            <p className="text-gray-600 mt-3">विशेषज्ञ सलाह के लिए अभी संपर्क करें</p>
          </div>

        </div>
      </div>
    </section>
  );
}