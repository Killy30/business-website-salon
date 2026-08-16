import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useApiData } from "../context/ApiContext"

import Loader from "./Loader";

function LoadingPage() {
    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const { loading, productLoading } = useApiData()
    const location = useLocation()

    useEffect(() => {
        if(location.hash === ""){
            setIsLoadingPage(true);
            const timer = setTimeout(() => setIsLoadingPage(false), 500);
            
            return () => clearTimeout(timer);
        }
    }, [location])

    useEffect(()=>{
        console.log(productLoading);
        
    },[productLoading])

    useEffect(()=>{
        console.log(loading);
        
    },[loading])
    
    // console.log(productLoading);

    if (loading) {
        return <Loader/>
    }

    if (productLoading) {
        return <Loader/>
    }

    return (
        <>
            {isLoadingPage ? <Loader/> : <Outlet />}
        </>
    )
}

export default LoadingPage