import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoPng from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-transparent border-t border-slate-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* 1. О компании */}
          <div className="flex flex-col space-y-6">
            <img 
              src={logoPng} 
              alt="KAE Logo" 
              className="h-9 w-auto object-contain self-start grayscale opacity-80 hover:grayscale-0 transition-all" 
            />
            <p className="opacity-50 text-[11px] leading-relaxed uppercase tracking-widest max-w-xs font-medium">
              {t('footer.about_text')}
            </p>
          </div>

          {/* 2. Навигация */}
          <div className="md:justify-self-center">
            <h4 className="text-kae-green font-black text-[10px] uppercase tracking-[0.3em] mb-6 italic">Навигация</h4>
            <ul className="space-y-3">
              {['home', 'products', 'gallery', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'home' ? '/' : `/${item}`} 
                    className="opacity-40 hover:opacity-100 hover:text-kae-green text-[10px] uppercase font-black transition-all tracking-widest"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Контакты (Без адреса) */}
          <div className="md:justify-self-end text-left md:text-right">
            <h4 className="text-kae-green font-black text-[10px] uppercase tracking-[0.3em] mb-6 italic">Связь</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+77172938550" className="text-base md:text-lg font-black tracking-tighter hover:text-kae-green transition-colors">
                  +7 (7172) 938 550
                </a>
              </li>
              <li>
                <a href="mailto:info@kae.com.kz" className="opacity-60 text-[11px] uppercase font-bold tracking-widest border-b border-current/20 hover:border-kae-green hover:text-kae-green transition-all">
                  info@kae.com.kz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-current/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
          <p>© «KAE» {new Date().getFullYear()}</p>
          
          <div className="flex items-center space-x-1">
            <span className="font-medium opacity-70">Разработано в</span>
            <a 
              href="https://panama.kz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-kae-green transition-colors"
            >
              Panama Digital Company
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;