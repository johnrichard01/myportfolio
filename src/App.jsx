import styles from "./App.module.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
    </div>
  )
}
export default App