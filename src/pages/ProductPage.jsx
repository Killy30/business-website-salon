import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApiData } from '../context/ApiContext';
import { BtnAddToCartTwo } from '../components/Buttons';
import ProductsList from '../layouts/ProductsList';

import '../styles/productView.css'
import { useMyCartContext } from '../context/MyCartContext';
import ShopPreview from '../layouts/ShopPreview';
import Footer from '../layouts/Footer';

function ProductPage() {
    const { getProduct, getProducts, product, loading, products, productLoading } = useApiData()
    const { addToCard } = useMyCartContext()
    const { id } = useParams()

    const [similarProducts, setSimilarProducts] = useState([])

    const URLLINK = 'http://localhost:5173'

    const addToMyCart = (e) => {
        e.preventDefault()
        addToCard(e.target.dataset.id)
    }

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        if (product?.id != id) {
            getProduct(id)
        }
        setSimilarProducts(products.slice(0, 4));
    }, [id])

    return (
        <>
            <div className='w-100 mt-5'>
                <div className='pt-5'>
                    <div className="product_view">
                        <div className='product_container'>
                            <div className='product_img_card'>
                                <img src={`${import.meta.env.VITE_URL_NAME}/${product?.img}`} alt="" />
                            </div>
                            <div className='product_info'>
                                <div>
                                    <div className='mt-3 mb-3'>
                                        <h2>{product?.name}</h2>
                                    </div>
                                    <div className='mb-3'>
                                        <div className='star'>
                                            <div>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                <span className="material-symbols-outlined">star</span>
                                                {/* <span className='ms-2'>(Calificacion)</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <strong className='fs-4'>${product?.price}</strong>
                                    </div>
                                    <div className='mb-4'>
                                        <BtnAddToCartTwo
                                            handleClick={addToMyCart}
                                            data={product?.id}
                                        />
                                    </div>
                                    <div>
                                        <strong>Category:</strong>
                                        <span>{product?.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 mb-5'>
                            <ul className="nav nav-underline" id="" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Descripcion</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Review</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Info</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active mt-4" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <p>{product?.aditional_desc}</p>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">...</div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-5 mt-5 border-bottom'>
                                <h3>Productos similares</h3>
                            </div>
                            <ProductsList products={similarProducts} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ProductPage