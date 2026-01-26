import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  // Данные для таймлайна (истории)
  const history = [
    { year: '2011', text: 'Заводтың негізі қаланды (Основание завода)' },
    { year: '2013', text: 'Алғашқы өнім шығарылды (Выпуск первой продукции)' },
    { year: '2026', text: 'Цифрлық трансформация және жаңа белестер (Цифровая трансформация)' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Заголовок */}
      <h1 className="text-5xl md:text-7xl font-black text-kae-green uppercase tracking-tighter mb-12">
        {t('nav.about')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Текстовый блок */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            <span className="text-kae-green font-bold">Kazakhstan Aselsan Engineering</span> — 
            это современное предприятие, специализирующееся на производстве высокотехнологичной электроники.
          </p>
          <p>
            Наша миссия — обеспечение безопасности через инновации и локализацию передовых технологий в Казахстане.
          </p>
        </div>

        {/* Интерактивный таймлайн */}
        <div className="border-l border-kae-green/30 pl-8 space-y-12">
          {history.map((item, index) => (
            <div key={index} className="relative">
              {/* Точка на линии */}
              <div className="absolute -left-9.25 top-1 w-4 h-4 bg-kae-green rounded-full shadow-[0_0_10px_#00E676]"></div>
              <span className="text-kae-green font-mono text-xl">{item.year}</span>
              <p className="text-white mt-2 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;