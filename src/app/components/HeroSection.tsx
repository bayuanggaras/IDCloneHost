// ============================================================
// HERO SECTION
// ============================================================

import { useState } from "react";
import heropaperclip from "figma:asset/heropaperclip.webp";
import { Navbar } from "./Navbar";

// ============================================================
// TIPE DATA (Props)
// ============================================================

interface ChecklistItem {
  text: string;
}

interface HeroButton {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "gradient";
}

export interface HeroSectionProps {
  promoBannerImg?: string;
  rightContentMode?: "image" | "card";

  containerClassName?: string;

  title?: string;
  description?: string;

  checklist?: ChecklistItem[];
  buttons?: HeroButton[];

  image?: string;
  imageAlt?: string;

  titleClassName?: string;
}

// ============================================================
// DEFAULT CONTENT
// ============================================================

const defaultProps: Required<HeroSectionProps> = {
  promoBannerImg: "",
  rightContentMode: "card",
  containerClassName:
    "relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-32 pb-24 lg:pb-32",

  title: "Cloud Server Terjangkau & Fleksibel Kini Lebih Cepat!",

  description:
    "IDCloudHost Luncurkan Layanan Cloud Dengan Membayar Sesuai Pemakaian Dalam Sekali Klik!",

  checklist: [
    { text: "Performa dan Kestabilan 6 Kali Lebih Cepat dan Baik" },
    { text: "Kemudahan Upgrade/Downgrade Sesuai Kebutuhan" },
    { text: "Unlimited Bandwidth Premium & FREE Anti DDoS" },
    { text: "One Click Apps Catalog Terlengkap" },
    { text: "Layanan Support 24/7 Setiap Hari" },
  ],

  buttons: [
    { label: "Lihat panduan", variant: "primary" },
    { label: "Mulai sekarang", variant: "gradient" },
  ],

  image: heropaperclip,
  imageAlt: "Paperclip AI Platform",

  titleClassName: "text-3xl sm:text-4xl lg:text-[44px]",
};

// ============================================================
// ICON CHECKLIST
// ============================================================

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 14.5l-4-4 1.41-1.41L8 11.67l6.59-6.59L16 6.5l-8 8z"
        fill="white"
      />
    </svg>
  );
}

// ============================================================
// CONFIGURATOR CARD
// ============================================================

function ConfiguratorCard() {
  const [cpu, setCpu] = useState(1);
  const [ram, setRam] = useState(2);
  const [storage, setStorage] = useState(60);

  const basePrice = 50000;

  const totalPrice =
    basePrice + cpu * 20000 + ram * 10000 + storage * 650;

  const formattedPrice = new Intl.NumberFormat("id-ID").format(totalPrice);

  return (
    <div
      className="bg-white rounded-2xl p-6 lg:p-8 w-full max-w-[480px] text-slate-800 relative z-10 flex flex-col font-['Figtree']"
      style={{
        boxShadow: "0px 16px 64px 0px rgba(0,7,46,0.15)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold">Pilih Paket</h3>

        <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-slate-50 focus:outline-none focus:border-[#016dfc] cursor-pointer">
          <option>Cloud VPS eXtreme (AMD)</option>
          <option>Cloud VPS Regular (Intel)</option>
        </select>
      </div>

      <p className="text-[#8292a6] text-base mb-6">
        Prosesor AMD terbaru dengan efisiensi multi threading tinggi untuk
        skalabilitas dan pemrosesan yang lebih optimal.
      </p>

      <div className="space-y-5 mb-6">
        <div>
          <div className="flex justify-between text-sm font-bold mb-2">
            <span>CPU</span>
            <span>{cpu} Core</span>
          </div>

          <input
            type="range"
            min="1"
            max="16"
            value={cpu}
            onChange={(e) => setCpu(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#016dfc]"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm font-bold mb-2">
            <span>RAM</span>
            <span>{ram} GB</span>
          </div>

          <input
            type="range"
            min="1"
            max="64"
            value={ram}
            onChange={(e) => setRam(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#016dfc]"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm font-bold mb-2">
            <span>Storage</span>
            <span>{storage} GB</span>
          </div>

          <input
            type="range"
            min="20"
            max="500"
            step="10"
            value={storage}
            onChange={(e) => setStorage(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#016dfc]"
          />
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6 max-h-[200px] overflow-y-auto">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm"
            >
              <div
                className={`w-5 h-5 rounded-full ${
                  i % 2 === 0 ? "bg-orange-400" : "bg-blue-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
        <div className="text-2xl font-bold text-[#1b2c42]">
          Rp {formattedPrice}
          <span className="text-sm font-normal text-slate-500"> /Bln</span>
        </div>

        <button className="px-6 py-3 rounded-lg bg-[#016dfc] text-white font-medium hover:bg-[#0058d0] transition-colors">
          DEPLOY NOW
        </button>
      </div>
    </div>
  );
}

// ============================================================
// HERO SECTION
// ============================================================

export function HeroSection(props: HeroSectionProps) {
  const {
    promoBannerImg,
    rightContentMode,
    containerClassName,
    title,
    description,
    checklist,
    buttons,
    image,
    imageAlt,
    titleClassName,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className="relative min-h-screen overflow-visible font-['Figtree']"
      style={{
        background:
          "linear-gradient(180deg, #0268fe 0%, #1434d6 111.56%)",
      }}
    >
      <Navbar />

      <div className={containerClassName}>
        {promoBannerImg && (
          <div className="mb-10">
            <img
              src={promoBannerImg}
              alt="Promo Banner"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 text-white w-full">
            <h1 className={`${titleClassName} font-bold leading-[1.2] mb-5`}>
              {title}
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {checklist.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-white/95 text-[15px] sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <button
                  key={btn.label}
                  className="px-8 py-3.5 rounded-xl text-white font-bold shadow-md hover:-translate-y-0.5 transition"
                  style={
                    btn.variant === "gradient"
                      ? {
                          backgroundImage:
                            "linear-gradient(163.15deg, rgb(253, 161, 77) 0%, rgb(253, 77, 246) 100%)",
                        }
                      : { backgroundColor: "#016dfc" }
                  }
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex items-end justify-center w-full lg:justify-end">
            {rightContentMode === "card" ? (
              <ConfiguratorCard />
            ) : (
              <img
                src={image}
                alt={imageAlt}
                className="w-full max-w-[500px] object-contain object-bottom"
              />
            )}
          </div>
        </div>
      </div>

      {/* ✅ FIXED CURVE (SEMI CIRCLE STYLE - ORIGINAL LOOK) */}
      <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden leading-none">
        <svg
          className="block w-full h-[50px] sm:h-[65px] md:h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}