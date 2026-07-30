import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from "i18next-http-backend";
import gamesEn from './locales/en/translations.json';
import gamesEs from './locales/es/translations.json';
import gamesEl from './locales/el/translations.json';
import gamesMs from './locales/ms/translations.json';
import gamesTh from './locales/th/translations.json';
import gamesDe from './locales/de/translations.json';
import gamesFr from './locales/fr/translations.json';
import gamesIt from './locales/it/translations.json';
import gamesPt from './locales/pt/translations.json';

const __DEV__ = true;


i18n
  .use(HttpApi) // load the files from the server's public folder
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: __DEV__, // set to false in production
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      resources: {
            en: {
                translation: gamesEn,//require('./locales/en/games.json'),
            },
            es: {
                games: gamesEs,
            },
            el: {
                games: gamesEl,
            },
            ms: {
                games: gamesMs,
            },
            th: {
                games: gamesTh,
            },
            de: {
                games: gamesDe,
            },
            fr: {
                games: gamesFr,
            },
            it: {
                games: gamesIt,
            },
            pt: {
                games: gamesPt,
            }
        },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


export default i18n;