"use client"

import {
  KeyIcon as Strategy,
  Package,
  FileText,
  Camera,
  Megaphone,
  Edit,
  Newspaper,
  Mail,
  BarChart,
  Target,
  Globe,
} from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function ServicesSection() {
  const services = [
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "SMM послуги",
      subtitle: "Комплексне ведення соцмереж",
      description: "Стратегія, контент-план, створення постів, Stories, Reels, взаємодія з аудиторією та аналітика.",
      features: ["Контент-стратегія", "Щоденні пости", "Stories та Reels", "Комунікація з підписниками"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Таргетована реклама",
      subtitle: "Налаштування та ведення реклами",
      description: "Facebook Ads, Instagram Ads, Google Ads — від стратегії до оптимізації для максимального ROI.",
      features: ["Налаштування кампаній", "A/B тестування", "Оптимізація бюджету", "Детальна аналітика"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Контент та зйомки",
      subtitle: "Професійний візуальний контент",
      description: "Фото та відео зйомки, графічний дизайн, анімація, створення креативів для реклами.",
      features: ["Фото/відео зйомки", "Графічний дизайн", "Анімація та motion", "Креативи для реклами"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Веб-розробка",
      subtitle: "Сайти та лендінги",
      description: "Розробка сайтів, лендінгів, інтернет-магазинів з фокусом на конверсію та UX/UI.",
      features: ["Лендінги", "Корпоративні сайти", "Інтернет-магазини", "UX/UI дизайн"],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#E0EBE2]/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193D19] mb-6">Наші послуги</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Повний спектр digital-послуг для розвитку вашого бізнесу в інтернеті
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 200}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden group-hover:scale-105">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#193D19] mb-2">{service.title}</h3>
                    <p className="text-lg font-semibold text-gray-600 mb-4">{service.subtitle}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
