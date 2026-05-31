import React, { useState } from "react";

const ACCORDION = [
  {
    title: "One-Click Deploy",
    content: (
      <>
        <p className="text-white/80 mt-2 mb-2">
          Dapatkan kemudahan dalam melakukan instalasi berbagai Control Panel, Virtual Machine (VM), Operation System (OS), Aplikasi dan lainnya dengan Fitur One-Click Deploy dari layanan Private Cloud IDCloudHost dalam waktu kurang dari 60 detik.
        </p>
      </>
    ),
  },
  {
    title: "Easy Management",
    content: <p className="text-white/80 mt-2 mb-2">Control Panel akan membuat berbagai kemudahan dalam melakukan manage server secara mandiri dan dapat melakukan berbagai kegiatan seperti berlangganan server, manage backup, memperkirakan pembayaran dengan cepat dan praktis.</p>,
  },
  {
    title: "Powerful API",
    content: <p className="text-white/80 mt-2 mb-2">Dapat melakukan berbagai kegiatan secara otomatis dengan menggunakan API dari IDCloudHost. Setiap tindakan dan eksekusi akan dilakukan dapat dilakukan secara otomatis kedalam sistem dengan aman, cepat dan praktis.</p>,
  },
  {
    title: "Object Storage S3",
    content: <p className="text-white/80 mt-2 mb-2">Simpan data Anda secara aman dan scalable dengan Object Storage S3 berbasis cloud dari IDCloudHost, cocok untuk aplikasi dan penyimpanan data yang besar.</p>,
  },
  {
    title: "Load Balancer",
    content: <p className="text-white/80 mt-2 mb-2">Simpan data Anda secara aman dan scalable dengan Object Storage S3 berbasis cloud dari IDCloudHost, cocok aaauntuk aplikasi dan penyimpanan data yang besar.</p>,
  },
];

const DEFAULT_PREVIEW_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#07152F"/>
  <rect x="24" y="24" width="1152" height="712" rx="24" fill="url(#bg)" stroke="#1E3A68" stroke-width="2"/>
  <circle cx="946" cy="156" r="40" fill="#0D63FF" fill-opacity="0.9"/>
  <rect x="72" y="88" width="280" height="18" rx="9" fill="#A5C0F6" fill-opacity="0.7"/>
  <rect x="72" y="124" width="180" height="12" rx="6" fill="#5A77A8" fill-opacity="0.75"/>
  <rect x="72" y="202" width="360" height="220" rx="24" fill="#041026" fill-opacity="0.88" stroke="#244678"/>
  <rect x="96" y="226" width="160" height="14" rx="7" fill="#B6CCFF"/>
  <rect x="96" y="254" width="120" height="10" rx="5" fill="#6180B6"/>
  <rect x="96" y="292" width="200" height="80" rx="14" fill="#0D63FF" fill-opacity="0.75"/>
  <rect x="96" y="392" width="240" height="12" rx="6" fill="#6B8CBE"/>
  <rect x="96" y="416" width="200" height="12" rx="6" fill="#6B8CBE" fill-opacity="0.7"/>
  <rect x="470" y="212" width="620" height="290" rx="28" fill="#010B18" fill-opacity="0.88" stroke="#1E3A68"/>
  <rect x="510" y="248" width="220" height="20" rx="10" fill="#EFF5FF"/>
  <rect x="510" y="286" width="180" height="12" rx="6" fill="#5A77A8"/>
  <rect x="510" y="322" width="310" height="12" rx="6" fill="#6B8CBE" fill-opacity="0.78"/>
  <rect x="510" y="350" width="260" height="12" rx="6" fill="#6B8CBE" fill-opacity="0.62"/>
  <rect x="510" y="388" width="540" height="12" rx="6" fill="#0D63FF" fill-opacity="0.72"/>
  <rect x="510" y="416" width="500" height="12" rx="6" fill="#4184FF" fill-opacity="0.72"/>
  <rect x="510" y="444" width="460" height="12" rx="6" fill="#80AFFF" fill-opacity="0.72"/>
  <rect x="76" y="540" width="980" height="132" rx="24" fill="#040E1F" fill-opacity="0.96" stroke="#21467E"/>
  <rect x="100" y="564" width="160" height="14" rx="7" fill="#EFF5FF"/>
  <rect x="100" y="592" width="120" height="12" rx="6" fill="#6B8CBE"/>
  <rect x="274" y="564" width="130" height="48" rx="12" fill="#0D63FF" fill-opacity="0.82"/>
  <rect x="420" y="564" width="130" height="48" rx="12" fill="#12366B"/>
  <rect x="566" y="564" width="130" height="48" rx="12" fill="#12366B"/>
  <rect x="712" y="564" width="130" height="48" rx="12" fill="#12366B"/>
  <rect x="858" y="564" width="180" height="48" rx="12" fill="#06162F" stroke="#2A4B84"/>
  <defs>
    <linearGradient id="bg" x1="50" y1="26" x2="1056" y2="704" gradientUnits="userSpaceOnUse">
      <stop stop-color="#020C1E"/>
      <stop offset="0.5" stop-color="#021531"/>
      <stop offset="1" stop-color="#091A37"/>
    </linearGradient>
  </defs>
