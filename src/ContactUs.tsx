const ContactUs = () => {
  return (
    <>
        <div className="relative h-screen w-full bg-[#1f0130] overflow-hidden">
          <div className="absolute inset-0 w-full h-screen bg-linear-to-b to-[#ae00ff] opacity-30"></div>
          <div className="relative z-10 -top-70 flex flex-col items-center justify-center h-full text-center text-white">
            <h2 className="text-[50px] afacad-bold">Contact Us</h2>
            <p className="text-[23px] mb-12 almarai-regular items-center justify-center">
              Have a project in mind? We'd love to hear from you.<br/> Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

    </>
  )
}

export default ContactUs