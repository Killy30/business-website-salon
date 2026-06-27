
function ComentCard({name, img, coment}){
    return(
        <div className="coment_card">
            <div className="coment_card_header">
                <div className="text-center">
                    <div className="img_user">
                        <img src={img} alt="" />
                    </div>
                    <div className="">
                        <span>{name}</span>
                    </div>
                </div>
            </div>
            <div className="coment_card_body">               
                <p className="text-center">{coment}</p>
            </div>
        </div>
    )
}

export default ComentCard