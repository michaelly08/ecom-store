import { popularProducts } from '../data';
import Product from './productList';
import { useState, useEffect } from 'react';
import axios from "axios"



const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() =>{
        const getProducts = async ()=> {
            try{
                const res = await axios.get(cat ? `https://ecom-store00.herokuapp.com/api/products?category=${cat}` : "https://ecom-store00.herokuapp.com/api/products")
                setProducts(res.data)
            }catch(err){

            }
        }
        getProducts();
    },[cat])
    

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item=> Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )
    }, [products, cat, filters])


    useEffect(()=> {
        if(sort==="newest") {
            setFilteredProducts((prev)=> 
            [...prev].sort((a,b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
            )
        }
        else if (sort === "asc"){
            setFilteredProducts((prev)=> 
            [...prev].sort((a,b) => a.price - b.price)
            )
        }
        else if (sort === "desc"){
            setFilteredProducts((prev)=> 
            [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])
    

    return(
        <div className="popular-products-container">
            
            <div className="popular-products-wrapper">
            {!products.length && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            {cat ? filteredProducts.map(item => (
                <Product item={item} key={item._id}/>
            )) : products.slice(0,6).map(item => (
                <Product item={item} key={item._id}/>
            ))}
            </div>

        </div>
    )
}

export default Products;