export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#006680] text-center mb-8">
          हमारी सेवाएं
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold text-[#006680] mb-4">प्रजनन सेवाएं</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>कृत्रिम गर्भाधान (बछिया होने की गारंटी के साथ)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>बच्चा निकलना (प्रसव में सहायता)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>जेर निकालना</span>
              </li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold text-[#006680] mb-4">शल्य चिकित्सा सेवाएं</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>सींग रोधन</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>टनक का सफल ऑपरेशन</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>झनक का सफल ऑपरेशन</span>
              </li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold text-[#006680] mb-4">रोग निरोधी सेवाएं (टीकाकरण)</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>मुंह और खुर की बीमारी (एफएमडी)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>हेमोरेजिक सेप्टिसीमिया (एचएस)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>ब्लैक क्वार्टर (बीक्यू)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>पेस्ट डेस पेटिट्स रूमिनेंट्स (पीपीआर)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>दाद और अन्य संक्रामक रोगों का टीकाकरण</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#006680] mb-4">अन्य सेवाएं</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>संक्रामक बीमारियों का इलाज</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>पशुओं की सामान्य चिकित्सा और उपचार</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006680] mr-2">•</span>
                <span>जीवाणु और वायरल बीमारियों का उपचार</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            अधिक जानकारी के लिए संपर्क करें
          </p>
        </div>
      </div>
    </div>
  );
}