import i18n, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import { storageRead, storageWrite } from '_utils/storageUtils';
import * as RNLocalize from 'react-native-localize';

import Arabic from './languages/ar.json';
import English from './languages/en.json';

// {
//   type: 'languageDetector',
//   async: true, // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example
//   init: function(services, detectorOptions, i18nextOptions) {
//     /* use services and options */
//   },
//   detect: function(callback) { // You'll receive a callback if you passed async true
//     /* return detected language */
//     // callback('de'); if you used the async flag
//     return 'de';
//   },
//   cacheUserLanguage: function(lng) {
//     /* cache language */
//   }
// }

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: (services, detectorOptions, i18nextOptions) => {
    /* use services and options */
  },
  detect: async (callback) => {
    const lng = await storageRead('appLang');
    if (lng) {
      callback(lng);
    } else {
      const bestLng = RNLocalize.findBestAvailableLanguage(['en', 'ar']);
      callback(bestLng?.languageTag ?? 'en');
    }
  },
  cacheUserLanguage: async (lng) => {
    await storageWrite('appLang', lng);
  },
};

// en: () => require("./languages/en.json"),
// ar: () => require("./languages/ar.json")

const resources = {
  en: {
    translation: English,
  },
  ar: { translation: Arabic },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: 'en',
    // fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
