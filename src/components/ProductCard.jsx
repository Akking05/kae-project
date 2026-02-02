import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ title, category, image, desc }) => { // Добавь desc в пропсы
  const { t } = useTranslation();

  return (
    <div className="bg-slate-800 border border-white/5 rounded-lg overflow-hidden group hover:border-kae-green/50 transition-all shadow-xl flex flex-col h-full">
      {/* Контейнер для фото */}
      <div className="aspect-video bg-slate-700 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-2 left-2 bg-kae-green text-black text-[10px] font-bold px-2 py-1 uppercase">
          {category}
        </div>
      </div>

      {/* Текстовый блок */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        {/* ВОТ ТУТ МЫ ДОБАВЛЯЕМ ОПИСАНИЕ */}
        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {desc}
        </p>

        <button className="text-kae-green text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center">
          {t('products.more')} →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;