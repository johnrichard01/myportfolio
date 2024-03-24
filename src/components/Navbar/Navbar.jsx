import { useState } from "react"
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);
  return (
    <nav className={styles.Navbar}>
        <div className={styles.container}>
            <a className={styles.title} href="/">Richard.dev</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} onClick={()=> setMenuOpen(!menuOpen)} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="Menu Icon" />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar