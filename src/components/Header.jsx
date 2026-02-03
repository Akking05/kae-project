import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoPng from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'products', path: '/products' },
    { name: 'gallery', path: '/gallery' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-100 bg-site-bg/80 backdrop-blur-md border-b border-current/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        
        {/* ЛОГОТИП */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={logoPng} 
            alt="KAE Logo" 
            className="h-8 md:h-12 w-auto object-contain dark:brightness-110" 
          />
        </Link>

        {/* ДЕСКТОП НАВИГАЦИЯ */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-kae-green ${
                location.pathname === link.path ? 'text-kae-green' : 'opacity-50 hover:opacity-100'
              }`}
            >
              {t(`nav.${link.name}`)}
            </Link>
          ))}
        </nav>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="hidden sm:flex space-x-3 border-r border-current/10 pr-4">
            {['kz', 'ru', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`uppercase text-[10px] font-black cursor-pointer transition-colors ${
                  i18n.language === lng ? 'text-kae-green' : 'opacity-30 hover:opacity-100'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          <ThemeToggle />

          {/* КНОПКА БУРГЕРА */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'opacity-80'}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-80'}`} />
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'opacity-80'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-(--site-bg) border-b border-current/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-black uppercase tracking-tighter transition-all ${
                    location.pathname === link.path ? 'text-kae-green' : 'opacity-90'
                  }`}
                >
                  {t(`nav.${link.name}`)}
                </Link>
              ))}
              
              <div className="pt-6 border-t border-current/10 flex justify-between items-center">
                <div className="flex space-x-6">
                  {['kz', 'ru', 'en'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`uppercase text-xs font-black transition-colors ${
                        i18n.language === lng ? 'text-kae-green' : 'opacity-40'
                      }`}
                    >
                      {lng}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;