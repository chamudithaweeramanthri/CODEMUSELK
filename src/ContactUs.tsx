import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { ContactDraft } from './ErrorPage'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const }
    }
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1
        }
    }
};

const ContactUs = () => {
    const ServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const TemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();


    const form = useRef<HTMLFormElement>(null);
    const inFlight = useRef(false);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const draft = location.state?.draft as ContactDraft | undefined;

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current || inFlight.current) return;
        const data = new FormData(form.current);
        const currentDraft: ContactDraft = {
            user_name: String(data.get('user_name') || ''),
            user_email: String(data.get('user_email') || ''),
            user_subject: String(data.get('user_subject') || ''),
            message: String(data.get('message') || ''),
        };
        setSent(false);
        if (!ServiceId || !TemplateId || !PublicKey) {
            navigate('/error', { state: { draft: currentDraft } });
            return;
        }
        inFlight.current = true;
        setSending(true);
        try {
            await emailjs.sendForm(ServiceId, TemplateId, form.current, { publicKey: PublicKey });
            navigate({ pathname: '/', hash: '#contact' }, { replace: true, state: null });
            setSent(true);
        } catch {
            navigate('/error', { state: { draft: currentDraft } });
        } finally {
            inFlight.current = false;
            setSending(false);
        }
    };

  return (
    <>
            <div id="contact" className="relative min-h-screen w-full bg-[#1f0130] scroll-mt-24">
        <div className="absolute inset-0 w-full h-full bg-linear-to-b to-[#ae00ff] opacity-30"></div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center text-white sm:px-6 lg:px-8">
            <motion.h2
                className="relative -mt-4 text-4xl afacad-bold sm:-mt-8 sm:text-5xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                Contact Us
            </motion.h2>
            <motion.p
                className="mb-12 mt-4 max-w-3xl text-base almarai-regular sm:mb-12 sm:text-lg lg:text-2xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.08 }}
            >
              Have a project in mind? We'd love to hear from you.<br/> Send us a message and we'll respond as soon as possible.
            </motion.p>
            {/* location , email , phone cards */}
            <motion.div
                className="flex w-full max-w-6xl flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Location Card */}
                <motion.div className="relative h-50 w-full max-w-[320px] overflow-hidden rounded-[20px] bg-[#08060b] p-8 opacity-90" variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h2 className="text-[19px] afacad-bold text-center">Colombo,Sri Lanka</h2>
                    
                </motion.div>
            
                {/* Phone Card */}
                <motion.div className="relative h-50 w-full max-w-[320px] overflow-hidden rounded-[20px] bg-[#08060b] p-8 opacity-90" variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 h-12 w-12 text-[#ffffff]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                    <h2 className="text-[19px] afacad-bold text-center ">+94 71 520 2498</h2>
                    
                </motion.div>

                {/* Email Card*/}
                <motion.div className="relative h-50 w-full max-w-[320px] overflow-hidden rounded-[20px] bg-[#08060b] p-8 opacity-90" variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                    {/* email icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 h-12 w-12 text-[#ffffff]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <h2 className="text-[19px] afacad-bold text-center ">codemuselk.info@gmail.com</h2>
                    
                </motion.div>
            </motion.div>
            {/* Contact us form */}
            <motion.div
                className="relative mt-8 w-full max-w-5xl overflow-hidden rounded-[20px] bg-[#08060b] p-5 opacity-90 sm:p-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.12 }}
            >
                <h2 className="mb-4 text-center text-2xl afacad-bold sm:text-[25px]">Send us a message</h2>
                <form key={location.key} aria-busy={sending} className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <input type="text" required placeholder="Your Name" name="user_name" defaultValue={draft?.user_name} disabled={sending} aria-label="name" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none w-full" />
                        <input type="email" required placeholder="Your Email" name="user_email" defaultValue={draft?.user_email} disabled={sending} aria-label="email" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none w-full"/>
                        <input type="text" required placeholder="Subject" name="user_subject" defaultValue={draft?.user_subject} disabled={sending} aria-label="subject" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none w-full"/>
                    </div>
                    <textarea name="message" defaultValue={draft?.message} disabled={sending} aria-label="message" required placeholder="Your Message" className="min-h-55 p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none" rows={8}></textarea>
                                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" disabled={sending} className="disabled:cursor-wait disabled:opacity-60 w-full rounded-[10px] bg-[#ae00ff] py-3 text-white transition-colors hover:bg-[#8a00cc] sm:w-auto sm:px-10 sm:self-end">
                        {sending ? 'Sending…' : 'Send Message'}
                                        </motion.button>
                    {sent && <p role="status" className="text-sm text-green-300">Message sent successfully. We will be in touch soon.</p>}
                </form>
                        </motion.div>
          </div>
        </div>

    </>
  )
}

export default ContactUs

