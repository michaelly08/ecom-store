import NavBar from "../components/navBar"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Products from "../components/products"
import {useRef} from "react"
import { useNavigate  } from "react-router-dom";
import axios from "axios"
import {useSelector} from "react-redux";
import {useState} from "react"



const RegisterPage = () => {
  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()
  const [error, setError] = useState(false)



  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match")
    } else {
      const user = {
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try{
        await axios.post("https://ecom-store00.herokuapp.com/api/auth/register", user)
        navigate("/login")
      }
      catch(err){
        setError(true)
      }
      
    }
  }






  return (
    <div className="register-container">
      <NavBar/>
      <Announcement />
        <div className="register-wrapper">
          {/* <img src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27082533_43_D1.jpg?ts=1640105457039"></img> */}
        
          <div className="register-box">
            <form onSubmit={handleClick}>
              <input type="text" placeholder="Full Name" ref={name} required></input>
              <input type="text" placeholder="Username" ref={username} required></input>
              <input type="email" placeholder="Email" ref={email} required></input>
              <input type="password" placeholder="Password" ref={password} minLength="6" required></input>
              <input type="password" placeholder="Confirm Password" ref={passwordAgain} required></input>
              <div>By creating an account. I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong></div>
              <button type="submit">Register</button>
              {error && <span className="login-error">Username or Email already in use...</span>}
            </form>
            
          </div>
          
        </div>

    </div>
  )
};

export default RegisterPage;