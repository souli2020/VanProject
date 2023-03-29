import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Van from './pages/Van';
import Navbar from './components/Navbar';
import VanDetailsPage from './pages/VanDetailsPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/vans" element={<Van />} />
                <Route path="/vans/:id" element={<VanDetailsPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App