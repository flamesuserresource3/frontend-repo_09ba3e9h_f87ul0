import { Android, Code, AppWindow } from 'lucide-react';

const projects = [
  {
    title: 'FitTrack',
    description: 'Fitness tracking app with Compose, Room, and Material 3. Offline-first with sync.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines'],
  },
  {
    title: 'Foodly',
    description: 'Recipe discovery with clean architecture, paging, and Hilt DI.',
    tags: ['Kotlin', 'MVVM', 'Paging 3', 'Hilt'],
  },
  {
    title: 'CampusConnect',
    description: 'Community app for events and mentorship. Firebase + Compose Multiplatform.',
    tags: ['Compose', 'Firebase', 'KMM', 'Material 3'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A few Android projects focused on performance, DX, and beautiful UI.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-600">
            <Android className="w-5 h-5" />
            <span className="text-sm">Kotlin-first</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md p-5 hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-emerald-600">
                <AppWindow className="w-5 h-5" />
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200">
                <Code className="w-4 h-4" /> View case study
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
