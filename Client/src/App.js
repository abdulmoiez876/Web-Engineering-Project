import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Cookies from "./components/Cookiespopup/Cookies";
// import Card from "./components/Home/Card/Card";
import Footer from "./components/Footer/Footer";
import TravelPackage from "./components/Home/TravelPackage/TravelPackage";
import Contactus from './components/Contactus/Contactus';
import AdminNavbar from './components/Admin/AdminNavbar/AdminNavbar';
import SpecialDeals from './components/SpecialDeals/SpecialDeals';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import DashboardCard from "./components/Admin/AdminDashboard/DashboardCard/DashboardCard";
import AdminCustomersInfo from "./components/Admin/AdminCustomersInfo/AdminCustomersInfo";

function App() {
  return (
    <>
       <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-nav" element={<AdminNavbar />} />
        <Route path="/admin-dash" element={<AdminDashboard />} />
        <Route path="/special" element={<SpecialDeals />} />
        <Route path="/cardDashboard" element={<DashboardCard />} />
        <Route path="/customerAdmin" element={<AdminCustomersInfo />} />
      </Routes>
      {/* 
      <Navbar /> */}
      {/* <Signup /> */}
      {/* <Cookies/> */}
      {/* <Card/> */}
      {/* <Footer /> */}
      {/* <TravelPackage/> */}
      {/* <AdminNavbar /> */}
      {/* <Contactus/> */}
    </>
  );
}

export default App;
