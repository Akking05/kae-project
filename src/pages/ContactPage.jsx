import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const { t } = useTranslation();

  // Обновленные данные: только то, что нужно
  const contactInfo = [
    { title: 'email', value: 'info@kae.com.kz', icon: '✉️', link: 'mailto:info@kae.com.kz' },
    { title: 'phone', value: '+7 (7172) 938 550', icon: '📞', link: 'tel:+77172938550' }
  ];

  return (
    <>  
    <title>{t('seo.contact.title')}</title>
<meta name="description" content={t('seo.contact.description')} />

    <div className="min-h-screen bg-transparent pt-24 md:pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Заголовок страницы */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-kae-green font-black text-xs uppercase tracking-[0.3em] mb-4 block italic opacity-80">
            {t('contact.subtitle')}
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            {t('nav.contact')}
          </h1>
        </motion.div>

        {/* Сетка инфо-карточек: теперь 2 колонки, так как адреса нет */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-current/5 dark:bg-white/5 border border-current/10 rounded-3xl hover:border-kae-green transition-all group"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h4 className="text-kae-green font-black text-[10px] uppercase tracking-widest mb-2 italic">
                {t(`footer.${info.title}`)}
              </h4>
              <p className="text-lg md:text-xl font-black uppercase tracking-tight opacity-90 group-hover:text-kae-green transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Секция с формой — теперь центрирована и на всю ширину контейнера */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-current/3 dark:bg-white/3 p-6 md:p-12 rounded-[2.5rem] border border-current/5 relative overflow-hidden"
          >
            {/* Декоративный эффект для объема */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-kae-green/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase italic mb-10 tracking-tight">
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
    </>
  );
};

export default ContactPage;