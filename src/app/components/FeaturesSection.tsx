import React from "react";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface FeatureItem {
  title: string;
  desc: string;
  linkText: string;
  linkUrl: string;
  icon: React.ReactNode;
}

export interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultFeatures: FeatureItem[] = [
  {
    title: "Platform Terbaik",
    desc: "Layanan sudah dipercaya lebih dari +300.000 pengguna diseluruh Indonesia dengan jaminan SLA 99.5% untuk mendukung bisnis Anda.",
    linkText: "Security",
    linkUrl: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 11.1046 19.1046 12 18 12H6C4.89543 12 4 11.1046 4 10V6ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Harga Termurah",
    desc: "IDCloudHost menawarkan harga yang terjangkau dibandingkan infrastruktur Cloud lainnya di dunia dan dapat menghemat lebih dari 50% pengeluaran.",
    linkText: "Pricing",
    linkUrl: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 11.1046 19.1046 12 18 12H6C4.89543 12 4 11.1046 4 10V6ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Support 24/7",
    desc: "Tim support melayani setiap waktu & mempunyai pengalaman & bersertifikasi internasional dibidangnya untuk membantu permasalahan Anda.",
    linkText: "Support",
    linkUrl: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 11.1046 19.1046 12 18 12H6C4.89543 12 4 11.1046 4 10V6ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Privasi & Keamanan",
    desc: "Kami menjamin & melindungi setiap privasi dan keamanan data Anda dengan menggunakan berbagai teknologi terbaru dan terbaik.",
    linkText: "Compliance",
    linkUrl: "#",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 11.1046 19.1046 12 18 12H6C4.89543 12 4 11.1046 4 10V6ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM4 14C4 12.8954 4.89543 12 6 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="white"/>
      </svg>
    ),
  },
];

// ============================================================
// KOMPONEN UTAMA
// ============================================================
export function FeaturesSection(props: FeaturesSectionProps) {
  const {
    title = "Mengapa Memilih Layanan Kami?",
    subtitle = "Kami memberikan layanan komputasi awan terbaik dengan berbagai keunggulan untuk mendukung kebutuhan infrastruktur digital bisnis Anda.",
    features = defaultFeatures,
  } = props;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Judul & Subjudul Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b2c42] leading-tight mb-3">
            {title}
          </h2>
          <p className="text-[#8292a6] text-base max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center h-full"
              style={{ boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.06)" }}
            >
              
              <div className="w-[60px] h-[60px] rounded-full mb-6 flex items-center justify-center shrink-0 bg-[#016dfc]">
                {item.icon}
              </div>
              
              {/* UBAH: Ukuran font judul card menggunakan text-lg agar sama dengan WhoSection */}
              <h3 className="text-[#1b2c42] text-lg font-bold mb-2">
                {item.title}
              </h3>
              
              {/* UBAH: Ukuran font deskripsi card menggunakan text-base leading-relaxed agar sama dengan WhoSection */}
              <p className="text-[#8292a6] text-base leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              
              <a 
                href={item.linkUrl}
                className="text-[#016dfc] font-bold text-[13.5px] flex items-center gap-1.5 hover:text-blue-800 transition-colors"
              >
                {item.linkText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
              
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}