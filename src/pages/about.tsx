import { Link } from 'waku';
import { trans, translate, translateI18n } from '../i18n/translate';
import { Nav } from '../components/nav';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Nav />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: translateI18n('en', 'message', 'welcome'),
    headline: translate('pages', 'about'),
    body: trans('messages.about'),
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
