import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* 
      <Navbar /> */}
      {/* <Signup /> */}
      {/* <Cookies/> */}
      {/* <Card/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
