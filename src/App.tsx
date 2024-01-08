import React, { ReactElement} from 'react';

import Login from './pages/auth/Login';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Manufacturer from './pages/dashboard/Manufacturer';
import AlternativeTable from './components/dashboard/otherTable/AlternativeTable';
import LanguageLevel from './components/dashboard/languagelevels/LanguageLevel';


function App(): ReactElement {
  console.clear();
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
