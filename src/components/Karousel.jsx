import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import { Container } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';


import am1 from '../img/am1.PNG'
import am2 from '../img/am2.png'
import am3 from '../img/am3.png'
import am4 from '../img/am4.png'
import am5 from '../img/am5.png'
import am6 from '../img/am6.png'


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
    },
    {
      id: 3,
      name: 'Annus Mirabilis',
      image: am3,
      description: 'describe board 3'
    },
    {
      id: 4,
      name: 'Annus Mirabilis',
      image: am4,
      description: 'describe board 4'
    },
    {
      id: 5,
      name: 'Annus Mirabilis',
      image: am5,
      description: 'describe board 5'
    },
    {
      id: 6,
      name: 'Annus Mirabilis',
      image: am6,
      description: 'describe board 6'
    },
  ]

  return (

      <Carousel interval={10000} m='5' p='md'>

        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img 
              // className='d-dblock w-100'
              src={item.image}
              alt=''
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>


  )
}
