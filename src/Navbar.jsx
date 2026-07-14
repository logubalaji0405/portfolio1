import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="custom-nav">

        <div className="container nav-container">

          <a href="#a1" className="brand-logo">
            Balaji<span>.dev</span>
          </a>

          <ul className="desktop-menu">
            <li><a href="#a1">Home</a></li>
            <li><a href="#a2">About</a></li>
            <li><a href="#a3">Skills</a></li>
            <li><a href="#a4">Projects</a></li>
            <li><a href="#a5">Contact</a></li>
            <li>
              <a href="#a5" className="hire-btn">
                Hire Me
              </a>
            </li>
          </ul>

          <button
            className={`menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      <div className={`sidebar ${menuOpen ? "show" : ""}`}>

        <a href="#a1" onClick={closeMenu}> Home</a>

        <a href="#a2" onClick={closeMenu}> About</a>

        <a href="#a3" onClick={closeMenu}> Skills</a>

        <a href="#a4" onClick={closeMenu}> Projects</a>

        <a href="#a5" onClick={closeMenu}> Contact</a>

        <a
          href="#a5"
          className="mobile-hire"
          onClick={closeMenu}
        >
          Hire Me
        </a>

      </div>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

    </>
  );
}

export default Navbar;