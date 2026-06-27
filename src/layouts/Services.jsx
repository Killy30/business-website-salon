import React from 'react'
import ServiceCard from '../components/ServiceCard'
import '../styles/services.css'

function Services() {
    return (
        <div className='services_container'>
            <div className='services_title_box'>
                <h2>Nuestros Servicios</h2>
            </div>
            <div className='services_box'>
                <ServiceCard
                    img={'../../img/image-001.jpg'}
                    title={'MANICURE'}
                    description={'Temporibus consequuntur  quos expedita ferror dignissimos laudantium similique!'}
                />
                <ServiceCard
                    img={'../../img/image-003.jpg'}
                    title={'PEDICURE'}
                    description={'Consectetur quibusdam quisquam corporis, est voluptas et voluptatem voluptatibus.'}
                />
                <ServiceCard
                    img={'../../img/image-004.jpg'}
                    title={'NAIL CARE'}
                    description={'Possimus atque vero reiciendis error  laudantium similique!'}
                />
                <ServiceCard
                    img={'../../img/image-002.jpg'}
                    title={'COSMETICS'}
                    description={'Vero reiciendis sint quos expedita fugit iure accusamus voluptate error laudantium similique!'}
                />
            </div>
        </div>
    )
}

export default Services