import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-200 text-pink-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          <div>
            <h3 className="text-lg font-bold mb-3">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-900 hover:text-white transition-colors">होम</Link></li>
              <li><Link href="/cart" className="text-gray-900 hover:text-white transition-colors">कार्ट</Link></li>
              <li><Link href="/#products" className="text-gray-900 hover:text-white transition-colors">उत्पाद</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">नीतियां</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-900 hover:text-white transition-colors">गोपनीयता नीति</Link></li>
              <li><Link href="/terms" className="text-gray-900 hover:text-white transition-colors">नियम व शर्तें</Link></li>
              <li><Link href="/refund-policy" className="text-gray-900 hover:text-white transition-colors">रिफंड नीति</Link></li>
              <li><Link href="/shipping-policy" className="text-gray-900 hover:text-white transition-colors">शिपिंग नीति</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">संपर्क</h3>
            <ul className="space-y-2 text-gray-900">
              <li>फोन: 7238808451</li>
              <li>ईमेल: sachinpal24003@gmail.com</li>
              <li>पता: S/O: Ramnarayan Pal, Aharak khas, Aharak, Varanasi, Ramaipatti, Uttar Pradesh, 221202</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-900">
            © 2026 पशुचिकित्सक सचिन पाल। सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-sm text-gray-500 mt-2">
            वेब डेवलपर — <Link href="https://www.web-developer-kp.com/" className="text-rose-700 hover:text-amber-500 transition-colors">क्रिएटिव सॉल्यूशंस</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}