</svg>
`)}`;

const PREVIEW_IMAGES = [
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#040C1C"/>
  <rect x="36" y="36" width="1128" height="688" rx="26" fill="#071224" stroke="#1B3A6B"/>
  <rect x="64" y="70" width="320" height="20" rx="10" fill="#8FB1FF"/>
  <rect x="64" y="108" width="220" height="12" rx="6" fill="#4E6C96"/>
  <rect x="64" y="184" width="388" height="236" rx="24" fill="#05101F" stroke="#16345F"/>
  <rect x="96" y="214" width="180" height="16" rx="8" fill="#D9E6FF"/>
  <rect x="96" y="246" width="148" height="12" rx="6" fill="#6D8CBE"/>
  <rect x="96" y="296" width="250" height="84" rx="16" fill="#016DFC"/>
  <rect x="96" y="398" width="264" height="12" rx="6" fill="#9DB0D1"/>
  <rect x="96" y="428" width="214" height="12" rx="6" fill="#6A84AE"/>
  <rect x="476" y="184" width="640" height="300" rx="30" fill="#030A14" stroke="#16345F"/>
  <rect x="516" y="220" width="236" height="18" rx="9" fill="#F3F8FF"/>
  <rect x="516" y="256" width="180" height="12" rx="6" fill="#6687B5"/>
  <rect x="516" y="292" width="340" height="10" rx="5" fill="#6D8CBE"/>
  <rect x="516" y="316" width="222" height="10" rx="5" fill="#5A7AA8"/>
  <rect x="516" y="344" width="550" height="14" rx="7" fill="#016DFC"/>
  <rect x="516" y="374" width="480" height="14" rx="7" fill="#0A63E6"/>
  <rect x="516" y="404" width="440" height="14" rx="7" fill="#87B0FF"/>
  <rect x="64" y="548" width="1016" height="126" rx="24" fill="#020A18" stroke="#183867"/>
  <rect x="92" y="572" width="148" height="14" rx="7" fill="#F5F9FF"/>
  <rect x="92" y="600" width="103" height="12" rx="6" fill="#7894C0"/>
  <rect x="258" y="572" width="118" height="46" rx="12" fill="#016DFC"/>
  <rect x="392" y="572" width="118" height="46" rx="12" fill="#0B2A57"/>
  <rect x="526" y="572" width="118" height="46" rx="12" fill="#0B2A57"/>
  <rect x="660" y="572" width="118" height="46" rx="12" fill="#0B2A57"/>
  <rect x="794" y="572" width="182" height="46" rx="12" fill="#041224" stroke="#22457E"/>
</svg>
`)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#030E1F"/>
  <rect x="34" y="34" width="1132" height="692" rx="28" fill="#040F23" stroke="#163867"/>
  <circle cx="980" cy="150" r="38" fill="#016DFC"/>
  <rect x="68" y="72" width="280" height="18" rx="9" fill="#95B8FF"/>
  <rect x="68" y="108" width="168" height="12" rx="6" fill="#607C9F"/>
  <rect x="68" y="180" width="420" height="240" rx="26" fill="#010B17" stroke="#153B69"/>
  <rect x="96" y="206" width="148" height="12" rx="6" fill="#F5F9FF"/>
  <rect x="96" y="234" width="108" height="10" rx="5" fill="#748EBA"/>
  <rect x="96" y="264" width="260" height="76" rx="16" fill="#0E53BE"/>
  <rect x="96" y="356" width="248" height="10" rx="5" fill="#8CB0EF"/>
  <rect x="96" y="382" width="208" height="10" rx="5" fill="#6B85AC"/>
  <rect x="510" y="180" width="620" height="295" rx="26" fill="#030A13" stroke="#1A3D6A"/>
  <rect x="546" y="216" width="230" height="18" rx="9" fill="#F3F8FF"/>
  <rect x="546" y="250" width="160" height="10" rx="5" fill="#5C79A7"/>
  <rect x="546" y="276" width="344" height="10" rx="5" fill="#6E8EBC"/>
  <rect x="546" y="302" width="252" height="10" rx="5" fill="#5A74A0"/>
  <rect x="546" y="332" width="560" height="16" rx="8" fill="#0B60D8"/>
  <rect x="546" y="362" width="500" height="16" rx="8" fill="#4D84EC"/>
  <rect x="546" y="392" width="468" height="16" rx="8" fill="#ACC8FF"/>
  <rect x="72" y="542" width="986" height="138" rx="24" fill="#020A18" stroke="#183867"/>
  <rect x="98" y="566" width="148" height="16" rx="8" fill="#F4F8FF"/>
  <rect x="98" y="594" width="104" height="10" rx="5" fill="#7690BA"/>
  <rect x="270" y="566" width="142" height="50" rx="12" fill="#016DFC"/>
  <rect x="428" y="566" width="142" height="50" rx="12" fill="#0B2A57"/>
  <rect x="586" y="566" width="142" height="50" rx="12" fill="#0B2A57"/>
  <rect x="744" y="566" width="142" height="50" rx="12" fill="#0B2A57"/>
  <rect x="902" y="566" width="124" height="50" rx="12" fill="#041224" stroke="#244A84"/>
</svg>
`)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#030B17"/>
  <rect x="30" y="30" width="1140" height="700" rx="28" fill="#04101F" stroke="#173A6B"/>
  <rect x="66" y="66" width="330" height="20" rx="10" fill="#A4C5FF"/>
  <rect x="66" y="104" width="212" height="12" rx="6" fill="#6780A8"/>
  <rect x="64" y="170" width="414" height="250" rx="26" fill="#010A17" stroke="#173A6B"/>
  <rect x="94" y="196" width="180" height="14" rx="7" fill="#F4F8FF"/>
  <rect x="94" y="226" width="136" height="10" rx="5" fill="#6C88B3"/>
  <rect x="94" y="262" width="250" height="90" rx="18" fill="#0E4FD1"/>
  <rect x="94" y="372" width="240" height="10" rx="5" fill="#9AB7F7"/>
  <rect x="94" y="396" width="208" height="10" rx="5" fill="#6E89B5"/>
  <rect x="510" y="170" width="620" height="300" rx="30" fill="#030813" stroke="#163867"/>
  <rect x="552" y="210" width="246" height="22" rx="11" fill="#F6FAFF"/>
  <rect x="552" y="250" width="160" height="10" rx="5" fill="#5C79A7"/>
  <rect x="552" y="286" width="346" height="10" rx="5" fill="#6990C5"/>
  <rect x="552" y="314" width="258" height="10" rx="5" fill="#5B76A5"/>
  <rect x="552" y="350" width="560" height="16" rx="8" fill="#016DFC"/>
  <rect x="552" y="380" width="514" height="16" rx="8" fill="#4A87EE"/>
  <rect x="552" y="410" width="480" height="16" rx="8" fill="#A4C6FF"/>
  <rect x="72" y="544" width="992" height="142" rx="24" fill="#020A18" stroke="#183867"/>
  <rect x="96" y="570" width="154" height="16" rx="8" fill="#F5F9FF"/>
  <rect x="96" y="600" width="110" height="10" rx="5" fill="#7892BA"/>
  <rect x="266" y="570" width="138" height="54" rx="12" fill="#016DFC"/>
  <rect x="414" y="570" width="138" height="54" rx="12" fill="#0B2A57"/>
  <rect x="562" y="570" width="138" height="54" rx="12" fill="#0B2A57"/>
  <rect x="710" y="570" width="138" height="54" rx="12" fill="#0B2A57"/>
  <rect x="858" y="570" width="180" height="54" rx="12" fill="#041224" stroke="#244A84"/>
