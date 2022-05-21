import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

type MetaData = {
  pageTitle?: string;
  pageDescription?: string;
};

export const Seo: FC<MetaData> = ({ pageTitle, pageDescription }) => {
  const router = useRouter();
  const defaultTitle = 'Tint & Shade Preview';
  const defaultDescription =
    '入力したカラーコードの色合いを作りどの色が背景とテキストに合うか調べることができます';
  const ogpImage = '/ogp.png';

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={ogpImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@orca48691' />
      <link rel='canonical' href={url} />
      <link rel='icon' href='/tint-and-shade-preview-favicon.ico' />
    </Head>
  );
};
