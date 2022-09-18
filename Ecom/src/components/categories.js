import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom'


const Categories = () => {
    return (
        <div className="categories-container">
            <div className="categories-wrapper">


                <div className="categories-box">
                    <div className="category-img">
                        <img alt="model img" src="https://static.e-stradivarius.net/5/photos2/2019/V/0/1/p/1124/642/160/1124642160_2_2_1.jpg"></img>
                    </div>
                    <div className="categories-info">
                        <div>Pants</div>
                        <Link to="/products/Pants">
                            <button onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                        </Link>
                    </div>
                </div>


                <div className="categories-box">
                    <div className="category-img">
                        <img alt="model img" src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-IE-Site/Sites-master/en_IE/dwb30eb5e0/PF5445_NRE_20.jpg"></img>
                    </div>
                    <div className="categories-info">
                        <div>Shirts</div>
                        <Link to="/products/Shirts">
                            <button onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                        </Link>
                    </div>
                </div>


                <div className="categories-box">
                    <div className="category-img">
                        <img alt="model img" src="https://ie.benetton.com/on/demandware.static/-/Sites-ucb-master/default/dw74037f63/images/Full_generic/Benetton_21P_102ME1N94_901_F_Full_generic.jpg"></img>
                    </div>
                    <div className="categories-info">
                        <div>Sweaters</div>
                        <Link to="/products/Sweaters">
                            <button onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Categories