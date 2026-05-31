// ============================================================
// HALAMAN UTAMA — Landing Page Paperclip
//
// Cara pakai:
// Setiap komponen bisa diisi props untuk ganti kontennya.
// Jika tidak diisi props, akan pakai konten default.
// ============================================================
import { HeroSectionV2 }  from "../components/HeroSectionV2";
import { DescSection }    from "../components/DescSection";
import { PricingSection } from "../components/PricingSection";
import { InfoCardsSection } from "../components/InfoCardsSection";
import { DeployBanner }   from "../components/DeployBanner";
import { ConsultBanner }  from "../components/ConsultBanner";
import { FAQSection }     from "../components/FAQSection";
import { CTASection }     from "../components/CTASection";
import { Footer }         from "../components/Footer";
import { HeroBackground } from "../components/HeroBG";

import heroPaperclip from "../../assets/heropaperclip.webp"; // Pastikan path ini terpakai jika dibutuhkan di section lain

// ============================================================
// ASSETS & ICONS
// ============================================================
// Ikon siluet ujung panah yang membentuk huruf "A"
const MonogramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_9503_17244)">
    <path d="M5.99945 1.28418C2.83445 1.28418 1.25195 3.92168 1.25195 6.03168C1.25195 8.14168 2.83445 10.2517 4.41695 10.7787V11.8337H5.47195V10.7787C5.47195 10.7787 5.99945 10.9897 6.52695 10.7787V11.8337H7.58195V10.7787C9.16445 10.2512 10.747 8.14168 10.747 6.03168C10.747 3.92168 9.16445 1.28418 5.99945 1.28418Z" fill="url(#paint0_linear_9503_17244)"/>
    <path d="M1.78003 4.97673C0.198031 4.44923 -0.329969 5.50423 0.198031 6.55923C0.725531 7.61423 1.78003 7.08673 2.30803 6.03173C2.62403 5.29323 2.30803 4.97673 1.78003 4.97673Z" fill="url(#paint1_linear_9503_17244)"/>
    <path d="M10.2205 4.97673C11.8025 4.44923 12.3305 5.50423 11.8025 6.55923C11.275 7.61423 10.2205 7.08673 9.69246 6.03173C9.37646 5.29323 9.69246 4.97673 10.2205 4.97673Z" fill="url(#paint2_linear_9503_17244)"/>
    <path d="M2.75317 0.937275C2.99117 0.794775 3.27117 0.820775 3.56067 0.955775C3.84917 1.09077 4.17217 1.34277 4.52917 1.69977C4.55881 1.72941 4.57546 1.76961 4.57546 1.81152C4.57546 1.85344 4.55881 1.89364 4.52917 1.92327C4.49953 1.95291 4.45933 1.96956 4.41742 1.96956C4.37551 1.96956 4.33531 1.95291 4.30567 1.92327C3.95917 1.57677 3.66617 1.35427 3.42717 1.24277C3.18967 1.13177 3.02967 1.14027 2.91617 1.20827C2.88042 1.22654 2.83908 1.23056 2.80048 1.21953C2.76189 1.2085 2.72891 1.18323 2.70822 1.14883C2.68753 1.11443 2.68067 1.07346 2.68901 1.03419C2.69735 0.994929 2.72028 0.960291 2.75317 0.937275ZM8.43817 0.956275C8.72817 0.821275 9.00817 0.794775 9.24617 0.937275C9.27906 0.960291 9.30199 0.994929 9.31033 1.03419C9.31867 1.07346 9.31181 1.11443 9.29112 1.14883C9.27043 1.18323 9.23745 1.2085 9.19886 1.21953C9.16026 1.23056 9.11892 1.22654 9.08317 1.20827C8.96967 1.14027 8.80967 1.13177 8.57217 1.24277C8.33317 1.35427 8.04017 1.57677 7.69417 1.92327C7.67949 1.93798 7.66207 1.94966 7.64288 1.95763C7.62369 1.9656 7.60312 1.96972 7.58235 1.96974C7.56157 1.96976 7.54099 1.96569 7.52179 1.95776C7.50258 1.94983 7.48513 1.9382 7.47042 1.92352C7.45571 1.90885 7.44404 1.89142 7.43607 1.87223C7.42809 1.85305 7.42398 1.83248 7.42395 1.8117C7.42393 1.79092 7.428 1.77035 7.43593 1.75114C7.44386 1.73194 7.45549 1.71448 7.47017 1.69977C7.82717 1.34277 8.15017 1.09077 8.43817 0.956275Z" fill="#FF4D4D"/>
    <path d="M4.41816 4.55457C4.58604 4.55457 4.74704 4.48788 4.86575 4.36917C4.98447 4.25046 5.05116 4.08946 5.05116 3.92157C5.05116 3.75369 4.98447 3.59269 4.86575 3.47398C4.74704 3.35527 4.58604 3.28857 4.41816 3.28857C4.25027 3.28857 4.08927 3.35527 3.97056 3.47398C3.85185 3.59269 3.78516 3.75369 3.78516 3.92157C3.78516 4.08946 3.85185 4.25046 3.97056 4.36917C4.08927 4.48788 4.25027 4.55457 4.41816 4.55457ZM7.58316 4.55457C7.75104 4.55457 7.91204 4.48788 8.03076 4.36917C8.14947 4.25046 8.21616 4.08946 8.21616 3.92157C8.21616 3.75369 8.14947 3.59269 8.03076 3.47398C7.91204 3.35527 7.75104 3.28857 7.58316 3.28857C7.41527 3.28857 7.25427 3.35527 7.13556 3.47398C7.01685 3.59269 6.95016 3.75369 6.95016 3.92157C6.95016 4.08946 7.01685 4.25046 7.13556 4.36917C7.25427 4.48788 7.41527 4.55457 7.58316 4.55457Z" fill="#050810"/>
    <path d="M4.52352 4.07976C4.59353 4.07976 4.66068 4.05194 4.71019 4.00243C4.7597 3.95292 4.78752 3.88577 4.78752 3.81576C4.78752 3.74574 4.7597 3.67859 4.71019 3.62908C4.66068 3.57957 4.59353 3.55176 4.52352 3.55176C4.45356 3.55176 4.38648 3.57955 4.33702 3.62901C4.28755 3.67847 4.25977 3.74556 4.25977 3.81551C4.25977 3.88546 4.28755 3.95254 4.33702 4.00201C4.38648 4.05147 4.45356 4.07976 4.52352 4.07976ZM7.68852 4.07976C7.75847 4.07976 7.82555 4.05197 7.87501 4.00251C7.92448 3.95304 7.95227 3.88596 7.95227 3.81601C7.95227 3.74606 7.92448 3.67897 7.87501 3.62951C7.82555 3.58005 7.75847 3.55226 7.68852 3.55226C7.61863 3.55226 7.55161 3.58002 7.50219 3.62944C7.45278 3.67885 7.42502 3.74587 7.42502 3.81576C7.42502 3.88564 7.45278 3.95266 7.50219 4.00208C7.55161 4.0515 7.61863 4.07976 7.68852 4.07976Z" fill="#00E5CC"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_9503_17244" x1="-0.330047" y1="0.22918" x2="13.511" y2="11.4277" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF4D4D"/>
      <stop offset="1" stop-color="#991B1B"/>
    </linearGradient>
    <linearGradient id="paint1_linear_9503_17244" x1="3.12546e-05" y1="4.83623" x2="2.15553" y2="7.47473" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF4D4D"/>
      <stop offset="1" stop-color="#991B1B"/>
    </linearGradient>
    <linearGradient id="paint2_linear_9503_17244" x1="9.69296" y1="4.97673" x2="12.2" y2="7.23123" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF4D4D"/>
      <stop offset="1" stop-color="#991B1B"/>
    </linearGradient>
    <clipPath id="clip0_9503_17244">
      <rect width="12" height="12" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

