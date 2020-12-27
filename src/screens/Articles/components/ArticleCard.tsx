import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import { Text } from '../../../components/Text';

interface IArticleCardProps {
  name: string;
  placeholder: string;
  id: string;
  imageUri: string;
}

const CARD_SIZE = 378;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;

  @media (max-width: 1364px) {
    width: 44%;
  }

  @media (max-width: 1050px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 16px 24px;
  width: 100%;
  height: 120px;
  border-radius: 0px 0px 8px 8px;
`;

const Title = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;

  @media (max-width: 720px) {
    font-size: 15px;
  }
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
  height: 250px;
  width: 100%;
`;

export const ArticleCard: React.FunctionComponent<IArticleCardProps> = ({ name, placeholder, id, imageUri }) => {
  return (
    <Link href="/articles/[id]" as={`articles/${id}`}>
      <Wrapper>
        <Container>
          <Image src={imageUri} />
          <TextContainer>
            <Title h4>{name}</Title>
            <Description p1>{placeholder}</Description>
          </TextContainer>
        </Container>
      </Wrapper>
    </Link>
  );
}
