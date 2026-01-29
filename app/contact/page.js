export default function ContactSection() {
  return (
    <section id="sampark" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-2xl mx-auto border-t-2 border-[#006680] pt-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#006680]">संपर्क विवरण</h2>
        
        <div className="space-y-4 text-lg">
          <p className="font-bold text-xl text-gray-900">डॉ. सचिन पाल</p>
          <p className="text-[#006680] font-semibold">पशु चिकित्सक</p>
          <p className="leading-relaxed">
            पिता: रामनारायण पाल,<br />
            अहरक खास, अहरक,<br />
            वाराणसी, रामईपट्टी,<br />
            उत्तर प्रदेश, 221202
          </p>
        </div>
      </div>
    </section>
  );
}