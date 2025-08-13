"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { asset } from "../lib/utils"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const predefinedResponses = {
  привет:
    "Мяу! 🐱 Я AI-ассистент Stepan Ivanov AI Studio. Помогу ответить на вопросы о наших услугах. Что вас интересует?",
  услуги:
    "Мы предоставляем:\n• Разработка с AI в Cursor\n• Автоматизация бизнес-процессов\n• Работа с контентом (тексты, изображения, аудио)\n• Интеграция AI-инструментов\n• Консультации по AI\n• Техническая поддержка",
  цены: "У нас есть 3 тарифа:\n• Консультация: от ₽12,000/мес\n• Стандарт: от ₽65,000/мес\n• Премиум: от ₽160,000/мес\n\nХотите узнать подробнее о конкретном тарифе?",
  контакты:
    "Свяжитесь со мной:\n• Email: stepan@ai-studio.ru\n• Telegram: @stepan_ai\n• Или оставьте заявку через форму на сайте",
  cursor:
    "Cursor - это AI-редактор кода, который я использую для быстрой разработки. С его помощью можно создавать приложения в 5-10 раз быстрее обычного.",
  claude:
    "Claude от Anthropic - один из самых мощных AI-ассистентов. Использую Claude Opus и Sonnet для сложных задач анализа и генерации контента.",
  автоматизация:
    "Помогаю автоматизировать:\n• Обработку заявок и документов\n• Генерацию отчетов\n• Работу с клиентами\n• Контент-маркетинг\n• Аналитику данных",
  кот: "Мяу! 🐱 Да, это мой хозяин Stepan! Я помогаю ему тестировать AI-решения и создавать уютную атмосферу в студии.",
  default:
    "Интересный вопрос! Для детального ответа лучше связаться напрямую. Могу рассказать о наших услугах, ценах или технологиях. Что вас больше интересует?",
}

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Мяу! 🐱 Я AI-ассистент Stepan Ivanov AI Studio. Спрашивайте о наших услугах, ценах или технологиях!",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== "default" && message.includes(key)) {
        return response
      }
    }

    return predefinedResponses.default
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Custom CSS for meditative glow animation */}
      <style jsx>{`
        @keyframes meditative-glow {
          0%, 100% { 
            opacity: 0.7;
            box-shadow: 0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.1);
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.2);
            transform: scale(1.02);
          }
        }
        
        .animate-meditative-glow {
          animation: meditative-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 overflow-hidden p-0 ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90 animate-meditative-glow"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Image
              src={asset('/images/stepan-avatar.jpg')}
              alt="Stepan AI Assistant"
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-full"
              style={{
                objectPosition: "center 30%", // Фокус на морде кота
                transform: "scale(1.3)", // Увеличиваем для крупного плана
              }}
            />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden glass-card">
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border-2 border-primary-foreground/20">
                <Image
                  src={asset('/images/stepan-avatar.jpg')}
                  alt="Stepan AI Assistant"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 30%",
                    transform: "scale(1.3)",
                  }}
                />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant 🐱</h3>
                <p className="text-xs opacity-90">Stepan Ivanov AI Studio</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot && (
                      <Image
                        src={asset('/images/stepan-avatar.jpg')}
                        alt="AI Assistant"
                        width={16}
                        height={16}
                        className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full object-cover"
                        style={{
                          objectPosition: "center 30%",
                          transform: "scale(1.4)",
                        }}
                      />
                    )}
                    {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src={asset('/images/stepan-avatar.jpg')}
                      alt="AI Assistant"
                      width={16}
                      height={16}
                      className="w-4 h-4 rounded-full object-cover"
                      style={{
                        objectPosition: "center 30%",
                        transform: "scale(1.4)",
                      }}
                    />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите ваш вопрос..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Попробуйте спросить: "услуги", "цены", "cursor", "кот" 🐱
            </p>
          </div>
        </div>
      )}
    </>
  )
}
