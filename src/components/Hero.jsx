export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-indigo-600/20 text-indigo-300 px-3 py-1 text-xs font-semibold tracking-wide">
              Дигитална агенция
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Растеж чрез стратегия, креативност и технологии
            </h1>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Помагаме на брандове да печелят вниманието онлайн чрез SEO, PPC, уеб дизайн, бранд идентичност и съдържание. Измерим резултат и устойчиво развитие.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
                Започни проект
              </a>
              <a href="#services" className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5">
                Виж услуги
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-white">120+</p>
                <p className="text-slate-400 text-sm">завършени проекта</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">8.9/10</p>
                <p className="text-slate-400 text-sm">средна оценка</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">6+ г.</p>
                <p className="text-slate-400 text-sm">опит</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 ring-1 ring-white/10 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" alt="Agency work" className="h-full w-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
