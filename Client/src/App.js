import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
// import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";
import travelPackage from "./components/Home/TravelPackage/TravelPackage";
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import SpecialDeals from "./components/SpecialDeals/SpecialDeals";
import WorkForUs from "./components/pages/WorkForUs/WorkForUs";
import Suggestion from "./components/pages/Suggestion/Suggestion";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/specialDeals" element={<SpecialDeals />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/workForUs" element={<WorkForUs />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
      
    </>
  );
}

export default App;
