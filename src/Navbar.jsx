function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav fixed-top">
      <div className="container">
        <a className="navbar-brand brand-logo" href="#a1">
          Balaji<span>.dev</span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center text-center">
            <li className="nav-item"><a className="nav-link" href="#a1">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#a2">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#a3">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#a4">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#a5">Contact</a></li>
            <li className="nav-item">
              <a className="nav-hire-btn" href="#a5">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar