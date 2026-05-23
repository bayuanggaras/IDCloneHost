import { useState } from "react";
import imgUnion from "figma:asset/3fe3879c97f609b69d0dfa454f05f5208fe373d8.png";
import imgLogoVisa from "figma:asset/928c7bcbcdd31000a1edf3f2347a06a8255695d8.png";
import imgLogoMastercard from "figma:asset/d8ec704504393bd8bc83db849fbe44ed0bb2e6e9.png";
import imgLogoAtmBersama from "figma:asset/bfc5e43c625da1920e2d4e05aa77b91913e4b5cb.png";
import imgLogoBca from "figma:asset/7eb0fc019235007ea96811806d7de2359374ed35.png";
import imgLogoBni from "figma:asset/6001e22c7eddce1914df943fbd3181729a6ef4bb.png";
import imgLogoBankBri from "figma:asset/54dfb36bac3d6e7dc5f359f2901b34c1349f6742.png";
import imgLogoMandiri from "figma:asset/7861a8a47f5a2b5611bc23f9ceec0803a0bb32f2.png";
import imgLogoMandiriSyariah from "figma:asset/c3ef319d88c980df95681f0d846bf3d26ab815de.png";
import imgLogoCimbNiaga from "figma:asset/2e567228698675c5ac9e1150370de6617c660fd2.png";
import imgLogoPermataBank from "figma:asset/c3fc2d50679f449422f00ec4e79ff6b01cc89549.png";
import imgLogoBankMaybank from "figma:asset/0c19d6bb83f717ffe7d9e36b9a64e1b3c658d18a.png";
import imgLogoPaypal from "figma:asset/b73df782ad68cd25cfc3f62792ba4b736148abc6.png";
import imgLogoOvo from "figma:asset/766db0887b609bd50da7f675f8394fb6757b6e08.png";
import imgPembayaranShopeePayIdCloudHost from "figma:asset/9b1ebe54841995ba500c48711398d8d4b5932538.png";
import imgLogoAlfamidi from "figma:asset/3ee810ca2a7aa23bb712f73b431721ff37108c9f.png";
import imgLogoAlfamart from "figma:asset/205674a26e530d670984aad71515518ee52e11c0.png";
import imgLogoIndomaret from "figma:asset/852d1881375ea832c58b57046d8ede73b5bbb74e.png";
import imgTerverifikasi1 from "figma:asset/c5f536fc60a7e86243bd40f7874a219a1e08485c.png";
import imgImage51 from "figma:asset/743226e61411cabc770e727f2ac3f26581e10f92.png";
import imgMarkOfTrust from "figma:asset/ad2c835e5dc35a8a2540d8a1103c2b7067a5cd0b.png";
import imgImage87 from "figma:asset/bc86b8c2389ee5fe05dda7b21c3d69d9cfd4bb9a.png";
import imgIcannSeeklogo1 from "figma:asset/1649a9df548e419353f4d0283b385e972a61dc09.png";
import imgImage86 from "figma:asset/8d4453c900f4ffed9436e371d39e5e693a43bffb.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

// ============================================================
// TYPES
// ============================================================

interface SeoSectionItem {
  title: string;
  description: string;
}

interface FooterProps {
  seoSections?: SeoSectionItem[];
}

// ============================================================
// DATA
// ============================================================

const paymentLogos = [
  { src: imgLogoVisa, alt: "Visa" },
  { src: imgLogoMastercard, alt: "Mastercard" },
  { src: imgLogoAtmBersama, alt: "ATM Bersama" },
  { src: imgLogoBca, alt: "BCA" },
  { src: imgLogoBni, alt: "BNI" },
  { src: imgLogoBankBri, alt: "BRI" },
  { src: imgLogoMandiri, alt: "Mandiri" },
  { src: imgLogoMandiriSyariah, alt: "Mandiri Syariah" },
  { src: imgLogoCimbNiaga, alt: "CIMB Niaga" },
  { src: imgLogoPermataBank, alt: "Permata Bank" },
  { src: imgLogoBankMaybank, alt: "Maybank" },
  { src: imgLogoPaypal, alt: "PayPal" },
  { src: imgLogoOvo, alt: "OVO" },
  { src: imgPembayaranShopeePayIdCloudHost, alt: "ShopeePay" },
  { src: imgLogoAlfamidi, alt: "Alfamidi" },
  { src: imgLogoAlfamart, alt: "Alfamart" },
  { src: imgLogoIndomaret, alt: "Indomaret" },
];

const certifications = [
  { src: imgTerverifikasi1, alt: "Terverifikasi" },
  { src: imgImage51, alt: "ISO" },
  { src: imgMarkOfTrust, alt: "ISO IEC 27001" },
  { src: imgImage87, alt: "Certification" },
  { src: imgIcannSeeklogo1, alt: "ICANN" },
  { src: imgImage86, alt: "Award" },
];

