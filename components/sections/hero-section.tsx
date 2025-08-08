"use client"

import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense } from "react"
import Link from "next/link"
import { TrendingUp, Target, Zap, BarChart3, Users, Megaphone } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

function MarketingChart() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={[0, 0, 0]}>
        {/* Chart bars */}
        <mesh position={[-2, -1, 0]}>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial color="#193D19" />
        </mesh>
        <mesh position={[-1, -0.5, 0]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#2d5a2d" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#193D19" />
        </mesh>
        <mesh position={[1, 0.5, 0]}>
          <boxGeometry args={[0.3, 4, 0.3]} />
          <meshStandardMaterial color="#2d5a2d" />
        </mesh>
        <mesh position={[2, 1, 0]}>
          <boxGeometry args={[0.3, 5, 0.3]} />
          <meshStandardMaterial color="#193D19" />
        </mesh>

        {/* Arrow pointing up */}
        <mesh position={[3, 2, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <coneGeometry args={[0.2, 0.8, 3]} />
          <meshStandardMaterial color="#4a7c4a" />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#193D19" />
      <MarketingChart />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  )
}

export default function HeroSection() {
  const marketingIcons = [
    { icon: <TrendingUp className="w-8 h-8" />, label: "Зростання", position: "top-20 left-20" },
    { icon: <Target className="w-6 h-6" />, label: "Таргетинг", position: "top-40 right-32" },
    { icon: <Zap className="w-7 h-7" />, label: "Швидкість", position: "bottom-40 left-16" },
    { icon: <BarChart3 className="w-8 h-8" />, label: "Аналітика", position: "bottom-32 right-20" },
    { icon: <Users className="w-6 h-6" />, label: "Аудиторія", position: "top-60 left-1/3" },
    { icon: <Megaphone className="w-7 h-7" />, label: "Реклама", position: "bottom-60 right-1/3" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-marketing">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Marketing Icons */}
      {marketingIcons.map((item, index) => (
        <ScrollAnimation
          key={index}
          animation="fadeIn"
          delay={index * 200 + 1000}
          className={`absolute ${item.position} text-[#193D19]/20 float-animation hidden lg:block`}
        >
          {item.icon}
        </ScrollAnimation>
      ))}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeInDown" className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#193D19]/20 mb-8 glow-effect">
              <TrendingUp className="w-5 h-5 text-[#193D19] mr-2" />
              <span className="text-[#193D19] marketing-bold text-sm">№1 У КОМПЛЕКСНИХ РІШЕННЯХ</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={200}>
            <h1 className="marketing-headline text-5xl md:text-7xl lg:text-8xl marketing-headline mb-8 !leading-tight text-shadow-marketing">
              Priority Agency
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-xl md:text-2xl marketing-subheadline mb-6 font-semibold text-compact">
              стратегічний партнер вашого бізнесу в соцмережах
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={600}>
            <div className="mb-12 space-y-4">
              <p className="marketing-accent text-xl md:text-2xl font-bold text-compact">
                🎯 ВАШ РЕЗУЛЬТАТ — НАШ ПРІОРИТЕТ
              </p>
              <p className="text-lg text-[#193D19]/80 font-medium text-compact">SMM • РЕКЛАМА • ЗЙОМКИ • ЗАЯВКИ</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button asChild size="lg" className="btn-marketing text-white px-8 py-4 text-lg pulse-marketing transform hover:scale-105 transition-transform">
                <Link href="#contact">
                  <Zap className="w-5 h-5 mr-2" />
                  ОТРИМАТИ КОНСУЛЬТАЦІЮ
                </Link>
              </Button>

              <div className="flex items-center text-[#193D19] font-bold">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-10 h-10 bg-[#193D19] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-black animate-bounce" style={{ animationDelay: '0ms' }}>
                    1
                  </div>
                  <div className="w-10 h-10 bg-[#2d5a2d] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-black animate-bounce" style={{ animationDelay: '200ms' }}>
                    2
                  </div>
                  <div className="w-10 h-10 bg-[#4a7c4a] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-black animate-bounce" style={{ animationDelay: '400ms' }}>
                    3
                  </div>
                </div>
                <span className="marketing-bold text-sm">100+ ЗАДОВОЛЕНИХ КЛІЄНТІВ</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "300%", label: "ЗРОСТАННЯ ПРОДАЖІВ" },
              { value: "24/7", label: "ПІДТРИМКА КЛІЄНТІВ" },
              { value: "2 ТИЖ", label: "ПЕРШІ РЕЗУЛЬТАТИ" },
              { value: "100+", label: "УСПІШНИХ ПРОЄКТІВ" }
            ].map((stat, index) => (
              <ScrollAnimation
                key={index}
                animation="zoomIn"
                delay={1000 + index * 150}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#193D19]/10 hover:border-[#193D19]/30 transition-all glow-effect hover:scale-105 hover:shadow-lg"
              >
                <div className="text-3xl marketing-headline mb-2">{stat.value}</div>
                <div className="text-xs text-gray-600 marketing-bold">{stat.label}</div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative marketing elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#193D19]/10 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#193D19]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-24 h-24 bg-gradient-to-br from-[#193D19]/5 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
