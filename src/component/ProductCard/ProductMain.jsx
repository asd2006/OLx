import React, { useEffect, useState } from 'react'
import { instance } from '../../Api/instance';
import Container from '../../utils/components'
import ProductCard from './ProductCard'
import './ProductCard.scss'

export default function ProductMain() {

    const [productData, setProductData] = useState([])
    useEffect(() => {
        instance.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
            .then(response => setProductData(response.data))
    }, []);
    return (
        <section>
            <Container>
                <div className='product__main-wrapper'>
                    {
                        productData.map(item => {
                            return <ProductCard data={item} />
                        })
                    }
                </div>
            </Container>
        </section>
    )
}
