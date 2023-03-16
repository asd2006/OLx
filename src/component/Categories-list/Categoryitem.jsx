import React from 'react'
import "./Category-item.scss"

export default function Categoryitem  ({img, title}) {
  return (
    <div className='category'>
        <img className='category__item-img' src={img} alt="" />
        <h2>{title}</h2>
    </div>
  )
}
