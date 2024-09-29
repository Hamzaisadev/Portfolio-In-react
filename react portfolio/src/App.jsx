
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import './vars.css';
function App() {
  

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App
