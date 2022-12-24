import React from 'react'
import Top from './Top/Top'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../Footer'

export default function GuideBooks(props) {
    const captionHeading1 = "Plan Your New Zealand Adventure!"
    const heading1 = "Guide Books"
    const captionDescription1 = "Make the most of the newly opened trans-Tasman travel bubble"
    const topImage1 = require("../../../../assets/booksNewzeland.png");
  const continentsImages = [
    {image: require("../../../../assets/africa.jpg"),
    name:"Africa"    
  },
  {
    image: require("../../../../assets/antarctica.jpg"),
    name :"Antarctica"
  },
  {
    image:     require("../../../../assets/asia.jpg"),

    name:"Asia" ,
  },
  {
    image:      require("../../../../assets/caribbean.jpg"),

    name: "Caribbean" ,
  },
  {
    image:     require("../../../../assets/centralAmerica.jpg"),

    name: "Central America",
  },
  {
    image:     require("../../../../assets/europe.jpg"),

    name: "Europe",
  },
  {
    image:     require("../../../../assets/middleEast.jpg"),

    name: "North America",
  },
  {
    image:     require("../../../../assets/northAmerica.jpg"),

    name:"North America" ,
  },
  {
    image:     require("../../../../assets/pacific.jpg"),

    name: "Pacific",
  },
  {
    image:     require("../../../../assets/southAmerica.jpg"),

    name:"South America" ,
  }
    
  ]
  const captionHeading2 = "Best of East Cost Australia!"
    const heading2 = ""
    const captionDescription2 = "Snorkel the Whitsundays, tour the Opera House or bushwalk at Wilsons Prom; all with your trusted travel companion. Discover the best of East Coast Australia and begin your journey now!"
    const topImage2 = require("../../../../assets/eastCostAustralia.png");
    const continentHeading ="Browse all Guides By Continent"
    const seriesHeading = "Browse by series"
  const continentsImages2 = [
    {image: require("../../../../assets/indiaSeries.jpg"),
    name:"Africa"    
  },
  {
    image: require("../../../../assets/southAfricaSeries.jpg"),
    name :"Antarctica"
  },
  {
    image:     require("../../../../assets/DubaiSeries.jpg"),

    name:"Asia" ,
  },
  {
    image:      require("../../../../assets/edinburghSeries.jpg"),

    name: "Caribbean" ,
  },
  {
    image:     require("../../../../assets/costaRicaSeries.jpg"),

    name: "Central America",
  },
  {
    image:     require("../../../../assets/provenceSeries.jpg"),

    name: "Europe",
  },
  {
    image:     require("../../../../assets/newZealandSeries.jpg"),

    name: "North America",
  },
  {
    image:     require("../../../../assets/icelandSeries.jpg"),

    name:"North America" ,
  },
  {
    image:     require("../../../../assets/melbourneSeries.png"),

    name: "Pacific",
  },
  {
    image:     require("../../../../assets/usaSeries.png"),

    name:"South America" ,
  }
    
  ]
  return (
    <>
     <Navbar/>
    <Top topImage1 = {topImage1} continentsImages={continentsImages} captionHeading = {captionHeading1} heading = {heading1} captionDescription ={captionDescription1}  continentHeading={continentHeading}/>
    <Top topImage1 = {topImage2} continentsImages={continentsImages2} captionHeading = {captionHeading2} heading = {heading2} captionDescription ={captionDescription2}  continentHeading={seriesHeading}/>
    <Footer/>
    </>
  )
}
