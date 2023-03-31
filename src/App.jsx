import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Van from './pages/Van';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import VanDetailsPage from './pages/VanDetailsPage';
import Income from './pages/Host/Income';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostNavbar from './components/HostNavbar';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/vans" element={<Van />} />
                    <Route path="/vans/:id" element={<VanDetailsPage />} />
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />

                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetails />} >


                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />


                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App