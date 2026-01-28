"use client";
import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
// Icons removed - using emoji instead

export default function ParchaPage() {
  const [formData, setFormData] = useState({
    pashupaalakNaam: '',
    phoneNumber: '',
    pashu: 'गाय',
    rog: '',
    doctor: 'डॉ. देवराज शुक्ला',
    tarikh: new Date().toLocaleDateString('hi-IN')
  });
  
  const [dawaiyan, setDawaiyan] = useState([
    { naam: '', khurak: '', din: '' }
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDawaiChange = (index, field, value) => {
    const newDawaiyan = [...dawaiyan];
    newDawaiyan[index][field] = value;
    setDawaiyan(newDawaiyan);
  };

  const addDawai = () => {
    setDawaiyan([...dawaiyan, { naam: '', khurak: '', din: '' }]);
  };

  const removeDawai = (index) => {
    const newDawaiyan = dawaiyan.filter((_, i) => i !== index);
    setDawaiyan(newDawaiyan);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // हेडर
    doc.setFontSize(20);
    doc.text('पशु चिकित्सक शुक्ला', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(formData.doctor, 105, 30, { align: 'center' });
    doc.text('तारीख: ' + formData.tarikh, 105, 40, { align: 'center' });
    
    // डिवाइडर
    doc.line(20, 45, 190, 45);
    
    // पशुपालक की जानकारी
    doc.setFontSize(12);
    doc.text('पशुपालक का नाम: ' + formData.pashupaalakNaam, 20, 55);
    doc.text('फोन नंबर: ' + formData.phoneNumber, 20, 65);
    doc.text('पशु: ' + formData.pashu, 20, 75);
    doc.text('रोग/समस्या: ' + formData.rog, 20, 85);
    
    // दवाओं की टेबल
    doc.text('दवाएं:', 20, 100);
    let yPos = 110;
    
    dawaiyan.forEach((dawai, index) => {
      doc.text((index + 1) + '. ' + dawai.naam, 25, yPos);
      doc.text('खुराक: ' + dawai.khurak, 40, yPos + 7);
      doc.text('दिन: ' + dawai.din, 40, yPos + 14);
      yPos += 25;
    });
    
    // डॉक्टर का नाम नीचे
    doc.text(formData.doctor, 150, 270);
    
    return doc;
  };

  const downloadPDF = () => {
    const doc = generatePDF();
    doc.save(`परचा_${formData.pashupaalakNaam}_${new Date().getTime()}.pdf`);
  };

  const shareOnWhatsApp = () => {
    const doc = generatePDF();
    const pdfBlob = doc.output('blob');
    
    // PDF को base64 में convert करें
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      
      // WhatsApp message text
      const message = `नमस्ते ${formData.pashupaalakNaam} जी,

आपके ${formData.pashu} का परचा तैयार है।

रोग: ${formData.rog}
तारीख: ${formData.tarikh}

कृपया PDF देखें।

${formData.doctor}`;
      
      // WhatsApp URL (मोबाइल और वेब दोनों के लिए)
      const phoneNumber = formData.phoneNumber.replace(/\D/g, '');
      const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // नई विंडो में WhatsApp खोलें
      window.open(whatsappURL, '_blank');
      
      // यूजर को बताएं कि PDF अलग से भेजना होगा
      alert('WhatsApp खुल रहा है। कृपया PDF फाइल अलग से अटैच करके भेजें।');
      
      // PDF भी डाउनलोड कर दें ताकि यूजर भेज सके
      downloadPDF();
    };
    
    reader.readAsDataURL(pdfBlob);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">
          पशु चिकित्सक परचा
        </h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                पशुपालक का नाम *
              </label>
              <input
                type="text"
                name="pashupaalakNaam"
                value={formData.pashupaalakNaam}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                फोन नंबर (WhatsApp)
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="9876543210"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                पशु
              </label>
              <select
                name="pashu"
                value={formData.pashu}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
              >
                <option>गाय</option>
                <option>भैंस</option>
                <option>कुत्ता</option>
                <option>बकरी</option>
                <option>बिल्ली</option>
                <option>घोड़ा</option>
                <option>ऊंट</option>
                <option>भेड़</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                डॉक्टर
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
              >
                <option>डॉ. देवराज शुक्ला</option>
                <option>डॉ. अश्विनी कुमार शुक्ला</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              रोग/समस्या
            </label>
            <textarea
              name="rog"
              value={formData.rog}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg h-24 focus:border-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-gray-700 font-bold">
                दवाएं
              </label>
              <button
                onClick={addDawai}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-bold"
              >
                + दवा जोड़ें
              </button>
            </div>

            {dawaiyan.map((dawai, index) => (
              <div key={index} className="border-2 border-gray-200 p-4 rounded-lg mb-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    placeholder="दवा का नाम"
                    value={dawai.naam}
                    onChange={(e) => handleDawaiChange(index, 'naam', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="खुराक (जैसे: 10ml)"
                    value={dawai.khurak}
                    onChange={(e) => handleDawaiChange(index, 'khurak', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="दिन (जैसे: 5 दिन)"
                    value={dawai.din}
                    onChange={(e) => handleDawaiChange(index, 'din', e.target.value)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                  />
                </div>
                {dawaiyan.length > 1 && (
                  <button
                    onClick={() => removeDawai(index)}
                    className="text-red-600 hover:text-red-800 font-bold transition-colors"
                  >
                    ✕ हटाएं
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* PDF बटन */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={downloadPDF}
              className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg flex items-center justify-center gap-2"
            >
              📄 PDF डाउनलोड करें
            </button>
            
            <button
              onClick={shareOnWhatsApp}
              className="flex-1 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-bold text-lg flex items-center justify-center gap-2"
              disabled={!formData.phoneNumber}
            >
              📱 WhatsApp पर भेजें
            </button>
          </div>

          {!formData.phoneNumber && (
            <p className="text-sm text-gray-500 text-center">
              * WhatsApp पर भेजने के लिए फोन नंबर भरें
            </p>
          )}
        </div>
      </div>
    </div>
  );
}