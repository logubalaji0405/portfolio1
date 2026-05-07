import Navbar from './Navbar'
import './index.css'

import img1 from './assets/profile.png'
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

  const skills = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'React.js',
    'Python',
    'Django',
    'SQL',
    'MongoDB',
    'Git & GitHub',
    'Responsive Design',
    'API Integration'
  ]

  const services = [
    {
      title: 'Full-Stack Development',
      text: 'I build responsive and scalable websites using React, Bootstrap, Django, and SQL.'
    },
    {
      title: 'UI / UX Design',
      text: 'I create modern, clean, and user-friendly interfaces with smooth layouts and premium design.'
    },
    {
      title: 'Web Application Development',
      text: 'I develop real-world frontend and backend web applications with responsive design.'
    }
  ]

  const projects = [
    {
      image: fpimg,
      title: 'Front-End  E-Commerce',
      text: 'Responsive e-commerce website using HTML, CSS, JavaScript, and Bootstrap.',
      tech: 'HTML • CSS • JS • Bootstrap',
      link: 'https://logubalaji0405.github.io/mini-project/',
      btn: 'View Project'
    },

    {
      image: rpimg,
      title: 'React Portfolio',
      text: 'Modern portfolio website built using React, Bootstrap, reusable components, and responsive design.',
      tech: 'React • Bootstrap • CSS',
      link: 'https://your-portfolio-link.com',
      btn: 'View Project'
    },

    {
      image: UD,
      title: 'Travel Booking Website',
      text: 'Django travel booking website with packages, booking flow, payment page, and responsive UI.',
      tech: 'Python • Django • SQLite • Bootstrap',
      link: 'https://ud-travels.onrender.com/',
      btn: 'View Project'
    }
  ]

  return (
    <div className="site-body">

      <Navbar />

      {/* HERO SECTION */}

      <section id="a1" className="hero-section">

        <div className="hero-blur one"></div>
        <div className="hero-blur two"></div>

        <div className="container hero-container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6 text-center text-lg-start">

              <span className="badge-text">
                Full-Stack Developer Portfolio
              </span>

              <h1 className="hero-title">
                Hi, I’m <span>Balaji</span>
              </h1>

              <h3 className="hero-subtitle">
                Full-Stack Developer | React | Django | UI Designer
              </h3>

              <p className="hero-text">
                Passionate Full-Stack Developer skilled in creating responsive,
                modern, and user-friendly websites using HTML, CSS, JavaScript,
                Bootstrap, React, Python, Django, SQL, and MongoDB.
              </p>

              <div className="hero-buttons">

                <a href="#a4" className="btn-main">
                  View Projects
                </a>

                <a
                  href={pdf}
                  className="btn-outline-custom"
                  download
                >
                  Download CV
                </a>

              </div>

              <div className="hero-stats">

                <div>
                  <h4>3+</h4>
                  <p>Projects</p>
                </div>

                <div>
                  <h4>10+</h4>
                  <p>Skills</p>
                </div>

                <div>
                  <h4>100%</h4>
                  <p>Responsive</p>
                </div>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <div className="profile-wrapper">

                <div className="profile-card">
                  <img
                    className="hero-image"
                    src={img1}
                    alt="Balaji profile"
                  />
                </div>

                <div className="floating-card top-card">
                  Full-Stack Developer
                </div>

                <div className="floating-card bottom-card">
                  Open to Internship
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="a2" className="section-box">

        <div className="container">

          <div className="section-heading">

            <span>ABOUT ME</span>

            <h2>Creative Full-Stack Developer</h2>

            <p>
              I focus on building beautiful, responsive,
              and practical web applications.
            </p>

          </div>

          <div className="about-grid">

            <div className="about-card">

              <h3>Who I Am</h3>

              <p>
                I’m Balaji, a passionate developer who enjoys creating
                modern websites and solving real-world problems through code.
              </p>

              <p>
                My main skills include React, Bootstrap,
                JavaScript, Python, Django, SQL,
                MongoDB, Git, and responsive UI development.
              </p>

            </div>

            <div className="about-card highlight-card">

              <h3>My Goal</h3>

              <p>
                I want to grow as a full-stack developer by working on
                real-world projects, internships, freelance work,
                and production-level applications.
              </p>

              <a href="#a5" className="mini-btn">
                Let’s Connect
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="section-box service-section">

        <div className="container">

          <div className="section-heading">

            <span>SERVICES</span>

            <h2>What I Can Build</h2>

          </div>

          <div className="row g-4">

            {services.map((service, index) => (

              <div className="col-md-4" key={index}>

                <div className="service-card">

                  <div className="service-number">
                    0{index + 1}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="a3" className="section-box dark-section">

        <div className="container">

          <div className="section-heading light-heading">

            <span>SKILLS</span>

            <h2>Technologies I Use</h2>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill-box" key={index}>
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="a4" className="section-box">

        <div className="container">

          <div className="section-heading">

            <span>PROJECTS</span>

            <h2>Featured Work</h2>

            <p>
              Some projects I have built using frontend
              and backend technologies.
            </p>

          </div>

          <div className="row g-4">

            {projects.map((project, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="project-card">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />

                  <div className="project-content">

                    <span className="project-tech">
                      {project.tech}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.text}</p>

                    <a
                      className="view-btn"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.btn}
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* RESUME */}

      <section className="section-box resume-section">

        <div className="container">

          <div className="resume-card text-center">

            <span>RESUME</span>

            <h2>
              Ready to work on real-world projects
            </h2>

            <p>
              View or download my resume for internship,
              freelance, and full-stack developer opportunities.
            </p>

            <div className="hero-buttons justify-content-center">

              <a
                href={pdf}
                className="btn-main"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              <a
                href={pdf}
                className="btn-outline-dark"
                download
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="a5" className="section-box contact-section">

        <div className="container">

          <div className="section-heading">

            <span>CONTACT</span>

            <h2>Let’s Build Something</h2>

          </div>

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

      {/* FOOTER */}

      <footer className="footer">

        <div className="container text-center">

          <h5>
            Balaji<span>.dev</span>
          </h5>

          <p>
            React Developer | Full-Stack Developer | UI Builder
          </p>

          <p>
            Open to internships and freelance opportunities
          </p>

          <p>
            Call: +91 6383559277
          </p>

          <p>
            Email:
            <a href="mailto:balajigopal457@gmail.com">
              {' '}balajigopal457@gmail.com
            </a>
          </p>

          <p className="copyright">
            © 2026 Balaji. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App