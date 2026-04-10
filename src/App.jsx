import Navbar from './Navbar'
import './index.css'

import img1 from './assets/profile.avif'
import rpimg from './assets/rpimg.jpeg'
import UD from './assets/Django.png'
import fpimg from './assets/fpimg.jpeg'

import { Contact } from './contact'

import linkedin from './assets/linkedin.png'
import insta from './assets/insta.jpg'
import whatsapp from './assets/whatsapp.png'
import mail from './assets/mail.jpg'
import pdf from './assets/Balaji-G.pdf'

function App() {
  return (
    <div className="site-body">
      <Navbar />

      <section id="a1" className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 text-center text-lg-start">
              <p className="small-title">WELCOME TO MY PORTFOLIO</p>
              <h1 className="hero-title">Hi, I’m Balaji</h1>
              <h3 className="hero-subtitle">
                React Developer | Front-End Developer | UI Builder
              </h3>
              <p className="hero-text">
                I build responsive, modern, and user-friendly websites using
                HTML, CSS, JavaScript, Bootstrap, React, Python, and SQL.
              </p>

              <div className="hero-buttons">
                <a href="#a4" className="btn-main">View Projects</a>
                <a href="#a5" className="btn-outline-custom">Hire Me</a>
                <a href={pdf} className="btn-main" download>Download CV</a>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="profile-frame">
                <img className="hero-image" src={img1} alt="Balaji profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="a2" className="section-box">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p>
              Hi, I’m Balaji, a passionate Front-End Developer with skills in
              HTML, CSS, JavaScript, Bootstrap, React.js, Python, and SQL.
              I enjoy building responsive, user-friendly, and modern web
              applications with clean design and smooth user experience.
            </p>
            <p>
              I am eager to work on real-world projects, improve my development
              skills, and grow as a full-stack developer. I love creating
              attractive interfaces and solving practical problems through code.
            </p>
          </div>
        </div>
      </section>

      <section id="a3" className="section-box dark-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-box">HTML5</div>
            <div className="skill-box">CSS3</div>
            <div className="skill-box">Bootstrap</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">React.js</div>
            <div className="skill-box">Python</div>
            <div className="skill-box">SQL</div>
            <div className="skill-box">Git & GitHub</div>
            <div className="skill-box">Responsive Design</div>
            <div className="skill-box">MongoDB</div>
            <div className="skill-box">API Integration</div>
            <div className="skill-box">MS Office</div>
          </div>
        </div>
      </section>

      <section id="a4" className="section-box">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="row g-4">

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <img src={fpimg} alt="Frontend project" className="project-img" />
                <h3>Front-End E-Commerce</h3>
                <p>
                  Built a responsive e-commerce website using HTML, CSS,
                  JavaScript, and Bootstrap with clean UI and modern layout.
                </p>
                <a
                  className="view-btn"
                  href="https://logubalaji0405.github.io/mini-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <img src={rpimg} alt="React portfolio" className="project-img" />
                <h3>React Portfolio</h3>
                <p>
                  Created a responsive portfolio website using React, Bootstrap,
                  and reusable components for personal branding.
                </p>
                <a
                  className="view-btn"
                  href="https://your-portfolio-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <img src={UD} alt="Travel website" className="project-img" />
                <h3>Travel Booking Website</h3>
                <p>
                  Designed and developed a travel website UI with package cards,
                  booking flow, responsive layout, and attractive visuals.
                </p>
                <a
                  className="view-btn"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Coming Soon
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="section-box">
        <div className="container text-center">
          <h2 className="section-title">Resume</h2>
          <p className="resume-text">
            You can view or download my resume here.
          </p>
          <div className="hero-buttons justify-content-center">
            <a href={pdf} className="btn-main" target="_blank" rel="noreferrer">View Resume</a>
            <a href={pdf} className="btn-outline-custom" download>Download Resume</a>
          </div>
        </div>
      </section>

      <section id="a5" className="section-box">
        <div className="container">
          <Contact />

          <div className="connectimg">
            <a
              href="https://www.linkedin.com/in/balaji-g-72a0503a9"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://www.instagram.com/_lovely_bala_official"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>

            <a
              href="https://wa.me/916383559277"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            <a href="mailto:balajigopal457@gmail.com">
              <img src={mail} alt="Email" />
            </a>


          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <h5>Balaji</h5>
          <p>React Developer | Front-End Developer | JavaScript</p>
          <p className="mt-2">Open to internships and freelance opportunities</p>
          <p className="mt-2">Call: +91 6383559277</p>
          <p className="mt-2">
            Email: <a href="mailto:balajigopal457@gmail.com">balajigopal457@gmail.com</a>
          </p>
          <p className="mt-3 copyright">© 2026 Balaji. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App