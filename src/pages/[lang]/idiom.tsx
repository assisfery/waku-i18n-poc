import { PageProps } from "waku/router";
import { trans } from "../../i18n/translate";
import i18n from "../../i18n/i18n";
import { Nav } from "../../components/nav";
import { Link } from "waku";

export default async function Idiom({
    lang,
}: PageProps<'/[lang]'>) {

    if (i18n.supportLanguage(lang)) {
        i18n.setLanguage(lang);
    } else {
        console.warn(`Unsupported language: ${lang}. Falling back to default language.`);
        i18n.setLanguage(i18n.fallbackLanguage);
    }

    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight">
                { trans('pages.idiom') }
            </h1>
            <h3>{ trans('messages.change_language') }</h3>
            <Link to="/en/idiom" className="mt-4 inline-block underline">
                EN
            </Link> |
            <Link to="/fr/idiom" className="mt-4 inline-block underline">
                FR
            </Link> |
            <Link to="/pt-BR/idiom" className="mt-4 inline-block underline">
                pt-BR
            </Link>
            <p className="mt-4 text-lg">
                { trans('messages.idiom') }
            </p>
            <Nav />
        </div>
    );
};

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};