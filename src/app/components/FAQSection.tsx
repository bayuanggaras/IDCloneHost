import React, { useState, useRef, useEffect } from "react";

// ============================================================
// TIPE DATA (Props)
// ============================================================
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

// ============================================================
// CONFIG
// ============================================================
const ITEM_HEIGHT = 80;
const VISIBLE_ITEMS = 4;

// ============================================================
// DEFAULT KONTEN
// ============================================================
const defaultFaqs: FAQItem[] = [
  {
    question: "Apa itu Paperclip AI?",
    answer:
      "Paperclip AI adalah platform untuk mengatur dan mengotomatisasi workflow agar pekerjaan berjalan lebih rapi, cepat, dan efisien.",
  },
  {
    question: "Apakah Paperclip bisa dijalankan di Cloud VPS IDCloudHost?",
    answer:
      "Ya, Paperclip dapat dijalankan di Cloud VPS IDCloudHost. Anda hanya perlu mengikuti panduan instalasi yang tersedia di App Catalog IDCloudHost.",
  },
  {
    question: "Apakah instalasi Paperclip sulit dilakukan?",
    answer:
      "Tidak. Dengan App Catalog IDCloudHost, proses instalasi Paperclip dapat dilakukan hanya dalam beberapa langkah mudah tanpa keahlian teknis mendalam.",
  },
  {
    question: "Apa saja yang perlu disiapkan sebelum install Paperclip?",
    answer:
      "Anda perlu menyiapkan Cloud VPS IDCloudHost dengan spesifikasi minimum 2 Core CPU, 4 GB RAM, dan 20 GB Storage.",
  },
  {
    question: "Apakah Paperclip aman digunakan untuk data bisnis?",
    answer:
      "Ya. Paperclip dapat dijalankan di Cloud VPS milik Anda sendiri, sehingga data tetap dalam kendali penuh Anda dan tidak disimpan di server pihak ketiga.",
  },
];

export function FAQSection(props: FAQSectionProps) {
  const {
    title = "Tanya Jawab Layanan Paperclip",
    subtitle = "Pertanyaan umum seputar Paperclip di IDCloudHost",
    faqs = defaultFaqs,
  } = props;

  const [openIndex, setOpenIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);

  // ============================================================
  // AUTO SCROLL FAQ LIST ONLY
  // ============================================================
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (listRef.current) {
      listRef.current.scrollTo({
        top: openIndex * ITEM_HEIGHT,
        behavior: "smooth",
      });
    }
  }, [openIndex]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b2c42] leading-tight mb-3">
            {title}
          </h2>
          <p className="text-[#8292a6] text-base">
            {subtitle}
          </p>
        </div>

        {/* FAQ Layout */}
        <div
          className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{ boxShadow: "0px 2px 8px rgba(0, 7, 46, 0.06)" }}
        >

          {/* ============================================================ */}
          {/* LEFT - QUESTIONS */}
          {/* ============================================================ */}
          <div className="lg:w-[400px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#e5e9f2] flex flex-col">

            {/* Header */}
            <div className="font-bold text-[#1b2c42] text-2xl p-5 border-b border-[#e5e9f2] shrink-0">
              FAQ
            </div>

            {/* Scrollable List */}
            <div
              ref={listRef}
              className="relative overflow-y-auto"
              style={{
                maxHeight: `${ITEM_HEIGHT * VISIBLE_ITEMS}px`,
                scrollbarWidth: "thin",
                scrollbarColor: "#e5e9f2 transparent",
              }}
            >
              {/* Background Track */}
              <div
                className="absolute left-0 top-0 w-1.5 bg-[#e5e9f2] rounded-r pointer-events-none"
                style={{ height: `${faqs.length * ITEM_HEIGHT}px` }}
              />

              {/* Active Indicator */}
              <div
                className="absolute left-0 w-1.5 bg-[#016dfc] rounded-r transition-all duration-300 pointer-events-none"
                style={{
                  top: `${openIndex * ITEM_HEIGHT}px`,
                  height: `${ITEM_HEIGHT}px`,
                }}
              />

              {/* FAQ Buttons */}
              {faqs.map((faq, idx) => (
                <button
                  key={faq.question}
                  onClick={() => setOpenIndex(idx)}
                  style={{ height: `${ITEM_HEIGHT}px` }}
                  className={`w-full flex items-center gap-4 px-5 text-left transition-colors ${
                    openIndex === idx
                      ? "bg-[rgba(77,168,253,0.12)]"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12zm-1 13H7v1.5h10V16zm0-4H7v1.5h10V12zm-4-4H7v1.5h6V8z"
                        fill={openIndex === idx ? "#016DFC" : "#C0CCDB"}
                      />
                    </svg>
                  </div>

                  {/* Question — font-bold saat aktif, font-medium saat tidak */}
                  <p
                    className={`text-sm sm:text-base leading-snug line-clamp-2 ${
                      openIndex === idx
                        ? "font-bold text-[#016dfc]"
                        : "font-medium text-[#1b2c42]"
                    }`}
                  >
                    {faq.question}
                  </p>
                </button>
              ))}
            </div>

            {/* Scroll Hint */}
            {faqs.length > VISIBLE_ITEMS && (
              <div className="shrink-0 flex items-center justify-center gap-1.5 py-2 border-t border-[#e5e9f2]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 3v8M4 8l3 3 3-3"
                    stroke="#8292a6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#8292a6] text-xs">
                  Scroll untuk lihat lebih banyak
                </span>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* RIGHT - ANSWER */}
          {/* ============================================================ */}
          <div className="flex-1 p-6 lg:p-8">
            <h3 className="font-bold text-[#1b2c42] text-xl sm:text-2xl mb-4">
              {faqs[openIndex].question}
            </h3>
            <p className="text-[#8292A6] text-base leading-relaxed">
              {faqs[openIndex].answer}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}