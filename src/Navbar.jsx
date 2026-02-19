import 'bootstrap/dist/css/bootstrap.min.css'

function Hey() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid p-3">

        <a className="navbar-brand" href="#a1">Portfolio.</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#a1">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#a2">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#a3">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#a4">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#a5">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Hey
