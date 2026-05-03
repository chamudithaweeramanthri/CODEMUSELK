import { motion, type Variants } from "framer-motion";
import ChapterNest from "./assets/Projects/ChapterNest.png";
import Odyssey from "./assets/Projects/Odyssey.png";
import RegionalBoard from "./assets/Projects/RegionalBoard.png";

const Projects = () => {
      interface Project {
        id: number;
        name: string;
        description: string;
        imageUrl: string;
        projectUrl: string;
        tags: string[];
    }


    const projects: Project[] = [
        {
            id: 1,
            name: "Chapter Nest",
            description: "A modern landing page for a hotel, featuring a clean & Minimal design.",
            imageUrl: ChapterNest,
            projectUrl: "https://chapter-nest-reviews.vercel.app/",
            tags: ["React", "TypeScript", "Tailwind CSS"],
        }, 
        {
            id: 2,
            name: "Odyssey",
            //personalized travel planning platform landing page with AI-driven recommendations and seamless booking integration.  
            description: "A personalized travel planning platform landing page.",
            imageUrl: Odyssey,
            projectUrl: "https://odyssey-landing-page-psi.vercel.app/",
            tags: ["Next.js", "GraphQL", "Styled Components"],
        },
        {
            id: 3,
            name: "Youth Club",
            description: "A web page for a youth club, showcasing their activities and events.",
            imageUrl: RegionalBoard,
            projectUrl: "https://regional-board-of-youth-clubs-sri-j-nine.vercel.app/",
            tags: ["Vite", "React", "ShadCN"],
        },
        // {
        //     id: 4,
        //     name: "Project Delta",
        //     description: "Analytics dashboard with charts and filters.",
        //     imageUrl: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
        //     projectUrl: "https://example.com/project-delta",
        //     tags: ["Recharts", "Radix", "Tailwind"],
        // },
    ];


    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.14,
          delayChildren: 0.1,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.55,
          ease: "easeOut",
        },
      },
    };

    return (
    <>
      <div id="projects" className="relative min-h-screen w-full bg-[#1f0130] overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 h-full w-full bg-linear-to-b from-[#ae00ff] opacity-30"></div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center text-white sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl afacad-bold sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Work
          </motion.h2>
          <motion.p
            className="mb-8 mt-2 max-w-4xl text-base leading-relaxed almarai-regular sm:mb-12 sm:text-lg lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            A showcase of our recent projects, demonstrating our expertise in crafting innovative digital solutions that drive results.
          </motion.p>
          <motion.div
            className="flex w-full flex-wrap justify-center gap-5 sm:gap-6 xl:gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-90 flex-none overflow-hidden rounded-br-[20px] rounded-bl-[20px] rounded-tr-[15px] rounded-tl-[15px] bg-[#08060b]"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <motion.img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-42.5 w-full object-cover sm:h-45"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <div className="flex flex-col p-3 sm:p-4">
                  <h3 className="mb-1 text-left text-lg font-bold sm:text-xl">{project.name}</h3>
                  <p className="text-left text-sm leading-relaxed almarai-regular sm:text-[15px]">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="rounded-[5px] bg-[#1ab165] px-2 py-1 text-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      
    </>
  )
}

export default Projects