</svg>
`)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#030D1F"/>
  <rect x="36" y="36" width="1128" height="688" rx="28" fill="#040E20" stroke="#163867"/>
  <circle cx="960" cy="154" r="36" fill="#0A5CE3"/>
  <rect x="68" y="72" width="312" height="18" rx="9" fill="#9CBFFF"/>
  <rect x="68" y="108" width="188" height="12" rx="6" fill="#6A80A5"/>
  <rect x="70" y="172" width="404" height="248" rx="26" fill="#010A15" stroke="#163867"/>
  <rect x="98" y="196" width="160" height="14" rx="7" fill="#FBFCFF"/>
  <rect x="98" y="226" width="122" height="10" rx="5" fill="#758DB5"/>
  <rect x="98" y="264" width="260" height="84" rx="18" fill="#015FEA"/>
  <rect x="98" y="368" width="246" height="10" rx="5" fill="#93B5F5"/>
  <rect x="98" y="394" width="210" height="10" rx="5" fill="#6B86B0"/>
  <rect x="510" y="172" width="620" height="292" rx="30" fill="#020A13" stroke="#163867"/>
  <rect x="548" y="208" width="230" height="20" rx="10" fill="#FAFCFF"/>
  <rect x="548" y="244" width="170" height="10" rx="5" fill="#5B79A8"/>
  <rect x="548" y="270" width="348" height="10" rx="5" fill="#6790C6"/>
  <rect x="548" y="296" width="260" height="10" rx="5" fill="#5A74A1"/>
  <rect x="548" y="328" width="560" height="16" rx="8" fill="#016DFC"/>
  <rect x="548" y="358" width="506" height="16" rx="8" fill="#4787F0"/>
  <rect x="548" y="388" width="472" height="16" rx="8" fill="#A3C4FF"/>
  <rect x="72" y="546" width="990" height="136" rx="24" fill="#020A18" stroke="#183867"/>
  <rect x="96" y="570" width="152" height="16" rx="8" fill="#F6FAFF"/>
  <rect x="96" y="600" width="112" height="10" rx="5" fill="#7A93BD"/>
  <rect x="264" y="570" width="136" height="54" rx="12" fill="#016DFC"/>
  <rect x="410" y="570" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="556" y="570" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="702" y="570" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="848" y="570" width="182" height="54" rx="12" fill="#041224" stroke="#244A84"/>
</svg>
`)}`,
  `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg width="1200" height="760" viewBox="0 0 1200 760" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="760" rx="28" fill="#040D1E"/>
  <rect x="34" y="34" width="1132" height="692" rx="28" fill="#050F23" stroke="#163867"/>
  <circle cx="940" cy="150" r="35" fill="#016DFC"/>
  <rect x="60" y="68" width="290" height="20" rx="10" fill="#A2C1FF"/>
  <rect x="60" y="104" width="190" height="12" rx="6" fill="#6781A9"/>
  <rect x="62" y="172" width="396" height="244" rx="26" fill="#010A16" stroke="#163867"/>
  <rect x="86" y="198" width="168" height="14" rx="7" fill="#F4F8FF"/>
  <rect x="86" y="226" width="132" height="10" rx="5" fill="#728EBA"/>
  <rect x="86" y="268" width="258" height="82" rx="18" fill="#016DFC"/>
  <rect x="86" y="372" width="248" height="10" rx="5" fill="#8FB1F4"/>
  <rect x="86" y="398" width="212" height="10" rx="5" fill="#6D89B5"/>
  <rect x="510" y="172" width="620" height="296" rx="30" fill="#030913" stroke="#163867"/>
  <rect x="544" y="208" width="228" height="20" rx="10" fill="#F6FAFF"/>
  <rect x="544" y="246" width="164" height="10" rx="5" fill="#5978A5"/>
  <rect x="544" y="272" width="350" height="10" rx="5" fill="#6790C6"/>
  <rect x="544" y="298" width="266" height="10" rx="5" fill="#5A74A0"/>
  <rect x="544" y="330" width="560" height="16" rx="8" fill="#016DFC"/>
  <rect x="544" y="360" width="498" height="16" rx="8" fill="#4D87EF"/>
  <rect x="544" y="390" width="474" height="16" rx="8" fill="#A5C5FF"/>
  <rect x="74" y="548" width="994" height="136" rx="24" fill="#020A18" stroke="#183867"/>
  <rect x="92" y="572" width="154" height="16" rx="8" fill="#F6FAFF"/>
  <rect x="92" y="600" width="116" height="10" rx="5" fill="#7591BC"/>
  <rect x="264" y="572" width="136" height="54" rx="12" fill="#016DFC"/>
  <rect x="410" y="572" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="556" y="572" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="702" y="572" width="136" height="54" rx="12" fill="#0B2A57"/>
  <rect x="848" y="572" width="182" height="54" rx="12" fill="#041224" stroke="#244A84"/>
