

import React from 'react'
import { FormatPrice } from './FormatPrice'

function ProductCart({ item, qty, removeProductx, deleteProduct, addProduct }) {
    const URLLINK = 'http://localhost:5173'

    return (
        <tr className=''>
            <td scope="row" className='py-3'>
                <a href="" onClick={deleteProduct} data-id={item.id}>
                    <span className="material-symbols-outlined" data-id={item.id}>close</span>
                </a>
            </td>
            <td className='py-3 d-flex align-items-center'>
                <div className='card_img_product_cart'>
                    <img src={`${import.meta.env.VITE_URL_NAME}/${item.img}`} alt="" />
                </div>
                <span>{item.name}</span>
            </td>
            <td className='py-3'>${FormatPrice(item.price)}</td>
            <td className='py-3'>
                <div className='add_remove_card'>
                    <div>
                        <a href="" onClick={removeProductx} data-id={item.id}>
                            <span className="material-symbols-outlined" data-id={item.id}>remove</span>
                        </a>
                    </div>
                    <div>
                        <span>{qty}</span>
                    </div>
                    <div>
                        <a href="" onClick={addProduct} data-id={item.id}>
                            <span className="material-symbols-outlined" data-id={item.id}>add</span>
                        </a>
                    </div>
                </div>
            </td>
            <td className='py-3'>${FormatPrice(item.price * qty)}</td>
        </tr>
    )
}

export default ProductCart