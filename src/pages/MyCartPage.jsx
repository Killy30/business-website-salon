
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/myCartPage.css'

import Footer from '../layouts/Footer';

import { useMyCartContext } from '../context/MyCartContext';
import ProductCart from '../components/ProductCart';
import { FormatPrice } from '../components/FormatPrice';

function MyCartPage() {
    const {
        myCart,
        addToCard,
        myCartObject,
        deleteProductInMyCart,
        addMoreProduct,
        removeProduct,
        total,
        getTotal
    } = useMyCartContext()

    const removeProductx = (e) => {
        e.preventDefault()
        const id = e.target.dataset.id;
        console.log('remove');
        removeProduct(id)
    }

    const addProduct = (e) => {
        e.preventDefault()
        const id = e.target.dataset.id;
        console.log('add');
        addMoreProduct(id)
    }

    const deleteProduct = (e) => {
        e.preventDefault()
        const id = e.target.dataset.id;
        deleteProductInMyCart(id)
    }

    useEffect(() => {
        getTotal()
    }, [])

    return (
        <>
            <div className='shop_page_container'>
                <div>
                    <div className='shop_title_box'>
                        <div>
                            <h2>Mi carrito</h2>
                        </div>
                    </div>
                    <div className="shop_body_box">
                        <div className="my_cart_body">
                            <div className="table_box">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.values(myCartObject).map((item, i) => {
                                                return <ProductCart
                                                    key={item[0].id}
                                                    item={item[0]}
                                                    qty={item.length}
                                                    removeProductx={removeProductx}
                                                    deleteProduct={deleteProduct}
                                                    addProduct={addProduct}
                                                />
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                {
                                    (Object.values(myCartObject).length > 0)
                                        ? <div></div>
                                        : <div className='w-100 text-center mt-5'>
                                            <div>
                                                <span className="material-symbols-outlined fs-1 text-secondary">
                                                    shopping_cart
                                                </span>
                                            </div>
                                            <div>
                                                <span className='fs-4 text-secondary'>Su carrito esta vacio!!!</span>
                                            </div>
                                            <div>
                                                <Link to={'/tienda'}>Ver las ofertas del dia</Link>
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className='tfoot_card'>
                                <div>
                                    <div className='card_yxc'>
                                        <div>
                                            <span>Subtotal</span>
                                        </div>
                                        <div>
                                            <span>${FormatPrice(total.toFixed(2))}</span>
                                        </div>
                                    </div>
                                    <div className='card_yxc'>
                                        <div>
                                            <span>Shipping</span>
                                        </div>
                                        <div>
                                            <span>Enter your address to view shipping options.</span>
                                        </div>
                                    </div>
                                    <div className='card_yxc'>
                                        <div>
                                            <strong>Total</strong>
                                        </div>
                                        <div>
                                            <strong>${FormatPrice(total.toFixed(2))}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyCartPage