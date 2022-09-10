import { Link } from 'react-router-dom'




const Product = ({item}) => {
    return(
        <div className="popular-product-box">
            <div className="popular-product-image">
                <img src={item.img}></img>
            </div>
            <div className="popular-product-info">
                
                <div className="popular-product-icons">
                    <i className='bx bx-heart' ></i>
                </div>
                <Link to={`/product/${item._id}`} style={{"textDecoration": "none"}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="popular-product-icons">
                    <div >
                        <i className='bx bx-cart'></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Product;