import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { FC } from 'react';

export const Seo: FC = () => {
  const defaultTitle = 'Tint & Shade Preview';
  const defaultDescription =
    '入力したカラーコードの色合いを作りどの色が背景とテキストに合うか調べることができます';
  const ogpImage = 'https://www.tint-shade-preview.com//ogp.png';
  return (
    <>
      <Head>
        <link rel='icon' href='/tint-and-shade-preview-favicon.ico' />
      </Head>
      <DefaultSeo
        defaultTitle={defaultTitle}
        description={defaultDescription}
        openGraph={{
          type: 'website',
          title: defaultTitle,
          description: defaultDescription,
          site_name: defaultTitle,
          url: 'https://www.tint-shade-preview.com/',
          images: [
            {
              url: ogpImage,
              width: 800,
              height: 600,
              alt: defaultTitle,
              type: 'image/jpg',
            },
          ],
        }}
        twitter={{
          handle: '@orca48691',
          site: '@orca48691',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};
