import "./Navigation.scss"
import RegisterButton from "../../UI/RegisterButton/RegisterButton";


export default function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
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
                <a className="nav-link" href="#">Comite organizador</a>
              </li>
            </ul>
            <div className="register-button ms-3">
                <RegisterButton />
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
