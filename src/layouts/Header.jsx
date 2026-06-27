import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useApiData } from '../context/ApiContext'
import { useMyCartContext } from '../context/MyCartContext'

import '../styles/header.css'

function Header() {
    const { myCart } = useMyCartContext()
    
    useEffect(()=>{
        console.log(myCart);
        
    },[])

    return (
        <>
            <nav className='header_content'>
                <div className='header_box'>
                    <div className='logo_box'>
                        <h3>Salonx</h3>
                    </div>
                    <div className='links_box'>
                        <ul>
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
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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