/**
 * Site configuration
 * Single source of truth for the THUNDEBT sales page.
 */

export const siteConfig = {
  // ──────────────────────────────────────
  // Site & Business Identity
  // ──────────────────────────────────────
  businessName: "THUNDEBT",
  siteUrl: "https://thundebt.com",
  appUrl: "https://app.thundebt.com",
  lineUrl: "https://line.me/R/ti/p/@thundebt",

  // ──────────────────────────────────────
  // SEO & Meta
  // ──────────────────────────────────────
  seo: {
    titleTemplate: "%s | THUNDEBT",
    defaultTitle: "THUNDEBT",
    defaultDescription: "THUNDEBT",
    ogImage: "/og-image.jpg",
    keywords: ["THUNDEBT"],
  },

  // ──────────────────────────────────────
  // DaisyUI Theme
  // ──────────────────────────────────────
  theme: {
    default: "corporate",
  },

  // ──────────────────────────────────────
  // Social Links
  // ──────────────────────────────────────
  socials: [
    {
      platform: "LINE",
      url: "https://line.me/R/ti/p/@thundebt",
      svg: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314",
    },
  ],

  // ──────────────────────────────────────
  // Footer
  // ──────────────────────────────────────
  footer: {
    copyright: "All rights reserved.",
    links: [] as { label: string; href: string }[],
  },

  // ──────────────────────────────────────
  // Page Content
  // ──────────────────────────────────────
  content: {
    nav: {
      targetAudience: "เหมาะกับใคร",
      howItWorks: "ระบบทำงานยังไง",
      benefits: "สิ่งที่คุณจะได้รับ",
      faq: "FAQ",
    },
    hero: {
      headline: "[ใส่ Headline]",
      subheadline: "[ใส่ Subheadline]",
      cta: { label: "เริ่มให้ระบบช่วยวิเคราะห์", href: "https://app.thundebt.com" },
      ctaSecondary: { label: "LINE @thundebt", href: "https://line.me/R/ti/p/@thundebt" },
    },
    seoTitle: "THUNDEBT",
    description: "[ใส่ Meta Description]",
    targetAudience: {
      badge: "เหมาะกับใคร",
      title: "เหมาะกับใคร",
      items: [
        { icon: "😰", title: "[ใส่หัวข้อกลุ่มเป้าหมาย 1]", description: "[ใส่คำอธิบายกลุ่มเป้าหมาย 1]" },
        { icon: "📊", title: "[ใส่หัวข้อกลุ่มเป้าหมาย 2]", description: "[ใส่คำอธิบายกลุ่มเป้าหมาย 2]" },
        { icon: "🗓️", title: "[ใส่หัวข้อกลุ่มเป้าหมาย 3]", description: "[ใส่คำอธิบายกลุ่มเป้าหมาย 3]" },
        { icon: "💡", title: "[ใส่หัวข้อกลุ่มเป้าหมาย 4]", description: "[ใส่คำอธิบายกลุ่มเป้าหมาย 4]" },
      ],
    },
    howItWorks: {
      badge: "ระบบทำงานยังไง",
      title: "3 ขั้นตอน",
      steps: [
        { title: "[ใส่ชื่อขั้นตอนที่ 1]", description: "[ใส่คำอธิบายขั้นตอนที่ 1]" },
        { title: "[ใส่ชื่อขั้นตอนที่ 2]", description: "[ใส่คำอธิบายขั้นตอนที่ 2]" },
        { title: "[ใส่ชื่อขั้นตอนที่ 3]", description: "[ใส่คำอธิบายขั้นตอนที่ 3]" },
      ],
    },
    benefits: {
      badge: "สิ่งที่ผู้ใช้จะได้รับ",
      title: "สิ่งที่ผู้ใช้จะได้รับ",
      items: [
        { icon: "📋", title: "[ใส่หัวข้อสิ่งที่จะได้รับ 1]", description: "[ใส่คำอธิบายสิ่งที่จะได้รับ 1]" },
        { icon: "🎯", title: "[ใส่หัวข้อสิ่งที่จะได้รับ 2]", description: "[ใส่คำอธิบายสิ่งที่จะได้รับ 2]" },
        { icon: "⏱️", title: "[ใส่หัวข้อสิ่งที่จะได้รับ 3]", description: "[ใส่คำอธิบายสิ่งที่จะได้รับ 3]" },
        { icon: "🔒", title: "[ใส่หัวข้อสิ่งที่จะได้รับ 4]", description: "[ใส่คำอธิบายสิ่งที่จะได้รับ 4]" },
        { icon: "🆓", title: "[ใส่หัวข้อสิ่งที่จะได้รับ 5]", description: "[ใส่คำอธิบายสิ่งที่จะได้รับ 5]" },
      ],
    },
    finalCta: {
      title: "[ใส่หัวข้อ CTA ปิดท้าย]",
      subtitle: "[ใส่คำอธิบาย CTA ปิดท้าย]",
    },
    faq: {
      badge: "FAQ",
      title: "คำถามที่พบบ่อย",
      items: [
        { question: "[ใส่คำถาม FAQ ข้อ 1]", answer: "[ใส่คำตอบ FAQ ข้อ 1]" },
        { question: "[ใส่คำถาม FAQ ข้อ 2]", answer: "[ใส่คำตอบ FAQ ข้อ 2]" },
        { question: "[ใส่คำถาม FAQ ข้อ 3]", answer: "[ใส่คำตอบ FAQ ข้อ 3]" },
        { question: "[ใส่คำถาม FAQ ข้อ 4]", answer: "[ใส่คำตอบ FAQ ข้อ 4]" },
        { question: "[ใส่คำถาม FAQ ข้อ 5]", answer: "[ใส่คำตอบ FAQ ข้อ 5]" },
      ],
    },
  },
} as const;

// ──────────────────────────────────────
// Helper types & utilities
// ──────────────────────────────────────
export type SiteConfig = typeof siteConfig;

export function getContent() {
  return siteConfig.content;
}
