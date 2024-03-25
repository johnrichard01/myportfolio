import  {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={styles.footer} id="contact">
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>CONTACT</h2>
                <p>
                    Don't be shy! Hit me up!
                    <img className={styles.rightIcon} src={getImageUrl('contact/righticon.png')} alt="Hand pointing right" />
                    <img className={styles.downIcon} src={getImageUrl('contact/downIcon.png')} alt="Hand pointing right" />
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                    <a href="https://github.com/johnrichard01">github.com/johnrichard01</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                    <a href="mailto:richardsumagui.dev@gmail.com">richardsumagui.dev@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/john-richard-sumagui/">www.linkedin.com/in/john-richard-sumagui/</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
export default Contact