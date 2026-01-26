import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const { t } = useTranslation();

  // Расширенный список продуктов
  const allProducts = [
    { id: 1, title: 'KAE-T100', category: t('products.thermal'), image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'ASELSAN-5700', category: t('products.radio'), image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'MONOCULAR-NV', category: t('products.night'), image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800' },
    { id: 4, title: 'KAE-SIGHT 2', category: t('products.thermal'), image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter">
          {t('nav.products')}
        </h1>
        <span className="text-kae-green font-mono">Total: {allProducts.length}</span>
      </div>

      {/* Сетка продуктов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;