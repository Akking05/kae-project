import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  
  // Состояние для полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Здесь обычно идет запрос на сервер
    setSubmitted(true);
    
    // Очистка формы через 3 секунды
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-kae-gray/10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-10 text-center">
          {t('contact.title')}
        </h2>

        {submitted ? (
          <div className="bg-kae-green/20 border border-kae-green p-6 text-center text-kae-green animate-pulse">
            {t('contact.success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-kae-dark border border-white/10 p-4 focus:border-kae-green outline-none transition-all"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-kae-dark border border-white/10 p-4 focus:border-kae-green outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{t('contact.message')}</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="bg-kae-dark border border-white/10 p-4 focus:border-kae-green outline-none transition-all"
                required
              ></textarea>
            </div>
            <button className="w-full py-4 bg-kae-green text-black font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer">
              {t('contact.send')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;