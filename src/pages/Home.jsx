import { useTranslation } from 'react-i18next';
import ImageGallery from '../components/ImageGallery';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  // Выбрано 5 ключевых продуктов из каталога для демонстрации
  const products = [
    {
      id: 1,
      title: 'A100', // Монокуляр ночного видения [cite: 21, 26]
      category: t('products.categories.night_vision'),
      image: '/images/products/a100.jpg' 
    },
    {
      id: 2,
      title: 'T350-D', // Тепловизионный прицел [cite: 134, 142]
      category: t('products.categories.thermal'),
      image: '/images/products/t350d.jpg'
    },
    {
      id: 3,
      title: '3700 Series', // Носимая радиостанция [cite: 688, 721]
      category: t('products.categories.radio'),
      image: '/images/products/radio4713.png'
    },
    {
      id: 4,
      title: 'İHASAVAR', // Система Анти-Дрон [cite: 1010, 1012]
      category: t('products.categories.anti_drone'),
      image: '/images/products/antidrone.jpg'
    },
    {
      id: 5,
      title: 'SARP-S', // Боевой модуль [cite: 1618, 1657]
      category: t('products.categories.weapon_systems'),
      image: '/images/products/sarps.jpg'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-kae-gray)_0%,transparent_70%)] opacity-30 -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-black text-kae-green uppercase tracking-tighter mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light tracking-wide uppercase">
          {t('hero.subtitle')} {/* "КРЕПКАЯ ОБОРОНА — СВЕТЛОЕ БУДУЩЕЕ"  */}
        </p>

        <Link
          to="/products"
          className="mt-8 px-8 py-3 border border-kae-green text-kae-green hover:bg-kae-green hover:text-white transition-all duration-300 uppercase font-bold tracking-widest text-sm"
        >
          {t('hero.button')}
        </Link>

        <div className="mt-10 h-12 w-px bg-kae-green animate-bounce"></div>
      </section>

    {/* Галерея */}
      <ImageGallery />

      {/* Сетка продуктов */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tighter italic">{t('nav.products')}</h2>
          <div className="h-px flex-1 bg-white/10"></div>
          <Link to="/products" className="text-kae-green text-sm hover:underline">
            {t('common.viewAll')}
          </Link>
        </div>

        {/* Сетка на 5 элементов будет выглядеть лучше с центрированием последнего ряда */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

    {/* Форма контактов */}
      <ContactForm />
    </>
  );
};

export default Home;