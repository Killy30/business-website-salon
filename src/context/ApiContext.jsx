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
            if (id) {
                console.log('entro');

                setProductLoading(true)

                const timer = setTimeout(() => {
                    const productx = products.find(product => product.id == id)
                    setProduct(productx)
                    setProductLoading(false)

                }, 200);
                
                return () => clearTimeout(timer);
            } else {
                throw new Error('El id del producto no existe...')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (<ApiRequestContext.Provider value={{
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