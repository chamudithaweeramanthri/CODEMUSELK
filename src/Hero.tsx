const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden scroll-mt-24">
      {/* <div className='bg-blue-500 w-screen h-16'>Hero</div> */}
      
      
        {/* gradient effect */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-conic-90 from-[#000000]  to-[#BF00FF]" />
          <div className="w-1/2 h-full bg-conic-270 from-[#BF00FF] to-[#000000]" />
        </div>
        
        {/* Layer 2 - Middle Gradient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-screen max-w-[800px] bg-linear-180 from-[#ae00ff] to-transparent 
                          opacity-30 blur-2xl">
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bottom-20">
          <h1 className="text-[40px] mt-60 afacad-regular">TRANSFORMING IDEAS INTO DIGITAL REALITY</h1>
          <p className="text-[18px] mb-12 max-w-xl almarai-regular">
            We craft innovative software solutions, AI automations, and digital experiences that empower businesses to thrive in the modern world.
          </p>
          
          {/* Stats section */}
          <div className="relative w-full py-12 md:py-16 lg:py-20 afacad-bold">
            <div className="max-w-6xl mx-auto px-5 sm:px-5 lg:px-22">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 text-white items-center">
                <div className="relative flex flex-col items-center py-6 md:py-0">
                  <div className="text-[50px] font-black tracking-tight afacad-bold">
                    03 <span className="text-[50px] afacad-bold">+</span>
                  </div>
                  <div className="mb-2 text-sm md:text-base afacad-bold uppercase tracking-widest text-center text-justify">
                    YEARS OF<br />EXPERIENCE
                  </div>
                </div>

                <div className="flex flex-col items-center py-6 md:py-0">
                  <div className="text-[50px] font-black tracking-tight afacad-bold">
                    15 <span className="text-[50px] afacad-bold">+</span>
                  </div>
                  <div className="mb-2 text-sm md:text-base afacad-bold uppercase tracking-widest text-center text-justify">
                    PROJECTS<br />DELIVERED
                  </div>
                </div>

                <div className="flex flex-col items-center py-6 md:py-0">
                  <div className="text-[50px] font-black tracking-tight afacad-bold">
                    100 <span className="text-[40px] afacad-bold">%</span>
                  </div>
                  <div className="mb-2 text-sm md:text-base afacad-bold uppercase tracking-widest text-center text-justify">
                    CLIENT<br />SATISFACTION
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Hero;