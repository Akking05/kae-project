import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const ProductCard = ({ id, title, category, image, desc }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      layout 
      variants={itemVariants}
      exit="exit"
      /* bg-white для светлой темы создает эффект "карточки" на мягком сером фоне.
         dark:bg-white/[0.03] делает карточку слегка светлее основного черного фона.
      */
      className="bg-white dark:bg-white/3 backdrop-blur-md border border-current/10 group hover:border-kae-green/50 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none"
    >
      {/* КОНТЕЙНЕР ФОТО */}
      <div className="relative aspect-4/3 overflow-hidden bg-current/2 dark:bg-white/2 flex items-center justify-center">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={title} 
        />
        
        {/* КАТЕГОРИЯ */}
        <div className="absolute top-0 left-0 bg-kae-green text-black text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 uppercase tracking-tighter z-10 shadow-lg">
          {t(`products.categories.${category}`)}
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col grow">
        {/* ЗАГОЛОВОК: убрали text-slate-900, теперь он берет цвет из body */}
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-kae-green transition-colors uppercase tracking-tight line-clamp-2">
          {title}
        </h3>
        
        {/* ОПИСАНИЕ: используем opacity-60 вместо text-slate-600 */}
        <p className="opacity-60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 grow line-clamp-3 md:line-clamp-4 font-medium">
          {desc}
        </p>

        {/* КНОПКА ПОДРОБНЕЕ */}
        <Link 
          to={`/product/${id}`} 
          className="inline-flex items-center text-kae-green text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-70 transition-all group/btn"
        >
          {t('products.more')}
          <svg className="w-3.5 h-3.5 md:h-4 md:w-4 ml-2 transform transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;