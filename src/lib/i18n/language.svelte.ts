import { translations, type Lang } from './translations';

// Create a global state for language
let currentLang = $state<Lang>('fr');

// Export readonly access to current language
export const getCurrentLang = () => currentLang;

// Export function to change language
export const setCurrentLang = (lang: Lang) => {
    currentLang = lang;
};

// Helper function to get translations
export function t(path: string): string {
    const keys = path.split('.');
    let value: any = translations[currentLang];
    
    for (const key of keys) {
        value = value[key];
    }
    
    return value as string;
}
