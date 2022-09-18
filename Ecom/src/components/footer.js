import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-wrapper">
            <div className="footer-box">
                <div className="footer-title">ECOM</div>
                <div className="footer-left-info">ECOM is about more than clothes. We partner with the best in the industry to co-create. This way we offer our fans the apparel and style that match their aesthetic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</div>
            </div>
            <div className="footer-box">
                <div className="footer-title">Useful Links</div>
                <div className="footer-right-info">

                    <div className="footer-useful-links">
                        <Link to="/" style={{"textDecoration": "none", "padding" : "0" , "margin": "0", "color": "black"}}>
                        <div className="linked" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</div>
                        </Link>
                    </div>

                    <div className="footer-useful-links">
                        <div className="linked">Order Tracking</div>
                    </div>
                    <div className="footer-useful-links">
                        <Link to="/cart" style={{"textDecoration": "none", "padding" : "0" , "margin": "0", "color": "black"}}>
                        <div className="linked" onClick={() => window.scrollTo({top: 0})}>Cart</div>
                        </Link>
                    </div>
                    <div className="footer-useful-links">
                        <div className="linked">My Account</div>
                    </div>
                    <div className="footer-useful-links">
                        <div className="linked">Terms</div>
                    </div>
                </div>
            </div>
            <div className="footer-box">
                <div className="footer-title">Contact Me</div>
                <div className="footer-right-info">
                    <div>
                        <div><i className='bx bxs-map' ></i></div>
                        <div className="linked">Michael Ly</div>
                    </div>
                    <div>
                        <div><i className='bx bxs-phone'></i></div>
                        <a className="linked" href="tel:+61-414-722-216">+61 414 722 216</a>
                    </div>
                    <div>
                        <div><i className='bx bx-envelope' ></i></div>
                        <a className="linked" href="mailto: michael.ly2002@gmail.com">Email Me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer