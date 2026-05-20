import React from "react";
import { Navbar } from "./Navbar"; // Pastikan path ini benar

// ============================================================
// TYPES
// ============================================================

interface ChecklistItem {
  text: string;
}

interface HeroButton {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "gradient" | "ghost";
}

export interface HeroSectionV2Props {
  // Badge pill di atas judul
  badge?: {
    icon?: React.ReactNode; // [DIPERBARUI] Diubah menjadi ReactNode agar fleksibel (bisa string, img, atau svg)
    label?: string;      // teks sebelum titik dua
    value?: string;      // teks setelah titik dua (bold)
  };

  title?: string;
  titleClassName?: string;

  subtitle?: string;

  checklist?: ChecklistItem[];

  buttons?: HeroButton[];

  // Custom background (sama seperti V1)
  background?: React.ReactNode;

  containerClassName?: string;
}

// ============================================================
// DEFAULT PROPS
// ============================================================

const defaultProps: Required<HeroSectionV2Props> = {
  badge: {
    icon: "🚀", // Tetap bisa menggunakan string/emoji karena tipe ReactNode
    label: "IDCloudHost",
    value: "Cloud VPS",
  },

  title: "AI Agent pribadi yang aktif\n24/7 di server Anda", // [DIPERBARUI] Menyesuaikan sentence case

  titleClassName: "text-4xl sm:text-5xl lg:text-[56px]",

  subtitle:
    "Jalankan OpenClaw di VPS IDCloudHost dan otomatisasi pekerjaan bisnis Anda dengan AI. Mulai dari WhatsApp, Telegram, hingga email bisnis.",

  checklist: [
    { text: "Balas pesan pelanggan otomatis." },
    { text: "Kirim laporan & rekap tanpa manual." },
    { text: "Pilih model AI dengan API key." },
    { text: "Data aman di infrastruktur Anda." },
  ],

  buttons: [
    { label: "Lihat panduan", variant: "ghost" }, // [DIPERBARUI] Menyesuaikan sentence case
    { label: "Mulai sekarang", variant: "primary" }, // [DIPERBARUI] Menyesuaikan sentence case
  ],

  background: null,

  containerClassName:
    "relative z-10 max-w-5xl mx-auto px-5 md:px-10 lg:px-16 pt-40 pb-28 lg:pb-36",
};

// ============================================================
// BADGE
// ============================================================

function HeroBadge({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
}) {
  return (
    // WRAPPER LUAR: Menggunakan custom hex untuk warna yang presisi sesuai gambar
    <div className="inline-flex mb-8 rounded-full p-[1px] bg-gradient-to-r from-[#016DFC] via-[#ffffff] to-[#120196]">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm w-full h-full text-white text-sm font-['DM Sans']">
        
        {icon && (
          <span className="w-5 h-5 flex items-center justify-center text-base leading-none">
            {icon}
          </span>
        )}
        {label && <span className="text-white">{label}</span>}
        {label && value && <span className="text-white/40">:</span>}
        {value && <span className="text-white/70">{value}</span>}
        
      </div>
    </div>
  );
}

// ============================================================
// CHECKLIST GRID
// ============================================================

function ChecklistGrid({ items }: { items: ChecklistItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-10">
      {items.map((item) => (
        <div
          key={item.text}
          className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-black/8 border border-white/10 backdrop-blur-lg"
        >
          {/* Checkmark */}
          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#016dfc] flex items-center justify-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg" // [DIPERBARUI] Menambahkan namespace SVG
            >
              <path
                d="M1.5 5L3.8 7.5L8.5 2.5"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="block text-left text-white/85 text-sm leading-snug font-['Figtree']"> 
            {/* [DIPERBARUI] Mengganti DM Sans menjadi Figtree agar konsisten */}
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// BUTTONS
// ============================================================

function HeroButtons({ buttons }: { buttons: HeroButton[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {buttons.map((btn) => {
        if (btn.variant === "ghost") {
          return (
            <button
              key={btn.label}
              onClick={btn.onClick}
              className="px-8 py-3.5 rounded-xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all cursor-pointer font-['Figtree']"
            >
              {btn.label}
            </button>
          );
        }

        if (btn.variant === "gradient") {
          return (
            <button
              key={btn.label}
              onClick={btn.onClick}
              className="px-8 py-3.5 rounded-xl font-bold text-white shadow-md hover:-translate-y-0.5 transition-all cursor-pointer font-['Figtree']"
              style={{
                backgroundImage:
                  "linear-gradient(163.15deg, rgb(253, 161, 77) 0%, rgb(253, 77, 246) 100%)",
              }}
            >
              {btn.label}
            </button>
          );
        }

        // default: primary
        return (
          <button
            key={btn.label}
            onClick={btn.onClick}
            className="px-8 py-3.5 rounded-xl font-bold text-white bg-[#016dfc] hover:bg-[#0058d0] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#016dfc]/30 cursor-pointer font-['Figtree']"
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
}

// ============================================================
// HERO SECTION V2
// ============================================================

export function HeroSectionV2(props: HeroSectionV2Props) {
  const {
    badge,
    title,
    titleClassName,
    subtitle,
    checklist,
    buttons,
    background,
    containerClassName,
  } = {
    ...defaultProps,
    ...props,
  };

  // Pisahkan baris judul berdasarkan \n
  const titleLines = title.split("\n");

  return (
    <section className="relative min-h-screen overflow-hidden font-['Figtree'] bg-[#020617]">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}
      {background ? (
        background
      ) : (
        /* Default: gradient gelap biru navy */
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(1,109,252,0.25) 0%, transparent 70%), #020617",
          }}
        />
      )}

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Navbar />

      <div className={containerClassName}>
        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center">

          {/* BADGE */}
          {badge && (badge.label || badge.value || badge.icon) && (
            <HeroBadge
              icon={badge.icon}
              label={badge.label}
              value={badge.value}
            />
          )}

          {/* TITLE */}
          <h1
            className={`${titleClassName} font-bold leading-[1.15] text-white mb-6 max-w-4xl`}
          >
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl font-normal">
            {subtitle}
          </p>

          {/* CHECKLIST GRID */}
          {checklist && checklist.length > 0 && (
            <ChecklistGrid items={checklist} />
          )}

          {/* BUTTONS */}
          {buttons && buttons.length > 0 && (
            <HeroButtons buttons={buttons} />
          )}
        </div>
      </div>

    </section>
  );
}