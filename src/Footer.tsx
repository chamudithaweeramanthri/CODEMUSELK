import React from 'react'
import logo from "./assets/Logo.png";

const Footer = () => {
  return (
    <div className='w-full h-80 bg-[#000000] opacity-98 flex items-center justify-center text-white text-sm almarai-regular'>
      <div className='flex flex-col items-center '>
        <div className="flex flex-row gap-10 text-[18px] align-right left-10">
            {/* Logo */}
            <div className='absolute left-10 '>
            <img src={logo} alt="CODEMUSE Logo" className="h-16 w-55" />
            <p className='text-[15px] mt-2 .abeezee-regular'>Building smart digital solutions <br/> that drive growth, efficiency, and success. </p>
            </div>

          <div className='relative flex flex-row gap-10 left-100'>
            <div className='relative flex flex-col gap-5 top-5'>
              <a href="#" className='hover:text-gray-400 transition'>Home</a>
              <a href="#" className='hover:text-gray-400 transition'>Services</a>
              <a href="#" className='hover:text-gray-400 transition'>Portfolio</a>
            </div>
            <div className='relative flex flex-col gap-5 top-5'>
              <a href="#" className='hover:text-gray-400 transition'>Clients</a>
              <a href="#" className='hover:text-gray-400 transition'>Contact Us</a>
            </div>

            {/* social media icons */}
            <div className='relative flex flex-col gap-5 top-5'>
              <a href="#" className='hover:text-gray-400 transition'>
                <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className='w-8 h-' />
              </a>
              <a href="#" className='hover:text-gray-400 transition'>
                <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Facebook" className='w-8 h-' />
              </a>

              
            </div>
            <div className='relative flex flex-col gap-5 top-5'>
              <a href="#" className='hover:text-gray-400 transition'>
                <img src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000" alt="Instagram" className='w-8 h-' />
              </a>
            </div>
          </div>
        </div>

        <div className='relative mt-30 flex flex-col items-center gap-3'>
          <p>© 2026 CODEMUSELK. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href="#" className='hover:text-gray-400 transition'>Privacy Policy</a>
            <a href="#" className='hover:text-gray-400 transition'>Terms of Service</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer