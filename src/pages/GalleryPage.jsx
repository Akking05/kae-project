import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { videoGallery } from '../data/videoGallery';

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{t('seo.gallery.title')}</title>
      <meta name="description" content={t('seo.gallery.description')} />

      <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-kae-green font-black text-xs uppercase tracking-widest mb-4 block italic opacity-80">
              {t('gallery.subtitle') || 'Media Center'}
            </span>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              {t('nav.gallery') || 'Видео-Галерея'}
            </h1>
          </motion.div>

          {/* Сетка твоих Видео */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {videoGallery.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col group"
              >
                {/* Контейнер видео с эффектом при наведении */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-current/10 bg-black shadow-2xl transition-all duration-500 group-hover:scale-102 group-hover:border-kae-green/30">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Информация под видео */}
                <div className="mt-6 pl-4 border-l-2 border-kae-green/20 group-hover:border-kae-green transition-all">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-kae-green animate-pulse"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-kae-green opacity-70">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold uppercase tracking-tight mt-1 group-hover:text-kae-green transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;