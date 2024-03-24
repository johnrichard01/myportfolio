import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({project}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={getImageUrl(project.imgSrc)}
        alt={`screen shot of ${project.title}`}
      />
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      <ul  className={styles.skills}>
            {project.skills.map((skill, id)=>{
                return <li className={styles.skill} key={id}>{skill}</li>
            })}
      </ul>
      <div  className={styles.links}>
        <a className={styles.link} href={project.demo}>Demo</a>
        <a className={styles.link} href={project.source}>Source</a>
      </div>
    </div>
  );
};
export default ProjectCard;
