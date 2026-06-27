
import { createContext, useContext, useEffect, useState } from "react";
import { useApiData } from "./ApiContext";

const MyCartContext = createContext()

export const useMyCartContext = () => {
    const context = useContext(MyCartContext)
    if(!context) throw new error("hay un problema con el contexto de mi carrito")
    
    return context
}

export function MyCartProvider({ children }){
    const { products } = useApiData()

    const [myCart, setToMyCar] = useState([])
    const [myCartObject, setToMyCarObject] = useState({})
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    async function addToCard(id){
        try {
            console.log(id);
            
            setLoading(true)
            const item = products.find(item => item.id == id)
            myCart.push(item)
            setToMyCar(myCart)
            productsGroupe()
            // theTotal()
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    function productsGroupe(){
        const objectProducts = Object.groupBy(myCart, ({ id }) => id)
        setToMyCarObject(objectProducts)
    }

    function deleteProductInMyCart(id){
        const items = myCart.filter(item => item.id == id)
        items.forEach(item =>{
            const index = myCart.findIndex(item1 => item1.id == item.id)
            myCart.splice(index, 1)
        })
        setToMyCar(myCart)
        productsGroupe()
        theTotal()
    }

    function theTotal(){
        const totalCost = myCart.reduce((acc, item) => acc = acc + parseFloat(item.price), 0)
        setTotal(totalCost)
    }

    function addMoreProduct(id){
        const items = myCart.find(item => item.id == id)
        myCart.push(items)
        setToMyCar(myCart)
        productsGroupe()
        theTotal()
    }
    
    function removeProduct(id){
        const items = myCart.filter(item =>{
            return item.id == id
        })
        if(items.length > 1){
            const index = myCart.findIndex(item => item.id == id)
            myCart.splice(index, 1)
            setToMyCar(myCart)
            productsGroupe()
            theTotal()
        }
    }
    
    // useEffect(() =>{
    //     console.log(myCart);
    // },[myCart])
    
    return(
        <MyCartContext.Provider value={{
            myCart, 
            total, 
            loading,
            myCartObject,
            addToCard, 
            deleteProductInMyCart,
            addMoreProduct,
            removeProduct,
            productsGroupe,
            theTotal
            }}>
            {children}
        </MyCartContext.Provider>
    )
} 
