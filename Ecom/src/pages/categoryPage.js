import NavBar from "../components/navBar"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter"
import Products from "../components/products"
import React from 'react';
import { useLocation } from 'react-router-dom';
import {useState} from "react";





const CategoryPage = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest")


    const handleFilters =(e) => {
        const value = e.target.value;
        setFilters({...filters, [e.target.name]: value})
    }


    

  return (
    <div className="categoryPage-container">
        <NavBar />
        <Announcement />
        
        <div className="categoryPage-wrapper">
        <div className="categoryPage-title">{cat}</div>
            <div className="categoryPage-filter-container">
                <span className="categoryPage-filter">
                    <div>
                        Filter:
                    </div>
                    <div>
                        <select name="color" onChange={handleFilters}>
                            <option disabled>Color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                            <option>Gray</option>
                            <option>Dark Blue</option>
                            <option>Purple</option>
                        </select>
                    </div>
                    <div>
                        <select name="size" onChange={handleFilters}>
                            <option disabled>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </span>
                <span className="categoryPage-filter">
                    <div>
                        Sort:
                    </div>
                    <div>
                        <select onChange={e => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="asc">Price (Asc)</option>
                            <option value="desc">Price (Desc)</option>
                        </select>
                    </div>
                </span>
            </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </div>
  )
};

export default CategoryPage;