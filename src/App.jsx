import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Case1 from './pages/Case1';
import NavBar from './components/NavBar';
import Case2 from './pages/Case2';
import Case3Index from './pages/Case3/Case3Index';
import Case3Menu from './pages/Case3/Case3Menu';
import Case3Create from './pages/Case3/Case3Create';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<Case1 />} />
        <Route path='/case1' element={<Case1 />} />
        <Route path='/case2' element={<Case2 />} />
        <Route path='/case3/index' element={<Case3Index />} />
        <Route path='/case3/menu' element={<Case3Menu />} />
        <Route path='/case3/create' element={<Case3Create />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
