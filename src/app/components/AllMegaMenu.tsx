import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ============================================================
// TIPE DATA
// ============================================================
interface ProductItem {
  name: string;
  desc: string;
  badge?: string;
  icon: React.ReactNode;
  href?: string;
}

// ============================================================
// DATA PRODUK
// ============================================================
const allProducts = {
  cloudVps: {
    name: "Cloud VPS",
    desc: "Layanan Full Cloud Access dan Scale Up You Grow yang pertama di Indonesia.",
    badge: "HOT",
    href: "/cloud-vps",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  serverVps: {
    name: "Server VPS",
    desc: "Layanan Server VPS Indonesia terjangkau & terbaik untuk Website & Aplikasi Bisnis Anda.",
    badge: "NVMe",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="8" x2="6.01" y2="8" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  colocationServer: {
    name: "Colocation Server",
    desc: "Kenyamanan layanan cloud yang berpadu dengan kontrol serta kinerja on premises server.",
    badge: "Tier IV",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  wordpressHosting: {
    name: "WordPress Hosting",
    desc: "Solusi cadangan data yang aman dan fleksibel untuk melindungi bisnis Anda.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 11.5c0 1.5 1 4.5 1 4.5s.5-1.5 1-3.5c.5 2 1 3.5 1 3.5s1-3 1-4.5" />
      </svg>
    ),
  },
  dedicatedServer: {
    name: "Dedicated Server",
    desc: "Kenyamanan layanan cloud yang berpadu dengan kontrol serta kinerja on premises server.",
    badge: "Tier IV",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  vpsWhm: {
    name: "VPS WHM cPanel",
    desc: "Kenyamanan layanan cloud yang berpadu dengan kontrol serta kinerja on premises server.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  bareMetal: {
    name: "Bare Metal Server",
    desc: "Performa hardware murni tanpa lapisan virtualisasi untuk beban kerja maksimal.",
    badge: "Hot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  privateCloud: {
    name: "Private Cloud",
    desc: "Infrastruktur cloud eksklusif khusus untuk tingkat keamanan enterprise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <rect x="10" y="10" width="4" height="4" rx="1" />
      </svg>
    ),
  },
  gpuServer: {
    name: "GPU Server",
    desc: "Komputasi super cepat khusus kebutuhan AI, Big Data, dan Rendering.",
    badge: "Hot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="12" y1="4" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="20" />
        <line x1="4" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
  domainId: {
    name: "Domain .ID",
    desc: "Identitas digital resmi dan terpercaya asli Indonesia.",
    badge: "Hot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  sslCert: {
    name: "SSL Certificate",
    desc: "Amankan enkripsi data traffic website Anda dari ancaman cyber.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  webInstant: {
    name: "Website Instant",
    desc: "Solusi platform pembuatan website siap pakai dalam hitungan menit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  objectStorage: {
    name: "Object Storage",
    desc: "Ruang penyimpanan data berbasis objek S3 yang siap dikoneksikan kapan saja.",
    badge: "Hot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  kubernetes: {
    name: "Kubernetes",
    desc: "Layanan sistem orkestrasi container otomatis skala korporat.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  emailSolution: {
    name: "Email Solution",
    desc: "Kolaborasi sistem email bisnis profesional dengan nama domain Anda sendiri.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  backupSolution: {
    name: "Backup Solution",
    desc: "Sistem proteksi data berkala aman dari potensi serangan malware berbahaya.",
    badge: "Hot",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 21v-5h5" />
      </svg>
    ),
  },
};

// ============================================================
// STRUKTUR MENU PRODUK
// ============================================================
const productData: Record<string, ProductItem[]> = {
  "Featured Products": [
    allProducts.cloudVps,
    allProducts.serverVps,
    allProducts.colocationServer,
    allProducts.wordpressHosting,
    allProducts.dedicatedServer,
    allProducts.vpsWhm,
  ],
  "Cloud & Server": [
    allProducts.cloudVps,
    allProducts.serverVps,
    allProducts.colocationServer,
    allProducts.bareMetal,
    allProducts.privateCloud,
    allProducts.gpuServer,
    allProducts.dedicatedServer,
    allProducts.vpsWhm,
  ],
  "Domain & Website": [
    allProducts.domainId,
    allProducts.sslCert,
    allProducts.webInstant,
    allProducts.wordpressHosting,
  ],
  "Developer Tools": [
    allProducts.objectStorage,
    allProducts.kubernetes,
  ],
  "Solution & Addons": [
    allProducts.emailSolution,
    allProducts.backupSolution,
  ],
};

// ============================================================
// DATA SOLUSI
// ============================================================
const solutionIconCloud = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const solutionIconApps = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21v-5h5" />
  </svg>
);

const solutionData: Record<string, ProductItem[]> = {
  "Solution by Industry": [
    { name: "Education",                   desc: "Menyediakan teknologi terbaru untuk mendukung pembelajaran digital yang efektif dan inovatif.",              href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Finance",                     desc: "Mengelola finansial company Anda dengan solusi layanan yang aman dan terpercaya.",                           href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Retail",                      desc: "Meningkatkan bisnis retail Anda menjadi lebih efisien dengan kinerja yang maksimal.",                        href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Tour & Travel",               desc: "Menawarkan sistem terdepan dengan teknologi canggih untuk bisnis tour dan travel Anda.",                     href: "/cloud-solution", icon: solutionIconCloud },
    { name: "e-Commerce",                  desc: "Mengoptimalkan pertumbuhan bisnis E-Commerce Anda dengan aman dan scalable.",                                href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Manufacturing & Distribution",desc: "Meningkatkan produktivitas bisnis manufaktur dan distribusi Anda menjadi lebih optimal.",                   href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Medical & Healthcare",        desc: "Memberikan layanan solusi yang inovatif untuk mendukung efisiensi pelayanan dan kualitas kesehatan lebih baik.", href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Media",                       desc: "Mendukung kebutuhan pada industri media Anda dengan kecepatan dan skalabilitas tanpa batas.",                href: "/cloud-solution", icon: solutionIconCloud },
    { name: "Government",                  desc: "Solusi infrastruktur digital yang andal untuk pemerintahan.",                                               href: "/cloud-solution", icon: solutionIconCloud },
  ],
  "Solution by Apps": [
    { name: "OpenClaw",  desc: "AI Agent Pribadi yang Aktif 24/7 di Server Anda.",                                              badge: "HOT", href: "/backup-solution", icon: solutionIconApps },
    { name: "Paperclip", desc: "Paperclip memudahkan Anda mengatur dan mengelola pekerjaan dalam satu sistem.",                              href: "/backup-solution", icon: solutionIconApps },
    { name: "N8n",       desc: "Self Hosted n8n terbaik untuk otomasi & AI workflow bisnis Anda.",                                           href: "/backup-solution", icon: solutionIconApps },
  ],
};

// ============================================================
// SHARED: FOOTER BANNER
// ============================================================
function MenuFooter() {
  return (
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
  );
}

// ============================================================
// SHARED: PRODUCT CARD
// ============================================================
function ProductCard({ product }: { product: ProductItem }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => product.href && navigate(product.href)}
      className={`p-5 border border-slate-200 rounded-xl hover:bg-[#016dfc]/10 transition-all flex gap-4 bg-white group ${
        product.href ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#016dfc]">
        {product.icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="font-bold text-slate-800 text-sm group-hover:text-[#016dfc] transition-colors">
            {product.name}
          </div>
          {product.badge && (
            <div className="text-[10px] bg-[#016dfc] text-white px-2 py-0.5 rounded-full font-bold tracking-wide">
              {product.badge}
            </div>
          )}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">{product.desc}</p>
      </div>
    </div>
  );
}

// ============================================================
// KOMPONEN: PRODUCT MEGA MENU
// Struktur: Sidebar kiri + konten kanan (grid card)
// ============================================================
interface MegaMenuProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProductMegaMenu({ onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState("Featured Products");

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 pt-2 z-[101]"
      style={{ top: "64px", width: "min(1200px, 95vw)" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-800">

        <div className="flex">
          {/* Sidebar Kiri */}
          <div className="w-[260px] bg-white py-4 border-r border-slate-100 flex-shrink-0">
            {Object.keys(productData).map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setActiveTab(cat)}
                className={`w-full text-left px-6 py-4 text-sm font-semibold transition-colors relative ${
                  activeTab === cat
                    ? "bg-[#eaf2ff] text-[#016dfc]"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {activeTab === cat && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#016dfc]" />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Konten Kanan */}
          <div className="flex-1 p-8 bg-white">
            <h3 className="text-xl font-bold mb-6 text-slate-800">{activeTab}</h3>

            <div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              {productData[activeTab].map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>

        <MenuFooter />
      </div>
    </div>
  );
}

// ============================================================
// KOMPONEN: SOLUTION MEGA MENU
// Struktur: Tab horizontal atas + konten grid card
// ============================================================
export function SolutionMegaMenu({ onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState("Solution by Industry");

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 pt-2 z-[101]"
      style={{ top: "64px", width: "min(1200px, 95vw)" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col text-slate-800">

        <div className="flex">
          {/* Sidebar Kiri */}
          <div className="w-[260px] bg-white py-4 border-r border-slate-100 flex-shrink-0">
            {Object.keys(solutionData).map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setActiveTab(cat)}
                className={`w-full text-left px-6 py-4 text-sm font-semibold transition-colors relative ${
                  activeTab === cat
                    ? "bg-[#eaf2ff] text-[#016dfc]"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {activeTab === cat && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#016dfc]" />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Konten Kanan */}
          <div className="flex-1 p-8 bg-white">
            <h3 className="text-xl font-bold mb-6 text-slate-800">{activeTab}</h3>

            <div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto pr-1 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ maxHeight: "calc(2 * (88px + 1rem))" }}
            >
              {solutionData[activeTab].map((item, i) => (
                <ProductCard key={i} product={item} />
              ))}
            </div>
          </div>
        </div>

        <MenuFooter />
      </div>
    </div>
  );
}