import { useEffect, useRef, useState } from "react";
import { ProductMegaMenu } from "./ProductMegaMenu";
import { SolutionMegaMenu } from "./SolutionMegaMenu";
import logoSvg from "../../assets/IDCloudHost.svg";

const navLinks = ["Produk", "Harga", "Solusi", "Program", "Bantuan", "Promo"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSolutionMenu, setShowSolutionMenu] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  // =========================================================
  // CLICK OUTSIDE CLOSE ALL MENU
  // =========================================================
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setShowProductMenu(false);
        setShowSolutionMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (link: string) => {
    if (link === "Produk") {
      setShowProductMenu((prev) => !prev);
      setShowSolutionMenu(false);
    }

    if (link === "Solusi") {
      setShowSolutionMenu((prev) => !prev);
      setShowProductMenu(false);
    }

    if (link !== "Produk" && link !== "Solusi") {
      setShowProductMenu(false);
      setShowSolutionMenu(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-5 md:px-10 lg:px-16 py-4">
      <div ref={navRef} className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={logoSvg} alt="logo" className="h-12 w-auto" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 relative">

          {navLinks.map((link) => (
            <div key={link} className="relative py-4">

              <button
                onClick={() => handleClick(link)}   // 🔥 CLICK ONLY
                className="text-white/90 hover:text-white font-medium text-[15px] flex items-center gap-1 cursor-pointer"
              >
                {link}

                {(link === "Produk" || link === "Solusi") && (
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
                      (link === "Solusi" && showSolutionMenu)
                        ? "-rotate-180"
                        : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>

              {/* PRODUCT MENU */}
              {link === "Produk" && showProductMenu && (
                <ProductMegaMenu onMouseEnter={() => setShowProductMenu(true)} />
              )}

              {/* SOLUTION MENU */}
              {link === "Solusi" && showSolutionMenu && (
                <SolutionMegaMenu onMouseEnter={() => setShowSolutionMenu(true)} />
              )}

            </div>
          ))}

        </div>

        {/* LOGIN */}
        <a className="hidden lg:flex px-6 py-3 rounded-md bg-white/20 text-white font-bold">
          LOGIN
        </a>
      </div>
    </nav>
  );
}