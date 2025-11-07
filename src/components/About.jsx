export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">About</h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          I’m an Android developer focused on crafting fast, reliable, and accessible mobile apps. My toolkit includes Kotlin, Jetpack Compose, Coroutines, and modern architecture. As a GDG On Campus Lead, I organize meetups, mentor peers, and advocate for best practices in Android and open-source.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Talks & Workshops', value: '20+' },
            { label: 'Open Source PRs', value: '50+' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
