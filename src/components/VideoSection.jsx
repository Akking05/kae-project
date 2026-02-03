import React from 'react';
import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-current/2 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Заголовок секции */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4">
            {t('home.production.title')}
          </h2>
          <p className="opacity-60 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
            {t('home.production.subtitle')}
          </p>
        </div>

        {/* Сетка с видео */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Видео 1: Завод */}
          <div className="group relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-current/10 transition-transform hover:scale-[1.01]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SxrXHrwmPuI"
              title="KAE Factory Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Видео 2: Инжиниринг */}
          <div className="group relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-current/10 transition-transform hover:scale-[1.01]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/J3h93ot0pVM"
              title="Kazakhstan Engineering Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;