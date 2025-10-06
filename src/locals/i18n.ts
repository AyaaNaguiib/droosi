// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import * as Localization from "expo-localization";
// //import * as RNLocalize from 'react-native-localize';
// import { I18nManager } from 'react-native';
// //import RNRestart from 'react-native-restart';

// import en from './en.json';
// import ar from './ar.json';
// import { getAppLanguage, saveAppLanguage } from '../utils/helpers/storage';

// const resources = {
//   en: { translation: en },
//   ar: { translation: ar },
// };

// const FALLBACK_LANG = 'en';

// function applyRTL(lang: 'en' | 'ar') {
//   if (lang === 'ar' && !I18nManager.isRTL) {
//     I18nManager.forceRTL(true);
//     //RNRestart.restart();
//   } else if (lang === 'en' && I18nManager.isRTL) {
//     I18nManager.forceRTL(false);
//    // RNRestart.restart();
//   }
// }

// async function initI18n() {
//   let lang = await getAppLanguage();
//   if (!lang) {
//     const deviceLang = RNLocalize.getLocales()[0]?.languageCode;
//     lang = ['en', 'ar'].includes(deviceLang) ? deviceLang : FALLBACK_LANG;
//   }

//   i18n.use(initReactI18next).init({
//     resources,
//     lng: lang,
//     fallbackLng: FALLBACK_LANG,
//     interpolation: { escapeValue: false },
//   });

//   applyRTL(lang as 'en' | 'ar');
// }

// initI18n();

// export const changeAppLanguage = async (lang: 'en' | 'ar') => {
//   await saveAppLanguage(lang);
//   await i18n.changeLanguage(lang);


//   applyRTL(lang);
// };

// export default i18n;
// src/i18n/index.ts



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

/**
 * تفعيل أو تعطيل RTL حسب اللغة
 */
function applyRTL(lang: Lang) {
  if (lang === "ar" && !I18nManager.isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else if (lang === "en" && I18nManager.isRTL) {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }
}

/**
 * جلب لغة الجهاز من expo-localization
 */
function getDeviceLanguage(): Lang {
  const locales = Localization.getLocales();

  if (locales && locales.length > 0) {
    const langCode = locales[0].languageCode; // "en" أو "ar"
    if (langCode === "en" || langCode === "ar") {
      return langCode;
    }
  }

  return FALLBACK_LANG;
}

/**
 * تهيئة i18n
 */
async function initI18n() {
  let lang = await getAppLanguage(); // اللغة المخزنة في AsyncStorage

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

/**
 * تغيير لغة التطبيق
 */
export const changeAppLanguage = async (lang: Lang) => {
  await saveAppLanguage(lang);
  await i18n.changeLanguage(lang);
  applyRTL(lang);
  // ملاحظة: في بعض الحالات لازم تعمل Reload للتطبيق عشان RTL يبان صح
};

export default i18n;
