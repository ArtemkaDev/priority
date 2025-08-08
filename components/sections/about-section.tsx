"use client"

import { Target, Users, TrendingUp, Shield, Rocket, Award, Zap, BarChart3 } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { useCounterAnimation } from "@/hooks/use-counter-animation"

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, displayValue } = useCounterAnimation({
    end,
    suffix,
    duration: 2500
  })

  return (
    <div ref={ref}>
      <div className="text-3xl font-black mb-1">{displayValue}</div>
      <div className="text-xs opacity-90">{label}</div>
    </div>
  )
}

export default function AboutSection() {
  const advantages = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Організація",
      description: "Структурований підхід з чіткими етапами та дедлайнами",
      metric: "98% проєктів в строк",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Контроль",
      description: "Повний контроль якості та регулярна звітність",
      metric: "Щотижнева звітність",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Економія",
      description: "Оптимізація бюджету та максимальна ефективність",
      metric: "До 40% економії",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Досвід",
      description: "Команда експертів з багаторічним досвідом",
      metric: "5+ років досвіду",
    },
  ]

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Marketing background elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <BarChart3 className="w-32 h-32 text-[#193D19]" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <Target className="w-28 h-28 text-[#193D19]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#E0EBE2]/50 rounded-full border border-[#193D19]/20 mb-6">
              <Users className="w-5 h-5 text-[#193D19] mr-2" />
              <span className="text-[#193D19] font-bold text-sm">Про нашу команду</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black marketing-headline content-spacing">Про нас</h2>

            <div className="max-w-3xl mx-auto space-y-4 text-description">
              <p className="text-lg font-semibold marketing-subheadline">
                <strong>Priority Agency</strong> — стратегічний партнер у цифровому просуванні бізнесу.
              </p>
              <p className="text-base">
                Вирішуємо головні проблеми бізнесу в соцмережах: відсутність системного підходу, низьку якість контенту,
                неефективну рекламу.
              </p>
              <p className="font-semibold text-[#193D19] text-base">
                🚀 Робимо ваш бренд помітним та прибутковим через комплексне digital-просування.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 150}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-[#E0EBE2]/30 to-white hover:from-[#E0EBE2]/50 hover:to-white transition-all duration-300 border border-[#193D19]/10 hover:border-[#193D19]/20 hover:shadow-lg hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-[#193D19] group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-black marketing-accent tight-spacing">{advantage.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{advantage.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-[#193D19] text-white rounded-full text-xs font-bold">
                  <Zap className="w-3 h-3 mr-1" />
                  {advantage.metric}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Marketing stats */}
          <ScrollAnimation 
            animation="zoomIn" 
            className="bg-gradient-to-r from-[#193D19] to-[#2d5a2d] rounded-3xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <AnimatedStat end={100} suffix="+" label="Успішних кампаній" />
              <AnimatedStat end={300} suffix="%" label="Середнє зростання ROI" />
              <AnimatedStat end={24} suffix="/7" label="Підтримка клієнтів" />
              <AnimatedStat end={99} suffix="%" label="Задоволених клієнтів" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
