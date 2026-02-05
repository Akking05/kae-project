import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import ImageGallery from '../components/ImageGallery';
import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';
import VideoSection from '../components/VideoSection';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { label: 'years_market', value: 10, suffix: '+' },
    { label: 'specialists', value: 250, suffix: '+' },
    { label: 'production_area', value: 15, suffix: 'k' },
    { label: 'exported_countries', value: 5, suffix: '+' }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,    // Сработает, когда 20% секции появится на экране
  });

  return (
    <>
    <title>{t('seo.home.title')}</title>
      <meta name="description" content={t('seo.home.description')} />
      
      <div className="transition-colors duration-500 overflow-x-hidden bg-transparent">

        {/* 1. HERO СЕКЦИЯ */}
        <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Сетка */}
          <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: `linear-gradient(#00E676 1px, transparent 1px), linear-gradient(90deg, #00E676 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
          </div>

          {/* Световые пятна */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-kae-green/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-kae-green/5 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 border border-kae-green/30 text-kae-green text-[10px] font-black uppercase tracking-[0.4em] mb-6 rounded-full bg-kae-green/5">
                Kazakhstan Aselsan Engineering
              </span>

              <h1 className="text-3xl xs:text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
                {t('hero.title')}
              </h1>

              {/* Цвет текста через opacity, чтобы он был чуть мягче основного */}
              <p className="opacity-70 text-sm md:text-xl max-w-2xl mx-auto font-light tracking-wide uppercase leading-relaxed mb-10">
                {t('hero.subtitle')}
              </p>
            </motion.div>
          </div>

          {/* Скролл */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-[8px] uppercase tracking-[0.3em] opacity-40 mb-2">Scroll</span>
            <div className="w-px h-12 bg-linear-to-b from-kae-green to-transparent"></div>
          </motion.div>
        </section>

        {/* 2. ГАЛЕРЕЯ */}
        <div className="py-10">
          <ImageGallery />
        </div>

        {/* 3. СТАТИСТИКА */}
        <section ref={ref} className="py-20 border-y border-current/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}} // Запускаем анимацию motion, когда секция в поле зрения
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="text-4xl md:text-6xl font-black text-kae-green mb-2 italic">
                    {/* Если секция видна — запускаем счетчик */}
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-50 max-w-37.5 mx-auto leading-tight">
                    {t(`home.stats.${stat.label}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. КАТАЛОГ */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              {/* УБРАЛИ жесткий цвет заголовка */}
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
                {t('nav.products')}
              </h2>
            </div>
            <Link to="/products" className="group flex items-center text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-kae-green transition-all">
              {t('common.viewAll')}
              <span className="ml-3 w-10 h-px bg-current opacity-20 group-hover:w-16 group-hover:bg-kae-green group-hover:opacity-100 transition-all"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.slice(0, 3).map(item => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category}
                title={t(`products.items.${item.id}.name`)}
                desc={t(`products.items.${item.id}.desc`)}
              />
            ))}
          </div>
        </section>

        {/* СЕКЦИЯ ВИДЕО */}
        <VideoSection />

        {/* 5. ФОРМА (Оставляем легкую подложку для визуального разделения) */}
        <section className="py-20 bg-current/3">
          <ContactForm />
        </section>

        <Partners />
      </div>
    </>
  );
};

export default Home;