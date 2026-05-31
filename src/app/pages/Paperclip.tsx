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
import { InfoCardsSection } from "../components/InfoCardsSection";
import { DeployBanner }   from "../components/DeployBanner";
import { ConsultBanner }  from "../components/ConsultBanner";
import { FAQSection }     from "../components/FAQSection";
import { CTASection }     from "../components/CTASection";
import { Footer }         from "../components/Footer";
import heroPaperclip from "../../assets/heropaperclip.webp";
import { HeroBackground } from "../components/HeroBG";
export default function App() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero dengan konten berbeda */}
            <HeroSection
              rightContentMode="image"
              image={heroPaperclip} 
              imageAlt="Ilustrasi Layanan Paperclip"
              
      
              title="Kelola Semua Kebutuhan AI Anda dengan Paperclip"
              description="Paperclip memudahkan Anda mengatur dan mengelola pekerjaan dalam satu sistem. Dengan alur kerja yang jelas, setiap proses dapat berjalan lebih efisien dengan keunggulan:"
              checklist={[
                { text: "Automasi Workflow Lebih Cepat" },
                { text: "Bantuan AI dalam Satu Platform" },
                { text: "Atur alur kerja lebih terstruktur" },
                { text: "Terintegrasi dengan Berbagai Tools" },
              ]}
              buttons={[
                { label: "Lihat Panduan", variant: "primary" },
                { label: "Mulai Sekarang", variant: "gradient" },
              ]}
      
            />
      <DescSection />
      <PricingSection />
      <DeployBanner />
      <InfoCardsSection
        title="Mengapa dan Siapa yang Cocok Menggunakan Paperclip?"
        subtitle="Satu section yang menampilkan keunggulan dan target pengguna dalam satu tampilan card." 
        layout="featured"
        columns={3}
        items={[
          {
            title: "Kelola Tim Agent di Satu Sistem",
            desc: "Atur dan kelola tim agent untuk menjalankan berbagai tugas secara terkoordinasi dalam satu workflow.",
            accentColor: "bg-[#016dfc]",
          },
          {
            title: "Workflow Lebih Terstruktur",
            desc: "Setiap tugas memiliki alur yang jelas, sehingga pekerjaan lebih mudah dikelola.",
            accentColor: "bg-[#0f7eff]",
          },
          {
            title: "Kontrol Biaya Lebih Efisien",
            desc: "Penggunaan resource dapat disesuaikan dengan kebutuhan Anda.",
            accentColor: "bg-[#1f7e3c]",
          },
          {
            title: "Otomatisasi Tugas Rutin",
            desc: "Jadwalkan pekerjaan agar berjalan lebih konsisten tanpa proses manual.",
            accentColor: "bg-[#8b5cf6]",
          },
          {
            title: "Data Tetap Aman",
            desc: "Dapat dijalankan di Cloud VPS sehingga data tetap dalam kendali Anda.",
            accentColor: "bg-[#0f9d58]",
          },
          {
            title: "Fleksibel Sesuai Kebutuhan",
            desc: "Mudah disesuaikan dan tidak bergantung pada satu platform.",
            accentColor: "bg-[#f97316]",
          },
        ]}
      />
      <ConsultBanner />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
