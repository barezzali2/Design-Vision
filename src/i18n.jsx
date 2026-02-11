import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from './locales/en/translation.json';
import kuTranslation from './locales/ku/translation.json';
import arTranslation from './locales/ar/translation.json';


i18n.on('languageChanged', (lng) => {
  if (lng === 'ar' || lng === 'ku') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
});


i18n
  .use(LanguageDetector)  // Auto-detect user's browser language
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: enTranslation },
      ku: { translation: kuTranslation },
      ar: { translation: arTranslation }
    }
  });




export default i18n;