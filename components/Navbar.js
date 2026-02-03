"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = 0; // बाद में context से लेना

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
    { name: "उत्पाद", targetId: "products", type: "scroll" },
    { name: "गाय-भैंस रोग", targetId: "gay-bhains", type: "scroll" }, 
    { name: "भेड़-बकरी रोग", targetId: "bhed-bakri", type: "scroll" }, 
    { name: "सेवाएं", targetId: "seva", type: "scroll" },       
    { name: "संपर्क करें", targetId: "sampark", type: "scroll" }, 
  ];

  return (
    <nav className="bg-sky-200 py-0 shadow-md sticky top-0 z-50">
      <div className="w-full px-4">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="text-center mb-6">
            <Link href="/">
              <Image 
                src="/logo.jpeg" 
                alt="Vet Life Care Logo" 
                width={200} 
                height={80}
                className="mx-auto"
              />
            </Link>
          </div>
          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
              {menuItems.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.targetId}
                    onClick={(e) => handleClick(e, item.targetId)}
                    className="text-rose-700 font-bold text-sm lg:text-base hover:text-yellow-400 transition-colors whitespace-nowrap px-2"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-rose-700 font-bold text-sm lg:text-base hover:text-yellow-400 transition-colors whitespace-nowrap px-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}

              <Link href="/cart" className="text-rose-700 font-bold text-sm lg:text-base hover:text-yellow-400 transition-colors whitespace-nowrap px-2">
                🛒 {cartCount > 0 && <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-1">{cartCount}</span>}
              </Link>

            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image 
                src="/logo.jpeg" 
                alt="Vet Life Care Logo" 
                width={120} 
                height={50}
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="text-rose-700 text-2xl relative">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs">{cartCount}</span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-rose-700 border border-white/30 p-2 rounded"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>

          {isOpen && (
            <ul className="mt-4 bg-zinc-800 rounded-lg overflow-hidden">
              {menuItems.map((item) => (
                <li key={item.targetId || item.href} className="border-b border-white/10 last:border-none">
                  {item.type === "scroll" ? (
                    <button
                      onClick={(e) => handleClick(e, item.targetId)}
                      className="block w-full text-rose-700 text-center py-4 font-bold hover:bg-white hover:text-zinc-900"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-rose-700 text-center py-4 font-bold hover:bg-white hover:text-zinc-900"
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