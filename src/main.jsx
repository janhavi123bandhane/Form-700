import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import LoginPage from './Component/Home-Compo/LoginPage.jsx';
import Footer from './Component/Home-Compo/Footer';
import Nav from './Component/Home-Compo/Nav';
import Header_text from './Component/Home-Compo/Header_text.jsx';
import Hexagon from './Component/Home-Compo/Hexagon.jsx';
import About from './Component/Home-Compo/About.jsx';
import Header from './Component/Home-Compo/Header.jsx'
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      <Routes>
       
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
     
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
