import { UI, DEFAULT_LANGUAGE } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in UI) return lang as keyof typeof UI;
    return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof UI) {
    return function t(key: keyof typeof UI[typeof DEFAULT_LANGUAGE]) {
        return UI[lang][key] || UI[DEFAULT_LANGUAGE][key];
    }
}