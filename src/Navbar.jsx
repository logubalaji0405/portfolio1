function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-nav fixed-top">
      <div className="container">
        <a className="navbar-brand brand-logo" href="#a1">
          Balaji.dev
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#a1">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a2">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a3">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a4">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a5">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar