import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-32">
      <ContactForm />
      {/* Здесь можно добавить карту или адреса офисов */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center uppercase tracking-widest text-[10px] text-gray-500">
        <div>
          <h4 className="text-kae-green mb-2">Адрес</h4>
          <p>Астана қ., Индустриялық парк</p>
        </div>
        <div>
          <h4 className="text-kae-green mb-2">Email</h4>
          <p>info@kae.com.kz</p>
        </div>
        <div>
          <h4 className="text-kae-green mb-2">Телефон</h4>
          <p>+7 (7172) 00-00-00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;