import * as React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';

import { ITattooerDTO } from '../../../dto/tattooer.dto';

interface ITattooerCardProps {
  tattooer: ITattooerDTO;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  justify-content: flex-end;
  width: 276px;
  height: 276px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & :hover {
    transform: scale(1.115, 1.355) translate(0, 30px);
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding: 20px;
  /* width: 378px; */
  height: 66px;
  border-radius: 0px 0px 8px 8px;
  display: none;

  ${Container}:hover & {
    display: flex;
  }
`;

const Title = styled.p`
  font-weight: 600;
  transform: scale(0.885, 0.645) translate(0, -30px);
`;

const Text = styled.p`
  transform: scale(0.885, 0.645) translate(0, -30px);
`

export const TattooerCard: React.StatelessComponent<ITattooerCardProps> = ({ tattooer }) => {
  return tattooer ? (
    // <Link href="/tattooers/[instagram]" as={`tattooers/${tattooer.instagram}`}>
      <Container>
        <TextContainer>
          <Title>{tattooer.id}</Title>
          <Text>{tattooer.city}</Text>
        </TextContainer>
      </Container>
    // </Link>
  ) : null;
}
