import ctaimage from "figma:asset/ctaimage.webp";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface DeployBannerProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  image?: string;
  imageAlt?: string;
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultProps: Required<DeployBannerProps> = {
  title: "DEPLOY PAPERCLIP AI",
  titleHighlight: "LEBIH MUDAH",
  description:
    "Mulai gunakan Paperclip AI di Cloud VPS. Ikuti panduan instalasi melalui App Catalog IDCloudHost untuk deployment cepat.",
  buttonLabel: "Panduan & Deploy Sekarang",
  onButtonClick: () => {},
  image: ctaimage,
  imageAlt: "Deploy Paperclip",
};

// ============================================================
// KOMPONEN
// ============================================================
export function DeployBanner(props: DeployBannerProps) {
  const { title, titleHighlight, description, buttonLabel, onButtonClick, image, imageAlt } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-2xl bg-[#191e35] min-h-[220px] flex items-stretch">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#191e35] via-[#191e35]/90 to-[#191e35]/70" />

          {/* Gambar kanan */}
          <div className="absolute left-150 bottom-0 w-[50%] hidden sm:block">
            <img src={image} alt={imageAlt} className="w-full object-contain object-bottom" />
          </div>

          {/* Konten */}
          <div className="relative z-10 flex flex-col justify-center gap-5 p-8 lg:p-12 max-w-xl">
            <div>
              <h2
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-2"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {title}{" "}
                <span className="text-[#016dfc]">{titleHighlight}</span>
              </h2>
              <p
                className="text-white/80 text-base leading-relaxed"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {description}
              </p>
            </div>
            <div>
              <button
                onClick={onButtonClick}
                className="px-6 py-3 rounded-lg bg-[#016dfc] text-white text-sm font-bold hover:bg-[#0058d0] transition-colors"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
