import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-kae-dark selection:bg-kae-green selection:text-black flex flex-col">
        {/* Header всегда остается сверху */}
        <Header/>
        
        {/* Контент меняется в зависимости от пути в адресной строке */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer всегда остается снизу */}
        <footer className="py-10 text-center text-gray-600 text-[10px] uppercase tracking-widest border-t border-white/5">
          © 2026 Kazakhstan Aselsan Engineering. Барлық құқықтар қорғалған.
        </footer>
      </div>
    </Router>
  );
}

export default App;