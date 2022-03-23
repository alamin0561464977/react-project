import React from 'react';
import './SingelProduct.css'
const SingelProduct = (props) => {
    const product = props.product;
    return (
        <div>
            <div className='product'>
                <div>
                    <img src={product.image} alt="" />
                </div>
                <div className='description'>
                    <h2>{product.title.slice(0, 20)}</h2>
                    <h3 className='bg-danger'>Price: ${product.price}</h3>
                    <p>Description: {product.description.slice(0, 200)}</p>
                    <div>
                        <button onClick={props.setCartCount} className='button'>Add to Cart</button>
                        <button className='deleteDutton'>delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelProduct;