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
import App from './Home.jsx';

import User from './User.jsx';
import CurrentWork from './Component/User-Dashbord/CurrentWork.jsx';
import SaveForm from './Component/User-Dashbord/SaveForms.jsx';
import SubmitForm from './Component/User-Dashbord/SubmitForm.jsx';
import ViewForm from './Component/User-Dashbord/ViewForm.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      
          <Route path='/' element={<App />} />
           <Route path='/login' element={<LoginPage></LoginPage>} />
           <Route path='/user' element={<User></User>} />
           <Route path='/CurrentWork' element={<CurrentWork></CurrentWork>} />
           <Route path='/SaveForm' element={<SaveForm></SaveForm>} />
           <Route path='/SubmitForm' element={<SubmitForm></SubmitForm>} />
           <Route path='/viewform' element={<ViewForm></ViewForm>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
