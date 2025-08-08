import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import WhyChooseSection from "@/components/sections/why-choose-section"
import CasesSection from "@/components/sections/cases-section"
import PricingSection from "@/components/sections/pricing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FAQSection from "@/components/sections/faq-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Priority Agency",
  "description": "Маркетингове агентство повного циклу. SMM, таргетована реклама, брендинг, веб-розробка.",
  "url": "https://priority-agency.com",
  "logo": "https://priority-agency.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+380957620967",
    "contactType": "customer service",
    "availableLanguage": ["Ukrainian", "Russian"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UA",
    "addressLocality": "Ukraine"
  },
  "sameAs": [
    "https://t.me/Priority_Agency"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "SMM послуги",
      "description": "Професійне ведення соціальних мереж"
    },
    {
      "@type": "Service", 
      "name": "Таргетована реклама",
      "description": "Налаштування та ведення рекламних кампаній"
    },
    {
      "@type": "Service",
      "name": "Брендинг",
      "description": "Створення та розвиток бренду"
    },
    {
      "@type": "Service",
      "name": "Веб-розробка",
      "description": "Розробка сайтів та веб-додатків"
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#E0EBE2]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseSection />
          <CasesSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
