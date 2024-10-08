import RegisterButton from '../../UI/RegisterButton/RegisterButton'; // Ajusta la importación según tu estructura de archivos
import CustomNavbarButton from '../../UI/CustomNavbarButton/CustomNavbarButton';
import UDC_LOGO from '../../IMGS/LOGOUDC.png'
import "./Navigation.scss"

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-nav fixed-top">
      <div className="container-fluid fix-margin-content">
        <a className="navbar-brand" href="/">
          <img src={UDC_LOGO} className='img-size' alt="Logo" />
        </a>
        <CustomNavbarButton />
        <div className="collapse navbar-collapse fw-semibold navbar-custom" id="navbarNav">
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
          <div className="d-flex">
            <RegisterButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
