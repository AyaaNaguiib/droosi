
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { I18nManager } from "react-native";

import en from "./en.json";
import ar from "./ar.json";
import { getAppLanguage, saveAppLanguage } from "../utils/helpers/storage";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

const FALLBACK_LANG: Lang = "en";
type Lang = "en" | "ar";


function applyRTL(lang: Lang) {
  if (lang === "ar" && !I18nManager.isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else if (lang === "en" && I18nManager.isRTL) {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }
}



function getDeviceLanguage(): Lang {
  const locales = Localization.getLocales();

  if (locales && locales.length > 0) {
    const langCode = locales[0].languageCode; 
    if (langCode === "en" || langCode === "ar") {
      return langCode;
    }
  }

  return FALLBACK_LANG;
}

async function initI18n() {
  let lang = await getAppLanguage(); 

  if (!lang) {
    lang = getDeviceLanguage();
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: FALLBACK_LANG,
    interpolation: { escapeValue: false },
  });

  applyRTL(lang as Lang);
}

initI18n().catch((e) => {
  console.error("i18n init failed:", e);
});


export const changeAppLanguage = async (lang: Lang) => {
  await saveAppLanguage(lang);
  await i18n.changeLanguage(lang);
  applyRTL(lang);
  
};

export default i18n;
