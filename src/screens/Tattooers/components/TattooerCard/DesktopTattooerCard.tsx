import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import { MasterInfoHeader } from '../../../../components/MasterInfoHeader';

interface IDesktopTattooerCardProps {
  postURIs: string[];
  currentImage: string;
  setCurrentImage: (currentImage: string) => void;
  city?: string;
  instagram: string;
}

const previewSize = 276;
const fullImageSize = 308;
const TextContainerHeight = 66;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${previewSize}px;
  height: ${previewSize}px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: white;

  @media (max-width: 720px) {
    display: none;
  }
`;

const PreviewImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;
  border-radius: 8px;
  object-fit: scale-down;
  ${Container}:hover & {
    display: none;
  }
`;

const TextContainer = styled.div`
  background-color: white;
  padding: 8px 16px;
  height: ${TextContainerHeight}px;
  border-radius: 0px 0px 8px 8px;
`;

const FullCard = styled.div`
  width: ${fullImageSize}px;
  height: ${fullImageSize + TextContainerHeight}px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-direction: column;
  display: none;
  margin-bottom: ${(previewSize - (fullImageSize + TextContainerHeight * 2)) / 2}px;
  margin-left: ${(previewSize - fullImageSize) / 2}px;
  position: absolute;
  border-radius: 8px;
  background: white;
  ${Container}:hover & {
    display: flex;
  }
`;

const FullImage = styled.img`
  width: ${fullImageSize}px;
  height: ${fullImageSize}px;
  border-radius: 8px 8px 0px 0px;
  object-fit: scale-down;
`;

const ImageSelectContainer = styled.div`
  display: flex;
  width: ${fullImageSize}px;
  height: ${fullImageSize}px;
  flex-direction: row;
  position: absolute;
`;

const ImageSelectItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImageSelectItemBottom = styled.div`
  display: flex;
  background: #FFFFFF;
  height: 6px;
  opacity: 0.5;
  ${ImageSelectItem}:hover & {
    height: 8px;
    opacity: 0.8;
  }
`;


export const DesktopTattooerCard: React.FunctionComponent<IDesktopTattooerCardProps> = ({ postURIs, currentImage, setCurrentImage, city, instagram }) => {
  return (
    <Link href="/[superslug]" as={`${instagram}`}>
      <Container>
        {currentImage && <PreviewImage src={currentImage} />}
        <FullCard>
          <FullImage src={currentImage} />
          <ImageSelectContainer>
            {postURIs.map(item => (
              <ImageSelectItem key={item} onMouseEnter={() => { setCurrentImage(item); }}>
                <ImageSelectItemBottom />
              </ImageSelectItem>
            )).slice(0, Math.min(postURIs.length, 4))}
          </ImageSelectContainer>
          <TextContainer>
            <MasterInfoHeader city={city} instagram={instagram} instagramIconUri='instagram.svg' />
            {/* <Title>{tattooer.instagram}</Title>
            {cities.find(item => item.id === tattooer.city) ? <Text>{cities.find(item => item.id === tattooer.city)[locale]}</Text> : null} */}
          </TextContainer>
        </FullCard>
      </Container>
    </Link>
  )
}
