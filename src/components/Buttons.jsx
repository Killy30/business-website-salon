
export function BtnAddToCartTwo({ handleClick, data }) {

    return (
        <button type='button' onClick={handleClick} data-id={data} className='btn_add_to_cart_two'>
            Agregar al carrito
            <span data-id={data} className="material-symbols-outlined">shopping_cart</span>
        </button>
    )
}

export function Btn_cta({content}) {
    return (
        <button className="cta">
            <span>{content}</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    )
}