import Hey from "./Navbar"
import "./index.css"

import img1 from "./assets/profile.avif"
import rpimg from './assets/rpimg.jpeg'
import fpimg from "./assets/fpimg.jpeg"
import { Contact } from "./contact"
import linkedin from './assets/linkedin.png'
import insta from './assets/insta.jpg'
import whatsapp from './assets/whatsapp.png'
import mail from './assets/mail.jpg'

function App() {
  return (
    <div className="body">

      <Hey />

      {/* HOME */}
      <section id="a1" className="container pt-5">
        <div className="row mt-5 mb-5 align-items-center">
          <div className="col-md-6 text-center">
            <h3>Hey, I'm Balaji </h3>
            <p className="underline">I'm a Front-End Developer</p>
            <a href="#a4" className="view-pro">View My Project</a>
            <br /><br />
            <a href="#a5" className="contact">Contact Me</a>
          </div>
          <div className="col-md-6 text-center">
            <img className="proimg" src={img1} alt="Profile" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="a2" className="container">
        <h1>ABOUT</h1>
        <p>
          Hi, I’m Balaji, a Front-End Developer skilled in HTML, CSS, JavaScript, Bootstrap, and React.js.
          I build responsive, user-friendly websites with clean UI and smooth interactions.<br />
          I always eager to learn new tools and take on challenges that help me grow as a developer.
        </p>
      </section>

      {/* SKILLS */}
      <section id="a3" className="container">
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
          <li>MS Office</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="a4" className="container py-5">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="row justify-content-center g-4">

          {/* Project 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card">
              <div className="fpimg">
                <img src={fpimg} alt="Frontend Project" />
              </div>
              <h3>Front-End Project</h3>
              <p>
                Built a frontend e-commerce website using HTML, CSS, JavaScript,
                and Bootstrap with a responsive UI.
              </p>
              <a
                className="view"
                href="https://logubalaji0405.github.io/mini-project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card">
              <div className="rpimg">
                <img src={rpimg} alt="React Portfolio" />
              </div>
              <h3>React Portfolio</h3>
              <p>
                Built a responsive React portfolio website using React, Bootstrap,
                and GitHub Pages.
              </p>
              <a
                className="view"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="a5" className="container">
        <Contact/>


            <div className="connectimg">
                <a href="https://www.linkedin.com/in/balaji-g-72a0503a9" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>

                <a href="https://www.instagram.com/_lovely_bala_official" target="_blank" rel="noreferrer">
                    <img src={insta} alt="Instagram" />
                </a>

                <a href="https://wa.me/916383559277" target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>

                <a href="mailto:balajilogu457@gmail.com">
                    <img src={mail} alt="Email" />
                </a>
            </div>
      </section>


      {/* FOOTER */}
      <footer className="footer mt-5">
        <div className="container text-center">
          <h5>Balaji</h5>
          <p>Front-End Developer | React | JavaScript</p>
          <p className="mt-2">Call: +91 6383559277</p>
          <p className="mt-2">
            Email: <a href="mailto:balajilogu457@gmail.com">balajilogu457@gmail.com</a>
          </p>
          <p className="mt-3 copyright">
            © 2025 Balaji. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App;