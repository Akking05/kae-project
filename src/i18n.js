import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import kz from './locales/kz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kz: kz,
      ru: ru,
      en: en
    },
    fallbackLng: 'kz', // Если язык не найден, ставим казахский
    interpolation: { escapeValue: false }
  });

export default i18n;