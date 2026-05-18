import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductItem {
  name: string;
  desc: string;
  badge?: string;
  icon: React.ReactNode;
  href?: string;
}

const solutionData: Record<string, ProductItem[]> = {
  "Solution by Industry": [
    {
      name: "Education",
      desc: "Menyediakan teknologi terbaru untuk mendukung pembelajaran digital yang efektif dan inovatif.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Finance",
      desc: "Mengelola finansial company Anda dengan solusi layanan yang aman dan terpercaya.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Retail",
      desc: "Meningkatkan bisnis retail Anda menjadi lebih efisien dengan kinerja yang maksimal.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Tour & Travel",
      desc: "Menawarkan sistem terdepan dengan teknologi canggih untuk bisnis tour dan travel Anda.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "e-Commerce",
      desc: "Mengoptimalkan pertumbuhan bisnis E-Commerce Anda dengan aman dan scalable.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Manufacturing & Distribution",
      desc: "Meningkatkan produktivitas bisnis manufaktur dan distribusi Anda menjadi lebih optimal.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Medical & Healthcare",
      desc: "Memberikan layanan solusi yang inovatif untuk mendukung efisiensi pelayanan dan kualitas kesehatan lebih baik.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    },

    {
      name: "Media",
      desc: "Mendukung kebutuhan pada industri media Anda dengan kecepatan dan skalabilitas tanpa batas.",
      href: "/cloud-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    }
  ],

  "Solution by Apps": [
    {
      name: "OpenClaw",
      desc: "AI Agent Pribadi yang Aktif 24/7 di Server Anda.",
      badge: "HOT",
      href: "/backup-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21v-5h5" />
        </svg>
      )
    },

    {
      name: "Paperclip",
      desc: "Paperclip memudahkan Anda mengatur dan mengelola pekerjaan dalam satu sistem.",
      href: "/backup-solution",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21v-5h5" />
        </svg>
      )
    }
  ]
};

export function SolutionMegaMenu({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const [activeTab, setActiveTab] = useState("Solution by Industry");
  const navigate = useNavigate();

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 pt-2 z-[101]"
      style={{ top: "64px", width: "min(1200px, 95vw)" }}
    >
      {/* 🔥 HOVER SAFE AREA (FIX BUG CLOSE MENU) */}
      <div
        className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-800"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >

        {/* ================================================= */}
        {/* TAB HEADER (FIXED STYLE + BORDER + CURSOR) */}
        {/* ================================================= */}
        <div className="flex gap-3 px-6 py-4 border-b border-slate-200 bg-white">

          {Object.keys(solutionData).map((cat) => (
            <button
              key={cat}
              onMouseEnter={() => setActiveTab(cat)}
              className={`
                cursor-pointer
                px-4 py-2 rounded-lg border text-sm font-semibold transition-all
                ${
                  activeTab === cat
                    ? "bg-[#016dfc] text-white border-[#016dfc]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#016dfc] hover:text-[#016dfc]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================================================= */}
        {/* CONTENT GRID (4 COLUMN READY) */}
        {/* ================================================= */}
        <div className="p-8 bg-white min-h-[40px]">
          <h3 className="text-xl font-bold mb-6">{activeTab}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            {solutionData[activeTab].map((item, i) => (
              <div
                key={i}
                onClick={() => item.href && navigate(item.href)}
                className="p-5 border border-slate-200 rounded-xl hover:bg-[#016dfc]/10 transition-all flex gap-4 cursor-pointer group"
              >
                <div className="w-8 h-8 flex items-center justify-center text-[#016dfc]">
                  {item.icon}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="font-bold text-sm group-hover:text-[#016dfc]">
                      {item.name}
                    </div>

                    {item.badge && (
                      <div className="text-[10px] bg-[#016dfc] text-white px-2 py-0.5 rounded-full font-bold">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#016dfc] p-8 flex flex-col lg:flex-row justify-between items-center text-white gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 flex-1 w-full">
            <h4 className="text-2xl font-bold leading-tight min-w-[180px]">
              Request<br />Penawaran
            </h4>
            <p className="text-sm opacity-95 leading-relaxed max-w-2xl">
              Anda butuh spesifikasi server custom untuk kebutuhan bisnis Anda? Silakan ajukan formulir{" "}
              <strong>Request Penawaran</strong> server custom yang akan dibantu oleh tim IDCloudHost.{" "}
              <strong>Konsultasi Gratis!</strong>
            </p>
          </div>
          <button className="px-6 py-3 rounded-lg bg-white text-slate-800 font-bold text-sm hover:bg-slate-50 transition-all flex-shrink-0 active:scale-95">
            Selengkapnya
          </button>
        </div>

      </div>
    </div>
  );
}