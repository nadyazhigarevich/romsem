import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import { useParams } from 'react-router-dom'
import PizzaSize from '../routes/RouteContent/PizzaSize'

const Product = () => {
    const [product, setProduct] = useState({})
    const { path, id } = useParams()
    console.log(path);

    useEffect(() => {
        axios(`http://localhost:8080/${path}?id=${id}`)
            .then(({ data }) => setProduct(data))
    }, [])

    console.log(product);

    return (
        <div className='product'>
            <div className='product__link'>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16.5" cy="16.5" r="13" fill="#FFA500" />
                    <path d="M18 10.5L11.5 16.5L18 22.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="0" y="28" fontSize="7">ACCESSIBILITY</text>
                    <text x="0" y="35" fontSize="7">Name</text>
                    <text x="0" y="42" fontSize="7">Role</text>
                    <text x="0" y="49" fontSize="7">Keyboard-focusable</text>
                </svg>
                <span className='product__link-text'>Назад</span>
            </div>
            <div className='product__content'>
                <img className='product__content-img' />
                <div className='product__content-info'>
                    <h2 className='product__content-title'></h2>
                    {
                    
                  product?.sizes && <PizzaSize sizes={product.sizes}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
