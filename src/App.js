import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router"
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Write from "./pages/Write";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./style.scss";

const Layout=()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home />} />
          <Route path="post/:id" element={<SinglePage />} />
          <Route path="write" element={<Write />} />
      </Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
   </Router>
   </div>
   </div>
  )
}

export default App