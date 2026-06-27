import { useContext, createContext, useState, useEffect, useLayoutEffect } from "react";

const ApiRequestContext = createContext()

export const useApiData = () => {
    const context = useContext(ApiRequestContext)
    if (!context) throw new Error('El context no se ha creado')
    return context
}

export function ApiRequestProvider({ children }) {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [productLoading, setProductLoading] = useState(false)
    const [num, setNum] = useState(12533)

    const getProducts = async () => {
        try {
            setLoading(true)
            const req = await fetch('../src/data/products.json')
            const res = await req.json()

            setProducts(res)
            setLoading(false)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    const getProduct = async (id) => {
        try {
            setProductLoading(true)
            if(id){
                const productx = products.find(product => product.id == id)
                setProduct(productx)
            }else{
                throw new Error('El id del producto no existe...')
            }
            setProductLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (<ApiRequestContext.Provider value={{
        num,
        products,
        product,
        loading,
        productLoading,
        getProducts,
        getProduct

    }}>
        {children}
    </ApiRequestContext.Provider>)
}