</svg>
`)}`
];

export interface ControlPanelSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function ControlPanelSection({ imageSrc, imageAlt = "Preview Control Panel" }: ControlPanelSectionProps) {
  const [openIdx, setOpenIdx] = useState(0);
  const previewImage = imageSrc ?? PREVIEW_IMAGES[openIdx] ?? DEFAULT_PREVIEW_IMAGE;
  return (
    <section
      className="py-16 lg:py-24 text-white"
      style={{
        background:
          "var(--Navy-Gradient, radial-gradient(185.7% 83.65% at 60% 66.55%, #1A3574 0%, #191E35 50%, #1A3574 100%))",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Text & Accordion */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Control Panel & API</h2>
          <p className="text-white/80 mb-6">Kelola layanan cloud Anda dengan mudah dan otomatis lewat dashboard dan API</p>
          <div className="rounded-2xl bg-white/5 border border-white/10 divide-y divide-white/10 overflow-hidden">
            {ACCORDION.map((item, idx) => (
              <div key={item.title}>
                <button
                  className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between cursor-pointer transition-all duration-200 ${openIdx === idx ? "bg-[#016DFC] text-white" : "text-white hover:bg-[#016DFC] hover:text-white"}`}
                  onClick={() => setOpenIdx(idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span>{item.title}</span>
                  <span className={`ml-2 transition-transform ${openIdx === idx ? "rotate-45" : "rotate-0"}`}>+</span>
                </button>
                {openIdx === idx && (
                  <div className="px-6 text-sm animate-fade-in">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image preview */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={previewImage}
                alt={imageAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500 border border-slate-200">
              <p className="font-semibold text-slate-700">Preview image</p>
              <p>Default preview berubah sesuai accordion yang aktif, atau pass <span className="font-medium text-[#016dfc]">imageSrc</span> nanti untuk gambar upload Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
