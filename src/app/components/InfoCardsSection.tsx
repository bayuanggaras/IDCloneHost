import React, { useEffect, useRef, useState, useCallback } from "react";

export interface InfoCardItem {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  accentColor?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export interface InfoCardsSectionProps {
  title?: string;
  subtitle?: string;
  items?: InfoCardItem[];
  columns?: 1 | 2 | 3 | 4;
  layout?: "standard" | "compact" | "featured" | "centered" | "twoRows";
  className?: string;
  hideSubtitle?: boolean;
}

const defaultItems: InfoCardItem[] = [
  {
    title: "Kelola Tim Agent di Satu Sistem",
    desc: "Atur dan kelola tim agent untuk menjalankan berbagai tugas secara terkoordinasi dalam satu workflow.",
  },
  {
    title: "Workflow Lebih Terstruktur",
    desc: "Setiap tugas memiliki alur yang jelas, sehingga pekerjaan lebih mudah dikelola.",
  },
  {
    title: "Kontrol Biaya Lebih Efisien",
    desc: "Penggunaan resource dapat disesuaikan dengan kebutuhan Anda.",
  },
  {
    title: "Otomatisasi Tugas Rutin",
    desc: "Jadwalkan pekerjaan agar berjalan lebih konsisten tanpa proses manual.",
  },
  {
    title: "Data Tetap Aman",
    desc: "Dapat dijalankan di Cloud VPS sehingga data tetap dalam kendali Anda.",
  },
  {
    title: "Fleksibel Sesuai Kebutuhan",
    desc: "Mudah disesuaikan dan tidak bergantung pada satu platform.",
  },
];

const columnsMap: Record<1 | 2 | 3 | 4, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function getIconSvg(index: number) {
  const baseProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  const icons = [
    <svg {...baseProps} key="icon-0">
      <path d="M8 10H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 14H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path d="M8 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    <svg {...baseProps} key="icon-1">
      <path d="M8 8L14 14L8 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 14H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    <svg {...baseProps} key="icon-2">
      <path d="M8 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="16" r="2" stroke="white" strokeWidth="2" />
    </svg>,
    <svg {...baseProps} key="icon-3">
      <path d="M9 8L19 14L9 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="14" r="1.5" fill="white" />
    </svg>,
    <svg {...baseProps} key="icon-4">
      <path d="M10 8H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 20H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 8L6 14L10 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 8L22 14L18 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg {...baseProps} key="icon-5">
      <path d="M14 8V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      <path d="M8 16H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
  ];

  return icons[index % icons.length];
}

export function InfoCardsSection(props: InfoCardsSectionProps) {
  const {
    title = "Mengapa dan Siapa yang Cocok Menggunakan Layanan Ini?",
    subtitle = "Satu section dengan berbagai model layout untuk menampilkan card secara fleksibel.",
    items = defaultItems,
    columns = 3,
    layout = "standard",
    className = "",
    hideSubtitle = false,
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemCount = items.length;
  // ✅ Ref untuk simpan interval agar bisa di-clear saat dot diklik
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // ✅ Flag agar handleScroll tidak override state saat sedang programmatic scroll
  const isProgrammaticScroll = useRef(false);

  // ✅ FIX UTAMA: gunakan card.offsetLeft bukan getBoundingClientRect
  const scrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    isProgrammaticScroll.current = true;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });

    // Reset flag setelah animasi scroll selesai (~400ms)
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 450);
  }, []);

  // ✅ Auto-play interval sebagai fungsi terpisah agar bisa di-restart
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (itemCount <= 1) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemCount);
    }, 5000);
  }, [itemCount]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  // Scroll ke index saat activeIndex berubah
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  // ✅ FIX: hitung cardWidth dari offsetWidth card pertama yang ada
  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const node = carouselRef.current;
    if (!node || node.children.length === 0) return;

    const firstCard = node.children[0] as HTMLElement;
    const secondCard = node.children[1] as HTMLElement | undefined;

    // Hitung gap dari selisih offsetLeft card 1 dan card 0
    const gap = secondCard ? secondCard.offsetLeft - firstCard.offsetLeft - firstCard.offsetWidth : 16;
    const cardWidth = firstCard.offsetWidth + gap;

    const nextIndex = Math.round(node.scrollLeft / cardWidth);
    const clamped = Math.max(0, Math.min(nextIndex, itemCount - 1));

    setActiveIndex(clamped);
  }, [itemCount]);

  // ✅ Dot click: update state + restart auto-interval
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
    startInterval(); // restart agar tidak langsung loncat ke index berikutnya
  }, [startInterval]);

  const isCenteredCards = layout === "centered" && columns === 4;
  const isTwoRows = layout === "twoRows" && columns === 4;
  const gridClasses = isTwoRows ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2" : columnsMap[columns];
  const cardBase =
    "rounded-2xl bg-white p-8 overflow-hidden h-full shadow-[0px_2px_8px_rgba(0,7,46,0.06)]";
  const iconBase =
    "w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 bg-[#016DFC]";
  const cardBodyClass = isCenteredCards ? "flex flex-col items-center text-center gap-4" : "flex items-start gap-4";
  const iconNode = (item: InfoCardItem, index: number) => item.icon ?? getIconSvg(index);
  const showSubtitle = !hideSubtitle && Boolean(subtitle?.trim());

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className={`max-w-7xl mx-auto px-5 md:px-10 lg:px-16 ${className}`}>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1b2c42] leading-tight mb-3 font-bold">
            {title}
          </h2>
          {showSubtitle && (
            <p className="text-[#8292a6] text-base mx-auto max-w-2xl">{subtitle}</p>
          )}
        </div>

        {/* ── MOBILE CAROUSEL ── */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 hide-scrollbar"
            // ✅ Pastikan scroll snap bekerja di semua browser mobile
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {items.map((item, index) => {
              const cardContent = (
                <div className={`${cardBodyClass} mb-5`}>
                  <div className={iconBase}>{iconNode(item, index)}</div>
                  <div>
                    <h3 className="text-[#1b2c42] text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#8292a6] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );

            const sharedCardClass = `${cardBase} snap-start shrink-0 min-w-[84vw] max-w-[84vw] sm:min-w-[72vw] sm:max-w-[72vw] ${item.href ? "cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" : ""}`;

              return item.href ? (
                <a
                  key={`${item.title}-${index}`}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className={sharedCardClass}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={`${item.title}-${index}`}
                  className={sharedCardClass}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {itemCount > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {items.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === index ? "w-6 bg-[#016DFC]" : "w-3 bg-slate-300"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── DESKTOP GRID ── */}
        <div className={`hidden lg:grid gap-6 ${gridClasses}`}>
          {items.map((item, index) => {
            const cardContent = (
              <div className={`${cardBodyClass} mb-5`}>
                <div className={iconBase}>{iconNode(item, index)}</div>
                <div>
                  <h3 className="text-[#1b2c42] text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#8292a6] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );

        const sharedCardClass = `${cardBase} ${item.href ? "cursor-pointer transition-all duration-200 hover:-translate-y-1 ": ""}`;

            return item.href ? (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className={sharedCardClass}
              >
                {cardContent}
              </a>
            ) : (
              <div key={`${item.title}-${index}`} className={sharedCardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}