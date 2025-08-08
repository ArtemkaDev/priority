"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Скільки триває робота?",
      answer:
        "Тривалість проєкту залежить від його складності. Зазвичай перші результати видно через 2-3 тижні, а повний цикл займає 3-6 місяців. Ми завжди узгоджуємо терміни на етапі планування.",
    },
    {
      question: "Чи можемо запустити тільки рекламу?",
      answer:
        "Так, ми можемо працювати з окремими напрямками. Однак найкращі результати досягаються при комплексному підході, коли реклама підкріплена якісним контентом та правильною стратегією.",
    },
    {
      question: "Як виглядає процес зйомки?",
      answer:
        "Спочатку ми розробляємо концепцію та сценарій, узгоджуємо з вами всі деталі. Потім проводимо зйомку з професійним обладнанням, а після — обробляємо матеріал та надаємо готовий контент.",
    },
    {
      question: "Чи можна почати з мінімального пакету?",
      answer:
        "Звичайно! Ми розуміємо, що кожен бізнес має свій бюджет. Можемо почати з базового пакету послуг та поступово розширювати співпрацю в залежності від результатів.",
    },
    {
      question: "Які гарантії ви надаєте?",
      answer:
        "Ми гарантуємо виконання всіх узгоджених робіт у встановлені терміни. Якщо результати не відповідають узгодженим KPI, ми продовжуємо роботу безкоштовно або повертаємо кошти.",
    },
    {
      question: "Чи працюєте ви з малим бізнесом?",
      answer:
        "Так, ми працюємо з бізнесом будь-якого розміру. Для малого бізнесу ми розробляємо спеціальні пакети послуг, які дозволяють отримати максимальний результат при обмеженому бюджеті.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193D19] mb-6">Часті запитання</h2>
            <p className="text-xl text-gray-700">Відповіді на найпопулярніші питання наших клієнтів</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#193D19]/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#E0EBE2]/20 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#193D19]">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#193D19]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#193D19]" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
