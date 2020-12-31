const fs = require('fs');

const toExclude = `<url><loc>https://mytattoo.com.ua/</loc><changefreq>monthly</changefreq><priority>1</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/about</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/articles</loc><changefreq>weekly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/choose-city</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/choose-style</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/articles/skolko-po-vremeni-nabivaetsya-tatu</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/articles/mytattoo-luchshij-servis-dlya-vybor-tatu-mastera</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/articles/nanesenie-tatuirovok-opasnye-posledstviya-dlya-zdorovya</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/articles/znachenie-yaponskih-tatu</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>`;

const replaceTo = `<url><loc>https://mytattoo.com.ua/</loc><changefreq>monthly</changefreq><priority>1</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua</loc><changefreq>monthly</changefreq><priority>1</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/about</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/about</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/articles</loc><changefreq>weekly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/articles</loc><changefreq>weekly</changefreq><priority>0.8</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/choose-city</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/choose-city</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/choose-style</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>
<url><loc>https://mytattoo.com.ua/ua/choose-style</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>undefined</lastmod></url>`;

const fixSiteMaps = async () => {
  fs.readFile('./public/sitemap.xml', (err, data) => {
    const siteMap = data.toString().replace(new RegExp(toExclude, 'g'), replaceTo);

    // fs.writeFile('./public/sitemap-ua.xml', siteMap.replace(/\/ru\//gi, '/ua/').replace(new RegExp(toExclude, 'g'), ''), () => {
    //   //
    // });
    fs.writeFile('./public/sitemap.xml', siteMap.replace(/\/ru\//gi, '/'), () => {
      //
    });
  });
}

fixSiteMaps();
