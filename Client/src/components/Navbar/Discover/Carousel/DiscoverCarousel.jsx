import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import styles from './carousel.module.css'

const data = [
  {
   image: require('../../../../assets/discover.jpg'), 
   caption:"Pakistan",
   description:"Pakistan is A Beautiful country with rich tradition and mind freshning sights. Islamabad is the capital city of Pakistan. Pakistan is home to some of the greatest historical monuments of all time  "
  },
  {
    image:require('../../../../assets/discover1.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('../../../../assets/discover2.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]
export default function DiscoverCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
  return (
    <Carousel interval={4000} fade={true} activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>
        <div>        
        <img
          className={`d-block ${styles.discoverImages}`}  
          src={slide.image}
          alt="slider image"
          
        />
        <div className={`${styles.caption}`}>
        <h1>{slide.caption}</h1>
        <h5>{slide.description}</h5></div>
        </div>
        
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
  
}
