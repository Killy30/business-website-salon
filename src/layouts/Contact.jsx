
import '../styles/contact.css'


function Contact() {
    return (
        <section id='contact-section'>
            <div className='contact_container'>
                <div className='contact_box'>
                    <div className='form_card'>
                        <form class="row g-3">
                            <div className='col-12 text-center'>
                                <h3>Contactar nuestro salon</h3>
                                <span className='text-secondery'>Programa su cita con nosotros</span>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Nombre</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Apellido</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Correo Electronico</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                                    <label for="floatingTextarea2">Mensaje</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="button" className='form-control'>
                                    <span class="text">Enviar mensaje</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='img_card'>
                        <img src={'../../img/image-004.jpg'} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact