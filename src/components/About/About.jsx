import {getImageUrl} from "../../utils"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.sectionAbout} id="about">
        <div className={styles.container}>
            <div className={styles.about}>
                <div className={styles.content}>
                    <h3>ABOUT</h3>
                    <h1>Web Developer from Tagaytay City, Philippines.</h1>
                    <p>
                        Hi, my name is Richard an aspiring web developer enthusiasthic about creating beautiful and
                        functional web applications with a solid foundation in HTML, CSS,
                        JavaScript, PHP, and Laravel. Recently, I've been diving into the world of
                        React to build dynamic and interactive web interfaces. I'm always eager to
                        learn new technologies and expand my skills to create innovative and
                        impactful websites.
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.aboutImg} src={getImageUrl('about/aboutImg.png')} alt="me sitting with a computer art" />
                </div>
            </div>
        </div>
    </section>
  )
}
export default About