import React from 'react'
import { Carousel } from 'react-bootstrap/'
import { Card } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';


import am1 from '../img/am1.PNG'
import am2 from '../img/am2.png'
import am3 from '../img/am3.png'
import am4 from '../img/am4.png'
import am5 from '../img/am5.png'
import am6 from '../img/am6.png'
import bmp1 from '../img/bmp1.png'
import bmp2 from '../img/bmp2.png'
import bolsalice1 from '../img/bosalice1.png'
import bolsalice2 from '../img/bosalice2.png'
import bolsalice3 from '../img/bolsalice3.png'
import ggb1 from '../img/ggb1.PNG'
import ggb2 from '../img/ggb2.PNG'
import midway1 from '../img/midway1.jpg'
import midway2 from '../img/midway2.png'
import nathan1 from '../img/nathan1.png'
import nathan2 from '../img/nathan2.png'
import nathan3 from '../img/nathan3.png'
import nathan4 from '../img/nathan4.png'
import nathan5 from '../img/nathan5.png'
import nathan6 from '../img/nathan6.png'


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
    {
      id: 7,
      name: 'Damapad',
      image: bmp1,
      description: 'describe mp 1'
    },
    {
      id: 8,
      name: 'Damapad',
      image: bmp2,
      description: 'describe mp 2'
    },
    {
      id: 9,
      name: 'BolsAlice',
      image: bolsalice2,
      description: 'describe mp 6'
    },
    {
      id: 10,
      name: 'BolsAlice',
      image: bolsalice1,
      description: 'describe mp 6'
    },
    {
      id: 11,
      name: 'BolsAlice',
      image: bolsalice3,
      description: 'describe mp 6'
    },
    {
      id: 12,
      name: 'GGB',
      image: ggb1,
      description: 'describe ggb 1'
    },
    {
      id: 13,
      name: 'GGB',
      image: ggb2,
      description: 'describe mp 2'
    },
    {
      id: 14,
      name: 'Midway60',
      image: midway1,
      description: 'describe midway 1'
    },
    {
      id: 15,
      name: 'Midway60',
      image: midway2,
      description: 'describe midway 2'
    },
    {
      id: 16,
      name: 'MoonDrop',
      image: nathan1,
      description: 'describe moondrop 1'
    },
    {
      id: 17,
      name: 'MoonDrop',
      image: nathan2,
      description: 'describe moondrop 2'
    },
    {
      id: 18,
      name: 'MoonDrop',
      image: nathan3,
      description: 'describe moondrop 3'
    },
    {
      id: 19,
      name: 'MoonDrop',
      image: nathan4,
      description: 'describe moondrop 4'
    },
    {
      id: 20,
      name: 'MoonDrop',
      image: nathan5,
      description: 'describe moondrop 5'
    },
    {
      id: 21,
      name: 'MoonDrop',
      image: nathan6,
      description: 'describe moondrop 6'
    },
  ]

  return (
    <div style={{marginTop: '20px'}}>
      <Card>
    
      <Carousel interval={10000} m='5' p='md'>

        {carouselItems.map((item) => (
          <Carousel.Item 
            key={item.id}>
              <img 
                className='d-dblock w-100'
                src={item.image}
                alt=''
              />
            <Card style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Card>
          </Carousel.Item>
        ))}

      </Carousel>
      </Card>
    </div>


  )
}
