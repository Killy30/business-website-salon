import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useApiData } from "../context/ApiContext"

function LoadingPage() {
    const { loading, productLoading } = useApiData()

    // const [load, setLoad] = useState(productLoading)

    useEffect(()=>{
        // console.log(loading);
        
    },[productLoading])
    console.log(productLoading);

    if(loading){
        return (
            <div className="height_display w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-danger" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if(productLoading){
        return (
            <div className="height_display w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-danger" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return <Outlet/>
}

export default LoadingPage