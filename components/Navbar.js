"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "होम", href: "/", type: "link" },
    { name: "गाय-भैंस रोग", targetId: "gay-bhains", type: "scroll" },
    { name: "कुत्ते रोग", targetId: "kutte", type: "scroll" },
    { name: "बिल्ली रोग", targetId: "billi", type: "scroll" },
    { name: "भेड़-बकरी रोग", targetId: "bhed-bakri", type: "scroll" },
    { name: "घोड़ा रोग", targetId: "ghoda", type: "scroll" },
    { name: "ऊँट रोग", targetId: "oont", type: "scroll" },
    { name: "सेवाएं", targetId: "seva", type: "scroll" },
    { name: "ऑनलाइन परामर्श", targetId: "online-paramarsh", type: "scroll" },
    { name: "संपर्क करें", targetId: "sampark", type: "scroll" },
   
  ];

  return (
    <nav className="bg-[#006680] py-4 shadow-md sticky top-0 z-50">
      <div className="w-full px-4"> {/* container को w-full किया ताकि पूरी चौड़ाई मिले */}
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="text-center mb-6">
            <Link href="/">
              <h1 className="text-4xl font-bold text-white tracking-wide">
                पशु चिकित्सक शुक्ला
              </h1>
            </Link>
          </div>

          {/* मेनू - एकदम लेफ्ट से एकदम राइट तक एक लाइन में */}
          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
              {menuItems.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.targetId}
                    onClick={(e) => handleClick(e, item.targetId)}
                    className="text-white font-bold text-sm lg:text-base hover:text-yellow-400 transition-colors whitespace-nowrap px-2"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white font-bold text-sm lg:text-base hover:text-yellow-400 transition-colors whitespace-nowrap px-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-white">
                पशु चिकित्सक शुक्ला
              </h1>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white border border-white/30 p-2 rounded"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {isOpen && (
            <ul className="mt-4 bg-[#004d61] rounded-lg overflow-hidden">
              {menuItems.map((item) => (
                <li key={item.targetId || item.href} className="border-b border-white/10 last:border-none">
                  {item.type === "scroll" ? (
                    <button
                      onClick={(e) => handleClick(e, item.targetId)}
                      className="block w-full text-white text-center py-4 font-bold hover:bg-white hover:text-[#006680]"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white text-center py-4 font-bold hover:bg-white hover:text-[#006680]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}