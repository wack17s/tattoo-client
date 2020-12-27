import { Article, getStaticProps } from '../../screens/Article';

import { chooseTattooArticleData } from '../../articles/types'

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: chooseTattooArticleData.id
      }
    }],
    fallback: true,
  }
}

export default Article;
