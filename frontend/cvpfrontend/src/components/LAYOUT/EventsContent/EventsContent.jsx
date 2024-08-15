import React from 'react'
import './EventsContent.scss'
import RicardoImage from '../../IMGS/Ricardo.png'

export default function EventsContent() {
  return (
    <>

    <div className="container mt-5">

      <h2 className='section-header-custom-style'>Eventos</h2>

      <table class="table table-bordered custom-table-styles">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Evento</th>
            <th scope="col">Horario</th>
            <th scope="col">Empresa</th>
            <th scope="col">Ponente</th>
            <th scope="col">Modalidad</th>
            <th scope="col">Moderador(a)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">INAUGURACIÓN</th>
            <td>09:00 a 9:30hrs.</td>
            <td>PREDIK Data-Driven</td>
            <td>
              <div className='container ponente-container'>
                <img className='img-ponente' src={RicardoImage} alt="" />
                <span className='name-ponente'>Ricardo Díaz Crotte</span>
              </div>
            </td>
            <td>Presencial</td>
            <td>José López Solís</td>
          </tr>
          <tr>
            <th scope="row">Más de 15 años innovando el Big Data</th>
            <td>09:00 a 9:30hrs.</td>
            <td>PREDIK Data-Driven</td>
            <td>
              <div className='container ponente-container'>
                <img className='img-ponente' src={RicardoImage} alt="" />
                <span className='name-ponente'>Ricardo Díaz Crotte</span>
              </div>
            </td>
            <td>Presencial</td>
            <td>José López Solís</td>
          </tr>
          <tr>
            <th scope="row">RECESO</th>
            <td>09:00 a 9:30hrs.</td>
            <td>PREDIK Data-Driven</td>
            <td>
                <div className='container ponente-container'>
                  <img className='img-ponente' src={RicardoImage} alt="" />
                  <span className='name-ponente'>Ricardo Díaz Crotte</span>
                </div>
            </td>
            <td>Presencial</td>
            <td>José López Solís</td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}
