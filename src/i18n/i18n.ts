
class i18n {
    static currentLanguage: string = 'en';

    static supportedLanguages: string[] = ['en', 'fr'];

    static setLanguage(lang: string): void {
        if (this.supportedLanguages.includes(lang)) {
            this.currentLanguage = lang;
        }
    }

    static getLanguage(): string {
        return this.currentLanguage;
    }
}

export default i18n;