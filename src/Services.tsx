import React from 'react'

const Services = () => {
  return (
    /* Services Section */
    <>
      <div className="relative h-screen w-full bg-[#1f0130]  overflow-hidden">
        <div className="absolute inset-0 w-full h-screen bg-linear-to-b to-[#ae00ff] opacity-30"></div>
        <div className='relative top-15 flex flex-col h-full text-center text-white'>
          <h1 className="text-[50px] afacad-bold">What We Offer</h1>
          <p className="text-[23px] mb-12 almarai-regular">
            Comprehensive digital solutions to help your business grow and succeed in the <br /> modern digital landscape.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Container 1 */}
            <div className="relative w-[287px] h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">

              {/* Gradient Circles */}
              <div className="absolute top-60 left-8 w-[266px] h-[266px] bg-[#BF00FF] blur-[40px] rounded-full" />
              <div className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full" />
              <div className="absolute -top-6 -left-5 w-[195px] h-[195px] bg-[#BF00FF] blur-[40px] rounded-full" />
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-[25px] mb-2 afacad-bold">AI AUTOMATIONS</h2>

                {/* Description */}
                <h3 className="text-[16px] mb-6 almarai-regular text-center">
                  Leverage cutting-edge AI to automate workflows, reduce costs, and boost productivity across your business operations.
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2 text-lg almarai-regular p-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Custom AI Chatbots
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Process Automation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Data Analysis
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Smart Workflows
                  </li>
                </ul>
              </div>
            </div>

            {/* Container 2 */}
            <div className="relative w-[287px] h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">

              {/* Gradient Circles */}
              <div className="absolute top-60 left-8 w-[266px] h-[266px] bg-[#7300FF] blur-[40px] rounded-full" />
              <div className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full" />
              <div className="absolute -top-6 -left-5 w-[195px] h-[195px] bg-[#7300FF] blur-[40px] rounded-full" />
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-[25px] mb-2 afacad-bold">WEB DEVELOPMENT</h2>

                {/* Description */}
                <h3 className="text-[16px] mb-6 almarai-regular text-center">
                  Build stunning, responsive websites and web applications that deliver exceptional user experiences.
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2 text-lg almarai-regular p-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Custom Websites
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Web Applications
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    API Development
                  </li>
                </ul>
              </div>
            </div>

            {/* Container 3 */}
            <div className="relative w-[287px] h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">

              {/* Gradient Circles */}
              <div className="absolute top-60 left-8 w-[266px] h-[266px] bg-[#BF00FF] blur-[40px] rounded-full" />
              <div className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full" />
              <div className="absolute -top-6 -left-5 w-[195px] h-[195px] bg-[#BF00FF] blur-[40px] rounded-full" />
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-[25px] mb-2 afacad-bold">SOFTWARE DEVELOPMENT</h2>

                {/* Description */}
                <h3 className="text-[16px] mb-6 almarai-regular text-center">
                  Custom software solutions tailored to your unique business needs and challenges.
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2 text-lg almarai-regular p-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Mobile Apps
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Desktop Software
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Cloud Solutions
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    System Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Container 4 */}
            <div className="relative w-[287px] h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">

              {/* Gradient Circles */}
              <div className="absolute top-60 left-8 w-[266px] h-[266px] bg-[#7300FF] blur-[40px] rounded-full" />
              <div className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full" />
              <div className="absolute -top-6 -left-5 w-[195px] h-[195px] bg-[#7300FF] blur-[40px] rounded-full" />
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-[25px] mb-2 afacad-bold">WEB DEVELOPMENT</h2>

                {/* Description */}
                <h3 className="text-[16px] mb-6 almarai-regular text-center">
                  Build stunning, responsive websites and web applications that deliver exceptional user experiences.
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2 text-lg almarai-regular p-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Custom Websites
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    Web Applications
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                      ✓
                    </span>
                    API Development
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Services