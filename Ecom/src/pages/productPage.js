import NavBar from "../components/navBar"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Products from "../components/products"
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react';
import { publicRequest } from "../requestMethods"
import React from 'react';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux"




const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("")
  const [size, setSize] = useState("");
  const dispatch = useDispatch();


  const handleQuantity = (type) => {
    if (type === "dec"){
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    } else {
      if (type === "inc"){
        setQuantity(quantity + 1)
      }
    }
 }

  useEffect(() =>{
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("https://ecom-store00.herokuapp.com/api/products/find/"+id)
        setProduct(res.data)
      }
      catch{}
    }
    getProduct()
    
  },[id])


  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color, size }));
    window.scrollTo({top: 0, behavior: 'smooth'})
  }




  return (
    <div className="productPage-container">
        <NavBar />
        <Announcement />
        
        <div className="productPage-wrapper">
            <div className="productPage-box">
                <img src={product.img}></img>
            </div>


            <div className="productPage-box">
                <div className="productPage-title">{product.title}</div>
                <div className="productPage-price">${product.price}</div>






                <div className="productPage-filter">
                  <div className="productPage-color">
                    <span>
                      Color:
                    </span>
                    {/* <div>
                      <select onChange={(e)=> setColor(e.target.value)} defaultValue="Default" required>
                      <option value="Default" disabled>Select Color</option>
                        {product.color?.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div> */}
                    {product.color?.map(c=> (
                      <div className="color-button" style={{"backgroundColor": `${c.split(" ").join("")}`}} key={c.split(" ").join("")} onClick={() => setColor(c.split(" ").join(""))}>
                      </div>
                    ))}
                  </div>
                  <div className="productPage-size">
                    <span>
                      Size:
                    </span>
                    <div>
                      <select onChange={(e)=> setSize(e.target.value)} defaultValue="Default" required>
                      <option value="Default" disabled>Select Size</option>
                        {product.size?.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                            
                            {/* <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option> */}
                      </select>
                    </div>
                  </div>
                </div>







                <div className="productPage-checkout">
                  <div className="productPage-amount">
                    <div onClick={()=>handleQuantity("dec")}>
                      <i className='bx bx-minus'></i>
                    </div>
                    <div className="productPage-number">
                      {quantity}
                    </div>
                    <div>
                      <i className='bx bx-plus' onClick={()=>handleQuantity("inc")}></i>
                    </div>
                  </div>
                  <div className="productPage-amount">
                    <button onClick={handleClick}>Add To Cart</button>
                  </div>
                </div>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
};

export default ProductPage;