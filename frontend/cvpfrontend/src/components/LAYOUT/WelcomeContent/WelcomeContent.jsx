import React from 'react'
import LogoCVP from '../../IMGS/logoColoquio.png'
import LogoForoEmpleadores from '../../IMGS/ForoEmpleadores2024-2.png'
import "./WelcomeContent.scss"

export default function WelcomeContent() {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center flex-column mt-4 gap-4'>
        <img src={LogoCVP} alt="Logo Coloquio de vinculacion profesional"  className='img-coloquio'/>
        <img src={LogoForoEmpleadores} alt="Logo Coloquio de vinculacion profesional" className='img-coloquio' />
      </div>

      <div className='container mt-5 text-content-custom'>
        <p>
          La Facultad de Ingeniería Mecánica y Eléctrica, extiende una cordial invitación a participar en el <b>Coloquio de Vinculación Profesional (CVP 2024)</b>, que tiene como finalidad brindar un espacio para identificar áreas de oportunidad de vinculación Empresa-Universidad, a través de la estancia profesional o laboral.
        </p>
        <p>
          El evento va dirigido a alumnos(as) y egresados(as) de la facultad, y se llevará a cabo del 5 al 7 de junio del presente año.
        </p>
      </div>
    </>
  )
}
