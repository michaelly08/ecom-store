import { Route, Routes, Navigate, Link } from 'react-router-dom'

import "./styles.css";



import HomePage from './pages/homePage';
import CategoryPage from './pages/categoryPage'
import ProductPage from './pages/productPage'
import RegisterPage from './pages/registerPage'
import LoginPage from './pages/loginPage'
import CartPage from './pages/cartPage'
import SuccessPage from './pages/successPage'
import React from 'react'
import {useSelector} from "react-redux"



const App = () => {
  const user = useSelector(state => state.user.currentUser);
  // const user = false;
  return (
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/products/:category" element={<CategoryPage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="/register" element={!user ? (<RegisterPage />) : (<Navigate replace to={"/"}/>)}/>
          <Route path="/login" element={!user ? (<LoginPage />) : (<Navigate replace to={"/"}/>)}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/success" element={<SuccessPage />}/>
        </Routes>
  )
};

export default App;