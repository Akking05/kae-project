import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: t('products.categories.all') },
    { id: 'optics', name: t('products.categories.optics') },
    { id: 'thermal', name: t('products.categories.thermal') },
    { id: 'communication', name: t('products.categories.communication') },
    { id: 'special', name: t('products.categories.special') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const translatedProducts = productsData.map(p => ({
    ...p,
    title: t(`products.items.${p.id}.name`),
    desc: t(`products.items.${p.id}.desc`)
  }));

  const filteredProducts = filter === 'all'
    ? translatedProducts
    : translatedProducts.filter(p => p.category === filter);

  return (
    /* bg-transparent позволяет видеть наш шикарный фон из index.css */
    <div className="min-h-screen bg-transparent transition-colors duration-500 pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Адаптивный заголовок (без жесткого цвета) */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-10 wrap-break-word italic"
        >
          {t('products.page_title')}
        </motion.h1>

        {/* УЛУЧШЕННЫЕ КНОПКИ ФИЛЬТРАЦИИ */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              /* Используем opacity и border-current/20 для неактивных кнопок.
                Это делает интерфейс легким и адаптивным.
              */
              className={`flex-1 min-w-30 md:flex-none px-4 md:px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border
                ${filter === cat.id
                  ? 'bg-kae-green border-kae-green text-black shadow-[0_5px_15px_rgba(0,255,157,0.3)]'
                  : 'bg-transparent border-current/10 opacity-50 hover:opacity-100 hover:border-kae-green hover:text-kae-green'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* СЕТКА ТОВАРОВ */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;