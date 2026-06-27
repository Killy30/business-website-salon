
import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useApiData } from '../context/ApiContext'
import ProductsList from './ProductsList'
import { Link } from 'react-router-dom'

import '../styles/shopPreview.css'

function ShopPreview() {
    const [preductsPreview, setProductsPreview] = useState([])
    const { getProducts, products } = useApiData()


    useEffect(() => {
        setProductsPreview(products.slice(0, 4));
    }, [])

    return (
        <div className='shopPreview_container'>
            <div className='shopPreview_box'>
                <div className='s_title'>
                    <h3>Artículos recientes</h3>
                </div>
                <div className='s_body'>
                    <ProductsList products={preductsPreview}/>
                </div>
            </div>
            <div className='see_more_card'>
                <Link to={'/tienda'}>Ver mas articulos</Link>
            </div>
        </div>
    )
}

export default ShopPreview