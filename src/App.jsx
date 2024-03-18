import { useState } from 'react'

import './App.css'
import Header_text from './Component/Home-Compo/Header/Header_text'
import Nav from './Component/Home-Compo/Nav/Nav'
import Header from './Component/Home-Compo/Header/Header'
import Hexagon from './Component/Home-Compo/Hexagon/Hexagon'
import About from './Component/Home-Compo/About/About'
import Footer from './Component/Home-Compo/Footer/Footer'
import Nav2 from './Component/User-Dashbord/Nav2.jsx'
import Dashbord from './Component/User-Dashbord/Dashbord.jsx'
import LoginPage from './Component/User-Dashbord/LoginPage.jsx'
import Home from './Component/User-Dashbord/Home.jsx'
import Nav03 from './Component/Admin-Dashbord/Nav03.jsx'
import TableComponent from './Component/Admin-Dashbord/TableComponent.jsx'
import Input from './Component/Admin-Dashbord/Input.jsx'
import SortBy from './Component/Admin-Dashbord/SortBy.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Header_text></Header_text>
      <Nav></Nav>
      <Header></Header>
      <Hexagon></Hexagon>
      <About></About>
      <Footer></Footer> */}
      <Nav2></Nav2>
      <Dashbord></Dashbord>
      <LoginPage></LoginPage> 
      <Home></Home>
      <Nav03></Nav03>
      <TableComponent></TableComponent>
     
    </>
  )
}

export default App
