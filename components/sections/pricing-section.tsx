import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const features = [
    "Індивідуальна стратегія просування",
    "Аналіз конкурентів та ринку",
    "Створення контент-плану",
    "Професійні фото/відео зйомки",
    "Налаштування реклами",
    "Щомісячна звітність",
    "Персональний менеджер проєкту",
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193D19] mb-6">Ціни</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Прозора ціновая політика без прихованих платежів
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E0EBE2]/30 to-white p-8 md:p-12 rounded-2xl border border-[#193D19]/10 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 text-[#193D19] mr-4" />
              <div className="text-left">
                <div className="text-4xl md:text-6xl font-bold text-[#193D19]">від 360$</div>
                <div className="text-lg text-gray-600">за проєкт</div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Ціна залежить від обсягу робіт і ключового запиту вашого бізнесу
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-[#193D19] hover:bg-[#193D19]/90 text-white px-8 py-4 text-lg w-full md:w-auto"
              >
                <Link href="#contact">Хочу оцінку для свого проєкту</Link>
              </Button>

              <p className="text-sm text-gray-600">Безкоштовна консультація та розрахунок вартості</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
