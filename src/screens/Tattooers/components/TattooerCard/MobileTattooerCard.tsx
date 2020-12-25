import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import { MasterInfoHeader } from '../../../../components/MasterInfoHeader';

interface IMobileTattooerCardProps {
  postURIs: string[];
  city?: string;
  instagram: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 292px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: white;

  @media (min-width: 720px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 4px;
  padding-top: 4px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Image = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 6px;
  margin-right: 4px;
  object-fit: scale-down;
  display: inline;
`;

const TextContainer = styled.div`
  padding: 8px 16px;
`;

export const MobileTattooerCard: React.FunctionComponent<IMobileTattooerCardProps> = ({ postURIs, city, instagram }) => {
  return (
    <Link href="[instagram]" as={`${instagram}`}>
      <Container>
        <ImageContainer>
          {postURIs.map(item => <Image src={item} key={`img_${item}`} />)}
        </ImageContainer>
        <TextContainer>
          <MasterInfoHeader city={city} instagram={instagram} instagramIconUri='instagram.svg' />
        </TextContainer>
      </Container>
    </Link>
  )
}
