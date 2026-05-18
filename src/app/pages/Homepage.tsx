// ============================================================
// CONTOH HALAMAN BARU — menunjukkan cara pakai props
// Anda bisa copy file ini dan ganti isinya sesuka hati.
// ============================================================

import { HeroSection }    from "../components/HeroSection";
import { ProductShowcase }    from "../components/ProductShowcase";
import { FeaturesSection }     from "../components/FeaturesSection";
import { CTASection }     from "../components/CTASection";
import { Footer }         from "../components/Footer";
import promoBannerImg from "../../assets/Cloud VPS Annive.webp";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">

      {/* Hero dengan konten berbeda */}
      <HeroSection
        titleClassName="text-3xl sm:text-5xl lg:text-[64px]"
        containerClassName="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-24 pb-24"
        promoBannerImg={promoBannerImg}
        title="Cloud Server Terjangkau & Fleksible Kini Lebih Cepat!"
        description="Luncurkan Layanan Cloud dengan Membayar Sesuai Pemakaian dalam Sekali Klik!"
        checklist={[
          { text: "Performa dan Kestabilan 6 Kali Lebih Cepat dan Baik" },
          { text: "Kemudahan Upgrade/Downgrade Sesuai Kebutuhan" },
          { text: "Unlimited Bandwidth Premium & FREE Anti DDoS" },
          { text: "One Click Apps Catalog Terlengkap" },
          { text: "Layanan Support 24/7 Setiap Hari" },
        ]}
        buttons={[ ]}
      />

      <ProductShowcase
      />

      <FeaturesSection
        title="Fitur Unggulan Kami"
        subtitle="Inilah fitur-fitur yang membuat kami berbeda"
      />

      {/* CTA dengan teks berbeda */}
      <CTASection
      />

      <Footer
  seoSections={[
    {
      title: "Memaksimalkan Website dan Aplikasi dengan IDCloudHost",
      description:
        "IDCloudHost merupakan penyedia Web Hosting dan Cloud Infrastructure terbaik di Indonesia yang menawarkan berbagai layanan komputasi awan, mulai dari Cloud Hosting dengan cPanel dan Plesk, layanan Reseller Cloud Hosting, hingga berbagai solusi server seperti Virtual Private Server (VPS), Dedicated Server, Private WHM Server, dan Colocation Server yang tersedia di beberapa data center strategis di Indonesia. Sebagai Web Hosting Murah dan Terbaik, IDCloudHost juga terdaftar sebagai registrar resmi di PANDI untuk domain Indonesia. Saat ini lebih dari 600.000 pengguna telah mempercayakan website dan aplikasi kepada IDCloudHost termasuk kalangan startup, UMKM, pebisnis online, freelancer, dan perusahaan dari berbagai sektor.",
    },
    {
      title: "Komitmen Sebagai Web Hosting NVMe Terbaik di Indonesia",
      description:
        "IDCloudHost menyediakan layanan Web Hosting Murah berbasis SSD NVMe yang terjangkau dan didukung berbagai fitur gratis. Sebagai salah satu pilihan utama Web Hosting Indonesia yang tercepat dan terpercaya, kami menawarkan layanan terlengkap seperti domain, hosting, server, dan solusi IT lainnya. Seluruh layanan Cloud Hosting IDCloudHost dibangun di atas teknologi unggul seperti Solid-State Drive (SSD NVMe), LiteSpeed Web Server, Cloudflare CDN, dan CloudLinux, demi menjamin kinerja maksimal dan kestabilan website Anda. Dengan jaringan server lokal yang tersebar di Indonesia, kami memastikan akses lebih cepat dan latency rendah bagi pengunjung dari seluruh nusantara maupun mancanegara.",
    },
  ]}
/>
    </div>
  );
}
