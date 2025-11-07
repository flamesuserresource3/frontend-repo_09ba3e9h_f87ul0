import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Let’s build something</h2>
        </div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">I’m available for freelance, mentorship, and speaking opportunities.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Name" required />
            <input type="email" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" required />
          </div>
          <textarea className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 min-h-[140px] outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell me about your project..." required />
          <button className="inline-flex items-center gap-2 justify-center px-5 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
            <Send className="w-4 h-4" /> Send message
          </button>
          <p className="text-sm text-neutral-500">Prefer email? <a href="mailto:hi@achmad.dev" className="underline underline-offset-4">hi@achmad.dev</a></p>
        </form>
      </div>
    </section>
  );
}
