import imgIdcloudhost1Removebg11 from "figma:asset/d1fb5273158443f348710cf58c7c229f74990a66.png";
import { useState } from "react";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface CTASectionProps {
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  image?: string;
  imageAlt?: string;
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  newsletterButtonLabel?: string;
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultProps: Required<CTASectionProps> = {
  titleLine1: "Solusi Sempurna",
  titleLine2: "untuk Bisnis Anda",
  description:
    "Dalam Waktu 3 Menit, Anda akan mendapatkan semua layanan dengan cepat. Tidak ada kewajiban untuk upgrade, downgrade atau cancel setiap waktu",
  buttonLabel: "Butuh Bantuan? Hubungi Kami",
  onButtonClick: () => {},
  image: imgIdcloudhost1Removebg11,
  imageAlt: "IDCloudHost Team",
  newsletterTitle: "Subscribe here to get update",
  newsletterPlaceholder: "Enter Email Address",
  newsletterButtonLabel: "SUBSCRIBE",
};

// ============================================================
// KOMPONEN
// ============================================================
export function CTASection(props: CTASectionProps) {
  const {
    titleLine1,
    titleLine2,
    description,
    buttonLabel,
    onButtonClick,
    image,
    imageAlt,
    newsletterTitle,
    newsletterPlaceholder,
    newsletterButtonLabel,
  } = { ...defaultProps, ...props };

  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden" style={{ background: "#0D1E46" }}>
      {/* Lengkungan atas putih */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" style={{ height: "80px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path d="M0,0 L0,80 Q720,0 1440,80 L1440,0 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Konten Kiri */}
          <div className="flex-1">
            <div
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{
                backgroundImage: "linear-gradient(163.479deg, rgb(253, 161, 77) 0%, rgb(253, 77, 246) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <p>{titleLine1}</p>
              <p>{titleLine2}</p>
            </div>
            <p className="text-[#708096] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <button
              onClick={onButtonClick}
              className="px-7 py-4 rounded-xl bg-[#016dfc] text-white text-base font-bold hover:bg-[#0058d0] transition-colors"
            >
              {buttonLabel}
            </button>
          </div>

          {/* Gambar + Newsletter Kanan */}
          <div className="flex-1 flex items-end justify-center w-full max-w-md">
            <div className="relative w-full flex flex-col">
              {/* Ilustrasi */}
              <div className="relative z-10 flex justify-center">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full object-contain object-bottom"
                  style={{ marginBottom: "-60px" }}
                />
              </div>

              {/* Kartu Newsletter */}
              <div
                className="relative z-20 rounded-2xl p-6 shadow-xl"
                style={{ backgroundImage: "linear-gradient(-15deg, rgb(133, 77, 253) 0%, rgb(77, 168, 253) 100%)" }}
              >
                <p className="text-white font-bold text-base mb-3 capitalize">{newsletterTitle}</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterPlaceholder}
                    className="flex-1 bg-white/20 backdrop-blur-sm border border-white rounded-xl px-4 py-3 text-white placeholder-white/70 text-sm outline-none focus:bg-white/30 transition-colors min-w-0"
                  />
                  <button className="bg-white/20 backdrop-blur-sm border border-white rounded-xl px-4 py-3 text-white text-sm font-bold hover:bg-white/30 transition-colors whitespace-nowrap">
                    {newsletterButtonLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
