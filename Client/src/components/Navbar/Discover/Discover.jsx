import React from 'react'
import Footer from '../../Footer/Footer.jsx'
import Navbar from '../Navbar.jsx'
import DiscoverCarousel from './Carousel/DiscoverCarousel.jsx'
import PopularDestinations from './PopularDestinations/PopularDestinations'
import Shashka from './Shashka/Shashka.jsx'

export default function Discover() {
  return (
    <>
    {/* <Navbar/> */}
    <DiscoverCarousel/>
    <Shashka/>
    <PopularDestinations/>
    <Footer/>
    </>
  )
}
