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
import GuideBooks from "./components/Footer/Shop/GuideBooks/GuideBooks";
import Books from "./components/Footer/Shop/GuideBooks/Books/Books";
import EnglishGuides from "./components/Footer/Shop/EnglishGuides/EnglishGuides"
import UrduGuides from "./components/Footer/Shop/UrduGuides/UrduGuides";
import EnglishBooks from "./components/Footer/Shop/EnglishGuides/EnglishBooks/EnglishBooks";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/guidebooks" element={<GuideBooks/>}/>
        <Route path="/englishbooks/:name" element={<EnglishBooks/>}/>
        <Route path="/books/:name" element={<Books/>}/>
        <Route path="/adventuretravel" element={<AdventureTravel/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/englishguides" element={<EnglishGuides/>}/>
        <Route path="/urduguides" element={<UrduGuides/>}/>
      </Routes>

    </>
  );
}

export default App;
