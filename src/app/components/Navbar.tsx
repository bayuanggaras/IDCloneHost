import { useEffect, useRef, useState } from "react";
import { 
  ProductMegaMenu, SolutionMegaMenu, ProgramMegaMenu, HelpMegaMenu, LoginMegaMenu,
  productData, solutionData, programData, helpData 
} from "./AllMegaMenu";
import { Link } from "react-router-dom";
import logoSvg from "../../assets/IDCloudHost.svg";

const navLinks = ["Produk", "Harga", "Solusi", "Program", "Bantuan", "Promo"];

const mobileItemClass = "text-white/60 hover:text-white text-[13px] transition-colors";

// Data Login Mobile (diambil dari data yang sama dengan AllMegaMenu)
const loginMenuData = [
  {
    name: "Console Platform",
    desc: "Akses ke IDCloudHost Console.",
    href: "/console",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 9l3 3-3 3" />
        <path d="M13 15h3" />
      </svg>
    ),
  },
  {
    name: "Client Area",
    desc: "Kelola layanan dan tagihan Anda.",
    href: "/clientarea",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);
  const [showProgramMenu, setShowProgramMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileLoginMenu, setShowMobileLoginMenu] = useState(false); // State baru khusus mobile
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileOpenTab, setMobileOpenTab] = useState<string | null>(null);
  const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setShowProductMenu(false);
        setShowSolutionMenu(false);
        setShowProgramMenu(false);
        setShowHelpMenu(false);
        setShowLoginMenu(false);
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Cek posisi awal saat mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDesktopClick = (link: string) => {
    if (link === "Produk") {
      setShowProductMenu((prev) => !prev);
      setShowSolutionMenu(false);
      setShowProgramMenu(false);
      setShowHelpMenu(false);
      setShowLoginMenu(false);
      setShowLangMenu(false);
    } else if (link === "Solusi") {
      setShowSolutionMenu((prev) => !prev);
      setShowProductMenu(false);
      setShowProgramMenu(false);
      setShowHelpMenu(false);
      setShowLoginMenu(false);
      setShowLangMenu(false);
    } else if (link === "Program") {
      setShowProgramMenu((prev) => !prev);
      setShowProductMenu(false);
      setShowSolutionMenu(false);
      setShowHelpMenu(false);
      setShowLoginMenu(false);
      setShowLangMenu(false);
    } else if (link === "Bantuan") {
      setShowHelpMenu((prev) => !prev);
      setShowProductMenu(false);
      setShowSolutionMenu(false);
      setShowProgramMenu(false);
      setShowLoginMenu(false);
      setShowLangMenu(false);
    } else {
      setShowProductMenu(false);
      setShowSolutionMenu(false);
      setShowProgramMenu(false);
      setShowHelpMenu(false);
      setShowLoginMenu(false);
      setShowLangMenu(false);
    }
  };

  const handleLoginClick = () => {
    setShowLoginMenu((prev) => !prev);
    setShowProductMenu(false);
    setShowSolutionMenu(false);
    setShowProgramMenu(false);
    setShowHelpMenu(false);
    setShowLangMenu(false);
  };

  const handleLangClick = () => {
    setShowLangMenu((prev) => !prev);
    setShowProductMenu(false);
    setShowSolutionMenu(false);
    setShowProgramMenu(false);
    setShowHelpMenu(false);
    setShowLoginMenu(false);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMobileOpenTab(null);
      setMobileOpenCategory(null);
      setShowMobileLoginMenu(false); // Reset menu login mobile
    }
  };

  const handleMobileTabClick = (link: string) => {
    if (mobileOpenTab === link) {
      setMobileOpenTab(null);
      setMobileOpenCategory(null);
    } else {
      setMobileOpenTab(link);
      setMobileOpenCategory(null);
    }
  };

  const handleMobileCategoryClick = (categoryTitle: string) => {
    if (mobileOpenCategory === categoryTitle) {
      setMobileOpenCategory(null);
    } else {
      setMobileOpenCategory(categoryTitle);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] px-5 md:px-10 lg:px-16 transition-all duration-300 font-['Figtree'] ${
        isScrolled 
          ? "py-3 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 shadow-lg" 
          : "py-4 bg-transparent"
      }`}
    >
      <div ref={navRef} className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/" className="flex items-center gap-2 shrink-0 cursor-pointer">
            <img src={logoSvg} alt="logo" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* MENU TENGAH - HANYA DESKTOP */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link} className="relative py-4">
                <button
                  onClick={() => handleDesktopClick(link)}
                  className="text-white/90 hover:text-white font-medium text-[15px] flex items-center gap-1 cursor-pointer"
                >
                  {link}
                  {(link === "Produk" || link === "Solusi" || link === "Program" || link === "Bantuan") && (
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
                      className={`transition-transform duration-300 ${
                        (link === "Produk" && showProductMenu) ||
                        (link === "Solusi" && showSolutionMenu) ||
                        (link === "Program" && showProgramMenu) ||
                        (link === "Bantuan" && showHelpMenu)
                          ? "-rotate-180"
                          : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>
                {link === "Produk" && showProductMenu && <ProductMegaMenu />}
                {link === "Solusi" && showSolutionMenu && <SolutionMegaMenu />}
                {link === "Program" && showProgramMenu && <ProgramMegaMenu />}
                {link === "Bantuan" && showHelpMenu && <HelpMegaMenu />}
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGE & LOGIN DESKTOP */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              onClick={handleLangClick}
              className="flex items-center gap-1.5 px-2 py-2.5 text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              <span className="text-lg">🇮🇩</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showLangMenu ? "-rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl overflow-hidden py-1 z-[101]">
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left cursor-pointer">
                  <span className="text-lg">🇮🇩</span>
                  <span className="text-sm font-semibold text-slate-800">Indonesia</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left cursor-pointer">
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm font-semibold text-slate-800">English</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left cursor-pointer">
                  <span className="text-lg">🇯🇵</span>
                  <span className="text-sm font-semibold text-slate-800">Japanese</span>
                </button>
              </div>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <div className="relative">
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/20 border border-white/20 hover:bg-white/30 transition-colors text-white font-bold cursor-pointer"
            >
              LOGIN
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
                className={`transition-transform duration-300 ${showLoginMenu ? "-rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {showLoginMenu && <LoginMegaMenu />}
          </div>
        </div>


        {/* TOMBOL HAMBURGER MOBILE */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 cursor-pointer focus:outline-none"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[80px] left-5 right-5 bg-[#0b2149]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl z-[100] flex flex-col max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link} className="border-b border-white/10 last:border-b-0 flex flex-col">

              {/* LEVEL 1: TOMBOL MENU UTAMA */}
              {link === "Produk" || link === "Solusi" || link === "Program" || link === "Bantuan" ? (
                <button
                  onClick={() => handleMobileTabClick(link)}
                  className="py-4 text-white font-medium flex justify-between items-center w-full text-left cursor-pointer focus:outline-none"
                >
                  {link}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-300 opacity-60 ${mobileOpenTab === link ? "-rotate-180 text-[#016dfc]" : "rotate-0"}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              ) : (
                <a href="#" className="py-4 text-white font-medium block">
                  {link}
                </a>
              )}

              {/* LEVEL 2: DROPDOWN */}
              {(link === "Produk" || link === "Solusi" || link === "Program" || link === "Bantuan") && (
                <div className={`grid transition-all duration-300 ease-in-out ${mobileOpenTab === link ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">

                    {/* MAPPING DATA: PROGRAM */}
                    {link === "Program" ? (
                      <div className="flex flex-col gap-3 pl-5 py-2 border-l border-white/20 ml-2">
                        {programData.map((item) => (
                          <a key={item.name} href={item.href || "#"} className={mobileItemClass}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ) : link === "Bantuan" ? (
                      <div className="flex flex-col gap-3 pl-5 py-2 border-l border-white/20 ml-2">
                        {helpData.map((item) => (
                          <a key={item.name} href={item.href || "#"} className={mobileItemClass}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ) : (
                      /* MAPPING DATA: PRODUK & SOLUSI */
                      Object.entries(link === "Produk" ? productData : solutionData).map(([categoryTitle, items]) => (
                        <div key={categoryTitle} className="pl-3 ml-2 border-l border-white/20 mb-2 flex flex-col">

                          {/* TOMBOL KATEGORI */}
                          <button
                            onClick={() => handleMobileCategoryClick(categoryTitle)}
                            className="py-2.5 text-white/90 text-[14.5px] font-medium flex justify-between items-center w-full text-left cursor-pointer"
                          >
                            {categoryTitle}
                            <svg
                              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                              className={`transition-transform duration-300 opacity-50 ${mobileOpenCategory === categoryTitle ? "-rotate-180 text-white" : "rotate-0"}`}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>

                          {/* LEVEL 3: ITEM FINAL DARI ASLI DATA */}
                          <div className={`grid transition-all duration-300 ease-in-out ${mobileOpenCategory === categoryTitle ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                              <div className="flex flex-col gap-3 pl-3 py-2">
                                {items.map((item) => (
                                  <a key={item.name} href={item.href || "#"} className={mobileItemClass}>
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>

                        </div>
                      ))
                    )}

                  </div>
                </div>
              )}

            </div>
          ))}

          {/* LOGIN MOBILE */}
          <div className="flex flex-col mt-6">
            <button
              className="flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-[#016dfc] text-white font-bold cursor-pointer w-full"
              onClick={() => setShowMobileLoginMenu((prev) => !prev)}
            >
              LOGIN
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${showMobileLoginMenu ? "-rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* DROPDOWN LOGIN MOBILE INLINE */}
            <div className={`grid transition-all duration-300 ease-in-out ${showMobileLoginMenu ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                  {loginMenuData.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full text-[#016dfc]">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px] font-semibold">{item.name}</div>
                        <div className="text-[12px] text-white/60">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </nav>
  );
}