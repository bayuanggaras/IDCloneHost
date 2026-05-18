import { useState } from "react";
import { ProductMegaMenu } from "./ProductMegaMenu";
// 1. Import file .svg Anda di sini (pastikan path/lokasi foldernya benar)
import logoSvg from "../../assets/IDCloudHost.svg";

const navLinks = ["Produk", "Harga", "Solusi", "Program", "Bantuan", "Promo"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-5 md:px-10 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img 
            src={logoSvg} 
            alt="Idcloudhost" 
            className="h-12 w-auto object-contain" 
          />
        </div>

        {/* Desktop Nav Links + Mega Menu wrapper */}
        <div
          className="hidden lg:flex items-center gap-8 relative"
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          {navLinks.map((link) => (
            <div
              key={link}
              className="py-4 cursor-pointer"
              onMouseEnter={() =>
                link === "Produk" ? setShowMegaMenu(true) : setShowMegaMenu(false)
              }
            >
              <a
                href="#"
                className="text-white/90 hover:text-white font-medium text-[15px] transition-colors flex items-center gap-1.5"
              >
                {link}
                {/* Ikon panah ke bawah khusus untuk menu Produk */}
                {link === "Produk" && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${showMegaMenu ? "-rotate-180" : "rotate-0"}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </a>
            </div>
          ))}

          {/* Mega Menu */}
          {showMegaMenu && (
            <ProductMegaMenu onMouseEnter={() => setShowMegaMenu(true)} />
          )}
        </div>

        {/* Login Button */}
        <a
          href="#"
          className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white font-bold text-sm hover:bg-white/30 transition-colors"
        >
          LOGIN
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
        >
          <span className="flex flex-col gap-1">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#0d1e46]/95 backdrop-blur-sm rounded-2xl p-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-white border-b border-white/10 last:border-0 font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-3 block text-center py-3 rounded-xl border border-white bg-white/20 text-white font-bold"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}