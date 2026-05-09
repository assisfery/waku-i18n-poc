
class i18n {
    static fallbackLanguage: string = 'en';

    static currentLanguage: string = 'en';

    static supportedLanguages: string[] = ['en', 'fr'];

    static supportLanguage(lang: string): boolean{
        return this.supportedLanguages.includes(lang);;
    }

    static setLanguage(lang: string): void {
        if (this.supportLanguage(lang)) {
            this.currentLanguage = lang;
        }
        else {
            this.currentLanguage = this.fallbackLanguage;
        }
    }

    static getLanguage(): string {
        return this.currentLanguage;
    }
}

export default i18n;