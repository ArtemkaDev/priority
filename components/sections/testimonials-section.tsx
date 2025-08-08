"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Назарія І.",
      business: "Власниця The Men's Corner",
      text: "Priority Agency повністю змінили наш підхід до соцмереж. За місяць кількість відвідувачів зросла вдвічі, а онлайн-замовлення стали основним джерелом доходу.",
      rating: 5,
      avatar: "НІ",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Анатолій",
      business: "Фінансовий керівник Кузня Рішень - Danfoss",
      text: "Відверто, на початку сумнівались через специфіку ніші. Проте впродовж тесту гіпотез, виявили, що рекламні компанії Facebook - є релевантними. Дякую!",
      rating: 5,
      avatar: "АН",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      name: "Лілія Я.",
      business: "Imaginary Circle",
      text: "Чудово! Це саме ті результати, які ми проговорювали. Ми прийняли рішення співпрацювати за контрактом. Підскажіть, які умови?",
      rating: 5,
      avatar: "ЛЯ",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Тетяна",
      business: "English for you",
      text: "Дуже задоволена співпрацею. Команда завжди на зв'язку, виконують якісно креативи. Рекомендую всім, хто хоче результат!",
      rating: 5,
      avatar: "ТЯ",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Анна С.",
      business: "Izkonu Dokonu",
      text: "Priority Agency допомогли нам знайти свій голос у соцмережах. Вдячні за ініціативу до допомогу в поширенні.",
      rating: 5,
      avatar: "АС",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentX(e.clientX)
    setIsAutoPlaying(false)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    e.preventDefault()
    setCurrentX(e.clientX)
    const diff = e.clientX - startX
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    const diff = currentX - startX
    const threshold = 100
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevTestimonial()
      } else {
        nextTestimonial()
      }
    }
    
    setIsDragging(false)
    setDragOffset(0)
    
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentX(e.touches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    
    setCurrentX(e.touches[0].clientX)
    const diff = e.touches[0].clientX - startX
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    const diff = currentX - startX
    const threshold = 100
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevTestimonial()
      } else {
        nextTestimonial()
      }
    }
    
    setIsDragging(false)
    setDragOffset(0)
    
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  // Prevent text selection during drag
  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (isDragging) {
        e.preventDefault()
      }
    }

    document.addEventListener('selectstart', handleSelectStart)
    return () => document.removeEventListener('selectstart', handleSelectStart)
  }, [isDragging])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#E0EBE2]/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 opacity-5">
        <Users2 className="w-32 h-32 text-[#193D19]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Quote className="w-28 h-28 text-[#193D19]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#E0EBE2]/50 rounded-full border border-[#193D19]/20 mb-6">
              <Star className="w-5 h-5 text-[#193D19] mr-2" />
              <span className="text-[#193D19] font-bold text-sm">Відгуки клієнтів</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#193D19] mb-6">Що кажуть про нас</h2>
            <p className="text-xl text-gray-700">Реальні історії успіху наших партнерів</p>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={200}>
            <div className="relative">
              {/* Navigation buttons */}
              <div className="flex justify-center mb-8 space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevTestimonial}
                  className="border-[#193D19] text-[#193D19] hover:bg-[#193D19] hover:text-white transition-all duration-300 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl"
                  disabled={isDragging}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline" 
                  size="lg"
                  onClick={nextTestimonial}
                  className="border-[#193D19] text-[#193D19] hover:bg-[#193D19] hover:text-white transition-all duration-300 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl"
                  disabled={isDragging}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Testimonials carousel */}
              <div className="relative overflow-hidden shadow-2xl rounded-3xl">
                <div 
                  ref={containerRef}
                  className="flex transition-transform duration-500 ease-out cursor-grab"
                  style={{
                    transform: `translateX(calc(-${currentTestimonial * 100}% + ${dragOffset}px))`,
                    userSelect: isDragging ? 'none' : 'auto'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className={`h-full bg-white rounded-3xl p-8 md:p-12 transition-all duration-500 overflow-hidden relative ${
                        isDragging ? 'cursor-grabbing' : 'hover:shadow-3xl'
                      } ${index === currentTestimonial ? 'scale-100' : 'scale-95 opacity-80'}`}>
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-3xl`} />
                        
                        {/* Quote icon */}
                        <Quote className="w-16 h-16 text-[#193D19]/10 mb-6 relative z-10" />

                        {/* Stars */}
                        <div className="flex items-center mb-6 relative z-10">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-6 h-6 text-yellow-400 fill-current animate-pulse" 
                              style={{ animationDelay: `${i * 100}ms` }}
                            />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author info */}
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-[#193D19] text-lg">{testimonial.name}</div>
                            <div className="text-gray-600">{testimonial.business}</div>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-[#193D19]/10 w-full rounded-b-3xl overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${testimonial.gradient} transition-all duration-300 ${
                              isAutoPlaying && !isDragging && index === currentTestimonial ? 'animate-pulse' : ''
                            }`}
                            style={{ 
                              width: index === currentTestimonial ? `${((currentTestimonial + 1) / testimonials.length) * 100}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? `bg-gradient-to-r ${testimonial.gradient} shadow-lg scale-125` 
                        : "bg-[#193D19]/30 hover:bg-[#193D19]/50"
                    }`}
                    disabled={isDragging}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
