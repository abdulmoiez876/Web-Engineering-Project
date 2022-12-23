import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
// import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";
import TravelPackage from "./components/Home/TravelPackage/TravelPackage";
<<<<<<< HEAD
import Discover from "./components/Navbar/Discover/Discover";
import Navbar from './components/Navbar/Navbar'
=======
import Aboutus from "./components/Aboutus/Aboutus";
import Contactusform from "./components/Contactus/Contactusform/Contactusform";
>>>>>>> 09124487fc0351c0016219b847cf8508f47393dc

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
<<<<<<< HEAD
      
      {/* <Navbar />
      <Signup />
      <Cookies/>
      <Card/>
      <Footer />
      <TravelPackage/> */}
      {/* <Discover/> */}
=======
      {/* 
      <Navbar /> */}
      {/* <Signup /> */}
      {/* <Cookies/> */}
      {/* <Card/> */}
      {/* <Footer /> */}
      {/* <TravelPackage/> */}
      {/* <Contactus/> */}
      {/* <Aboutus /> */}
      {/* <Contactusform/> */}
>>>>>>> 09124487fc0351c0016219b847cf8508f47393dc
    </>
  );
}

export default App;
