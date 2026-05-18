import cloudVpsImg from "../../assets/IconCloudVPS.webp";
import managedVpsImg from "../../assets/IconManagedVPS.webp";
import baremetalImg from "../../assets/IconBM.webp";
import hostingImg from "../../assets/IconHosting.webp";
import { useNavigate } from "react-router-dom";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface ShowcaseProduct {
  name: string;
  desc: string;
  price: string;
  image: string;
  imageAlt?: string;
  href?: string;
}

export interface ProductShowcaseProps {
  title?: string;
  subtitle?: string;
  products?: ShowcaseProduct[];
  buttonLabel?: string;
  onButtonClick?: () => void;
}

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultProducts: ShowcaseProduct[] = [
  {
    name: "Cloud VPS",
    desc: "Deploy & Scale Cloud dengan mudah",
    price: "Rp 50.000 /bln",
    image: cloudVpsImg,
    imageAlt: "Cloud VPS",
    href: "/cloud-vps",
  },
  {
    name: "Managed VPS",
    desc: "VPS dengan optimasi WHM dan cPanel",
    price: "Rp 680.000 /bln",
    image: managedVpsImg,
    imageAlt: "Managed VPS",
    href: "/managed-vps",
  },
  {
    name: "Bare Metal Server",
    desc: "Kontrol kebutuhan dengan Dedicated Resource",
    price: "Rp 2.500.000 /bln",
    image: baremetalImg,
    imageAlt: "Bare Metal Server",
    href: "/bare-metal",
  },
  {
    name: "Cloud Hosting",
    desc: "Web Hosting berteknologi Optimized SSD",
    price: "Rp 15.000 /bln",
    image: hostingImg,
    imageAlt: "Cloud Hosting",
    href: "/cloud-hosting",
  },
];

// ============================================================
// KOMPONEN CARD
// ============================================================
function ProductCard({ product }: { product: ShowcaseProduct }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => product.href && navigate(product.href)}
      className={`bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 ${
        product.href
          ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg"
          : "cursor-default"
      }`}
      style={{ boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.06)" }}
    >
      {/* Gambar Produk */}
      <div className="w-[140px] h-[140px] flex items-center justify-center mb-6">
        {product.image ? (
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            className="w-full h-full object-contain"
          />
        ) : (
          // Placeholder kalau belum ada gambar
          <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Nama Produk */}
      <h3 className="text-[#1b2c42] text-xl font-bold mb-2">
        {product.name}
      </h3>

      {/* Deskripsi */}
        <p className="text-[#8292a6] text-base mb-4">
        {product.desc}
        </p>

        {/* Harga */}
        <p className="text-[#8292a6] text-base">Mulai dari</p>
        <p className="text-[#016dfc] font-bold text-lg">
        {product.price}
      </p>
    </div>
  );
}

// ============================================================
// KOMPONEN UTAMA
// ============================================================
export function ProductShowcase(props: ProductShowcaseProps) {
  const {
    title = "Produk Unggulan Kami",
    subtitle = "Pilih layanan yang sesuai dengan kebutuhan bisnis Anda",
    products = defaultProducts,
    buttonLabel = "Lihat Semua Produk",
    onButtonClick,
  } = props;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>


      </div>
    </section>
  );
}