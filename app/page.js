import HeroSection from "@/components/HeroSection";

// गाय-भैंस
import Thanela from "@/components/maweshi/Thanela";
import MuhpkaKhurpka from "@/components/maweshi/MuhpkaKhurpka";
import Afara from "@/components/maweshi/Afara";
import PrajananSamasya from "@/components/maweshi/PrajananSamasya";
import Langdapan from "@/components/maweshi/Langdapan";


// भेड़-बकरी
import PPR from "@/components/bhed-bakri/PPR";
import KhurpkaMuhpka from "@/components/bhed-bakri/KhurpkaMuhpka";
import PetKeKeede from "@/components/bhed-bakri/PetKeKeede";
import PneumoniaBakri from "@/components/bhed-bakri/Pneumonia";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <main className="flex-grow">
        <HeroSection />

        {/* गाय-भैंस */}
        <section id="gay-bhains" className="scroll-mt-20">
          <Thanela />
          <MuhpkaKhurpka />
          <Afara />
          <PrajananSamasya />
          <Langdapan />
        </section>
        {/* भेड़-बकरी */}
        <section id="bhed-bakri" className="scroll-mt-20">
          <PPR />
          <KhurpkaMuhpka />
          <PetKeKeede />
          <PneumoniaBakri />
        </section>

        {/* सेवाएं */}
<section id="seva" className="scroll-mt-20">
  <div className="py-12 px-4 bg-zinc-50">
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
    </div>
  </div>
</section>
{/* संपर्क करें */}
        <section id="sampark" className="scroll-mt-20">
          <div className="py-12 px-4 bg-white text-gray-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-[#006680]">संपर्क विवरण</h2>
              
              <div className="bg-gradient-to-br from-[#006680] to-[#004d61] rounded-xl shadow-2xl p-8 text-white">
                {/* नाम और पद */}
                <div className="text-center mb-8 pb-6 border-b border-white/30">
                  <h3 className="text-3xl font-bold mb-2">डॉ. सचिन पाल</h3>
                  <p className="text-xl font-semibold text-green-300">पशु चिकित्सक</p>
                </div>

                {/* संपर्क जानकारी */}
                <div className="space-y-6 mb-8">
                  {/* फोन */}
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <p className="text-sm opacity-80 mb-1">📱 मोबाइल नंबर</p>
                    <a href="tel:+917238808451" className="text-2xl font-bold hover:text-green-300 transition-colors">
                      +91 72388 08451
                    </a>
                  </div>

                  {/* ईमेल */}
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <p className="text-sm opacity-80 mb-1">📧 ईमेल</p>
                    <a href="mailto:sachinpal24003@gmail.com" className="text-xl font-semibold hover:text-green-300 transition-colors break-all">
                      sachinpal24003@gmail.com
                    </a>
                  </div>

                  {/* पता */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm opacity-80 mb-2">📍 पता</p>
                    <div className="text-lg leading-relaxed">
                      <p className="font-semibold">पिता: रामनारायण पाल</p>
                      <p>अहरक खास, अहरक</p>
                      <p>वाराणसी, रामईपट्टी</p>
                      <p className="font-semibold mt-1">उत्तर प्रदेश - 221202</p>
                    </div>
                  </div>
                </div>

                {/* व्हाट्सऐप बटन */}
                <div className="text-center">
                  <a 
                    href="https://wa.me/917238808451?text=नमस्ते%20डॉक्टर,%20मुझे%20पशु%20परामर्श%20चाहिए"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    💬 व्हाट्सऐप पर संपर्क करें
                  </a>
                </div>
              </div>        
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}



       