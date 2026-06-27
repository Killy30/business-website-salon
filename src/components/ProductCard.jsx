import { Link } from "react-router-dom"
import { useMyCartContext } from "../context/MyCartContext"

function ProductCard({ img, category, name, price, id }) {

    const URLLINK = 'http://localhost:5173'
    const {  myCart, myCartObject, addToCard } = useMyCartContext()

    const addToMyCart = (e) => {
        e.preventDefault()
        addToCard(e.target.dataset.id)
        console.log(myCartObject);
    }

    return (
        <div className='product_card'>
            <div>
                <div className='img_p'>
                    <div className='card_img_content'>
                        <div>
                            <img src={`${import.meta.env.VITE_URL_PUBLIC_NAME}/${img}`} alt="" />
                        </div>
                        <div className='product_option_hover'>
                            <div className="d-flex gap-1">
                                <div>
                                    <Link to={`/producto/${id}`}>
                                        <span class="material-symbols-outlined">visibility</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link onClick={addToMyCart} data-id={id}>
                                        <span data-id={id} class="material-symbols-outlined">shopping_cart</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='description_p'>
                    <div className='category'>
                        <span>{category}</span>
                    </div>
                    <div className='name'>
                        <span>{name}</span>
                    </div>
                    <div className='price'>
                        <span>${price}</span>
                    </div>
                    <div className='star'>
                        <div>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard