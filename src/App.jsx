import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import { MyProvider } from "./Context/MyContext";
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <MyProvider>
            <Dashboard />
          </MyProvider>
        }
      />
    </Routes>
  );
}

export default App
