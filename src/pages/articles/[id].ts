import { Article, getStaticProps } from '../../screens/Article';

import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../../articles/types'

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: chooseTattooArticleData.id } },
      { params: { id: myTattooArticleData.id } },
      { params: { id: healthTattooArticleData.id } },
      { params: { id: japaneseTattooArticleData.id } },
    ],
    fallback: true,
  }
}

export default Article;