// ============================================================
// MAIN APP COMPONENT
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen w-full">
      
      {/* ================= HERO SECTION ================= */}
      <HeroSectionV2
        background={<HeroBackground />}
        badge={{ 
          icon: MonogramIcon,
          label: "OpenClaw",
          value: "AI Agent" 
        }}
        title="AI Agent Pribadi yang Aktif 24/7 di Server Anda"
        subtitle="Jalankan OpenClaw di VPS IDCloudHost dan otomatisasi pekerjaan bisnis Anda dengan AI. Mulai dari WhatsApp, Telegram, hingga email bisnis."  
      />

      {/* ================= OTHER SECTIONS ================= */}
      <DescSection
      title="Optimalkan OpenClaw dengan Cloud VPS IDCloudHost"
      description="OpenClaw adalah agent AI open-source yang dapat dijalankan secara Self Hosted, memungkinkan Anda membangun personal AI assistant yang berinteraksi langsung dengan file, sistem, dan workflow bisnis. OpenClaw dapat berjalan optimal di Cloud VPS IDCloudHost dengan resource dedicated untuk mendukung AI task automation dan workflow automation secara stabil dan scalable."
      buttonLabel="Mulai dengan Cloud VPS sekarang"
      />
      
      <PricingSection />
      
      <InfoCardsSection
        title="Mengapa OpenClaw Cocok untuk Bisnis Anda?"
        subtitle="Satu section yang menampilkan keunggulan utama OpenClaw secara ringkas." 
        layout="featured"
        columns={3}
        items={[
          {
            title: "Kelola Tim Agent di Satu Sistem",
            desc: "Atur dan kelola tim agent untuk berbagai tugas secara terkoordinasi dalam satu workflow.",
            accentColor: "bg-[#016dfc]",
          },
          {
            title: "Workflow Terstruktur",
            desc: "Setiap tugas memiliki alur yang jelas sehingga pekerjaan lebih mudah dikelola.",
            accentColor: "bg-[#0f7eff]",
          },
          {
            title: "Otomatisasi Tugas Rutin",
            desc: "Jadwalkan pekerjaan agar berjalan lebih konsisten tanpa proses manual.",
            accentColor: "bg-[#8b5cf6]",
          },
          {
            title: "Data Tetap Aman",
            desc: "Menjaga data tetap aman saat dijalankan di Cloud VPS IDCloudHost.",
            accentColor: "bg-[#0f9d58]",
          },
          {
            title: "Fleksibel dan Self-Hosted",
            desc: "Cocok untuk deployment self-hosted dan cloud dengan komposisi resource yang fleksibel.",
            accentColor: "bg-[#f97316]",
          },
          {
            title: "Target Pengguna Luas",
            desc: "Ideal untuk developer, tim operasional, dan bisnis yang butuh AI selalu aktif.",
            accentColor: "bg-[#7c3aed]",
          },
        ]}
      />

      <DeployBanner />
      <ConsultBanner />
       <FAQSection
        title="Tanya Jawab Layanan OpenClaw"
        subtitle="Pertanyaan umum seputar OpenClaw di IDCloudHost"
        faqs={[
          { question: "Apa itu OpenClaw?", answer: "OpenClaw adalah agent AI open-source yang dapat dijalankan secara self-hosted untuk otomatisasi workflow, chatbot, dan integrasi sistem bisnis." },
          { question: "Apakah OpenClaw sudah tersedia di IDCloudHost?", answer: "Ya, OpenClaw tersedia di Apps Catalog di Cloud VPS sehingga dapat di-deploy secara otomatis tanpa konfigurasi manual yang kompleks." },
          { question: "Berapa spesifikasi VPS yang direkomendasikan?", answer: "Ada beberapa pilihan service yang bisa Anda gunakan pada portal Cloud VPS IDCloudHost diantaranya Virtual Machine dengan pilihan beberapa Sistem operasi seperti linux, Microsoft Server, dan lainnya. Kemudian juga layanan Storage Vault, dan Docker Containers yang bisa Anda gunakan. Selain itu IDCloudHost juga menyediakan layanan tambahan untuk manage Cloud VPS Anda seperti : IT Consultant, Environment Migration, Maintenance Support, System Monitoring." },
          { question: "Apakah OpenClaw mendukung model AI lokal?", answer: "User root adalah user yang memiliki hak akses tertinggi di sistem operasi Linux. Sehingga, dengan user root tersebut kita bisa melakukan kustomisasi dan konfigurasi apapun di sistem tersebut. Salah satu keunggulan dari Private Server IDCloudHost adalah bisa menggunakan Akses Root dengan mudah, untuk lebih detailsnya Anda bisa cek panduan Cara Masuk Sebagai root Akses pada Server Cloud VPS IDCloudHost" },
          { question: "Apakah akan terkena biaya untuk instance yang dihentikan?", answer: "Benar, mesin virtual dalam keadaan berhenti terus untuk mencadangkan sumber daya sistem khusus (RAM, penyimpanan SSD NVMe, alias IP, CPU) dan karenanya dikenakan biaya hingga Anda menghancurkan mesin virtual. Jika Anda tidak ingin terkena biaya untuk hal ini maka pada mesin virtual silakan gunakan tombol DESTROY." },
        ]}
      />
      <CTASection />
      <Footer />
    </div>
  );
}