import React from 'react'
import { FiHeart } from 'react-icons/fi';
import "./ProductCard.scss";

export default function ProductCard({data}) {
    return (
        <div className='product__card'>
            <img className='product__image' src={data.images[0]} alt="" />
            <h3 className='product__heading'>{data.title}</h3>
            <p className='product__desc'>
                {data.description}
            </p>
            <div className='product__price-wrapper'>
                <strong className='product__price'>
                    ${data.price }
                </strong>
                <FiHeart />
            </div>
        </div>
    )
}
