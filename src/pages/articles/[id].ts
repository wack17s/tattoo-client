import { Article, getStaticProps } from '../../screens/Article';

import { ChooseTattooId } from '../../articles/ChooseTattoo/params'

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: ChooseTattooId
      }
    }],
    fallback: true,
  }
}

export default Article;
