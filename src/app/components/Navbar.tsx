import { useEffect, useRef, useState } from "react";
import { ProductMegaMenu, SolutionMegaMenu } from "./AllMegaMenu";
import logoSvg from "../../assets/IDCloudHost.svg";

// =========================================================
// DATA UTAMA & STRUKTUR MENU MOBILE (DIAMBIL DARI DESKTOP)
// =========================================================
const navLinks = ["Produk", "Harga", "Solusi", "Program", "Bantuan", "Promo"];

// Data Kategori Produk
const productCategories = [
  {
    title: "Featured Products",
    items: [
      "Cloud VPS", "Server VPS", "Colocation Server",
      "WordPress Hosting", "Dedicated Server", "VPS WHM cPanel"
    ],
  },
  {
    title: "Cloud & Server",
    items: [
      "Cloud VPS", "Server VPS", "Colocation Server", "Bare Metal Server",
      "Private Cloud", "GPU Server", "Dedicated Server", "VPS WHM cPanel"
    ],
  },
  {
    title: "Domain & Website",
    items: ["Domain .ID", "SSL Certificate", "Website Instant", "WordPress Hosting"],
  },
  {
    title: "Developer Tools",
    items: ["Object Storage", "Kubernetes"],
  },
  {
    title: "Solution & Addons",
    items: ["Email Solution", "Backup Solution"],
  },
];

// Data Kategori Solusi
const solutionCategories = [
  {
    title: "Solution by Industry",
    items: [
      "Education", "Finance", "Retail", "Tour & Travel",
      "e-Commerce", "Manufacturing & Distribution",
      "Medical & Healthcare", "Media", "Government"
    ],
  },
  {
    title: "Solution by Apps",
    items: ["OpenClaw", "Paperclip", "N8n"],
  },
];

// Data Kategori Program (Tambahan agar panah Program ada isinya di mobile)
const programCategories = [
  {
    title: "Partner & Affiliates",
    items: ["Affiliate Program", "Reseller Program", "Partner Network"],
  },
];

