import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Service = {
  title: string
  description: string
  points: string[]
  color: string
}

const services: Service[] = [
  {
    title: 'AI AUTOMATIONS',
    description:
      'Leverage cutting-edge AI to automate workflows, reduce costs, and boost productivity across your business.',
    points: [
      'Custom AI Chatbots',
      'Process Automation',
      'Data Analysis',
      'Smart Workflows',
    ],
    color: '#BF00FF',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'Build stunning, responsive websites and web applications that deliver exceptional user experiences.',
    points: [
      'Custom Websites',
      'E-commerce Solutions',
      'Web Applications',
      'API Development',
    ],
    color: '#7300FF',
  },
  {
    title: 'SOFTWARE DEVELOPMENT',
    description:
      'Custom software solutions tailored to your unique business needs and challenges.',
    points: [
      'Mobile Apps',
      'Desktop Software',
      'Cloud Solutions',
      'System Integration',
    ],
    color: '#BF00FF',
  },
  {
    title: 'DIGITAL MARKETING',
    description:
      'Grow your brand presence with strategic social media campaigns that engage and convert.',
    points: [
      'Content Strategy',
      'Paid Advertising',
      'Analytics & Reports',
      'Brand Development',
    ],
    color: '#7300FF',
  },
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 5, ease: [0.22, 1, 0.36, 1] },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const Services = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[#1f0130] overflow-hidden scroll-mt-24"
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-linear-to-b to-[#ae00ff] opacity-30"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.18, 0.32, 0.2],
                scale: [1, 1.04, 1],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-full flex flex-col text-center text-white py-16 px-4 md:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] afacad-bold"
          variants={sectionVariants}
        >
          What We Offer
        </motion.h1>

        <motion.p
          className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] mb-12 almarai-regular"
          variants={sectionVariants}
        >
          Comprehensive digital solutions to help your business grow and succeed
          in the modern digital landscape.
        </motion.p>

        <motion.div
          className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4"
          variants={gridVariants}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="w-full flex justify-center"
              variants={cardVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -10,
                      transition: { duration: 0.25, ease: 'easeOut' },
                    }
              }
            >
              <div className="relative w-full max-w-[287px] min-h-[438px] rounded-3xl overflow-hidden bg-[#0b0020] p-1 text-white">
                <motion.div
                  className="absolute top-60 left-8 w-[266px] h-[266px] blur-[40px] rounded-full"
                  style={{ backgroundColor: service.color }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: [0, -14, 0],
                          x: [0, 8, 0],
                          opacity: [0.55, 0.8, 0.55],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.25,
                  }}
                />

                <motion.div
                  className="absolute top-[40px] -left-[8px] w-[319px] h-[319px] bg-[#06001F] blur-[40px] rounded-full"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.7, 0.95, 0.7],
                        }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                />

                <motion.div
                  className="absolute -top-6 -left-5 w-[195px] h-[195px] blur-[40px] rounded-full"
                  style={{ backgroundColor: service.color }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: [0, 10, 0],
                          x: [0, -8, 0],
                          opacity: [0.5, 0.78, 0.5],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                />

                <div className="relative z-10">
                  <h2 className="text-[20px] leading-7 mt-4 mb-6 afacad-bold">
                    {service.title}
                  </h2>

                  <h3 className="text-[16px] mb-5 almarai-regular text-center leading-5">
                    {service.description}
                  </h3>

                  <ul className="space-y-2 text-lg almarai-regular p-8">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services