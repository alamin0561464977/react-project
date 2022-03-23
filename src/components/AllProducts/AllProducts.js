import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';
import './AllProducts.css'
const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    // console.log(products)
    // products.map(product => product)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div>
            {
                products.map(product => <SingelProduct setCartCount={props.setCartCount} product={product} key={product.id}></SingelProduct>)
            }

        </div>
    );
};

export default AllProducts;