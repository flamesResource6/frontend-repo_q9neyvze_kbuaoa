import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Изпращане...')

    const formData = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Грешка при изпращане')
      setStatus('Благодарим! Ще се свържем с вас скоро.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Възникна грешка. Опитайте отново.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Готови ли сте да израснем заедно?</h2>
            <p className="mt-3 text-slate-600">Оставете кратко запитване и ще получите отговор до 24 часа.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• SEO, реклама и съдържание</li>
              <li>• Уеб дизайн и разработка</li>
              <li>• Одит и консултации</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Име</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Имейл</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Компания</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Проект</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">Изпрати</button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
