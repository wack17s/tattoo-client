import * as React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';

interface ITagsProps {
  pathname?: string;

  title?: string;
  ogTitle?: string;
  description?: string;
  ogDescription?: string;
  iamgeUrl?: string;
  keywords?: string;

  hideUa?: boolean;

  canonical?: string;
}

const HOST = process.env.NEXT_PUBLIC_HOST;
const DEFAULT_TITLE = 'Cервис для поиска татуировщиков в Украине';
const DEFAULT_DESCRIPTION = 'Найти лучших тату мастеров с помощью сайта MyTattoo – просто и удобно. Мы собрали множество работ и эскизов различных тату мастеров Украины. У нас вы можете узнать отзывы и цены, а так же связаться с мастером.';
const DEFAULT_IMAGE_URL = `${HOST}/og.jpg`;
const DEFAULT_KEYWORDS = 'mytattoo, tattoo, тату, татировка, набить, татуировщик, наколка, татуха';

export const Tags: React.FunctionComponent<ITagsProps> = ({
  title: propTitle = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogTitle: propOgTitle = DEFAULT_TITLE,
  ogDescription = DEFAULT_DESCRIPTION,
  iamgeUrl = DEFAULT_IMAGE_URL,
  keywords = DEFAULT_KEYWORDS,
  pathname: propPathname,
  hideUa,
  canonical
}) => {
  const { locale, pathname: routerPathname } = useRouter();
  let pathname = (propPathname || routerPathname || '');

  if (pathname !== '/') {
    pathname = pathname + '/';
  }

  const title = `${propTitle}`;
  const ogTitle = `${propOgTitle}`;

  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <link rel="canonical" href={HOST + (canonical || `${!hideUa && locale === 'ua' ? '/ua' : ''}${pathname}`)} />
      <link rel="alternate" hrefLang="ru" href={`${HOST}${pathname}`} />
      {!hideUa && <link rel="alternate" hrefLang="uk" href={`${HOST}/ua${pathname}`} />}

      <meta name="robots" content="index, follow" />

      <meta property="url" content={`${HOST}${!hideUa && locale === 'ua' ? '/ua' : ''}${pathname}`} />
      <meta property="title" content={title} />
      <meta name="title" content={title} />
      <meta property="description" content={description} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="image" content={iamgeUrl} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={iamgeUrl} />
      <meta property="og:site_name" content="MyTattoo" />
      <meta property="og:url" content={`${HOST}${!hideUa && locale === 'ua' ? '/ua' : ''}${pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`${HOST}${!hideUa && locale === 'ua' ? '/ua' : ''}${pathname}`} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={iamgeUrl} />
    </Head>
  )
}
