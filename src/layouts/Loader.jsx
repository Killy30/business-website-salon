import React from 'react'

function Loader() {
    return (
        <div className="height_display w-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader