import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MasterInfoHeader } from '../../../../components/MasterInfoHeader';
import { ImageWrapper, PLACEHOLDER_SRC } from '../../../../components/ImageWrapper';

interface IMobileTattooerCardProps {
  postURIs: string[];
  city?: string;
  instagram: string;
  profilePic?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: white;
  justify-content: flex-end;

  @media (min-width: 721px) {
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

const StyledImage = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 6px;
  margin-right: 4px;
  object-fit: cover;
  display: inline;

  background-color: ${({ theme }) => theme.colors.BLACK_200};
  object-fit: ${({ src }) => src === PLACEHOLDER_SRC ? 'scale-down' : 'cover'};
`;

const TextContainer = styled.div`
  padding: 8px 16px;
`;

export const MobileTattooerCard: React.FunctionComponent<IMobileTattooerCardProps> = ({ postURIs, city, instagram, profilePic }) => {
  return (
    <Link href="/[instagram]" as={`${instagram}`}>
      <Container>
        <ImageContainer>
          {postURIs.map(item => (
            <ImageWrapper
              key={`img_${item}`}
              uri={item}
              renderComponent={({ src, onError }) => (
                <StyledImage src={src} onError={onError} />
              )}
            />
          ))}
        </ImageContainer>
        <TextContainer>
          <MasterInfoHeader profileIconUri={profilePic} city={city} instagram={instagram} instagramIconUri='instagram.svg' />
        </TextContainer>
      </Container>
    </Link>
  )
}
