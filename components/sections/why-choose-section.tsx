"use client"

import { Clock, Zap, Award, HeartHandshake } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Швидкий старт",
      subtitle: "Результат вже через 2 тижні",
      description:
        "Ми не витрачаємо час на зайві процедури. Швидко аналізуємо, плануємо та запускаємо ефективні кампанії.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Комплексний підхід",
      subtitle: "Все під одним дахом",
      description:
        "Від стратегії до звітності — ви отримуєте повний спектр послуг без необхідності шукати різних виконавців.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Гарантія якості",
      subtitle: "Результат або повернення коштів",
      description: "Ми впевнені в своїй роботі та гарантуємо досягнення узгоджених KPI або повертаємо кошти.",
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Персональний підхід",
      subtitle: "Індивідуальна стратегія для кожного",
      description: "Ми не використовуємо шаблони. Кожна стратегія розробляється індивідуально під ваш бізнес та цілі.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193D19] mb-6">Чому нас обирають</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ми не просто виконуємо завдання — ми створюємо довгострокові партнерські відносини
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 150}
                className="group"
              >
                <div className="flex items-start space-x-6 p-6 rounded-xl bg-[#E0EBE2]/20 hover:bg-[#E0EBE2]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-[#193D19] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#193D19] mb-2">{reason.title}</h3>
                    <p className="text-lg font-semibold text-[#193D19]/80 mb-3">{reason.subtitle}</p>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
