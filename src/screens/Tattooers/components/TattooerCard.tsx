import * as React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';

import { MasterInfoHeader } from '../../../components/MasterInfoHeader';
import { ITattooerDTO } from '../../../dto/tattooer.dto';
import { cities } from '../../../cities';

interface ITattooerCardProps {
  tattooer: ITattooerDTO;
}

const previewSize = 276;
const fullImageSize = 308;
const TextContainerHeight = 66;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  justify-content: flex-end;
  width: ${previewSize}px;
  height: ${previewSize}px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const PreviewImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;

  border-radius: 8px;

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

  flex-direction: column;

  display: none;

  margin-bottom: ${(previewSize - (fullImageSize + TextContainerHeight * 2)) / 2}px;
  margin-left: ${(previewSize - fullImageSize) / 2}px;

  position: absolute;

  ${Container}:hover & {
    display: flex;
  }
`;

const FullImage = styled.img`
  width: ${fullImageSize}px;
  height: ${fullImageSize}px;

  border-radius: 8px 8px 0px 0px;
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


export const TattooerCard: React.StatelessComponent<ITattooerCardProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  const postURIs = tattooer.postURIs || [];

  const previewImage = postURIs[0];

  const [currentImage, setCurrentImage] = React.useState(previewImage);

  return tattooer ? (
    <Link href="/tattooers/[instagram]" as={`tattooers/${tattooer.instagram}`}>
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
            <MasterInfoHeader city={cities.find(item => item.id === tattooer.city) ? cities.find(item => item.id === tattooer.city)[locale] : undefined} instagram={tattooer.instagram} instagramIconUri='instagram.svg' />
            {/* <Title>{tattooer.instagram}</Title>
            {cities.find(item => item.id === tattooer.city) ? <Text>{cities.find(item => item.id === tattooer.city)[locale]}</Text> : null} */}
          </TextContainer>
        </FullCard>
      </Container>
    </Link>
  ) : null;
}
