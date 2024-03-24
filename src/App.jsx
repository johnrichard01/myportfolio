import styles from "./App.module.css"
import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
export default App