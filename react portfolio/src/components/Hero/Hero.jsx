import React from 'react'
import {getUrlImage} from "../../utils"
import Styles from './Hero.module.css'

export const Hero = () => {
  return (
  <section className={Styles.container}>
  <div className={Styles.content}>
    <h1 className={Styles.title}>Hi, I'am Hamza</h1>
    <p className={Styles.description}>I'm a Web Developer proficient in HTML, CSS, JavaScript, Python, and increasingly skilled in
  React. With over 20 successful web projects developed and deployed,</p>
    <div className={Styles.btnContainer}>
      <a href="../../../assets/resume/resume.pdf" className={Styles.resumeBtn} download="hamza's resume">Resume</a>
      <a href="mailto:hamzaisadev@gmail.com" className={Styles.contactBtn} >Contact Me</a>
    </div>
  </div>
  { <img src={getUrlImage("hero/heroImage2.png")} alt="ffasfef" className={Styles.heroImg} />  }
  <div className={Styles.topBlur} /  >
  <div className={Styles.bottomBlur} />

  </section>
  )
}
