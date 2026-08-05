import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const __DEV__ = true;

i18n
	.use(HttpApi)
	.use(initReactI18next)
	.init({
		debug: __DEV__,
		lng: "en",
		fallbackLng: "en",
		supportedLngs: ["en", "es", "el", "ms", "th", "de", "fr", "it", "pt"],
		defaultNS: "translation",
		ns: ["translation"],
		backend: {
			loadPath: "/locales/{{lng}}/translation.json",
		},
		interpolation: {
			escapeValue: false,
		},
		returnNull: false,
	});


export default i18n;