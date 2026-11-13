import { ArrowUpRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Reviews() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#3e0759] to-[#1f0130] px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <p className="abeezee-regular mb-3 text-sm uppercase tracking-[0.2em] text-purple-300">Client voices</p>
          <h1 className="afacad-bold text-5xl sm:text-6xl">Customer Reviews</h1>
          <p className="almarai-regular mx-auto mt-4 max-w-xl text-white/70">Hear from the people behind the businesses we work with.</p>
        </header>
        <article className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/15 bg-[#08060b]/50 p-7 sm:p-12">
          <Quote aria-hidden="true" className="mb-6 h-10 w-10 text-purple-400" />
          <blockquote className="almarai-regular text-lg leading-relaxed sm:text-2xl sm:leading-relaxed">
            Professional and convenient service. And highly recommend for the imergin and upcoming businesses to engage with them improve their needs talkatively.
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">HC</span>
              <div><h2 className="afacad-bold text-xl">Hashan Cooray</h2><p className="text-sm text-white/60">Google review</p></div>
            </div>
            <a href="https://www.google.com/maps/contrib/100690550211483684410/reviews?hl=en-GB" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-purple-200 underline-offset-4 hover:underline">
              View on Google <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </article>
        <div className="mt-12 text-center"><Link to="/#contact" className="inline-flex rounded-full bg-white px-7 py-3 font-medium text-[#1f0130] transition hover:bg-purple-100">Let’s work together</Link></div>
      </div>
    </section>
  )
}
