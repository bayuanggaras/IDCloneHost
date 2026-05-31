const customers = [
  { src: "/logo/alfamart.png", alt: "Alfamart" },
  { src: "/logo/telkom.png", alt: "Telkom Indonesia" },
  { src: "/logo/kimiafarma.png", alt: "Kimia Farma" },
  { src: "/logo/pertamina.png", alt: "Pertamina" },
  { src: "/logo/telkomsel.png", alt: "Telkomsel" },
  { src: "/logo/mandiri.png", alt: "Mandiri Capital" },
  { src: "/logo/jnt.png", alt: "J&T Express" },
  { src: "/logo/kemenperin.png", alt: "Kemenperin" },
  { src: "/logo/ratiksari.png", alt: "Ratiksari" },
  { src: "/logo/va.png", alt: "VA" },
  { src: "/logo/bsi.png", alt: "BSI" },
  { src: "/logo/itpln.png", alt: "IT PLN" },
  { src: "/logo/dhm.png", alt: "DHM" },
  { src: "/logo/paragon.png", alt: "Paragon" },
  { src: "/logo/peruri.png", alt: "Peruri" },
  { src: "/logo/sucofindo.png", alt: "Sucofindo" },
  { src: "/logo/its.png", alt: "ITS" },
  { src: "/logo/regarsport.png", alt: "Regarsport" },
];

const stats = [
  {
    value: "9",
    label: "Data Center tersebar di berbagai lokasi strategis dengan keamanan terjamin.",
  },
  {
    value: "20K+",
    label: "Sudah 20K+ VM mendukung transformasi digital dari Startup hingga Enterprise.",
  },
  {
    value: "2K+",
    label: "Liputan media membuktikan eksistensi dan kualitas layanan kami di Indonesia.",
  },
  {
    value: "99,5%",
    label: "Uptime server 99,5%, layanan tetap stabil, aman dan andal untuk mendukung bisnis Anda.",
  },
];

const marqueeItems = [...customers, ...customers];

export function TrustedBySection() {
  return (
    <section
      className="py-16 lg:py-24 text-white"
      style={{
        background:
          "var(--Navy-Gradient, radial-gradient(185.7% 83.65% at 60% 66.55%, #1A3574 0%, #191E35 50%, #1A3574 100%))",
      }}
    >
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% / 2)); }
        }
        .customer-marquee {
          animation: marqueeLeft 60s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">Dipercaya Oleh 700K+ Pelanggan Dalam 1 Dekade</h2>
          <p className="text-base opacity-80 ">Mulai rencanakan digitalisasi bersama IDCloudHost</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
          <div className="customer-marquee flex w-max gap-4">
            {marqueeItems.map((c, i) => (
              <div
                key={`${c.alt}-${i}`}
                className="bg-white rounded-lg flex items-center justify-center h-16 w-40 min-w-[160px] shadow-md"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="max-h-10 max-w-[120px] object-contain mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="customer-marquee mt-4 flex w-max gap-4" style={{ animationDirection: "reverse" }}>
            {marqueeItems.map((c, i) => (
              <div
                key={`row2-${c.alt}-${i}`}
                className="bg-white rounded-lg flex items-center justify-center h-16 w-40 min-w-[160px] shadow-md"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="max-h-10 max-w-[120px] object-contain mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/20 bg-white/5 p-5 text-left"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">{s.value}</div>
              <div className="text-base opacity-80 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
