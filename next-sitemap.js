const cityNames = require('./cityNames.js');

module.exports = {
  siteUrl: 'https://mytattoo.com.ua',
  changefreq: 'monthly',
  priority: 0.6,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // Default transformation function
  transform: (config, url) => {
    const newConfig = {...config};
    let newUrl = url;

    if (url === '/') {
      newConfig.priority = 1;
    }

    if (url === '/articles') {
      newConfig.changefreq = 'weekly';
      newConfig.priority = 0.8;
    } else if (url.match(/\/articles/g)) {
      newConfig.priority = 0.8;
    }

    if (url === '/tattooers') {
      newConfig.priority = 0.8;
      newConfig.changefreq = 'weekly';
    }

    if (cityNames.some(city => url.match(`/${city}`))) {
      newConfig.priority = 0.8;
      newConfig.changefreq = 'weekly';
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
      // 'https://mytattoo.com.ua/sitemap-ua.xml',
      // 'https://example.com/my-custom-sitemap-2.xml',
      // 'https://example.com/my-custom-sitemap-3.xml',
    ],
  },
};
