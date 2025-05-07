const Projects = () => {
    const projects = [
      { id: 1, title: "Project 1", description: "Description of Project 1", link: "#", image: "project1.jpg" },
      { id: 2, title: "Project 2", description: "Description of Project 2", link: "#", image: "project2.jpg" },
    ];
  
    return (
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;