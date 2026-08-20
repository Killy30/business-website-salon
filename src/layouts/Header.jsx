import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useApiData } from '../context/ApiContext'
import { useMyCartContext } from '../context/MyCartContext'

import '../styles/header.css'

function Header() {
    const { myCart } = useMyCartContext()

    const handleShowMenuMobile = () =>{
        console.log('show');
        document.querySelector('.ul_content').classList.remove('hide_menu_mobile')
        document.querySelector('.ul_content').classList.add('show_menu_mobile')
        
    }

    const handleHideMenuMobile = () =>{
        console.log('hide');
        document.querySelector('.ul_content').classList.remove('show_menu_mobile')
        document.querySelector('.ul_content').classList.add('hide_menu_mobile')
        
    }

    useEffect(() => {
        console.log(myCart);
    }, [])

    return (
        <>
            <nav className='header_content'>
                <div className='header_box'>
                    <div className='box_menu_logo'>
                        <button type='button' onClick={handleShowMenuMobile}>
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                        <div className='logo_box'>
                            <h3>Salonx</h3>
                        </div>
                    </div>
                    <div className='links_box'>
                        <ul className='ul_content hide_menu_mobile'>
                            <div className='close_menu_box'>
                                <button type='button' onClick={handleHideMenuMobile}>
                                    <span class="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <li>
                                <Link to={'/'}>Inicio</Link>
                            </li>
                            <li>
                                <a href='#about-section' >Sobre</a>
                            </li>
                            <li>
                                <a href='#service-section'>Servicio</a>
                            </li>
                            <li>
                                <Link to={'/tienda'}>Tienda</Link>
                            </li>
                            <li>
                                <a href='#contact-section'>Contactos</a>
                            </li>
                        </ul>
                        <div className='cart_box'>
                            <Link to={'/mi-carrito'} className='position-relative'>
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {myCart.length}
                                    {/* <span class="visually-hidden">unread messages</span> */}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Header