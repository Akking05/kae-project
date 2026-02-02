import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

const products = [
  // Оптика и Ночное видение
  { id: 1, title: t('products.items.a100.name'), category: 'optics', desc: t('products.items.a100.desc'), image: '/images/products/a100.jpg' },
  { id: 5, title: t('products.items.a210.name'), category: 'optics', desc: t('products.items.a210.desc'), image: '/images/products/a210.jpg' },
  { id: 6, title: t('products.items.a360.name'), category: 'optics', desc: t('products.items.a360.desc'), image: '/images/products/a360.jpg' },
  { id: 7, title: t('products.items.a940.name'), category: 'optics', desc: t('products.items.a940.desc'), image: '/images/products/a940.jpg' },
  { id: 8, title: t('products.items.knd525.name'), category: 'optics', desc: t('products.items.knd525.desc'), image: '/images/products/knd525.jpg' },
  { id: 9, title: t('products.items.ars12.name'), category: 'optics', desc: t('products.items.ars12.desc'), image: '/images/products/ars12.jpg' },
  
  // Тепловизионные системы
  { id: 2, title: t('products.items.t350d.name'), category: 'thermal', desc: t('products.items.t350d.desc'), image: '/images/products/t350d.jpg' },
  { id: 10, title: t('products.items.t360s.name'), category: 'thermal', desc: t('products.items.t360s.desc'), image: '/images/products/t360s.jpg' },
  
  // Связь и IT
  { id: 3, title: t('products.items.radio4713.name'), category: 'communication', desc: t('products.items.radio4713.desc'), image: '/images/products/radio4713.png' },
  { id: 11, title: t('products.items.radio4721.name'), category: 'communication', desc: t('products.items.radio4721.desc'), image: '/images/products/radio4721.png' },
  
  // Специальные системы
  { id: 4, title: t('products.items.ihasavar.name'), category: 'special', desc: t('products.items.ihasavar.desc'), image: '/images/products/antidrone.jpg' },
  { id: 12, title: t('products.items.viper.name'), category: 'special', desc: t('products.items.viper.desc'), image: '/images/products/viper.jpg' },
  { id: 13, title: t('products.items.sharpeye.name'), category: 'special', desc: t('products.items.sharpeye.desc'), image: '/images/products/sharpeye.jpg' },
  { id: 14, title: t('products.items.sarps.name'), category: 'special', desc: t('products.items.sarps.desc'), image: '/images/products/sarps.jpg' },
];

  const categories = [
    { id: 'all', name: t('products.all') },
    { id: 'optics', name: t('products.categories.optics') },
    { id: 'thermal', name: t('products.categories.thermal') },
    { id: 'communication', name: t('products.categories.communication') },
    { id: 'special', name: t('products.categories.special') },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
<div className="min-h-screen bg-slate-900 py-20 text-white"> 
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-4xl font-black uppercase mb-12 border-b-4 border-kae-green inline-block">
      {t('products.page_title')}
    </h1>

        {/* Кнопки фильтрации */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all
                ${filter === cat.id 
                  ? 'bg-kae-green text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;