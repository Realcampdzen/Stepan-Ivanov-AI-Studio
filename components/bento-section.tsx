import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl flex flex-col justify-start items-start relative bento-glass">
    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Разработка с AI в Cursor",
      description: "Быстрая разработка приложений с использованием AI-ассистентов",
      Component: AiCodeReviews,
    },
    {
      title: "Автоматизация бизнес-процессов",
      description: "Создание AI-агентов для автоматизации рутинных задач",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "Работа с контентом",
      description: "Генерация текстов, изображений и аудио с помощью AI",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Интеграция AI-инструментов",
      description: "Подключение Claude, GPT-5, Flux и других AI-сервисов",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "Консультации по AI",
      description: "Помощь в выборе и внедрении AI-решений для бизнеса",
      Component: ParallelCodingAgents,
    },
    {
      title: "Техническая поддержка",
      description: "Сопровождение и развитие AI-решений после запуска",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Warm gradient blur effect */}
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-gradient-to-br from-primary/20 via-primary-light/15 to-primary-dark/10 blur-[130px] z-0" />

        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px] drop-shadow-lg">
              AI-решения для вашего бизнеса
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
              Автоматизируем процессы, создаем контент и разрабатываем решения с помощью Claude, GPT-5, Cursor и других
              передовых AI-инструментов
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
