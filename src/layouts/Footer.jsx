import React from 'react'
import '../styles/footer.css'
import { Outlet } from 'react-router-dom'

function Footer() {
    return(
        <>
            <div className='footer_container'>
                <div className='footer_content'>
                    <div>
                        <p className='text-white text-center mb-0'>
                            © 2026 messess. Designed and Developed by <a href="https://killycenecharles.netlify.app/">killycenecharles.netlify.app</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer