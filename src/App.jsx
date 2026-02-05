import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';

// Выносим обертку наружу
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      
      <main className="grow">
        {/* AnimatePresence следит за сменой location.pathname */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><GalleryPage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
            <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;