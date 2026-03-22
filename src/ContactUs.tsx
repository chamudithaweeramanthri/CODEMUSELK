const ContactUs = () => {
  return (
    <>
        <div className="relative h-screen w-full bg-[#1f0130] overflow-hidden">
          <div className="absolute inset-0 w-full h-screen bg-linear-to-b to-[#ae00ff] opacity-30"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h2 className="relative text-[50px] afacad-bold">Contact Us</h2>
            <p className="text-[23px] mb-12 almarai-regular items-center justify-center">
              Have a project in mind? We'd love to hear from you.<br/> Send us a message and we'll respond as soon as possible.
            </p>
            {/* location , email , phone cards */}
            <div className="flex flex-row gap-5 justify-center">
                {/* Location Card */}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000] rounded-[20px] p-8">
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h2 className="text-[25px] afacad-bold text-center px-2">Colombo,Sri Lanka</h2>
                    
                </div>
            
                {/* Email Card*/}

                {/* Phone Card */}






            {/* Contact us section */}
            </div>




            
          </div>
        </div>

    </>
  )
}

export default ContactUs