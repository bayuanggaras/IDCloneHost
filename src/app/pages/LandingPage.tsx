// ============================================================
// HALAMAN UTAMA — Landing Page Paperclip
//
// Cara pakai:
// Setiap komponen bisa diisi props untuk ganti kontennya.
// Jika tidak diisi props, akan pakai konten default.
//
// Contoh membuat halaman baru:
//   import { HeroSection } from "./components/HeroSection";
//   <HeroSection title="Judul baru saya" description="Deskripsi lain" />
// ============================================================
import { HeroSection }    from "../components/HeroSection";
import { DescSection }    from "../components/DescSection";
import { PricingSection } from "../components/PricingSection";
import { WhySection }     from "../components/WhySection";
import { DeployBanner }   from "../components/DeployBanner";
import { WhoSection }     from "../components/WhoSection";
import { ConsultBanner }  from "../components/ConsultBanner";
import { FAQSection }     from "../components/FAQSection";
import { CTASection }     from "../components/CTASection";
import { Footer }         from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <DescSection />
      <PricingSection />
      <WhySection />
      <DeployBanner />
      <WhoSection />
      <ConsultBanner />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
