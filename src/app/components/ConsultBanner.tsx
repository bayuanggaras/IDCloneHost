import imgVpsWhite1 from "figma:asset/fe6d1a7f6032067aab678b8cd6c5162050cb6f83.png";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface ConsultBannerProps {
  icon?: string;
  iconAlt?: string;
  text?: string;
  highlightText?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultProps: Required<ConsultBannerProps> = {
  icon: imgVpsWhite1,
  iconAlt: "VPS",
  text: "Diskusikan Lebih Lanjut atau",
  highlightText: "Konsultasikan Kebutuhan AI",
  buttonLabel: "Hubungi Kami",
  onButtonClick: () => {},
};

// ============================================================
// KOMPONEN
// ============================================================
export function ConsultBanner(props: ConsultBannerProps) {
  const { icon, iconAlt, text, highlightText, buttonLabel, onButtonClick } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="bg-[#0d1e46] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4 flex-1">
            <img src={icon} alt={iconAlt} className="h-14 w-auto object-contain shrink-0" />
            <p className="text-white text-base sm:text-lg leading-relaxed">
              {text}{" "}
              <span
                className="font-bold"
                style={{
                  backgroundImage: "linear-gradient(179deg, #1c7dff 11%, #016dfc 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {highlightText}
              </span>{" "}
              Anda Sekarang!
            </p>
          </div>
          <button
            onClick={onButtonClick}
            className="shrink-0 px-6 py-3 rounded-lg bg-[#016dfc] text-white text-sm font-bold hover:bg-[#0058d0] transition-colors whitespace-nowrap"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
