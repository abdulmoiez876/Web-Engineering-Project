import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      {/* 
      <Navbar /> */}
    </>
  );
}

export default App;
