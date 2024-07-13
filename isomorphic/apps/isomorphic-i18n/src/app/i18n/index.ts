import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

export const initI18next = async (lang: string, ns?: any) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, ns));
  return i18nInstance;
};

export async function useTranslation(lang: string, ns?: any, options?: object) {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    //@ts-ignore
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      //@ts-ignore
      options?.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
