import { Article, getStaticProps } from '../../screens/Article';

import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../../articles/types'

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: chooseTattooArticleData.id }, locale: 'ua' },
      { params: { id: myTattooArticleData.id }, locale: 'ua' },
      { params: { id: healthTattooArticleData.id }, locale: 'ua' },
      { params: { id: japaneseTattooArticleData.id }, locale: 'ua' },
      { params: { id: chooseTattooArticleData.id }, locale: 'ru' },
      { params: { id: myTattooArticleData.id }, locale: 'ru' },
      { params: { id: healthTattooArticleData.id }, locale: 'ru' },
      { params: { id: japaneseTattooArticleData.id }, locale: 'ru' },
    ],
    fallback: false,
  }
}

export default Article;
