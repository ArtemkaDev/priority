import { TrendingUp, Users, Building2, Car, Heart } from "lucide-react"

export default function CasesSection() {
  const cases = [
    {
      category: "B2C",
      icon: <Users className="w-6 h-6" />,
      title: 'Барбершоп "The Men\'s Corner"',
      challenge: "Збільшити відвідуваність та онлайн-бронювання",
      process:
        "Запуск та налаштування таргету через рекламний кабінет. Упакування профілю та побудова стратегії. Побудована воронка продаж для нових потенційних клієнтів через таргет.",
      result: "+150% відвідувачів, підвищили конверсію у 2 рази онлайн-бронювань",
      mainImage: "/images/barbershop-collage.png",
      statsImage: "/images/barbershop-stats.jpg",
      attachments: 2,
      bgColor: "from-amber-50 to-orange-50",
      accentColor: "text-amber-600",
    },
    {
      category: "B2B",
      icon: <Building2 className="w-6 h-6" />,
      title: "Кузня Рішень - Danfoss",
      challenge: "Базова упаковка профілів у різних соц-мережах для подальшої реклами",
      process:
        "Аналіз цільової аудиторії, розробка стратегії та рекламного бюджету, розробка креативів відповідних до стилістики бренду.",
      result: "Конверсія зросла на 35% за перший місяць співпраці",
      mainImage: "/images/danfoss-website.png",
      statsImage: "/images/danfoss-stats.jpg",
      attachments: 4,
      bgColor: "from-blue-50 to-indigo-50",
      accentColor: "text-blue-600",
    },
    {
      category: "Преміум Сервіс",
      icon: <Car className="w-6 h-6" />,
      title: "CarClean - Детейлінг преміум якості",
      challenge: "Створити стратегію просування та 30 одиниць контенту для тесту гіпотези залучення клієнтів",
      process: "Розробили індивідуальний стиль для креативів, побудували покроковий план подальшого просування.",
      result: "Підтримка наявного трафіку та покращення якості лідів",
      mainImage: "/images/carclean-collage.jpg",
      statsImage: "/images/carclean-stats.jpg",
      attachments: 6,
      bgColor: "from-slate-50 to-gray-50",
      accentColor: "text-slate-600",
    },
    {
      category: "Благодійність",
      icon: <Heart className="w-6 h-6" />,
      title: "Izkonu Dokonu - Військові піни/патчі",
      challenge: "Підвищити обізнаність про діяльність бренду та збільшити кількість донатів на ЗСУ",
      process:
        "Співпраця з проектом на безкоштовній основі. Підтримуємо державу у складні часи! Розробили патріотичний контент та стратегію залучення аудиторії.",
      result: "Активні репости від аудиторії, успішне закриття зборів на ЗСУ",
      mainImage: "/images/izkonu-dokonu-collage.jpg",
      statsImage: null,
      attachments: 1,
      bgColor: "from-blue-50 to-yellow-50",
      accentColor: "text-blue-600",
    },
  ]

  return (
    <section id="cases" className="py-20 bg-[#E0EBE2]/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <TrendingUp className="w-32 h-32 text-[#193D19]" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <Users className="w-28 h-28 text-[#193D19]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#193D19]/20 mb-6">
              <TrendingUp className="w-5 h-5 text-[#193D19] mr-2" />
              <span className="text-[#193D19] font-bold">Наші успішні проєкти</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black marketing-headline mb-6">Кейси</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Реальні результати наших клієнтів у різних сферах бізнесу
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#193D19]/10"
              >
                {/* Header with category and attachments */}
                <div className={`bg-gradient-to-r ${caseItem.bgColor} p-6 border-b border-gray-100`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-white rounded-lg ${caseItem.accentColor}`}>{caseItem.icon}</div>
                      <span className={`text-sm font-bold px-3 py-1 bg-white/80 rounded-full ${caseItem.accentColor}`}>
                        {caseItem.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-semibold">{caseItem.attachments}</span>
                        <span className="ml-1">вкладень</span>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#193D19] mb-2">{caseItem.title}</h3>
                </div>

                {/* Main content with images */}
                <div className="p-6">
                  <div
                    className={`mb-6 ${caseItem.category === "Благодійність" ? "" : "grid grid-cols-1 md:grid-cols-2 gap-4"}`}
                  >
                    {/* Main project image */}
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={caseItem.mainImage || "/placeholder.svg"}
                        alt={`${caseItem.title} проєкт`}
                        className={`w-full rounded-xl border border-gray-200 ${
                          caseItem.category === "Благодійність" ? "h-64 object-cover object-top" : "h-48 object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                    </div>

                    {/* Stats image - only for non-charity cases */}
                    {caseItem.category !== "Благодійність" && (
                      <div className="relative group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={caseItem.statsImage || "/placeholder.svg"}
                          alt={`${caseItem.title} статистика`}
                          className="w-full h-48 object-cover rounded-xl border border-gray-200"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#193D19]">
                          Статистика
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Case details */}
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-bold text-gray-800 flex items-center mb-2">
                        🎯 <span className="ml-2">Мета:</span>
                      </span>
                      <p className="text-gray-600 leading-relaxed">{caseItem.challenge}</p>
                    </div>

                    <div>
                      <span className="font-bold text-gray-800 flex items-center mb-2">
                        ⚙️ <span className="ml-2">Процес:</span>
                      </span>
                      <p className="text-gray-600 leading-relaxed">{caseItem.process}</p>
                    </div>

                    <div className="bg-gradient-to-r from-[#E0EBE2]/50 to-[#E0EBE2]/30 p-4 rounded-xl border border-[#193D19]/10">
                      <span className="font-bold text-[#193D19] flex items-center mb-2">
                        🚀 <span className="ml-2">Результат:</span>
                      </span>
                      <p className="text-[#193D19] font-bold leading-relaxed">{caseItem.result}</p>
                    </div>
                  </div>
                </div>

                {/* Footer with additional info */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Тривалість проєкту: 3-6 місяців</span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Активний проєкт
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#193D19] to-[#2d5a2d] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4">Вашому бізнесу потрібен реальний результат?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Кожен проєкт унікальний, але підхід завжди професійний. Розкажіть про свій бізнес, і ми розробимо
                стратегію спеціально для вас.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    <span>Безкоштовна консультація</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    <span>Індивідуальна стратегія</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                    <span>Гарантія результату</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
