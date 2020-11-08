import * as React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';

import { IArticle } from '../../../types/article.interface';

interface ICardProps {
  article: IArticle;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  justify-content: flex-end;
  width: 378px;
  height: 480px;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 20px;
  width: 378px;
  height: 120px;
  border-radius: 0px 0px 8px 8px;
`;

const Title = styled.p`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Card: React.StatelessComponent<ICardProps> = ({ article }) => {
  const { locale } = useRouter();

  console.warn('article', locale, article)

  return article && article[locale] ? (
    <Link href="/articles/[id]" as={`articles/${article.id}`}>
      <Container>
        <TextContainer>
          <Title>{article[locale].name}</Title>
          <Text>{article[locale].text}</Text>
        </TextContainer>
      </Container>
    </Link>
  ) : null;
}