const serviceLinks = [
  "Cloud VPS",
  "Server VPS",
  "Cloud Hosting",
  "Dedicated Server",
  "Layanan Lainnya",
];

const companyLinks = [
  "Tentang Perusahaan",
  "Afiliasi",
  "Tanya Jawab",
  "Ketentuan Layanan",
  "Request Penawaran",
];

const otherLinks = [
  "Pembayaran",
  "Status Server",
  "Promo",
  "Panduan",
  "Blog",
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "#",
  },
  {
    name: "Pinterest",
    icon: FaPinterestP,
    href: "#",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export function Footer({
  seoSections = [],
}: FooterProps) {
  const [showFullSeo, setShowFullSeo] = useState(false);

  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* ============================================================ */}
        {/* SEO CONTENT */}
        {/* ============================================================ */}

        {seoSections.length > 0 && (
          <div className="mb-10">

            <div
              className={`overflow-hidden transition-all duration-500 ${
                showFullSeo
                  ? "max-h-[5000px]"
                  : "max-h-[120px]"
              }`}
            >
              <div className="space-y-2">

                {seoSections.map((item, index) => (
                  <div key={index}>

                    <h3
                      className="text-[#1b2c42] text-lg font-bold "
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[#8292a6] text-sm leading-loose"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>

                  </div>
                ))}

              </div>
            </div>

            <button
              onClick={() => setShowFullSeo(!showFullSeo)}
              className="cursor-pointer mt-5 text-[#016dfc] text-sm font-medium"
            >
              {showFullSeo ? "Show Less" : "Show More"}
            </button>

          </div>
        )}

        {/* ============================================================ */}
        {/* TOP FOOTER */}
        {/* ============================================================ */}

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-8 mb-10">

          {/* Company Info */}
          <div className="flex-[3]">

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
              }}
              className="text-[#1b2c42] text-lg mb-2"
            >
              About IDCloudHost
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
              }}
              className="text-[#8292a6] text-sm leading-loose mb-4"
            >
              IDCloudHost (PT Cloud Hosting Indonesia) adalah penyedia layanan
              Web Hosting Provider berbasis SSD Cloud Hosting yang mempunyai
              tujuan untuk selalu menjaga website tetap hidup dan cepat di akses
              dari berbagai negara.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-4">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#e5e9f2] flex items-center justify-center text-[#8292a6] hover:bg-[#016dfc] hover:text-white hover:border-[#016dfc] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}

            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
              }}
              className="text-[#8292a6] text-sm"
            >
              Tim Support kami siap membantu Anda selama 24 jam.{" "}
              <a href="#" className="text-[#016dfc]">
                Tim Support
              </a>
            </p>

          </div>

          {/* Navigation */}
          <div className="flex-[3] grid grid-cols-2 sm:grid-cols-3 gap-6">

            {/* Service */}
            <div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                }}
                className="text-[#1b2c42] text-base mb-4"
              >
                Service
              </p>

              {serviceLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  className="block text-[#8292a6] text-sm py-1.5 hover:text-[#016dfc] transition-colors"
                >
                  {l}
                </a>
              ))}

            </div>

            {/* Company */}
            <div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                }}
                className="text-[#1b2c42] text-base mb-4"
              >
                Company
              </p>

              {companyLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  className="block text-[#8292a6] text-sm py-1.5 hover:text-[#016dfc] transition-colors"
                >
                  {l}
                </a>
              ))}

            </div>

            {/* Links */}
            <div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                }}
                className="text-[#1b2c42] text-base mb-4"
              >
                Links
              </p>

              {otherLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  className="block text-[#8292a6] text-sm py-1.5 hover:text-[#016dfc] transition-colors"
                >
                  {l}
                </a>
              ))}

            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* PAYMENT METHODS */}
        {/* ============================================================ */}

        <div className="pt-6 mb-4 hidden">

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
            }}
            className="text-[#1b2c42] text-sm mb-3 uppercase"
          >
            Accepted Payment Method
          </p>

          <div className="flex flex-wrap gap-2">

            {paymentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="h-8 w-12 rounded shadow-sm bg-white border border-[#e5e9f2] overflow-hidden flex items-center justify-center p-1"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}

          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM */}
        {/* ============================================================ */}

        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
            }}
            className="text-[#8292a6] text-sm"
          >
            2015 - 2026 © PT Cloud Hosting Indonesia
          </p>

          <div className="flex items-center gap-3 flex-wrap">

            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
              }}
              className="text-[#8292a6] text-xs uppercase tracking-wider"
            >
              Akreditasi
            </span>

            {certifications.map((cert) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className="h-7 w-auto object-contain"
              />
            ))}

          </div>

        </div>
      </div>
    </footer>
  );
}