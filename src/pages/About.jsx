import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-slate-900">
      {/* Шапка */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest">{t('about.page_title')}</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Миссия и Видение */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-50 border-l-4 border-kae-green">
            <h2 className="text-2xl font-bold mb-4 text-kae-blue">{t('about.mission.title')}</h2>
            <p className="text-slate-700 leading-relaxed text-sm">{t('about.mission.text')}</p>
          </div>
          <div className="p-8 bg-slate-50 border-l-4 border-kae-green">
            <h2 className="text-2xl font-bold mb-4 text-kae-blue">{t('about.vision.title')}</h2>
            <p className="text-slate-700 leading-relaxed text-sm">{t('about.vision.text')}</p>
          </div>
        </div>

        {/* Цели */}
        <div className="mb-16">
          <h2 className="text-3xl font-black uppercase mb-8">{t('about.goals.title')}</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {t('about.goals.items', { returnObjects: true }).map((goal, index) => (
              <li key={index} className="flex items-start space-x-3 bg-white p-4 border border-slate-100 shadow-sm">
                <span className="text-kae-green font-bold">0{index + 1}.</span>
                <span className="text-slate-600 text-sm">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Политики */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="font-bold text-kae-blue mb-2 uppercase text-sm">{t('about.policies.quality_title')}</h3>
            <p className="text-xs text-slate-500">{t('about.policies.quality_text')}</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="font-bold text-kae-blue mb-2 uppercase text-sm">{t('about.policies.env_title')}</h3>
            <p className="text-xs text-slate-500">{t('about.policies.env_text')}</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="font-bold text-kae-blue mb-2 uppercase text-sm">{t('about.policies.ohs_title')}</h3>
            <p className="text-xs text-slate-500">{t('about.policies.ohs_text')}</p>
          </div>
        </div>

        {/* История (Хронология) */}
        <div className="mb-20">
          <h2 className="text-3xl font-black uppercase mb-10 text-center">{t('about.history.title')}</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <div className="md:w-48 font-bold text-kae-green uppercase text-sm mb-2 md:mb-0">
                  {t(`about.history.t${i}.date`)}
                </div>
                <div className="text-slate-600 text-sm italic">
                  {t(`about.history.t${i}.text`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Состав участников */}
<div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl">
  <h3 className="text-2xl font-bold mb-8 uppercase text-kae-green">
    {t('about.founders_title')}
  </h3>
  <div className="grid sm:grid-cols-3 gap-8">
    
    {/* Казахстан Инжиниринг */}
    <div className="border-l border-white/20 pl-4">
      <div className="text-3xl font-black mb-1">50%</div>
      <div className="text-[10px] uppercase text-white/60 leading-tight">
        {t('about.founders.kazakhstan')}
      </div>
    </div>
    
    {/* Aselsan */}
    <div className="border-l border-white/20 pl-4">
      <div className="text-3xl font-black mb-1">49%</div>
      <div className="text-[10px] uppercase text-white/60 leading-tight">
        {t('about.founders.aselsan')}
      </div>
    </div>
    
    {/* Комитет обороны Турции */}
    <div className="border-l border-white/20 pl-4">
      <div className="text-3xl font-black mb-1">1%</div>
      <div className="text-[10px] uppercase text-white/60 leading-tight">
        {t('about.founders.committee')}
      </div>
    </div>

  </div>
</div>
      </section>
    </div>
  );
};

export default About;