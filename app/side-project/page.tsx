import Link from 'next/link'
import React from 'react'

const mojodreamsSnapshot = '/mojo_dream_image.png'

const SideProject = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-widest text-emerald-200/70">
          Featured side project
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Helping people decode their dreams with MojoDreams
        </h1>
        <p className="text-base text-slate-300 sm:text-lg">
          I&apos;m building MojoDreams, an AI-powered dream analyzer that turns
          late-night symbolism into helpful insights and actionable rituals.
        </p>
      </header>

      <article className="grid gap-8 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-black/30 sm:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-white">MojoDreams</h2>
          <p className="text-slate-200">
            The experience starts with a guided journal flow and uses custom
            language models to identify motifs, emotions, and archetypes hiding
            in each entry. Users get concise interpretations, mood tracking, and
            gentle prompts that suggest bedtime rituals inspired by their
            subconscious.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>LLM-powered summaries that spotlight key symbols and themes</li>
            <li>Dream timeline that keeps a searchable archive of every entry</li>
            <li>Guided prompts and ritual suggestions to ground the insights</li>
          </ul>
          <div>
            <Link
              href="https://mojodreams.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 px-5 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/10"
            >
              Visit mojodreams.com
            </Link>
          </div>
        </div>

        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img
              src={mojodreamsSnapshot}
              alt="MojoDreams main navigation screen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs uppercase tracking-widest text-slate-400">
            Snapshot of the current main navigation view
          </figcaption>
        </figure>
      </article>
    </section>
  )
}

export default SideProject
