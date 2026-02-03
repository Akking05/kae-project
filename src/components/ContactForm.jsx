import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-white/5 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-12 text-center text-slate-900 dark:text-white italic"
        >
          {t('contact.title')}
        </motion.h2>

        {submitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-kae-green/10 border border-kae-green p-8 text-center text-kae-green font-bold uppercase tracking-widest"
          >
            {t('contact.success')}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Поле Имя */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-gray-500 mb-2 ml-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white dark:bg-kae-dark border border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:border-kae-green outline-none transition-all duration-300 rounded-sm shadow-sm"
                  required
                />
              </div>

              {/* Поле Email */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-gray-500 mb-2 ml-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white dark:bg-kae-dark border border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:border-kae-green outline-none transition-all duration-300 rounded-sm shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Сообщение */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-gray-500 mb-2 ml-1">
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="bg-white dark:bg-kae-dark border border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:border-kae-green outline-none transition-all duration-300 rounded-sm shadow-sm resize-none"
                required
              ></textarea>
            </div>

            {/* Кнопка отправки */}
            <button className="group relative w-full py-4 bg-kae-green text-black font-black uppercase tracking-[0.3em] text-xs overflow-hidden transition-all hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black cursor-pointer shadow-lg shadow-kae-green/20">
              <span className="relative z-10">{t('contact.send')}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;