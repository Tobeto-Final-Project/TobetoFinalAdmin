import React, { ReactElement, useEffect, useState } from 'react';

import Login from './pages/auth/Login';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Manufacturer from './pages/dashboard/Manufacturer';


function App(): ReactElement {
  console.clear();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
