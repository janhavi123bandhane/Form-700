import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header_text from './Component/Home-Compo/Header_text.jsx'
import Nav from './Component/Home-Compo/Nav.jsx'
import Header from './Component/Home-Compo/Header.jsx'
import Hexagon from './Component/Home-Compo/Hexagon.jsx'
import About from './Component/Home-Compo/About.jsx'
import Footer from './Component/Home-Compo/Footer.jsx'
import Nav2 from './Component/User-Dashbord/Nav2.jsx'
import Dashbord from './Component/User-Dashbord/Dashbord.jsx'
import LoginPage from './Component/Home-Compo/LoginPage.jsx'
import Home from './Component/User-Dashbord/Home.jsx'
import Nav03 from './Component/Admin-Dashbord/Nav03.jsx'
import TableComponent from './Component/Admin-Dashbord/TableComponent.jsx'
import Input from './Component/Admin-Dashbord/Input.jsx'
import SortBy from './Component/Admin-Dashbord/SortBy.jsx'
import SubmitForm from './Component/User-Dashbord/SubmitForm.jsx';
import SaveForm from './Component/User-Dashbord/SaveForms.jsx';
import CurrentWork from './Component/User-Dashbord/CurrentWork.jsx';
import ViewForm from './Component/User-Dashbord/ViewForm.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Header_text></Header_text>
       <Header></Header>
       <Hexagon></Hexagon>
       <About></About>
       <Footer></Footer>     
       <Nav03></Nav03>
       <TableComponent></TableComponent>
       <SubmitForm></SubmitForm>
       <SaveForm></SaveForm>
       <CurrentWork></CurrentWork>
       <ViewForm></ViewForm>
    </>
  )
}

export default App;
