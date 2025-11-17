import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Начало', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекти', href: '#projects' },
  { label: 'За нас', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакт', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-fuchsia-500" />
            <span className="text-xl font-extrabold tracking-tight">DigitalMol</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors">
              Запитване
            </a>
          </nav>
          <button aria-label="Toggle menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
              Запитване
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
