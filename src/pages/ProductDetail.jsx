import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { productsData } from '../data/products';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const product = productsData.find(p => p.id === id);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="text-center">
        <h1 className="text-4xl font-black mb-4 uppercase">404</h1>
        <Link to="/products" className="text-kae-green underline uppercase text-xs font-bold tracking-widest">
          {t('common.back_to_catalog')}
        </Link>
      </div>
    </div>
  );

  const specs = t(`products.items.${product.id}.specs`, { returnObjects: true });
  const hasSpecs = specs && typeof specs === 'object' && !Array.isArray(specs);

  return (
    <>
      <title>{t('seo.products.title')}</title>
      <meta name="description" content={t('seo.products.description')} />

      <div className="min-h-screen bg-transparent transition-colors duration-500 pt-20 md:pt-32 pb-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Кнопка назад — используем opacity вместо конкретных серых цветов */}
          <Link to="/products" className="inline-flex items-center opacity-50 hover:opacity-100 text-kae-green text-[10px] font-black uppercase tracking-[0.3em] mb-8 md:mb-12 transition-all group">
            <span className="mr-2 transform group-hover:-translate-x-2 transition-transform">←</span>
            {t('common.back')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

            {/* Лево: Изображение (оставляем легкую подложку, чтобы товар "парил") */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-current/2 dark:bg-white/3 border border-current/10 p-6 md:p-12 rounded-2xl aspect-square flex items-center justify-center backdrop-blur-sm"
            >
              <img
                src={product.image}
                alt={product.id}
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Право: Описание и заголовок */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-kae-green font-bold text-[10px] uppercase tracking-[0.4em] mb-4 italic">
                {t(`products.categories.${product.category}`)}
              </span>

              {/* Заголовок теперь без жесткого цвета — берет из index.css */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase mb-6 md:mb-8 tracking-tighter italic leading-none wrap-break-word">
                {t(`products.items.${product.id}.name`)}
              </h1>

              {/* Описание через opacity */}
              <p className="opacity-70 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light max-w-xl">
                {t(`products.items.${product.id}.desc`)}
              </p>

              {/* Характеристики — адаптивная карточка */}
              {hasSpecs && (
                <div className="bg-current/3 dark:bg-white/2 border border-current/10 rounded-xl p-6 md:p-8">
                  <h3 className="text-kae-green text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8 border-b border-current/10 pb-4 italic">
                    {t('products.technical_specs')}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col border-b border-current/5 pb-2">
                        <span className="text-[9px] uppercase font-bold opacity-40 mb-1 leading-tight">{key}</span>
                        <span className="text-sm font-medium opacity-90 leading-snug">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;