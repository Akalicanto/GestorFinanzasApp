import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/en.json";
import esTranslation from "./languages/es.json";
import deTranslation from "./languages/de.json";

const resources = {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    de: { translation: deTranslation },
};

const storedLang = localStorage.getItem("language");

const userLang = navigator.language.split("-")[0];
const fallbackLang = ["en", "es", "de"].includes(userLang) ? userLang : "en";

const initialLang = storedLang || fallbackLang;

i18n.use(initReactI18next).init({
    resources,
    lng: initialLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
    localStorage.setItem("language", lng);
});

export default i18n;