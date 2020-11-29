import styled from 'styled-components';
import { useRouter } from 'next/router'

import { articles } from '../../articles'
import { getArticles } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'

import { ArticleCard } from './components/ArticleCard';

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0px 26px 32px 0px;
  }
`;

export const Articles = () => {
  const { locale } = useRouter();

  const articlesText = getArticles(locale);

  return (
    <Body selectedButton={HeaderMenuButton.ARTICLES}>
      <Text h1 style={{ marginTop: 64 }}>
        {articlesText.text.title}
      </Text>
      <Text style={{ marginBottom: 48, marginTop: 24, width: '40%' }}>
        {articlesText.text.text}
      </Text>
      <CardsContainer>
        {articles.map(article => <ArticleCard article={article} />)}
      </CardsContainer>
    </Body>
  )
}
