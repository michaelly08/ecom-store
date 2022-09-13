import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {useEffect, useState} from "react"



function NavBar() {

    
    const quantity = useSelector(state=> state.cart.quantity)
    const user = useSelector(state => state.user.currentUser);

    const [name, setName]  = useState("")

    useEffect(() => {
        if (user){
            setName(user.name)
        }
    }, [user])




    

    const show = () => {
        document.querySelector(".navbar-wrapper").classList.toggle("is-active");
    }




  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">
            <div className="navbar-box">
                <div className="search-container">
                        <i className='bx bx-search search-icon'></i>
                        <input placeholder="Search" className="search-input"></input>
                </div>
            </div>
            <div className="navbar-box">
                <Link to="/" style={{"textDecoration": "none"}}>
                    <div className="logo">ECOM</div>
                </Link>
            </div>
            <div className="navbar-box">
                <div className="menu-appear">
                    
                        <div >
                            <Link to={!user ? ("/register") : ("/")}  style={{"textDecoration": "none"}} className="right-nav login">
                                {!user ? ("Register") : (`Hello, ${name}`)}
                            </Link>
                            </div>
                    
                    {!user ?
                    
                        <div >
                            <Link to="/login" style={{"textDecoration": "none"}} className="right-nav login">
                                Sign In
                            </Link>
                        </div>
                     : <div className="right-nav login" onClick={() => window.location.reload()}>Sign Out</div>}

                    <span className="close-menu" onClick={show}><i className='bx bx-x'></i></span>
                </div>
                <div className="right-nav">
                <Link to="/cart">
                    <Badge badgeContent={quantity} color="primary" fontSize="small">
                        <ShoppingCartOutlinedIcon className="shopping-cart" fontSize="small"></ShoppingCartOutlinedIcon >
                    </Badge>
                </Link>
                </div>
                <div className="right-nav burger-icon" onClick={show}><i className='bx bx-menu'></i></div>
            </div>

        </div>
    </div>
  )
}

export default NavBar