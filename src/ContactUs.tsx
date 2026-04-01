const ContactUs = () => {
    
    // import all api keys from .env file
    const ServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  return (
    <>
            <div id="contact" className="relative min-h-screen w-full bg-[#1f0130] scroll-mt-24">
        <div className="absolute inset-0 w-full h-full bg-linear-to-b to-[#ae00ff] opacity-30"></div>
        <div className="relative z-10  flex flex-col items-center justify-center min-h-screen py-16 text-center text-white">
            <h2 className="relative text-[50px] -mt-10 afacad-bold">Contact Us</h2>
            <p className="text-[23px] mb-12 almarai-regular items-center justify-center">
              Have a project in mind? We'd love to hear from you.<br/> Send us a message and we'll respond as soon as possible.
            </p>
            {/* location , email , phone cards */}
            <div className="flex flex-row gap-5 justify-center">
                {/* Location Card */}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000] opacity-90 rounded-[20px] p-8">
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h2 className="text-[20px] afacad-bold text-center">Colombo,Sri Lanka</h2>
                    
                </div>
            
                {/* Phone Card */}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000]  opacity-90 rounded-[20px] p-8">
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                    <h2 className="text-[20px] afacad-bold text-center ">+94 77 123 4567</h2>
                    
                </div>

                {/* Email Card*/}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000]  opacity-90 rounded-[20px] p-8">
                    {/* email icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <h2 className="text-[20px] afacad-bold text-center ">contact@codemuselk.com</h2>
                    
                </div>
            </div>
            {/* Contact us form */}
            <div className="relative w-[1000px] h-[600px] overflow-hidden bg-[#000000] mt-8  opacity-90 p-8 rounded-[20px]">
                <h2 className="text-[25px] afacad-bold text-center mb-4">Send us a message</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <input type="text" placeholder="Your Name" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none w-full" />
                        <input type="email" placeholder="Your Email" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none w-full" />
                    </div>
                    <textarea placeholder="Your Message" className="p-3 rounded-[10px] bg-[#1f0130] text-white focus:outline-none" rows={10}></textarea>
                    <button type="submit" className="bg-[#ae00ff] text-white py-3 rounded-[10px] hover:bg-[#8a00cc] transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
          </div>
        </div>

    </>
  )
}

export default ContactUs