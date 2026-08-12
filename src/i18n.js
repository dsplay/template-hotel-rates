import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18next's default export is the same instance whose methods (use/init/...) are
// individually re-exported by name, so this is a known false positive.
// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Dollar: 'Dollar',
          Euro: 'Euro',
        },
      },
      pt: {
        translations: {
          Dollar: 'Dólar',
          Euro: 'Euro',
        },
      },
      es: {
        translations: {
          Dollar: 'Dólar',
          Euro: 'Euro',
        },
      },
      it: {
        translations: {
          Dollar: 'Dollaro',
          Euro: 'Euro',
        },
      },
      de: {
        translations: {
          Dollar: 'Dollar',
          Euro: 'Euro',
        },
      },
      nl: {
        translations: {
          Dollar: 'Dollar',
          Euro: 'Euro',
        },
      },
    },
    fallbackLng: {
      default: ['en'],
    },
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
