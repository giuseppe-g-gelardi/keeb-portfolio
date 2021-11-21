import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from '@material-ui/core'



import am1 from '../img/am1.PNG'
import am2 from '../img/am2.png'

export default function Karousel() {

  const carouselItems = [
    {
      id: 1,
      name: 'Annus Mirabilis',
      image: am1,
      description: 'describe board 1'
    },
    {
      id: 2,
      name: 'Annus Mirabilis',
      image: am2,
      description: 'describe board 2'
    }
  ]

  return (
    <Container>
      <Carousel interval={10000} m='5'>

        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img 
              className='d-dblock w-100'
              src={item.image}
              alt={item.image}
            />
          </Carousel.Item>
        ))}

      </Carousel>
    </Container>
  )
}
