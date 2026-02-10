import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LazyComponent from './components/LazyComponent';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Locations = lazy(() => import('./pages/Locations'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Careers = lazy(() => import('./pages/Careers'));

// Service landing pages
const BasementFinishing = lazy(() => import('./pages/BasementFinishing'));
const CustomCarpentry = lazy(() => import('./pages/CustomCarpentry'));
const HomeRenovations = lazy(() => import('./pages/HomeRenovations'));
const ExteriorServices = lazy(() => import('./pages/ExteriorServices'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<LazyComponent><Home /></LazyComponent>} />
              <Route path="/about" element={<LazyComponent><About /></LazyComponent>} />
              <Route path="/services" element={<LazyComponent><Services /></LazyComponent>} />
              <Route path="/portfolio" element={<LazyComponent><Portfolio /></LazyComponent>} />
              <Route path="/contact" element={<LazyComponent><Contact /></LazyComponent>} />
              <Route path="/blog" element={<LazyComponent><Blog /></LazyComponent>} />
              <Route path="/blog/:slug" element={<LazyComponent><BlogPost /></LazyComponent>} />
              <Route path="/locations" element={<LazyComponent><Locations /></LazyComponent>} />
              <Route path="/faq" element={<LazyComponent><FAQ /></LazyComponent>} />
              <Route path="/careers" element={<LazyComponent><Careers /></LazyComponent>} />

              {/* Service Landing Pages */}
              <Route path="/basement-finishing" element={<LazyComponent><BasementFinishing /></LazyComponent>} />
              <Route path="/custom-carpentry" element={<LazyComponent><CustomCarpentry /></LazyComponent>} />
              <Route path="/home-renovations" element={<LazyComponent><HomeRenovations /></LazyComponent>} />
              <Route path="/exterior-services" element={<LazyComponent><ExteriorServices /></LazyComponent>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;