// ============================================================
// CONTOH HALAMAN BARU — menunjukkan cara pakai props
// Anda bisa copy file ini dan ganti isinya sesuka hati.
// ============================================================

import { HeroSection }    from "../components/HeroSection";
import { DescSection }    from "../components/DescSection";
import { InfoCardsSection } from "../components/InfoCardsSection";
import { FAQSection }     from "../components/FAQSection";
import { CTASection }     from "../components/CTASection";
import { Footer }         from "../components/Footer";
import heroPaperclip from "../../assets/heropaperclip.webp";

export default function CloudVPS() {
  return (
    <div className="min-h-screen w-full">

      {/* Hero dengan konten berbeda */}
      <HeroSection
        rightContentMode="image"
        image={heroPaperclip} 
        imageAlt="Ilustrasi Layanan Domain"

        title="Cloud VPS eXtreme dengan Teknologi NVMe"
        description="Dengan teknologi NVMe, Cloud VPS eXtreme menghadirkan performa lebih cepat, efisien dan stabil dengan berbagai keunggulan:"
        checklist={[
          { text: "Performa hingga 6 kali lebih cepat dari Gen sebelumnya" },
          { text: "Dukungan S3 kompatibel Object Storage" },
          { text: "Pembayaran fleksibel sesuai kebutuhan" },
          { text: "Dilengkapi Managed Database & Apps Katalog" },
          { text: "Unlimited Bandwidth Premium & Tanpa Kuota" },
        ]}
        buttons={[
          { label: "Selengkapnya", variant: "primary" },
          { label: "Langganan Sekarang", variant: "gradient" },
        ]}

      />

      {/* Desc dengan gambar di kanan */}
      <DescSection
        title="Cloud VPS eXtreme"
        description="Cloud VPS eXtreme (NVMe) menawarkan kecepatan dan stabilitas terbaik, dilengkapi IOPS yang tinggi, high performance processor, dan dedicated resource. Dengan arsitektur CPU scalable dari Intel, AMD serta storage NVMe, layanan ini memberikan Powerful Performance yang efisien untuk kebutuhan bisnis Anda."
        buttonLabel="Deploy Sekarang"
        layout="image-left"
      />

      {/* Why section dengan judul berbeda */}
      <InfoCardsSection
        title="Siapa yang Cocok dengan Cloud VPS Kami?"
        subtitle="Satu section yang menampilkan target pengguna dan keunggulan layanan secara ringkas." 
        layout="centered"
        columns={4}
        items={[
          {
            title: "Pelajar & Mahasiswa",
            desc: "Ideal untuk kebutuhan tugas dan proyek akademik dengan resource yang scalable.",
            accentColor: "bg-[#016dfc]",
          },
          {
            title: "Freelancer",
            desc: "Membantu mengatur proyek dan deadline lebih efisien.",
            accentColor: "bg-[#0f7eff]",
          },
          {
            title: "Startup & Bisnis Kecil",
            desc: "Solusi cloud yang efisien untuk mendukung tumbuh kembang bisnis Anda.",
            accentColor: "bg-[#1f7e3c]",
          },
          {
            title: "Tim Operasional & Manajemen",
            desc: "Memberi kendali penuh pada tim dalam mengelola aplikasi dan layanan digital.",
            accentColor: "bg-[#8b5cf6]",
          },
        ]}
      />

      {/* FAQ dengan pertanyaan berbeda */}
      <FAQSection
        title="Tanya Jawab Cloud VPS Indonesia"
        subtitle="Pertanyaan Terkait Layanan Cloud VPS Indonesia"
        faqs={[
          { question: "Mengapa Memilih Cloud VPS Server?", answer: "Layanan Cloud VPS merupakan layanan khusus yang digunakan secara private dan lebih aman untuk perusahaan dan startup. Kami merekomendasi layanan Cloud VPS ini untuk Anda yang concern dan memprioritaskan keamanan data dan informasi pada server aplikasi dan website anda. Disatu sisi, server Cloud VPS ini juga nantinya akan diisi oleh Anda sendiri dimana Anda bisa melakukan konfigurasi sesuai dengan kebutuhan Anda. Layanan Cloud VPS IDCloudHost juga sudah termasuk DDoS Protection dan Snapshot Technology yang tentunya dapat meningkatkan keamanan dan ketangguhan server yang digunakan." },
          { question: "Bagaimana perhitungan tagihan layanan Cloud VPS Saya?", answer: "Layanan Server Cloud VPS di akun Anda dapat ditagih per jam hingga batas kurs bulanan. Tarif per jam ditentukan dengan membagi tarif bulanan sebesar 672 jam (28 hari). Jika server Anda online selama lebih dari 672 jam dalam satu bulan kalender, Anda hanya akan ditagih tarif bulanan. Akumulasi biaya ditagih ke akun Anda pada tanggal 1 setiap bulan. Berbeda dengan Kompetitor lainnya, Layanan Cloud VPS IDCloudHost tidak akan pernah membebankan biaya tambahan untuk transfer masuk atau keluar di Virtual Machine / Private Server Anda (No Extra Fees For Transfer)" },
          { question: "Layanan dan OS Apa saja yang ada pada Cloud VPS IDCloudHost?", answer: "Ada beberapa pilihan service yang bisa Anda gunakan pada portal Cloud VPS IDCloudHost diantaranya Virtual Machine dengan pilihan beberapa Sistem operasi seperti linux, Microsoft Server, dan lainnya. Kemudian juga layanan Storage Vault, dan Docker Containers yang bisa Anda gunakan. Selain itu IDCloudHost juga menyediakan layanan tambahan untuk manage Cloud VPS Anda seperti : IT Consultant, Environment Migration, Maintenance Support, System Monitoring." },
          { question: "Apakah Cloud VPS diberikan Akses Root?", answer: "User root adalah user yang memiliki hak akses tertinggi di sistem operasi Linux. Sehingga, dengan user root tersebut kita bisa melakukan kustomisasi dan konfigurasi apapun di sistem tersebut. Salah satu keunggulan dari Private Server IDCloudHost adalah bisa menggunakan Akses Root dengan mudah, untuk lebih detailsnya Anda bisa cek panduan Cara Masuk Sebagai root Akses pada Server Cloud VPS IDCloudHost" },
          { question: "Apakah akan terkena biaya untuk instance yang dihentikan?", answer: "Benar, mesin virtual dalam keadaan berhenti terus untuk mencadangkan sumber daya sistem khusus (RAM, penyimpanan SSD NVMe, alias IP, CPU) dan karenanya dikenakan biaya hingga Anda menghancurkan mesin virtual. Jika Anda tidak ingin terkena biaya untuk hal ini maka pada mesin virtual silakan gunakan tombol DESTROY." },
        ]}
      />

      {/* CTA dengan teks berbeda */}
      <CTASection
        titleLine1="Mulai Perjalanan"
        titleLine2="Anda Sekarang"
        description="Deskripsi CTA yang berbeda untuk halaman ini."
        buttonLabel="Hubungi Tim Kami"
      />

      <Footer />
    </div>
  );
}
