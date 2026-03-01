const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* <div className='bg-blue-500 w-screen h-16'>Hero</div> */}
      
      
        {/* gradient effect */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-conic-90 from-[#000000] to-[#BF00FF]" />
          <div className="w-1/2 h-full bg-conic-270 from-[#BF00FF] to-[#000000]" />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bottom-20">
          <h1 className="text-[48px]  mt-2 afacad-regular">TRANSFORMING IDEAS INTO DIGITAL REALITY</h1>
          <p className="text-[18px] mb-15 max-w-xl">
            We craft innovative software solutions, AI automations, and digital experiences that empower businesses to thrive in the modern world.
          </p>
        </div>
        

    </div>
    
  )
}

export default Hero;