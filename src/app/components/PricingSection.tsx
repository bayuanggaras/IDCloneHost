// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface PricingPlan {
  name: string;
  badge: string;
  price: string;
  perHour: string;
}

export interface SpecItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  badgeLabel?: string;
  specs?: SpecItem[];
  plans?: PricingPlan[];
  disclaimer?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

// ============================================================
// ICON KOMPONEN (internal)
// ============================================================
function CpuIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M11 6H21C22.6569 6 24 7.34315 24 9V23C24 24.6569 22.6569 26 21 26H11C9.34315 26 8 24.6569 8 23V9C8 7.34315 9.34315 6 11 6Z" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 10H19V22H13V10Z" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 13H29M26 19H29M3 13H6M3 19H6M19 26V29M13 26V29M19 3V6M13 3V6" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RamIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M2 9H30V22H2V9Z" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 22V25M7.5 22V25M13 22V25M19 22V25M24.5 22V25M30 22V25" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12.5H13.5V17.5H7V12.5ZM18.5 12.5H25V17.5H18.5V12.5Z" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StorageIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 8H28C29.1046 8 30 8.89543 30 10V14C30 15.1046 29.1046 16 28 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8ZM4 18H28C29.1046 18 30 18.8954 30 20V24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24V20C2 18.8954 2.89543 18 4 18Z" stroke="#016DFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25" cy="12" r="2" fill="#016DFC" />
      <circle cx="25" cy="22" r="2" fill="#016DFC" />
    </svg>
  );
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultSpecs: SpecItem[] = [
  { icon: <CpuIcon />, label: "CPU", value: "2 Core" },
  { icon: <RamIcon />, label: "RAM", value: "4 GB" },
  { icon: <StorageIcon />, label: "Storage", value: "20 GB" },
];

const defaultPlans: PricingPlan[] = [
  { name: "Basic Standard", badge: "Hemat untuk pemula", price: "Rp 87.000", perHour: "Rp 120" },
  { name: "Intel eXtreme", badge: "Performa Stabil", price: "Rp 149.000", perHour: "Rp 204" },
  { name: "AMD eXtreme", badge: "Optimasi Beban Berat", price: "Rp 149.000", perHour: "Rp 204" },
];

const defaultDisclaimer = (
  <>
    *Harga yang ditampilkan adalah simulasi. Untuk informasi ketersediaan dan detail lebih lanjut ke{" "}
    <strong className="text-[#016dfc]">console.idcloudhost.com</strong>
  </>
);

// ============================================================
// KOMPONEN
// ============================================================
export function PricingSection(props: PricingSectionProps) {
  const {
    title = "Paket Cloud VPS untuk Menjalankan Paperclip",
    subtitle = "Berikut spesifikasi minimum Cloud VPS IDCloudHost untuk menjalankan Paperclip",
    badgeLabel = "SPESIFIKASI MINIMUM",
    specs = defaultSpecs,
    plans = defaultPlans,
    disclaimer = defaultDisclaimer,
    buttonLabel = "Mulai Sekarang",
    onButtonClick,
  } = props;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Judul */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b2c42] leading-tight mb-3">
            {title}
          </h2>
          <p className="text-[#8292a6] text-base">{subtitle}</p>
        </div>

        {/* Kartu utama */}
        <div
          className="bg-white rounded-2xl p-6 lg:p-12 flex flex-col gap-6"
          style={{ boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.06)" }}
        >
          {/* Badge */}
          <div className="flex justify-center">
            <span className="bg-[#f2f8ff] text-[#1b2c42] font-bold text-base tracking-widest px-5 py-1 rounded-full">
              {badgeLabel}
            </span>
          </div>

          {/* Baris Spesifikasi */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#e5e9f2]">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e9f2]">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center gap-6 p-5">
                  <div className="bg-[#f2f8ff] rounded-lg p-3.5 shrink-0">{spec.icon}</div>
                  <div>
                    <p className="text-[#233955] text-sm tracking-wide mb-1">{spec.label}</p>
                    <p className="text-[#1b2c42] font-bold text-xl tracking-wide">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kartu Harga */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center gap-3 border border-[#e5e9f2]/50"
              >
                <p className="text-[#1b2c42] font-bold text-2xl text-center">{plan.name}</p>
                <span className="bg-[#f2f8ff] text-[#016dfc] font-bold text-sm px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
                <hr className="w-full border-[#e5e9f2]" />
                <div className="text-center">
                  <p className="text-[#1b2c42] font-bold text-2xl">
                    {plan.price}{" "}
                    <span className="text-[#233955] text-base font-normal">/bulan</span>
                  </p>
                  <p className="text-[#233955] text-sm">
                    <strong>{plan.perHour}</strong> /jam
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="flex justify-center">
            <p className="text-[#233955] text-sm border border-[#e5e9f2] rounded-full px-4 py-2 inline-block text-center">
              {disclaimer}
            </p>
          </div>

          {/* Tombol */}
          <div className="flex justify-center">
            <button
              onClick={onButtonClick}
              className="px-7 py-4 rounded-lg bg-[#016dfc] text-white font-bold text-base hover:bg-[#0058d0] transition-colors"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
