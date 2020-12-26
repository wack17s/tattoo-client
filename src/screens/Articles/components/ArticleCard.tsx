import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import { Text } from '../../../components/Text';

interface IArticleCardProps {
  name: string;
  placeholder: string;
  id: string;
}

const CARD_SIZE = 380;

const Container = styled.div`
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 24px;
  padding-top: 16px;
  width: 100%;
  height: 150px;
  border-radius: 0px 0px 8px 8px;
`;

const Title = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

const Description = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  height: 230px;
  width: 100%;
`;

export const ArticleCard: React.FunctionComponent<IArticleCardProps> = ({ name, placeholder, id }) => {
  return (
    <Link href="/articles/[id]" as={`articles/${id}`}>
      <Container>
        <Image src='./logo.png' />
        <TextContainer>
          <Title h4>{name}</Title>
          <Description p1>{placeholder}</Description>
        </TextContainer>
      </Container>
    </Link>
  );
}