// =========================================================
// KOMPONEN NAVBAR
// =========================================================
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // State untuk Desktop Mega Menu
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);
  const [showProgramMenu, setShowProgramMenu] = useState(false); // State baru untuk Program

  // State untuk Mobile Menu (Level 1: Tab Utama)
  const [mobileOpenTab, setMobileOpenTab] = useState<string | null>(null);

  // State untuk Mobile Menu (Level 2: Sub Kategori)
  const [mobileOpenCategory, setMobileOpenCategory] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);

  // Klik di luar untuk menutup menu Desktop
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setShowProductMenu(false);
        setShowSolutionMenu(false);
        setShowProgramMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handler klik Desktop
  const handleDesktopClick = (link: string) => {
    if (link === "Produk") {
      setShowProductMenu((prev) => !prev);
      setShowSolutionMenu(false);
      setShowProgramMenu(false);
    } else if (link === "Solusi") {
      setShowSolutionMenu((prev) => !prev);
      setShowProductMenu(false);
      setShowProgramMenu(false);
    } else if (link === "Program") {
      setShowProgramMenu((prev) => !prev);
      setShowProductMenu(false);
      setShowSolutionMenu(false);
    } else {
      setShowProductMenu(false);
      setShowSolutionMenu(false);
      setShowProgramMenu(false);
    }
  };

  // Handler klik Mobile Level 1 (Produk / Solusi / Program)
  const handleMobileTabClick = (link: string) => {
    if (mobileOpenTab === link) {
      setMobileOpenTab(null);
      setMobileOpenCategory(null);
    } else {
      setMobileOpenTab(link);
      setMobileOpenCategory(null);
    }
  };

  // Handler klik Mobile Level 2 (Kategori di dalam Produk / Solusi / Program)
  const handleMobileCategoryClick = (categoryTitle: string) => {
    if (mobileOpenCategory === categoryTitle) {
      setMobileOpenCategory(null);
    } else {
      setMobileOpenCategory(categoryTitle);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-5 md:px-10 lg:px-16 py-4 font-['Figtree']">
      <div ref={navRef} className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={logoSvg} alt="logo" className="h-12 w-auto object-contain" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <div key={link} className="relative py-4">
              <button
                onClick={() => handleDesktopClick(link)}
                className="text-white/90 hover:text-white font-medium text-[15px] flex items-center gap-1 cursor-pointer"
              >
                {link}
                {/* Menambahkan Program ke dalam kondisi panah */}
                {(link === "Produk" || link === "Solusi" || link === "Program") && (
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
                      (link === "Program" && showProgramMenu)
                        ? "-rotate-180"
                        : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>

              {link === "Produk" && showProductMenu && (
                <ProductMegaMenu onMouseEnter={() => setShowProductMenu(true)} />
              )}

              {link === "Solusi" && showSolutionMenu && (
                <SolutionMegaMenu onMouseEnter={() => setShowSolutionMenu(true)} />
              )}
              
              {/* Tempat untuk ProgramMegaMenu jika suatu saat dibuat */}
              {/* {link === "Program" && showProgramMenu && (
                <ProgramMegaMenu onMouseEnter={() => setShowProgramMenu(true)} />
              )} */}
            </div>
          ))}
        </div>

        {/* LOGIN DESKTOP */}
        <a href="#" className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/20 border border-white/20 hover:bg-white/30 transition-colors text-white font-bold cursor-pointer">
          LOGIN
          {/* Panah untuk tombol Login */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>

        {/* TOMBOL HAMBURGER MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 cursor-pointer focus:outline-none"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </span>
        </button>

      </div>

      {/* ========================================= */}
      {/* MOBILE MENU */}
      {/* ========================================= */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[80px] left-5 right-5 bg-[#0b2149]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl z-[100] flex flex-col max-h-[80vh] overflow-y-auto">

          {navLinks.map((link) => (
            <div key={link} className="border-b border-white/10 last:border-b-0 flex flex-col">

              {/* LEVEL 1: TOMBOL MENU UTAMA */}
              {link === "Produk" || link === "Solusi" || link === "Program" ? (
                <button
                  onClick={() => handleMobileTabClick(link)}
                  className="py-4 text-white font-medium flex justify-between items-center w-full text-left cursor-pointer focus:outline-none"
                >
                  {link}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-300 opacity-60 ${
                      mobileOpenTab === link ? "-rotate-180 text-[#016dfc]" : "rotate-0"
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              ) : (
                <a href="#" className="py-4 text-white font-medium block">
                  {link}
                </a>
              )}

              {/* LEVEL 2: ANIMASI DROPDOWN UNTUK KATEGORI */}
              {(link === "Produk" || link === "Solusi" || link === "Program") && (
                <div className={`grid transition-all duration-300 ease-in-out ${mobileOpenTab === link ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">

                    {(link === "Produk" ? productCategories : link === "Solusi" ? solutionCategories : programCategories).map((category) => (
                      <div key={category.title} className="pl-3 ml-2 border-l border-white/20 mb-2 flex flex-col">

                        {/* TOMBOL KATEGORI */}
                        <button
                          onClick={() => handleMobileCategoryClick(category.title)}
                          className="py-2.5 text-white/90 text-[14.5px] font-medium flex justify-between items-center w-full text-left cursor-pointer"
                        >
                          {category.title}
                          <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className={`transition-transform duration-300 opacity-50 ${
                              mobileOpenCategory === category.title ? "-rotate-180 text-white" : "rotate-0"
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>

                        {/* LEVEL 3: ANIMASI DROPDOWN UNTUK ITEM FINAL */}
                        <div className={`grid transition-all duration-300 ease-in-out ${mobileOpenCategory === category.title ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <div className="flex flex-col gap-3 pl-3 py-2">
                              {category.items.map((item) => (
                                <a
                                  key={item}
                                  href="#"
                                  className="text-white/60 hover:text-white text-[13px] transition-colors relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white/30 before:rounded-full"
                                >
                                  {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    ))}

                  </div>
                </div>
              )}

            </div>
          ))}

          <a
            href="#"
            className="mt-6 flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-[#016dfc] text-white font-bold cursor-pointer"
          >
            LOGIN
            {/* Panah untuk tombol Login Mobile */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
}