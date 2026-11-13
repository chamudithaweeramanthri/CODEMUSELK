import { Link, useLocation } from 'react-router-dom'
import { Mail, ArrowLeft, CircleAlert } from 'lucide-react'

export type ContactDraft = { user_name: string; user_email: string; user_subject: string; message: string }

export default function ErrorPage({ notFound = false }: { notFound?: boolean }) {
  const { state } = useLocation()
  const draft = state?.draft as ContactDraft | undefined
  const mailto = `mailto:codemuselk.info@gmail.com?subject=${encodeURIComponent(draft?.user_subject || 'Project enquiry')}&body=${encodeURIComponent(draft ? `${draft.message}\n\n${draft.user_name}\n${draft.user_email}` : '')}`
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-b from-[#3e0759] to-[#1f0130] px-6 pb-24 pt-36 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/15 bg-[#08060b]/50 p-8 text-center sm:p-12">
        <CircleAlert aria-hidden="true" className="mx-auto mb-6 h-12 w-12 text-purple-300" />
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-300">{notFound ? '404 · Page not found' : 'Message not sent'}</p>
        <h1 className="afacad-bold text-4xl sm:text-5xl">{notFound ? 'This page isn’t here' : 'We couldn’t send your message'}</h1>
        <p className="mt-5 leading-relaxed text-white/75">{notFound ? 'The link may have changed. Head back home to explore our work.' : 'Our contact form is unavailable right now. Please try again later or email us directly.'}</p>
        {!notFound && draft && <p className="mt-3 text-sm text-white/60">Your message is ready when you return to the form.</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to={notFound ? '/' : '/#contact'} state={draft ? { draft } : undefined} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#1f0130]"><ArrowLeft size={18} aria-hidden="true" />{notFound ? 'Back to home' : 'Return to form'}</Link>
          {!notFound && <a href={mailto} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 hover:bg-white/10"><Mail size={18} aria-hidden="true" />Open email app</a>}
        </div>
        {!notFound && <a href="mailto:codemuselk.info@gmail.com" className="mt-6 inline-block break-all text-sm text-purple-200 underline underline-offset-4">codemuselk.info@gmail.com</a>}
      </div>
    </section>
  )
}
