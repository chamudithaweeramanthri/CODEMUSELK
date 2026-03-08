import React from 'react'


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
      <div className="relative h-screen w-full bg-[#1f0130]  overflow-hidden">
        <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-[#ae00ff] opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h2 className="text-[50px] afacad-bold">Our Work</h2>
          <p className="text-[23px] mb-12 almarai-regular">
            A showcase of our recent projects, demonstrating our expertise in crafting <br/> innovative digital solutions that drive results.
          </p>
          <div className="flex flex-wrap justify-center gap-8 ">
            {projects.map((project) => (
              <a key={project.id} href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="relative w-[300px] h-[280px] overflow-hidden bg-[#000000] rounded-br-[20px] rounded-bl-[20px] rounded-tr-[15px] rounded-tl-[15px]">
                <img src={project.imageUrl} alt={project.name} className="w-full h-[160px] object-cover" />
                <div className=''>
                  <h3 className="text-xl font-bold mb-1 text-left px-2">{project.name}</h3>
                  <p className="text-sm almarai-regular text-left px-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs  bg-[#1ab165] text-white px-2 py-1 mt-3 rounded-[5px]"> 
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