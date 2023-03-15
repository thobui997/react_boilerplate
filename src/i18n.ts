import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from 'locales/vi/translation.json';

export const defaultNS = 'translation';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  vi: {
    translation,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    returnNull: false,
    resources,
    lng: 'vi', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // ns: ['translation'],
    // defaultNS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
