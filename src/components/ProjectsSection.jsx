import ProjectCard from "./ProjectCards.jsx";
import projects from "../data/projectsData.js";

function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <header className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-2xl font-semibold">
            Projects I've built recently
          </h2>
          <p className="max-w-2xl text-gray-600">
            A selection of my personal and learning projects using React,
            JavaScript, and modern UI design. <br/>Responsive design available in most of them.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;