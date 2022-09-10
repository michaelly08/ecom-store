import NavBar from "../components/navBar"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Products from "../components/products"
import {useSelector} from "react-redux"
import {useState, useEffect} from "react"
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethods"
import { useNavigate  } from "react-router-dom";
import {removeProduct} from "../redux/cartRedux";
import { useDispatch } from "react-redux"
import {Link} from "react-router-dom"


const CartPage = () => {
  const cart = useSelector(state=> state.cart)
  const [discount, setDiscount] = useState(0)
  const [shipping, setShipping] = useState(0)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // const KEY = process.env.REACT_APP_STRIPE;
  const KEY = "pk_test_BIXevYM2LptYXVM44LIjsvOW00s8u3lTE1"









  function discountPrice() {
    if (cart.quantity > 0){
      if(cart.total > 50) {
        setDiscount(4.90)
      }
      else if (cart.total <= 50){
        setDiscount(0)
      }
    }
  }



  function shippingPrice() {
    if (cart.quantity > 0){
      setShipping(4.90)
    }
  }




  const onToken =(token) => {
    setStripeToken(token)
  }
  
  useEffect(() => {
    discountPrice()
    shippingPrice()
    console.log(cart)
  },[cart.total])



  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("https://ecom-store00.herokuapp.com/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { state: {
          stripeData: res.data,
          products: cart, }
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);






 

  return (
    <div className="cart-container">
      <NavBar/>
      <Announcement />
        <div className="cart-wrapper">
          <div className="cart-top">
            Your Bag ({cart.quantity})
          </div>

          <div className="cart-middle">
          <Link to="/products/All" style={{"textDecoration": "none"}}>
            <button className="cart-middle-continue">
              Continue Shopping
            </button>
            </Link>
            <div>
                  <StripeCheckout
                    name="ECOM"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${(cart.total + shipping - discount).toFixed(2)}`}
                    amount={Math.round((((cart.total + shipping - discount)*100)) * 100) / 100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <button className="cart-middle-checkout">Checkout Now</button>
                  </StripeCheckout>
            </div>
          </div>
          <div className="cart-bottom">
            <div className="cart-box-items">
              {/* CART ITEM BOX               CART ITEM BOX               CART ITEM BOX               CART ITEM BOX */}
              {cart.products.map(product=> (
              <div className="cart-item" key={product._id}>
                <div className="cart-item-image">
                  <img src={product.img}></img>
                </div>
                <div className="cart-item-info">
                  <div>
                    <b>Product:</b> <span>{product.title}</span>
                  </div>
                  <div>
                    <b>ID:</b> <span>{product._id}</span>
                  </div>
                  <div>
                    <b>Color:</b> <span>{product.color}</span>
                  </div>
                  <div>
                    <b>Size:</b> <span>{product.size}</span>
                  </div>
                </div>

                <div className="cart-item-amount">
                  <div className="cart-item-add">
                    {/* <div className="cart-item-add-button"><i className='bx bx-minus'></i></div> */}
                    <div className="cart-item-add-amount">{product.quantity}</div>
                    {/* <div className="cart-item-add-button"><i className='bx bx-plus' ></i></div> */}
                  </div>
                  <div className="cart-item-price">${product.price*product.quantity}</div>
                </div>
              </div>))}
              {/* CART ITEM BOX               CART ITEM BOX               CART ITEM BOX               CART ITEM BOX */}
              
            </div>
            <div className="cart-box-checkout">
              <div className="cart-box-checkout-wrapper">
                  <div className="checkout-title">ORDER SUMMARY</div>
                  <div className="checkout-info">
                    <div>Subtotal</div>
                    <div>${(cart.total).toFixed(2)}</div>
                  </div>
                  <div className="checkout-info">
                    <div>Estimated Shipping</div>
                    <div>${shipping.toFixed(2)}</div>
                  </div>
                  <div className="checkout-info">
                    <div>Shopping Discount</div>
                    <div>-${discount.toFixed(2)}</div>
                  </div>
                  <div className="checkout-total">
                    <div>Total</div>
                    <div>${(cart.total + shipping - discount).toFixed(2)}</div>
                  </div>
                  <div className="checkout-button">
                  <StripeCheckout
                    name="ECOM"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${(cart.total + shipping - discount).toFixed(2)}`}
                    amount={Math.round((((cart.total + shipping - discount)*100)) * 100) / 100}
                    token={onToken}
                    stripeKey={KEY}
                    currency="AUD"
                    >
                    <button>CHECKOUT</button>
                  </StripeCheckout>
                  </div>
                </div>
              </div>
          </div>
        
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
};

export default CartPage;