
function ServiceCard({img, title, description}) {
    return (
        <div className='service_card'>
            <div className='service_content'>
                <div className='img'>
                    <img src={img} alt="" />
                </div>
                <div className='description'>
                    <span className='service_title'>
                        {title}
                    </span>
                    <span className='service_desc'>
                        {description}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard