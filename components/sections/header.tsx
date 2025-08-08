"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Послуги", href: "#services" },
    { name: "Кейси", href: "#cases" },
    { name: "Ціни", href: "#pricing" },
    { name: "Відгуки", href: "#testimonials" },
    { name: "Контакти", href: "#contact" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-[#193D19]/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Priority Agency Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="font-bold text-xl text-[#193D19]">Priority Agency</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#193D19] hover:text-[#193D19]/70 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#193D19] hover:bg-[#193D19]/90 text-white px-6 py-2">
              <Link href="#contact">Залишити заявку</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#193D19]/10">
            <nav className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#193D19] hover:text-[#193D19]/70 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-[#193D19] hover:bg-[#193D19]/90 text-white w-full mt-4">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Залишити заявку
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
