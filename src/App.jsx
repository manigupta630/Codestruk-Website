import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WebAppServices from './pages/WebAppServices';
import ITServices from './pages/ITServices';
import Career from './pages/Career';
import ContactUs from './components/ContactUs';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ITServiceDetail from './pages/ITServiceDetail';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <div className="bg-[#F4F5FF] text-gray-900 font-inter overflow-x-hidden min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/web-app-services" element={<WebAppServices />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/service-detail/:id" element={<ITServiceDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/service-1" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
