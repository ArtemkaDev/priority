import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  const menuItems = [
    { name: "Послуги", href: "#services" },
    { name: "Кейси", href: "#cases" },
    { name: "Ціни", href: "#pricing" },
    { name: "Відгуки", href: "#testimonials" },
    { name: "Контакти", href: "#contact" },
  ]

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://t.me/Priority_Agency", name: "Telegram" },
  ]

  return (
    <footer className="bg-[#193D19] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Priority Agency Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="font-bold text-xl">Priority Agency</span>
              </Link>
              <p className="text-white/80 mb-6 max-w-md">
                Стратегічний партнер вашого бізнесу в соцмережах. Ваш результат — наш пріоритет.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4" />
                  <a
                    href="https://t.me/Priority_Agency"
                    className="hover:text-white/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Priority_Agency
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+380957620967" className="hover:text-white/80 transition-colors">
                    +380 95 762 09 67
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold text-lg mb-4">Навігація</h3>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Соцмережі</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-white/60 text-sm">
                <p>© {new Date().getFullYear()} Priority Agency. Всі права захищено.</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-white/60 hover:text-white/80 transition-colors">
                  Політика конфіденційності
                </Link>
                <Link href="/terms-of-use" className="text-white/60 hover:text-white/80 transition-colors">
                  Умови надання послуг
                </Link>
                <Link href="/cookie-policy" className="text-white/60 hover:text-white/80 transition-colors">
                  Політика cookies
                </Link>
              </div>
            </div>
            <p className="space-y-2 md:space-y-0 md:space-x-4 text-white/60 text-sm mt-4">
              Crafted with respect for you by{" "}
              <a
                href="https://interfuse.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                InterFuse
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
