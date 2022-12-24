import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";
import TravelPackage from "./components/Home/TravelPackage/TravelPackage";
import Discover from "./components/Navbar/Discover/Discover";
import Navbar from './components/Navbar/Navbar'
import Aboutus from "./components/Aboutus/Aboutus";
import Contactusform from "./components/Contactus/Contactusform/Contactusform";
import AdventureTravel from "./components/Footer/TravelInterests/AdventureTravel/AdventureTravel";
import Top from "./components/Footer/Shop/GuideBooks/Top/Top";
import GuideBooks from "./components/Footer/Shop/GuideBooks/GuideBooks";

function App() {
  const dataforAdventureTravels = [
    {
     image: require('./assets/hotel1.jpg'), 
     caption:"Pakistan",
     description:"Pakistan is A Beautiful country with rich tradition and mind freshning sights. Islamabad is the capital city of Pakistan. Pakistan is home to some of the greatest historical monuments of all time  "
    },
    {
      image:require('./assets/hotel2.jpg'), 
      caption:"The Netherlands",
      description:"We were once the global superpower. We are currently on a break to give the U.S. a chance, but some people are getting restless here and already dusting off their bicycles. Just saying.We are on average the tallest people in the world. You’d almost think that would be related to us being below sea level. At least our heads will stick out."
     },
     {
      image:require('./assets/hotel3.jpg'), 
      caption:"Australia",
      description:"200 Australians angry with the government moved to Paraguay and declared a colony of “New Australia”. The two richest women in Australia are also the two richest people in Australia. Our coat of arms features the Emu and Kangaroo not just because they are national animals, but because they cannot walk backwards, being a symbol that Australia cannot go backwards."
     } 
  ];
  
  return (
    <>
      <Routes>
        {/* <Route path="" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Home/> */}
      {/* <AdventureTravel dataforAdventureTravels={dataforAdventureTravels}/> */}
      <GuideBooks />
      {/* <Top topImage1={topImage1} continentsImages={continentsImages}/> */}
      {/* <Navbar /> */}
      {/* 
      <Navbar /> */}
      {/* <Signup /> */}
      {/* <Cookies/> */}
      {/* <Card/>
      <Footer />
      <TravelPackage/> */}
      {/* <Contactus/> */}
      {/* <Aboutus /> */}
      {/* <Contactusform/> */}
    </>
  );
}

export default App;
