import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";
import {Link} from "react-router-dom"


import { Pagination, Navigation, Autoplay } from "swiper";


const MainPage = () => {
    return (
    <div className="slide-container">
        <Swiper         spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
         className="slide-wrapper mySwiper">
            {/* <div className="arrow arrow-left"><i class='bx bx-chevron-left'></i></div>
            <div className="arrow arrow-right"><i class='bx bx-chevron-right' ></i></div> */}
            

            <SwiperSlide className="slide" style={{"backgroundColor": "rgba(227, 251, 255, 1)"}}>
                <div className="slide-img">
                    <img alt="model img" src="https://www.bananamoon.com/media/catalog/product/cache/4d14e2ee3ce88899cba5a49b2896bb05/2/2/22e-liffi_mahaloday_lai19-dev.jpg"></img>
                </div>
                <div className="slide-info">
                    <div className="slide-info-title">SUMMER SALE</div>
                    <div className="slide-info-small-txt">DO NOT MISS OUT 30% OFF ALL SUMMER ITEMS</div>
                    <Link to="/products/All">
                        <button className="slide-info-button" onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide" style={{"backgroundColor": "rgba(252, 229, 249, 1)"}}>
                <div className="slide-img">
                    <img alt="model img" src="https://media1.popsugar-assets.com/files/thumbor/O_85YRql8vTMB_fSTvDjTN9deuc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/06/832/n/1922564/deac29f7a7585f5c_netimg5bgOFB/i/Faithfull-Brand-Maple-Midi-Dress.jpg"></img>
                </div>
                <div className="slide-info">
                    <div className="slide-info-title">AUTUMN COLLECTION</div>
                    <div className="slide-info-small-txt">DO NOT MISS OUT 30% OFF ALL SUMMER ITEMS</div>
                    <Link to="/products/All">
                        <button className="slide-info-button" onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide" style={{"backgroundColor": "rgba(252, 229, 229, 1)"}}>
                <div className="slide-img">
                    <img alt="model img" src="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull302461402a/ffull302461402a_p5_2-0.jpg"></img>
                </div>
                <div className="slide-info">
                    <div className="slide-info-title">NEW ARRIVALS</div>
                    <div className="slide-info-small-txt">DO NOT MISS OUT 30% OFF ALL SUMMER ITEMS</div>
                    <Link to="/products/All">
                        <button className="slide-info-button" onClick={() => window.scrollTo({top: 0})}>SHOP NOW</button>
                    </Link>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
    )
  };
  
  export default MainPage;
