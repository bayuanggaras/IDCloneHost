import section1 from "figma:asset/section1.webp";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface DescSectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  image?: string;
  imageAlt?: string;
  /** "image-left" = gambar di kiri, "image-right" = gambar di kanan */
  layout?: "image-left" | "image-right";
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultProps: Required<DescSectionProps> = {
  title: "Optimalkan Paperclip dengan Cloud VPS IDCloudHost",
  description:
    "Paperclip AI adalah AI workflow tool untuk mengatur dan mengotomatisasi pekerjaan Anda yang dapat dijalankan di Cloud VPS. Dengan Paperclip, Anda dapat mengelola alur kerja dengan lebih rapi dan terstruktur. Berbagai proses dapat berjalan lebih cepat tanpa perlu dilakukan secara manual.",
  buttonLabel: "Mulai dengan Cloud VPS sekarang",
  onButtonClick: () => {},
  image: section1,
  imageAlt: "Illustrasi fitur",
  layout: "image-left",
};

// ============================================================
// KOMPONEN
// ============================================================
export function DescSection(props: DescSectionProps) {
  const { title, description, buttonLabel, onButtonClick, image, imageAlt, layout } = {
    ...defaultProps,
    ...props,
  };

  const imageEl = (
    <div className="flex-1 flex items-center justify-center w-full max-w-lg mx-auto lg:mx-0">
      <img src={image} alt={imageAlt} className="w-full h-auto object-contain max-h-[480px]" />
    </div>
  );

  const contentEl = (
    <div className="flex-1">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b2c42] leading-tight mb-4">
        {title}
      </h2>
      <p className="text-[#8292a6] text-base leading-relaxed mb-6">{description}</p>
      <button
        onClick={onButtonClick}
        className="px-7 py-4 rounded-lg bg-[#016dfc] text-white text-sm sm:text-base font-bold hover:bg-[#0058d0] transition-colors"
      >
        {buttonLabel}
      </button>
    </div>
  );

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {layout === "image-left" ? (
            <>{imageEl}{contentEl}</>
          ) : (
            <>{contentEl}{imageEl}</>
          )}
        </div>
      </div>
    </section>
  );
}
