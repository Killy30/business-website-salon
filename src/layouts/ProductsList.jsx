import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductsList({products}) {
    
    return (
        <div className='w-100'>
            <div className='products_list'>
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
    )
}

export default ProductsList