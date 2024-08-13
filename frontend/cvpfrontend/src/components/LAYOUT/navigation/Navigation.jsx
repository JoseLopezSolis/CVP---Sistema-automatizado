import RegisterButton from '../../UI/RegisterButton/RegisterButton'; // Adjust the import based on your file structure

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CVP</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Objetivo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Empresas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Eventos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Entrevistas y reclutamientos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Comité organizador</a>
            </li>
          </ul>
          <div className="d-flex ms-3">
            <RegisterButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
