import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap/'
import { Card, Container } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
import pe1 from '../img/pe1.png'
import pe2 from '../img/pe2.png'
import pe3 from '../img/pe3.png'
import pe4 from '../img/pe4.png'
import persalice1 from '../img/persalice1.png'
import persalice2 from '../img/persalice2.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function Karousel () {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const carouselItems = [
    {
      id: 1,
      name: 'Annus Mirabilis',
      image: am1,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 2,
      name: 'Annus Mirabilis',
      image: am2,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 3,
      name: 'Annus Mirabilis',
      image: am3,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 4,
      name: 'Annus Mirabilis',
      image: am4,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 5,
      name: 'Annus Mirabilis',
      image: am5,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 6,
      name: 'Annus Mirabilis',
      image: am6,
      description: `
      I designed the this board at the peak of Covid-19.\n 
      It's named Annus Mirabilis (Wonderful Year) in a bit of sarcasm\n 
      but wanted to pay tribute to the good that did come out of it.\n
      `,
      angle: `Angle: 7°`,
      layout: `Layout: F12 or F13 TKL, WK or WKL`,
      mounting: `Mounting: Top or O-Ring Gasket`,
      plate: `Plates: Aluminum, Carbon Fiber or Polycarbonate`,
      weight: `Stainless Steel or Brass`,
      colors: `Navy, Silver, Obsidian`
    },
    {
      id: 7,
      name: 'Damapad',
      image: bmp1,
      description: `
      Ah, the Damapad. I was asked by Bolsa Keyboards to design a macro pad. 
      The only caveat was that it had to stand out from the other ones currently
      available in the community. Not to bag but, I think I nailed it. 
      What is so special about it? For one, it has an OLED display. I also wanted it
      to cover numbers 1-5 and 6-0. But, I didnt stop there. The 15 + 1 key layout
      is even big enough to play most games as well as being a very capable utility
      for anything you could think of throwing at it.
      `,
      angle: `Angle: 0°`,
      layout: ``,
      mounting: `Mounting: Top Mount`,
      plate: `Plate: Aluminum`,
      weight: ``,
      colors: `Burgundy and E-White`
    },
    {
      id: 8,
      name: 'Damapad',
      image: bmp2,
      description: `
      Ah, the Damapad. I was asked by Bolsa Keyboards to design a macro pad. 
      The only caveat was that it had to stand out from the other ones currently
      available in the community. Not to bag but, I think I nailed it. 
      What is so special about it? For one, it has an OLED display. I also wanted it
      to cover numbers 1-5 and 6-0. But, I didnt stop there. The 15 + 1 key layout
      is even big enough to play most games as well as being a very capable utility
      for anything you could think of throwing at it.
      `,
      angle: `Angle: 0°`,
      layout: ``,
      mounting: `Mounting: Top Mount`,
      plate: `Plate: Aluminum`,
      weight: ``,
      colors: `Burgundy and E-White`
    },
    {
      id: 9,
      name: 'BolsAlice',
      image: bolsalice2,
      description: ``
    },
    {
      id: 10,
      name: 'BolsAlice',
      image: bolsalice1,
      description: ``
    },
    {
      id: 11,
      name: 'BolsAlice',
      image: bolsalice3,
      description: ``
    },
    {
      id: 12,
      name: 'GGB',
      image: ggb1,
      description: ``
    },
    {
      id: 13,
      name: 'GGB',
      image: ggb2,
      description: ``
    },
    {
      id: 14,
      name: 'Midway60',
      image: midway1,
      description: ``
    },
    {
      id: 15,
      name: 'Midway60',
      image: midway2,
      description: ``
    },
    {
      id: 16,
      name: 'MoonDrop',
      image: nathan1,
      description: ``
    },
    {
      id: 17,
      name: 'MoonDrop',
      image: nathan2,
      description: ``
    },
    {
      id: 18,
      name: 'MoonDrop',
      image: nathan3,
      description: ``
    },
    {
      id: 19,
      name: 'MoonDrop',
      image: nathan4,
      description: ``
    },
    {
      id: 20,
      name: 'MoonDrop',
      image: nathan5,
      description: ``
    },
    {
      id: 21,
      name: 'MoonDrop',
      image: nathan6,
      description: ``
    },
    {
      id: 22,
      name: 'PrimeElise',
      image: pe1,
      description: ``
    },
    {
      id: 23,
      name: 'PrimeElise',
      image: pe2,
      description: ``
    },
    {
      id: 24,
      name: 'PrimeElise',
      image: pe3,
      description: ``
    },
    {
      id: 25,
      name: 'PrimeElise',
      image: pe4,
      description: ``
    },
    {
      id: 26,
      name: 'Alice',
      image: persalice1,
      description: ``
    },
    {
      id: 27,
      name: 'Alice',
      image: persalice2,
      description: ``
    }
  ]

  return (
    <Container style={{ marginTop: '20px' }} elevation={20}>
      {/* <div style={{marginTop: '20px'}}> */}
      <Card elevation={20}>
        {/* <CardMedia> */}
        <Carousel interval={25000}>
          {carouselItems.map(item => (
            <Carousel.Item key={item.id}>
              <img className='d-dblock w-100' src={item.image} alt='' />
              <Container maxWidth='xs'>
                <Card
                  style={{
                    textAlign: 'center',
                    marginTop: '50px',
                    marginBottom: '50px'
                  }}
                >
                  <Typography style={{ marginTop: '10px' }}>
                    <h3>{item.name}</h3>
                  </Typography>
                  Learn More
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                  <Collapse in={expanded} timeout='auto' unmountOnExit>
                    {/* <Card mx='50'> */}
                    <CardContent>
                      <Typography paragraph>{item.description}</Typography>
                      <Typography paragraph>{item.angle}</Typography>
                      <Typography paragraph>{item.layout}</Typography>
                      <Typography paragraph>{item.mounting}</Typography>
                      <Typography paragraph>{item.plate}</Typography>
                      <Typography paragraph>{item.weight}</Typography>
                      <Typography paragraph>{item.colors}</Typography>
                    </CardContent>
                    {/* </Card> */}
                  </Collapse>
                </Card>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* </CardMedia> */}
      </Card>
      {/* </div> */}
    </Container>
  )
}
