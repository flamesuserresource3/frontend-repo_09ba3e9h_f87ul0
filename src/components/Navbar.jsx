import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-neutral-950/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">Achmad Alfiansyah<span className="text-emerald-500">()</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Work</a>
          <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">About</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Github className="w-5 h-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a aria-label="Email" href="mailto:hi@achmad.dev" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
