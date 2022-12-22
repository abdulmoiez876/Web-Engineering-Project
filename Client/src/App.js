import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
// import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";
import TravelPackage from "./components/Home/TravelPackage/TravelPackage";
import SpecialDeals from "./components/SpecialDeals/SpecialDeals";
import Card from "./components/SpecialDeals/Card/Card";
import SmallDealCard from "./components/SpecialDeals/SmallDealCard/SmallDealCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/special-deals" element={<SpecialDeals />} />
        <Route path="/card" element={<Card />} />
        <Route path="/small-card" element={<SmallDealCard />} />
      </Routes>
      {/* 
      <Navbar /> */}
      {/* <Signup /> */}
      {/* <Cookies/> */}
      {/* <Card/> */}
      {/* <Footer /> */}
      {/* <TravelPackage/> */}
    </>
  );
}

export default App;
