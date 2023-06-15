import { projectData } from './data.js';
import Image from 'next/image.js';
const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            {/* <i className="fa-regular fa-folder-open folder-icon"></i> */}
                            <Image src={project.Image} width={800} height={100}/>
                            </div>
                            <div className="small-icons">
                                 <a href={project.live} target='_blank'><i class="fa-solid fa-globe"></i></a>
                                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        
                        <h3 className='titles'>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;