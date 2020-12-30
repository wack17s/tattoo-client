module.exports = {
  siteUrl: 'https://mytattoo.com.ua',
  changefreq: 'daily',
  priority: 0.8,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/protected-page', '/awesome/secret-page'],
  // Default transformation function
  transform: (config, url) => {
    const newConfig = {...config};
    let newUrl = url;

    if (url === '/') {
      newConfig.priority = 1;
      newConfig.changefreq = 'monthly';
      newUrl = '/ru/';
    }

    if (url === '/about') {
      newConfig.priority = 0.6;
      newConfig.changefreq = 'monthly';
      newUrl = '/ru/about';
    }

    if (url === '/articles') {
      newConfig.changefreq = 'weekly';
      newUrl = '/ru/articles';
    } else if (url.match(/\/articles/g)) {
      newConfig.changefreq = 'monthly';
    }

    if (url === '/choose-city') {
      newConfig.priority = 0.6;
      newConfig.changefreq = 'monthly';
      newUrl = '/ru/choose-city';
    }

    if (url === '/choose-style') {
      newConfig.priority = 0.6;
      newConfig.changefreq = 'monthly';
      newUrl = '/ru/choose-style';
    }

    return {
      loc: newUrl,
      changefreq: newConfig.changefreq,
      priority: newConfig.priority,
      lastmod: undefined,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // {
      //   userAgent: 'test-bot',
      //   allow: ['/path', '/path-2'],
      // },
      // {
      //   userAgent: 'black-listed-bot',
      //   disallow: ['/sub-path-1', '/path-2'],
      // },
    ],
    additionalSitemaps: [
      'https://mytattoo.com.ua/sitemap-ua.xml',
      // 'https://example.com/my-custom-sitemap-2.xml',
      // 'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
};
