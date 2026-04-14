import React from 'react'



const Services = () => {
  const services = [
    {
      title: "AI AUTOMATIONS",
      description: "Leverage cutting-edge AI to automate workflows, reduce costs, and boost productivity across your business.",
      points: [
        "Custom AI Chatbots",
        "Process Automation",
        "Data Analysis",
        "Smart Workflows",
      ],
      color: "#BF00FF",
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Build stunning, responsive websites and web applications that deliver exceptional user experiences.",
      points: [
        "Custom Websites",
        "E-commerce Solutions",
        "Web Applications",
        "API Development",
      ],
      color: "#7300FF",
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      description: "Custom software solutions tailored to your unique business needs and challenges.",
      points: [
        "Mobile Apps",
        "Desktop Software",
        "Cloud Solutions",
        "System Integration",
      ],
      color: "#BF00FF",
    },
    {
      title: "DIGITAL MARKETING",
      description: "Grow your brand presence with strategic social media campaigns that engage and convert.",
      points: [
        "Content Strategy",
        "Paid Advertising",
        "Analytics & Reports",
        "Brand Development",
      ],
      color: "#7300FF",
    },
  ];
  
  const renderServiceCard = ({ title, description, points, color }) => {
    return (
      <div className="relative w-full max-w-[287px] min-h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">
        
        {/* Gradient Circles */}
        <div
          className="absolute top-60 left-8 w-[266px] h-[266px] blur-[40px] rounded-full"
          style={{ backgroundColor: color }}
        />
        <div className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full" />
        <div
          className="absolute -top-6 -left-5 w-[195px] h-[195px] blur-[40px] rounded-full"
          style={{ backgroundColor: color }}
        />
  
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-[20px] leading-7 mt-4 mb-6 afacad-bold">{title}</h2>
  
          <h3 className="text-[16px] mb-5 almarai-regular text-center leading-5">
            {description}
          </h3>
  
          <ul className="space-y-2 text-lg almarai-regular p-8">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div
      id="services"
      className="relative min-h-screen w-full bg-[#1f0130] overflow-hidden scroll-mt-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b to-[#ae00ff] opacity-30"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col text-center text-white py-16 px-4 md:px-8">
        <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] afacad-bold">
          What We Offer
        </h1>

        <p className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] mb-12 almarai-regular">
          Comprehensive digital solutions to help your business grow and succeed
          in the modern digital landscape.
        </p>

        {/* Cards */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4  hover:gap-10 duration-200">
          {services.map((service, index) => (
            <div key={index} className="w-full flex justify-center">
              {renderServiceCard(service)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;