import styled from 'styled-components';
import { useRouter } from 'next/router'

import { getArticles } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'

import { ArticleCard } from './components/ArticleCard';
import { ChooseTattooId, ChooseTattooName, ChooseTattooPlaceholder } from '../../articles/ChooseTattoo/params';

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0px 26px 32px 0px;

    @media (max-width: 720px) {
      margin: 0px 0px 8px 0px;
    }
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
      <Title h1>
        {articlesText.text.title}
      </Title>
      <Description>
        {articlesText.text.text}
      </Description>
      <CardsContainer>
        <ArticleCard id={ChooseTattooId} name={ChooseTattooName} placeholder={ChooseTattooPlaceholder} />
      </CardsContainer>
    </Body>
  )
}
