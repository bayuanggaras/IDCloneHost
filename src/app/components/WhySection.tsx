import React, { useEffect, useRef, useState } from "react";

// ============================================================
// DATA FEATURES
// ============================================================
const features = [
  {
    title: "Kelola Tim Agent di Satu Sistem",
    desc: "Atur dan kelola tim agent untuk menjalankan berbagai tugas secara terkoordinasi dalam satu workflow.",
    icon: <div className="text-white text-2xl">👥</div>,
  },
  {
    title: "Workflow Lebih Terstruktur",
    desc: "Setiap tugas memiliki alur yang jelas, sehingga pekerjaan lebih mudah dikelola.",
    icon: <div className="text-white text-2xl">⚙️</div>,
  },
  {
    title: "Kontrol Biaya Lebih Efisien",
    desc: "Penggunaan resource dapat disesuaikan dengan kebutuhan Anda.",
    icon: <div className="text-white text-2xl">💰</div>,
  },
  {
    title: "Otomatisasi Tugas Rutin",
    desc: "Anda dapat menjadwalkan pekerjaan agar berjalan lebih konsisten tanpa perlu proses manual.",
    icon: <div className="text-white text-2xl">🤖</div>,
  },
  {
    title: "Data Tetap Aman",
    desc: "Dapat dijalankan di Cloud VPS sehingga data tetap dalam kendali Anda.",
    icon: <div className="text-white text-2xl">🔒</div>,
  },
  {
    title: "Fleksibel Sesuai Kebutuhan",
    desc: "Mudah disesuaikan dan tidak bergantung pada satu platform.",
    icon: <div className="text-white text-2xl">🚀</div>,
  },
];

// ============================================================
// TYPES
// ============================================================
export interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface WhySectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

// ============================================================
// COMPONENT
// ============================================================
export function WhySection(props: WhySectionProps) {
  const {
    title = "Mengapa Harus Menggunakan Paperclip?",
    subtitle = "Alasan mengapa Anda perlu menggunakan Paperclip",
    features: featureList = features,
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ============================================================
  // AUTOPLAY
  // ============================================================
  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featureList.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [featureList.length]);

  // ============================================================
  // TOUCH MOBILE
  // ============================================================
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((prev) =>
          prev === featureList.length - 1 ? 0 : prev + 1
        );
      } else {
        setActiveIndex((prev) =>
          prev === 0 ? featureList.length - 1 : prev - 1
        );
      }

      startAutoPlay();
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1b2c42] leading-tight mb-3 font-bold">
            {title}
          </h2>

          <p className="text-[#8292a6] text-base">
            {subtitle}
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 transition-shadow"
              style={{
                boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.06)",
              }}
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#016dfc] flex items-center justify-center mb-4 shrink-0">
                {feature.icon}
              </div>

              <h3 className="text-[#1b2c42] text-lg mb-2 font-semibold">
                {feature.title}
              </h3>

              <p className="text-[#8292a6] text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="sm:hidden">
          <div
            className="overflow-hidden py-3 -my-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {featureList.map((feature) => (
                <div
                  key={feature.title}
                  className="w-full shrink-0 px-1"
                >
                  <div
                    className="bg-white rounded-2xl p-8"
                    style={{
                      boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.12)",
                    }}
                  >
                    <div className="w-[60px] h-[60px] rounded-full bg-[#016dfc] flex items-center justify-center mb-4 shrink-0">
                      {feature.icon}
                    </div>

                    <h3 className="text-[#1b2c42] text-lg mb-2 font-semibold">
                      {feature.title}
                    </h3>

                    <p className="text-[#8292a6] text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {featureList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  startAutoPlay();
                }}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-6 h-2 bg-[#016dfc]"
                    : "w-2 h-2 bg-[#c0ccdb]"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}