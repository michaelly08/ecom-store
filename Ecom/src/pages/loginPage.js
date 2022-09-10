import NavBar from "../components/navBar"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Products from "../components/products"
import {useState, useEffect} from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"






const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state)=> state.user)


  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username, password})
  }
  return (
    <div className="login-container">
      <NavBar/>
      <Announcement />
        <div className="login-wrapper">
        
          <div className="login-box">
            <form>
              <input type="text" placeholder="Username" required onChange={(e)=> setUsername(e.target.value)}></input>
              <input type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)}></input>
              <button type="submit" onClick={handleClick}>Login</button>
              <Link to="/register"  style={{"textDecoration": "none"}}>
                <div className="login-links">Create a New Account</div>
              </Link>
              <div>Forgot Password</div>
              {error && <span className="login-error">Something went wrong...</span>}
            </form>
          </div>
        
        </div>

    </div>
  )
};

export default LoginPage;