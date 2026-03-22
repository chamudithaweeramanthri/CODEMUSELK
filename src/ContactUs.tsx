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
                    <h2 className="text-[20px] afacad-bold text-center">Colombo,Sri Lanka</h2>
                    
                </div>
            
                {/* Phone Card */}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000] rounded-[20px] p-8">
                    {/* location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                    <h2 className="text-[20px] afacad-bold text-center ">+94 77 123 4567</h2>
                    
                </div>


                {/* Email Card*/}
                <div className="relative w-[320px] h-[200px] overflow-hidden bg-[#000000] rounded-[20px] p-8">
                    {/* email icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-[#ffffff] mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <h2 className="text-[20px] afacad-bold text-center ">contact@codemuselk.com</h2>
                    
                </div>



            {/* Contact us section */}
            </div>




            
          </div>
        </div>

    </>
  )
}

export default ContactUs