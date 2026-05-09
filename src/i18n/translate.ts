import fs from 'fs';
import i18n from './i18n';

function translateI18n(lang: string, file: string, key: string): string {

    const translationFilePath = `./src/lang/${lang}/${file}.json`;
    
    if (fs.existsSync(translationFilePath)) {
        const raw = fs.readFileSync(translationFilePath, 'utf-8');
        const data = JSON.parse(raw);

        if (data[key]) {
            return data[key];
        }
    }

    return `#${lang}.${file}.${key}`;
}

function translate(file: string, key: string): string {
    return translateI18n(i18n.getLanguage(), file, key);
}

function trans(file_key: string): string {
    const [file, key] = file_key.split('.');

    if(!file || !key) {
        return `#${i18n.getLanguage()}.${file_key}`;
    }

    return translateI18n(i18n.getLanguage(), file, key);
}

export { translateI18n, translate, trans };