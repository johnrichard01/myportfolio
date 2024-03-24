import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className={styles.sectionProjects} id="projects">
        <div className={styles.container}>
            <div>
                <h3 className={styles.sectionTitle}>PROJECTS</h3>
            </div>
            <div className={styles.cardContainer}>
                {projects.map((project, id)=>{
                    return <ProjectCard key={id} project={project} />
                })}
            </div>
        </div>
    </section>
  )
}
export default Projects