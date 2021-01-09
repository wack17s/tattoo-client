import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    /* font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .article {
    h2 {
      font-size: 21px;
    }
  }

  h1 {
    font-family: 'Rubik';
    font-size: 71px;
    line-height: 80px;
    letter-spacing: 0.01em;

    @media (max-width: 720px) {
      font-size: 42px;
      line-height: 52px;
    }
  }

  h2 {
    font-family: 'Rubik';
    font-size: 42px;
    line-height: 56px;

    @media (max-width: 720px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;

    @media (max-width: 720px) {
      display: none;
    }
  }

  h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    @media (max-width: 720px) {
      display: none;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;

    @media (max-width: 720px) {
      display: none;
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  a {
    text-decoration: none;
  }
`;

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta httpEquiv="content-language" content="ru" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Rubik:wght@900&display=swap" rel="stylesheet" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4FY8ERK24M"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4FY8ERK24M');
          `,
        }}
      />
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
