import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logoPng from '../assets/logo.png';

const Header = () => {
   const { t, i18n } = useTranslation();

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   return (
      <header className="fixed top-0 w-full z-50 bg-kae-dark/50 backdrop-blur-lg border-b border-white/10">
         <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            {/* Логотип */}
            <Link to="/" className="flex items-center space-x-3 group">
          {/* 2. Заменяем старый div на этот блок */}
          <img 
            src={logoPng} 
            alt="KAE Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          
          {/* <div className="flex flex-col border-l border-white/20 pl-3">
            <span className="text-xl font-black leading-none tracking-tighter text-kae-green">KAE</span>
            <span className="text-[8px] uppercase text-white/50 leading-none mt-1">
              Kazakhstan Aselsan Engineering
            </span>
          </div> */}
        </Link>

            {/* Навигация */}
            <nav className="flex space-x-8">
               <Link to="/" className="hover:text-kae-green transition-colors">
                  {t('nav.home')}
               </Link>
               <Link to="/products" className="hover:text-kae-green transition-colors">
                  {t('nav.products')}
               </Link>
               <Link to="/about" className="hover:text-kae-green transition-colors">
                  {t('nav.about')}
               </Link>
               <Link to="/contact" className="hover:text-kae-green transition-colors">
                  {t('nav.contact')}
               </Link>
            </nav>
            {/* Переключатель языков */}
            <div className="flex space-x-4 text-[10px] font-bold">
               {['kz', 'ru', 'en'].map((lng) => (
                  <button
                     key={lng}
                     onClick={() => changeLanguage(lng)}
                     className={`uppercase cursor-pointer hover:text-kae-green transition-colors ${i18n.language === lng ? 'text-kae-green' : 'text-gray-500'}`}
                  >
                     {lng}
                  </button>
               ))}
            </div>
         </div>
      </header>
   );
};

export default Header;