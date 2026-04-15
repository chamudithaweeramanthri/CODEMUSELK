import logo from "./assets/Logo.png";

const Footer = () => {
  return (
    <footer className='w-full bg-[#08060b] text-white text-sm almarai-regular'>
      <div className='mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-md'>
            <img src={logo} alt="CODEMUSE Logo" className='h-14 w-auto sm:h-16' />
            <p className='mt-2 text-sm leading-relaxed sm:text-[15px]'>
              Building smart digital solutions
              <br />
              that drive growth, efficiency, and success.
            </p>

            <div className='mt-5 flex items-center gap-4'>
              <a href="#" className='transition hover:opacity-80'>
                <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className='h-8 w-8' />
              </a>
              <a href="#" className='transition hover:opacity-80'>
                <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook" className='h-8 w-8' />
              </a>
              <a href="#" className='transition hover:opacity-80'>
                <img src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000" alt="Instagram" className='h-8 w-8' />
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 text-base sm:grid-cols-2 sm:gap-8 lg:pt-2'>
            <div className='flex flex-col gap-3'>
              <a href="#home" className='transition hover:text-gray-400'>Home</a>
              <a href="#services" className='transition hover:text-gray-400'>Services</a>
              <a href="#projects" className='transition hover:text-gray-400'>Projects</a>
            </div>
            <div className='flex flex-col gap-3'>
              <a href="#clients" className='transition hover:text-gray-400'>Clients</a>
              <a href="#contact" className='transition hover:text-gray-400'>Contact Us</a>
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-center text-xs sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-sm'>
          <p>© 2026 CODEMUSELK. All rights reserved.</p>
          <div className='flex items-center justify-center gap-6'>
            <a href="#" className='transition hover:text-gray-400'>Privacy Policy</a>
            <a href="#" className='transition hover:text-gray-400'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer