import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        {/* Header всегда остается сверху */}
        <Header/>
        
        {/* Контент меняется в зависимости от пути в адресной строке */}
        <main className="grow">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer всегда остается снизу */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;