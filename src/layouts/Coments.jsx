import React from 'react'
import '../styles/coments.css'
import ComentCard from '../components/ComentCard'

function Coments() {
  return (
    <div className='coments_container'>
      <div>
        <div className='coments_header'>
          <div className='title_one'>
            <span>Testimonios</span>
          </div>
          <div className='title_two'>
            <h2>Lo que nuestras clientes están diciendo</h2>
          </div>
        </div>
        <div className='coments_body'>
          <div className="coments_box">
            <ComentCard
              name={'Jose Ramirez'} 
              img={'../../img/image-004.jpg'}
              coment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae'}
            />
          </div>
          <div className='coments_btns_box'>
            <div>
              <button type='button'>
                <span class="material-symbols-outlined">arrow_left_alt</span>
              </button>
              <button type='button'>
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coments