"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    business: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const sendToServer = async (data: typeof formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Помилка відправки')
      }

      return { success: true, message: result.message }
    } catch (error) {
      console.error('Error sending to server:', error)
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Невідома помилка' 
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await sendToServer(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: "", contact: "", business: "" })
        
        // Відправка події в Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form',
            value: 1
          })
        }

        // Автоматично приховати повідомлення через 5 секунд
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Виникла непередбачена помилка')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-[#E0EBE2]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193D19] mb-6">Залишити заявку</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Готові почати співпрацю? Заповніть форму, і ми зв'яжемося з вами протягом години
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#193D19] mb-6">Розкажіть про свій проєкт</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">
                    Дякуємо за заявку! Ми отримали ваше повідомлення і зв'яжемося з вами найближчим часом.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    {errorMessage || 'Виникла помилка при відправці. Спробуйте ще раз або зв\'яжіться з нами через Telegram.'}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ім'я *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше ім'я"
                    className="border-[#193D19]/20 focus:border-[#193D19]"
                    disabled={isSubmitting}
                    minLength={2}
                    maxLength={50}
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                    Контакт *
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Email, телефон або Telegram"
                    className="border-[#193D19]/20 focus:border-[#193D19]"
                    disabled={isSubmitting}
                    minLength={5}
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                    Про бізнес
                  </label>
                  <Textarea
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Коротко розкажіть про ваш бізнес або послугу, що цікавить"
                    rows={4}
                    className="border-[#193D19]/20 focus:border-[#193D19]"
                    disabled={isSubmitting}
                    maxLength={500}
                  />
                  {formData.business && (
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.business.length}/500 символів
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#193D19] hover:bg-[#193D19]/90 text-white py-3 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Відправляємо...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Відправити заявку
                    </>
                  )}
                </Button>
              </form>

              {/* Додаткова інформація про безпеку */}
              <div className="mt-4 text-xs text-gray-500 text-center">
                🔒 Ваші дані захищені і не передаються третім особам
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#193D19] mb-6">Контакти</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#193D19] rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Telegram</div>
                      <a
                        href="https://t.me/Priority_Agency"
                        className="text-[#193D19] hover:underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          // Відстеження кліків по Telegram
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'click', {
                              event_category: 'Contact',
                              event_label: 'Telegram',
                            })
                          }
                        }}
                      >
                        @Priority_Agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#193D19] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Телефон</div>
                      <a 
                        href="tel:+380957620967" 
                        className="text-[#193D19] hover:underline transition-colors"
                        onClick={() => {
                          // Відстеження кліків по телефону
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'click', {
                              event_category: 'Contact',
                              event_label: 'Phone',
                            })
                          }
                        }}
                      >
                        +380 95 762 09 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#193D19] to-[#193D19]/80 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Безкоштовна консультація</h3>
                <p className="text-white/90 mb-6">
                  Отримайте персональні рекомендації для вашого бізнесу та розрахунок вартості проєкту
                </p>
                <ul className="space-y-2 text-white/90">
                  <li>• Аналіз поточної ситуації</li>
                  <li>• Рекомендації по стратегії</li>
                  <li>• Розрахунок бюджету</li>
                  <li>• План дій на перший місяць</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
