import { PageProps } from "waku/router";
import { trans } from "../../i18n/translate";
import i18n from "../../i18n/i18n";
import { Nav } from "../../components/nav";

export default async function Contact({
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
                { trans('pages.contact') }
            </h1>
            <p className="mt-4 text-lg">
                { trans('messages.contact') }
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