import styled from 'styled-components';
import { useRouter } from 'next/router'

import { getArticles } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'

import { ArticleCard } from './components/ArticleCard';
import { chooseTattooArticleData, myTattooArticleData, healthTattooArticleData, japaneseTattooArticleData } from '../../articles/types';
import { Tags } from '../../seo/Tags';

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > a {
    color: ${({ theme }) => theme.colors.BLACK_900};
  }
`;

const Title = styled(Text)`
  margin-top: 64px;

  @media (max-width: 720px) {
    margin-top: 24px;
  }
`;

const Description = styled(Text)`
  margin-top: 24px;
  margin-bottom: 48px;
  width: 40%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Articles = () => {
  const { locale } = useRouter();

  const articlesText = getArticles(locale);

  return (
    <Body selectedButton={HeaderMenuButton.ARTICLES}>
      <Tags hideUa />
      <Title h1>
        {articlesText.text.title}
      </Title>
      <Description>
        {articlesText.text.text}
      </Description>
      <CardsContainer>
        <ArticleCard
          id={chooseTattooArticleData.id}
          name={chooseTattooArticleData.name}
          placeholder={chooseTattooArticleData.placeholder}
          imageUri={chooseTattooArticleData.images.preview}
        />
        <ArticleCard
          id={myTattooArticleData.id}
          name={myTattooArticleData.name}
          placeholder={myTattooArticleData.placeholder}
          imageUri={myTattooArticleData.images.preview}
        />
        <ArticleCard
          id={healthTattooArticleData.id}
          name={healthTattooArticleData.name}
          placeholder={healthTattooArticleData.placeholder}
          imageUri={healthTattooArticleData.images.preview}
        />
        <ArticleCard
          id={japaneseTattooArticleData.id}
          name={japaneseTattooArticleData.name}
          placeholder={japaneseTattooArticleData.placeholder}
          imageUri={japaneseTattooArticleData.images.preview}
        />
      </CardsContainer>
    </Body>
  )
}
