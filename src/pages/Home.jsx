import { useTranslation } from 'react-i18next';
import ImageGallery from '../components/ImageGallery';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { t } = useTranslation();

  // Данные продуктов переехали сюда, так как они нужны только на главной
  const products = [
    { id: 1, title: 'KAE-T100', category: t('products.thermal'), image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800' },
    { id: 2, title: 'ASELSAN-5700', category: t('products.radio'), image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=800' },
    { id: 3, title: 'MONOCULAR-NV', category: t('products.night'), image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-kae-gray)_0%,transparent_70%)] opacity-30 -z-10"></div>
        <h1 className="text-7xl md:text-9xl font-black text-kae-green uppercase tracking-tighter mb-4">KAE</h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light tracking-wide">{t('hero.subtitle')}</p>
        <div className="mt-10 h-12 w-px bg-kae-green animate-bounce"></div>
      </section>

      {/* Галерея */}
      <ImageGallery />

      {/* Сетка продуктов */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tighter italic">{t('nav.products')}</h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

      {/* Форма контактов */}
      <ContactForm />
    </>
  );
};

export default Home;