import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

interface IArticleCardProps {
  name: string;
  placeholder: string;
  id: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  justify-content: flex-end;
  width: 370px;
  height: 480px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 20px;
  width: 370px;
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

export const ArticleCard: React.FunctionComponent<IArticleCardProps> = ({ name, placeholder, id }) => {
  return (
    <Link href="/articles/[id]" as={`articles/${id}`}>
      <Container>
        <TextContainer>
          <Title>{name}</Title>
          <Text>{placeholder}</Text>
        </TextContainer>
      </Container>
    </Link>
  );
}
