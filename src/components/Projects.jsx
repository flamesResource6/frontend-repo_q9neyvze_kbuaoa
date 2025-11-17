const projects = [
  { title: 'E-commerce SEO', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop' },
  { title: 'SaaS Website', image: 'https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwU0VPfGVufDB8MHx8fDE3NjMzNjI0NDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Brand Identity', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Подбрани проекти</h2>
          <p className="mt-3 text-slate-600">Истории за растеж от различни индустрии.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl bg-white border border-slate-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
