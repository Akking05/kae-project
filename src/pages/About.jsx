import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <title>{t('seo.about.title')}</title>
      <meta name="description" content={t('seo.about.description')} />
      <div className="min-h-screen bg-transparent transition-colors duration-500 pt-20">

        {/* Hero-секция (акцентный темный блок оставляем для стиля) */}
        <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-linear-to-r from-kae-green/20 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.2em] text-white italic"
            >
              {t('about.page_title')}
            </motion.h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">

          {/* Миссия и Видение — адаптивные подложки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20">
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 bg-current/3:bg-white/[0.03] border-l-4 border-kae-green rounded-r-xl shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-black mb-4 uppercase text-kae-green">
                {t('about.mission.title')}
              </h2>
              <p className="opacity-70 leading-relaxed text-sm md:text-base">
                {t('about.mission.text')}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 bg-current/3 dark:bg-white/3 border-l-4 border-kae-green rounded-r-xl shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-black mb-4 uppercase text-kae-green">
                {t('about.vision.title')}
              </h2>
              <p className="opacity-70 leading-relaxed text-sm md:text-base">
                {t('about.vision.text')}
              </p>
            </motion.div>
          </div>

          {/* Цели — прозрачные карточки */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-10 tracking-tighter italic">
              {t('about.goals.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t('about.goals.items', { returnObjects: true }).map((goal, index) => (
                <div key={index} className="flex items-start space-x-4 bg-current/2 dark:bg-white/2 p-5 border border-current/10 rounded-lg group hover:border-kae-green transition-all">
                  <span className="text-kae-green font-black text-xl italic opacity-50 group-hover:opacity-100">0{index + 1}</span>
                  <span className="opacity-80 text-xs md:text-sm font-medium">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Политики */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
            {[
              { title: 'quality', icon: '🎯' },
              { title: 'env', icon: '🌿' },
              { title: 'ohs', icon: '🛡️' }
            ].map((pol) => (
              <div key={pol.title} className="p-6 border border-current/10 rounded-2xl hover:bg-current/3 transition-all text-center group">
                {/* УБРАЛИ: grayscale group-hover:grayscale-0 transition-all */}
                <div className="text-3xl mb-4">{pol.icon}</div>

                <h3 className="font-black text-kae-green mb-3 uppercase text-[10px] tracking-widest italic">
                  {t(`about.policies.${pol.title}_title`)}
                </h3>
                <p className="text-[11px] opacity-50 leading-relaxed">
                  {t(`about.policies.${pol.title}_text`)}
                </p>
              </div>
            ))}
          </div>

          {/* История — Таймлайн */}
          <div className="mb-24">
            <h2 className="text-3xl font-black uppercase mb-12 text-center italic">{t('about.history.title')}</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-baseline p-4 border-l-2 border-current/10 hover:border-kae-green transition-colors ml-4"
                >
                  <div className="sm:w-32 font-black text-kae-green uppercase text-sm mb-1 sm:mb-0 shrink-0">
                    {t(`about.history.t${i}.date`)}
                  </div>
                  <div className="opacity-60 text-xs md:text-sm font-light italic">
                    {t(`about.history.t${i}.text`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Состав участников */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-6 md:p-12 rounded-4xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-kae-green/5 blur-[100px]" />
            <h3 className="text-xl md:text-3xl font-black mb-10 uppercase text-kae-green italic tracking-tighter">
              {t('about.founders_title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="relative">
                <div className="text-4xl md:text-6xl font-black text-kae-green mb-2">50%</div>
                <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 leading-snug">
                  {t('about.founders.kazakhstan')}
                </div>
              </div>
              <div className="relative">
                <div className="text-4xl md:text-6xl font-black text-white mb-2">49%</div>
                <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 leading-snug">
                  {t('about.founders.aselsan')}
                </div>
              </div>
              <div className="relative">
                <div className="text-4xl md:text-6xl font-black text-white/30 mb-2">1%</div>
                <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 leading-snug">
                  {t('about.founders.committee')}
                </div>
              </div>
            </div>
          </motion.div>

        </section>
      </div>
    </>
  );
};

export default About;