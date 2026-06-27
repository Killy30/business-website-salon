import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

import { useApiData } from '../context/ApiContext';
import { useMyCartContext } from '../context/MyCartContext';

import '../styles/shopPage.css'
import Footer from '../layouts/Footer';

function ShopPage() {
    const { num, getProducts, products } = useApiData()
    const { myCart, addToCard } = useMyCartContext()

    useEffect(() => {
        if (products.length == 0) {
            getProducts();
        }
    }, [])

    return (
        <>
            <div className='shop_page_container'>
                <div className=''>
                    <div className='shop_title_box'>
                        <div>
                            <h2>Mi Tienda</h2>
                        </div>
                    </div>

                    <div className="shop_body_box">
                        <div className='items_box'>
                            {
                                products.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <ProductCard
                                                img={item.img}
                                                name={item.name}
                                                price={item.price}
                                                id={item.id}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ShopPage
