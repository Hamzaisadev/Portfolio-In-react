import React from 'react'
import {getUrlImage} from "../../utils"

export const Hero = () => {
  return (
  <section>
  <div>
    <h1>Hi, I'am Hamza</h1>
    <p>I'm a Web Developer proficient in HTML, CSS, JavaScript, Python, and increasingly skilled in
  React. With over 20 successful web projects developed and deployed,</p>
    <a href="../../../assets/resume/resume.pdf" download="hamza's resume">Download Resume</a>
  </div>
  {/* <img src={getUrlImage("hero/heroImage2.png")} alt="" /> */}

  </section>
  )
}
