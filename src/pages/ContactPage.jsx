import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { title: 'address', value: 'г. Астана, Индустриальный парк, пр. Кабанбай батыра, 60/1', icon: '📍' },
    { title: 'email', value: 'info@kae.com.kz', icon: '✉️' },
    { title: 'phone', value: '+7 (7172) 93-88-00', icon: '📞' }
  ];

  return (
    /* Используем плавные переходы без лишних префиксов */
    <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Заголовок страницы */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-kae-green font-black text-xs uppercase tracking-widest mb-4 block italic opacity-80">
            {t('contact.subtitle') || 'Connect with us'}
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            {t('nav.contact')}
          </h1>
        </motion.div>

        {/* Сетка инфо-карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-20">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              /* v4 синтаксис: /5 вместо /[0.05] */
              className="p-8 bg-current/5 dark:bg-white/5 border border-current/10 rounded-2xl hover:border-kae-green/50 transition-all group"
            >
              <div className="text-2xl mb-4">{info.icon}</div>
              <h4 className="text-kae-green font-black text-xs uppercase tracking-widest mb-3 italic">
                {t(`footer.${info.title}`) || info.title}
              </h4>
              <p className="text-xs md:text-sm font-bold uppercase tracking-tight opacity-70 leading-relaxed">
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Лево: Форма */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            /* v4 синтаксис: /2 вместо /[0.02] */
            className="bg-current/2 dark:bg-white/2 p-4 md:p-8 rounded-3xl border border-current/5"
          >
            <ContactForm />
          </motion.div>

          {/* Право: Карта */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 md:h-full min-h-100 rounded-3xl overflow-hidden border border-current/10"
          >
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-xs uppercase font-black tracking-widest opacity-40">
                  Интерактивная карта скоро появится
                </p>
                <button className="mt-4 text-[10px] text-kae-green border border-kae-green/30 px-6 py-2 hover:bg-kae-green hover:text-black transition-all font-bold uppercase cursor-pointer">
                   Открыть в 2ГИС
                </button>
              </div>
            </div>
            
            {/* Внутренняя тень для объема */}
            <div className="absolute inset-0 pointer-events-none shadow-inner opacity-20 dark:opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;