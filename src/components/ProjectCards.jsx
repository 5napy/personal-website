


function ProjectCard({ title, description, link, image}){
    return(
        <article id="projectCard " className="h-[400px] flex flex-col gap-[22px] border border-gray-100 p-4 rounded-3xl
        transition-all duration-200 hover:scale-[1.02] shadow-[0_-4px_16px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)]
        ">
      <div className="h-64 w-full overflow-hidden shadow-lg rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank">
                <button className="rounded-3xl bg-[#874BFF] w-full h-11 text-white 
                transition duration-200 active:bg-[#763ee5] hover:-translate-y-px hover:shadow-lg"
            >SEE PROJECT
            </button></a>
            
        </article>
    );
}

export default ProjectCard;
 