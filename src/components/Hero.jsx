import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden"> 
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-950/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Rocket className="w-3.5 h-3.5" /> Android Developer • GDG On Campus Lead
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Achmad Alfiansyah
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-prose">
            I build delightful Android experiences using Kotlin, Jetpack, and modern Android architecture. Passionate about performance, design systems, and developer community building.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-amber-500">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm text-neutral-600 dark:text-neutral-300">Open to freelance and speaking opportunities</span>
          </div>
        </div>
        <div className="relative hidden md:block" />
      </div>
    </section>
  );
}
