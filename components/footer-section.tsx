"use client"

import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Левая колонка: бренд и контакты */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">Stepan Ivanov AI Studio</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
          Профессиональная разработка и автоматизация бизнес‑процессов с использованием AI
        </p>
        <div className="flex justify-start items-center gap-4">
          <a href="https://t.me/stepan_ai" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-5 h-5 flex items-center justify-center">
            <Send className="w-full h-full text-muted-foreground" />
          </a>
          <a href="mailto:stepan@ai-studio.ru" aria-label="Email" className="w-5 h-5 flex items-center justify-center">
            <Mail className="w-full h-full text-muted-foreground" />
          </a>
          <a href="https://github.com/Realcampdzen/Stepan-Ivanov-AI-Studio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-5 h-5 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-5 h-5 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Правая колонка: навигация */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Услуги</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <Link href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Что мы делаем
            </Link>
            <Link href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Тарифы
            </Link>
            <Link href="#testimonials-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Кейсы
            </Link>
            <Link href="#faq-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Компания</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              О студии
            </Link>
            <Link href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Контакты
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Ресурсы</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              API
            </Link>
            <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Документация
            </Link>
            <Link href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Поддержка
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
