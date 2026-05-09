import { Link } from "waku"
import { translate } from "../i18n/translate"
import i18n from "../i18n/i18n";

export const Nav = () => {
    const lang = i18n.getLanguage();

    return <>
        <Link to="/" className="mt-4 inline-block underline">
            { translate('pages', 'home') }
        </Link> | 
        <Link to="/about" className="mt-4 inline-block underline">
            { translate('pages', 'about') }
        </Link> | 
        <Link to={`/${lang}/contact`} className="mt-4 inline-block underline">
            { translate('pages', 'contact') }
        </Link> | 
        <Link to={`/${lang}/idiom`} className="mt-4 inline-block underline">
            { translate('pages', 'idiom') }
        </Link>
    </>
}