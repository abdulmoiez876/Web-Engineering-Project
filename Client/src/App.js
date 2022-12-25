import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import AdminNavbar from "./components/Admin/AdminNavbar/AdminNavbar";
import SpecialDeals from "./components/SpecialDeals/SpecialDeals";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import DashboardCard from "./components/Admin/AdminDashboard/DashboardCard/DashboardCard";
import AdminCustomersInfo from "./components/Admin/AdminCustomersInfo/AdminCustomersInfo";
import Discover from "./components/Navbar/Discover/Discover";
import Aboutus from "./components/Aboutus/Aboutus";
import Contactus from "./components/Contactus/Contactus";
import WorkForUs from "./components/pages/WorkForUs/WorkForUs";
import Suggestion from "./components/pages/Suggestion/Suggestion";
import Terms from "./components/pages/Terms/Terms";
import Privacy from "./components/pages/Privacy/Privacy";
import Booking from "./components/pages/Booking/Booking";
import Destination from "./components/pages/Destination/Destination";
import Bookingform from "./components/Bookingform/Bookingform";
import Hotelcard from "./components/Hotelcard/Hotelcard";

function App() {
  const dataforAdventureTravels = [
    {
      image: require("./assets/hotel1.jpg"),
      caption: "Pakistan",
      description:
        "Pakistan is A Beautiful country with rich tradition and mind freshning sights. Islamabad is the capital city of Pakistan. Pakistan is home to some of the greatest historical monuments of all time  ",
    },
    {
      image: require("./assets/hotel2.jpg"),
      caption: "The Netherlands",
      description:
        "We were once the global superpower. We are currently on a break to give the U.S. a chance, but some people are getting restless here and already dusting off their bicycles. Just saying.We are on average the tallest people in the world. You’d almost think that would be related to us being below sea level. At least our heads will stick out.",
    },
    {
      image: require("./assets/hotel3.jpg"),
      caption: "Australia",
      description:
        "200 Australians angry with the government moved to Paraguay and declared a colony of “New Australia”. The two richest women in Australia are also the two richest people in Australia. Our coat of arms features the Emu and Kangaroo not just because they are national animals, but because they cannot walk backwards, being a symbol that Australia cannot go backwards.",
    },
  ];

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
        <Route path="/specialDeals" element={<SpecialDeals />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/workForUs" element={<WorkForUs />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/bookingform" element={<Bookingform/>} />
      </Routes>
    </>
  );
}

export default App;
