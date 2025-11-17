export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} DigitalMol — Всички права запазени.</p>
          <nav className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Услуги</a>
            <a href="#projects" className="hover:text-white">Проекти</a>
            <a href="#contact" className="hover:text-white">Контакт</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
