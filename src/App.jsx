import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Navbar from "./Navbar";
import "./index.css";

import img1 from "./assets/profile.png";
import fpimg from "./assets/fpimg.jpeg";
import rpimg from "./assets/rpimg.jpeg";
import UD from "./assets/Django.png";

import pdf from "./assets/Balaji-G-fullstack.pdf";

import linkedin from "./assets/linkedin.png";
import insta from "./assets/insta.jpg";
import whatsapp from "./assets/whatsapp.png";
import mail from "./assets/mail.jpg";
import Cursor from "./Cursor";
import { Contact } from "./contact";
import Loader from "./Loader";


function App() {

  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "Python",
    "Django",
    "SQL",
    "MongoDB",
    "Git",
    "REST API",
    "Responsive UI"
  ];

  const services = [

    {
      title: "Full Stack Development",
      text: "Modern scalable React and Django applications."
    },
    {
    title: "Frontend Development",
    text: "Build responsive, modern, and interactive websites using React.js, HTML5, CSS3, JavaScript (ES6+), and Bootstrap."
  },
  {
    title: "React.js Development",
    text: "Develop reusable React components, Single Page Applications (SPA), API integration, routing, and state management."
  },

    {
      title: "Responsive UI Design",
      text: "Pixel perfect websites for desktop and mobile."
    },

    {
      title: "Backend Development",
      text: "Powerful Django APIs and database systems."
    }

  ];

  const projects = [

    {

      image: fpimg,

      title: "E-Commerce Website",

      text: "Responsive shopping website.",

      tech: "HTML • CSS • Bootstrap • JS",

      link: "https://logubalaji0405.github.io/mini-project/"

    },

    {

      image: rpimg,

      title: "React Portfolio",

      text: "Modern React Portfolio.",

      tech: "React • CSS",

      link: "#"

    },

    {

      image: UD,

      title: "Travel Booking",

      text: "Complete Django travel booking website.",

      tech: "Python • Django",

      link: "https://ud-travels.onrender.com/"

    }

  ];

  return (

    <div className="site-body">
      <Loader />
<Cursor/>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero-section" id="a1">

        <div className="hero-blur one"></div>

        <div className="hero-blur two"></div>

        <div className="container hero-container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <motion.div

                initial={{ opacity: 0, x: -100 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: 1 }}

              >

                <span className="badge-text">

                  🚀 Welcome To My Portfolio

                </span>

                <h1 className="hero-title">

                  Hi, I'm <span>Balaji</span>

                </h1>

                <TypeAnimation

                  sequence={[

                    "Full Stack Developer",

                    2000,

                    "React Developer",

                    2000,

                    "Django Developer",

                    2000,

                    "Python Programmer",

                    2000,

                  ]}

                  speed={5}

                  repeat={Infinity}

                  className="hero-subtitle"

                />

                <p className="hero-text">

                  I build premium modern web applications using
                  React, Django, JavaScript, Python and SQL.

                  I love creating beautiful UI with powerful backend
                  systems.

                </p>

                <div className="hero-buttons">

                  <a href="#a4" className="btn-main">

                    Explore Projects

                  </a>

                  <a

                    href={pdf}

                    download

                    className="btn-outline-custom"

                  >

                    Download Resume

                  </a>

                </div>

                <div className="hero-stats">

                  <div>

                    <h4>10+</h4>

                    <p>Technologies</p>

                  </div>

                  <div>

                    <h4>3+</h4>

                    <p>Projects</p>

                  </div>

                  <div>

                    <h4>100%</h4>

                    <p>Responsive</p>

                  </div>

                </div>

              </motion.div>

            </div>

            <div className="col-lg-6 text-center">

              <motion.div

                initial={{ opacity: 0, scale: .6 }}

                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: 1 }}

                className="profile-wrapper"

              >

                <div className="profile-card">

                  <img

                    src={img1}

                    alt="Balaji"

                    className="hero-image"

                  />

                </div>

                <div className="floating-card top-card">

                  🚀 Available for Hire

                </div>

               
              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <motion.section
        id="a2"
        className="section-box"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="container">

          <div className="section-heading">

            <span>ABOUT ME</span>

            <h2>Creative Full Stack Developer</h2>

            <p>
              I enjoy building modern websites with beautiful UI,
              powerful backend systems and smooth user experiences.
            </p>

          </div>

          <div className="about-grid">

            <motion.div

              className="about-card"

              whileHover={{
                scale: 1.03,
                y: -10
              }}

              transition={{ duration: .3 }}

            >

              <h3>Who Am I?</h3>

              <p>

                I'm Balaji, a passionate Full Stack Developer with
                experience in React, Django, JavaScript,
                Python, SQL and MongoDB.

              </p>

              <p>

                I love creating premium UI designs,
                interactive animations,
                and production-ready web applications.

              </p>

            </motion.div>

            <motion.div

              className="about-card highlight-card"

              whileHover={{
                scale: 1.03,
                rotate: -1
              }}

              transition={{ duration: .3 }}

            >

              <h3>Career Goal</h3>

              <p>

                My goal is to become a professional Full Stack Developer,
                working on scalable products,
                AI-powered applications,
                and high-quality web experiences.

              </p>

              <a
                href="#a5"
                className="mini-btn"
              >

                Let's Connect

              </a>

            </motion.div>

          </div>

        </div>

      </motion.section>



      {/* ================= SERVICES ================= */}

      <section className="section-box service-section">

        <div className="container">

          <div className="section-heading">

            <span>SERVICES</span>

            <h2>What I Can Build</h2>

          </div>

          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-lg-4"
                key={index}
              >

                <motion.div

                  className="service-card"

                  initial={{
                    opacity: 0,
                    y: 60
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  viewport={{
                    once: true
                  }}

                  transition={{
                    delay: index * .2
                  }}

                  whileHover={{

                    y: -15,

                    scale: 1.04,

                    boxShadow: "0 25px 70px rgba(37,99,235,.25)"

                  }}

                >

                  <div className="service-number">

                    0{index + 1}

                  </div>

                  <h3>

                    {service.title}

                  </h3>

                  <p>

                    {service.text}

                  </p>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= SKILLS ================= */}

      <section
        id="a3"
        className="section-box dark-section"
      >

        <div className="container">

          <div className="section-heading light-heading">

            <span>

              MY SKILLS

            </span>

            <h2>

              Technologies I Love

            </h2>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <motion.div

                key={index}

                className="skill-box"

                initial={{
                  opacity: 0,
                  scale: .5
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  delay: index * .05
                }}

                whileHover={{

                  scale: 1.12,

                  rotate: 2,

                  background:
                    "linear-gradient(135deg,#2563eb,#38bdf8)",

                  boxShadow:
                    "0 20px 50px rgba(37,99,235,.4)"

                }}

              >

                {skill}

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= PROJECTS ================= */}

      <section id="a4" className="section-box">

        <div className="container">

          <div className="section-heading">

            <span>FEATURED PROJECTS</span>

            <h2>My Latest Work</h2>

            <p>
              Here are some of my recent projects built using
              React, Django, JavaScript and Python.
            </p>

          </div>

          <div className="row g-4">

            {projects.map((project, index) => (

              <div className="col-lg-4 col-md-6" key={index}>

                <motion.div

                  className="project-card"

                  initial={{ opacity: 0, y: 80 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{ delay: index * .2 }}

                  whileHover={{

                    y: -15,

                    scale: 1.04,

                    rotateX: 6,

                    rotateY: -6

                  }}

                >

                  <div className="project-image">

                    <img

                      src={project.image}

                      alt={project.title}

                      className="project-img"

                    />

                  </div>

                  <div className="project-content">

                    <span className="project-tech">

                      {project.tech}

                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.text}</p>

                    <div className="project-buttons">

                      <a

                        href={project.link}

                        target="_blank"

                        rel="noreferrer"

                        className="view-btn"

                      >

                        Live Demo

                      </a>

                    </div>

                  </div>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= RESUME ================= */}

      <section className="resume-section">

        <div className="container">

          <motion.div

            className="resume-card"

            initial={{ opacity: 0, scale: .8 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            transition={{ duration: .7 }}

          >

            <span className="resume-badge">

              DOWNLOAD CV

            </span>

            <h2>

              Let's Build Something Amazing Together

            </h2>

            <p>

              I'm currently looking for Full Stack Developer,

              Frontend Developer,

              React Developer,

              and Python Django opportunities.

            </p>

            <div className="hero-buttons justify-content-center">

              <a

                href={pdf}

                target="_blank"

                rel="noreferrer"

                className="btn-main"

              >

                View Resume

              </a>

              <a

                href={pdf}

                download

                className="btn-main"

              >

                Download Resume

              </a>

            </div>

          </motion.div>

        </div>

      </section>
      {/* ================= CONTACT ================= */}

      <section id="a5" className="section-box contact-section">

        <div className="container">

          <motion.div

            initial={{ opacity: 0, y: 60 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.8 }}

            className="section-heading"

          >

            <span>CONTACT</span>

            <h2>Let's Build Something Amazing</h2>

            <p>

              Have a project or internship opportunity?

              Feel free to contact me anytime.

            </p>

          </motion.div>

          <Contact />

          <motion.div

            className="connectimg"

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ delay: .4 }}

          >

            <motion.a

              whileHover={{

                scale: 1.2,

                rotate: 10

              }}

              href="https://www.linkedin.com/in/balaji-g-72a0503a9"

              target="_blank"

              rel="noreferrer"

            >

              <img src={linkedin} alt="linkedin" />

            </motion.a>

            <motion.a

              whileHover={{

                scale: 1.2,

                rotate: -10

              }}

              href="https://www.instagram.com/_lovely_bala_official"

              target="_blank"

              rel="noreferrer"

            >

              <img src={insta} alt="instagram" />

            </motion.a>

            <motion.a

              whileHover={{

                scale: 1.2,

                rotate: 10

              }}

              href="https://wa.me/916383559277"

              target="_blank"

              rel="noreferrer"

            >

              <img src={whatsapp} alt="whatsapp" />

            </motion.a>

            <motion.a

              whileHover={{

                scale: 1.2,

                rotate: -10

              }}

              href="mailto:balajigopal457@gmail.com"

            >

              <img src={mail} alt="mail" />

            </motion.a>

          </motion.div>

        </div>

      </section>



      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <motion.div

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 1 }}

          >

            <h2 className="footer-logo">

              Balaji<span>.dev</span>

            </h2>

            <p>

              Full Stack Developer

              |

              React Developer

              |

              Python Django Developer

            </p>

            <p>

              Open to Internship • Freelance • Full-Time Opportunities

            </p>

            <div className="footer-contact">

              <p>

                📞 +91 6383559277

              </p>

              <p>

                📧 balajigopal457@gmail.com

              </p>

            </div>

            <div className="footer-bottom">

              <p>

                © 2026 Balaji.

                Designed & Developed with ❤️ using React.

              </p>

            </div>

          </motion.div>

        </div>

      </footer>

    </div>

  )

}

export default App;


