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
            name: "Project Alpha",
            description: "A web application for managing tasks and deadlines.",
            imageUrl: "https://images.pexels.com/photos/31343632/pexels-photo-31343632.jpeg",
            projectUrl: "https://example.com/project-alpha",
            tags: ["React", "TypeScript", "Tailwind CSS"],
        }, 
        {
            id: 2,
            name: "Project Beta",  
            description: "An e-commerce platform for handmade crafts.",
            imageUrl: "https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg",
            projectUrl: "https://example.com/project-beta",
            tags: ["Next.js", "GraphQL", "Styled Components"],
        },
        {
            id: 3,
            name: "Project Gamma",
            description: "Marketing site with dynamic content blocks.",
            imageUrl: "https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg",
            projectUrl: "https://example.com/project-gamma",
            tags: ["Vite", "React", "ShadCN"],
        },
        {
            id: 4,
            name: "Project Delta",
            description: "Analytics dashboard with charts and filters.",
            imageUrl: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
            projectUrl: "https://example.com/project-delta",
            tags: ["Recharts", "Radix", "Tailwind"],
        },
    ];


  return (
    <>
      <div id="projects" className="relative min-h-screen w-full bg-[#1f0130] overflow-hidden scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 h-full w-full bg-linear-to-b from-[#ae00ff] opacity-30"></div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-4xl afacad-bold sm:text-5xl lg:text-6xl">Our Work</h2>
          <p className="mb-8 mt-2 max-w-4xl text-base leading-relaxed almarai-regular sm:mb-12 sm:text-lg lg:text-2xl">
            A showcase of our recent projects, demonstrating our expertise in crafting innovative digital solutions that drive results.
          </p>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-7">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mx-auto w-full max-w-90 overflow-hidden rounded-br-[20px] rounded-bl-[20px] rounded-tr-[15px] rounded-tl-[15px] bg-[#000000]"
              >
                <img src={project.imageUrl} alt={project.name} className="h-42.5 w-full object-cover sm:h-45" />
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
              </a>
            ))}
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Projects