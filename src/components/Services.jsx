const services = [
  {
    title: 'SEO оптимизация',
    desc: 'Техническо SEO, On-page, Off-page и съдържание за дългосрочно класиране.',
    icon: '🔍',
  },
  {
    title: 'Google & Meta Ads',
    desc: 'Стратегия, настройка и управление на рекламни кампании за ROAS.',
    icon: '📈',
  },
  {
    title: 'Уеб дизайн и разработка',
    desc: 'Бързи, модeрни и SEO-оптимизирани сайтове на React/Next.js.',
    icon: '💻',
  },
  {
    title: 'Бранд идентичност',
    desc: 'Лого, визуален език и насоки за цялостното присъствие на бранда.',
    icon: '🎨',
  },
  {
    title: 'Копирайтинг и съдържание',
    desc: 'Стратегия, статии, лендинг страници и имейл фунии.',
    icon: '✍️',
  },
  {
    title: 'Поддръжка и растеж',
    desc: 'Мониторинг, CRO подобрения и месечни отчети.',
    icon: '🛠️',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Какво правим</h2>
          <p className="mt-3 text-slate-600">Пълноценен партньор за растеж – от стратегия до изпълнение.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-indigo-600 font-semibold text-sm group-hover:translate-x-0.5 transition-transform">Научи повече →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
