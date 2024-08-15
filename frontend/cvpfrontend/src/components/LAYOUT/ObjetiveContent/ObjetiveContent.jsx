import React from 'react'
import "./ObjectiveContent.scss"

export default function ObjetiveContent() {
  return (
    <>
        <div className='container text-center '>
            <h2 className='section-header-custom-style'>Objetivo general</h2>
        </div>

        <div className='container text-content-custom'>
            <p>
                El objetivo del Coloquio es proporcionar un entorno propicio para que las y los estudiantes que están a punto de graduarse conozcan las ventajas que ofrecen las empresas, identifiquen oportunidades en el ámbito de estancias profesionales o empleo, y comprendan los procedimientos necesarios para ser admitidos en dichas organizaciones.
            </p>

            <p>
            Además, el Coloquio busca fomentar la interacción entre la comunidad estudiantil y las empresas, promoviendo un espacio de networking donde permita establecer contactos y relaciones profesionales favorables para su desarrollo profesional futuro.
            </p>

            <p>
            Durante el evento, se llevarán a cabo presentaciones por parte de representantes de diferentes empresas, quienes compartirán información sobre sus programas de estancias profesionales, oportunidades laborales y requisitos de selección.
            </p>
        </div>
    </>
  )
}
