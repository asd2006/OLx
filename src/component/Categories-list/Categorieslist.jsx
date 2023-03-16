import React, { useEffect, useState } from 'react'
import { instance } from '../../Api/instance';
import Container from '../../utils/components';
import Categoryitem from './Categoryitem';

export default function Categorieslist() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    instance.get("https://api.escuelajs.co/api/v1/categories")
      .then(response => setCategoryData(response.data))
  }, []);

  return (
    <section>
      <Container>
        <h1 className='category__title'>Category</h1>
        <div className='category__item-wrapper'>
          {
            categoryData.map(item =>
              <Categoryitem img={item.image} title={item.name} />
            )
          }
        </div>
      </Container>
      com
    </section>
  )
}
