export default function ContactSection() {
  return (
    <section id="sampark" className="py-12 px-4 bg-white text-gray-800">
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

        {/* नोट */}
        <div className="mt-6 bg-blue-50 border-l-4 border-[#006680] p-4 rounded">
          <p className="text-gray-700">
            <strong>नोट:</strong> आपातकालीन स्थिति में तुरंत संपर्क करें। हम 24/7 उपलब्ध हैं।
          </p>
        </div>
      </div>
    </section>
  );
}