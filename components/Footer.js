// app/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          © 2026 डॉ. देवराज शुक्ला-डॉ. अश्विनी कुमार शुक्ला। सर्वाधिकार सुरक्षित।
        </p>
        <p className="text-sm text-gray-500 mt-2">
          वेब डेवलपर — <Link href="https://www.web-developer-kp.com/" className="text-amber-600 hover:text-amber-500 transition-colors">क्रिएटिव सॉल्यूशंस</Link>
        </p>
      </div>
    </footer>
  );
}