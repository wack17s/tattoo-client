import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import { MasterInfoHeader } from '../../../../components/MasterInfoHeader';
import { ImageWrapper, PLACEHOLDER_SRC } from '../../../../components/ImageWrapper';

interface IDesktopTattooerCardProps {
  postURIs: string[];
  currentImage: string;
  setCurrentImage: (currentImage: string) => void;
  city?: string;
  instagram: string;
  profilePic?: string;
}

const previewSize = 276;
const fullImageSize = 308;
const TextContainerHeight = 66;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: ${previewSize}px;
//   height: ${previewSize}px;

//   @media (max-width: 720px) {
//     display: none;
//   }

//   @media (max-width: 1360px) {
//     width: 30%;
//   }

//   @media (max-width: 1088px) {
//     width: 44%;
//   }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${previewSize}px;
  height: ${previewSize}px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: white;
  cursor: pointer;

  @media (max-width: 720px) {
    display: none;
  }
`;

const PreviewImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.BLACK_200};
  object-fit: ${({ src }) => src === PLACEHOLDER_SRC ? 'scale-down' : 'cover'};

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
  margin-top: ${((fullImageSize + TextContainerHeight * 2) - previewSize) / 2}px;
  margin-left: ${(previewSize - fullImageSize) / 2}px;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  ${Container}:hover & {
    display: flex;
  }
`;

const FullImage = styled.img`
  width: ${fullImageSize}px;
  height: ${fullImageSize}px;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.BLACK_200};
  object-fit: ${({ src }) => src === PLACEHOLDER_SRC ? 'scale-down' : 'cover'};
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
  background-color: #FFFFFF;
  height: 6px;
  opacity: 0.5;
  ${ImageSelectItem}:hover & {
    height: 8px;
    opacity: 0.8;
  }
`;


export const DesktopTattooerCard: React.FunctionComponent<IDesktopTattooerCardProps> = ({ postURIs, currentImage, setCurrentImage, city, instagram, profilePic }) => {
  return (
    <Link href="/[superslug]" as={`${instagram}`}>
      {/* <Wrapper> */}
        <Container>
          <ImageWrapper
            uri={currentImage}
            renderComponent={({ src, onError }) => <PreviewImage src={src} onError={onError} />}
          />
          <FullCard>
            <ImageWrapper
              uri={currentImage}
              renderComponent={({ src, onError }) => <FullImage src={src} onError={onError} />}
            />
            <ImageSelectContainer>
              {postURIs.map(item => (
                <ImageSelectItem key={item} onMouseEnter={() => { setCurrentImage(item); }}>
                  <ImageSelectItemBottom />
                </ImageSelectItem>
              )).slice(0, Math.min(postURIs.length, 4))}
            </ImageSelectContainer>
            <TextContainer>
              <MasterInfoHeader profileIconUri={profilePic} city={city} instagram={instagram} instagramIconUri={`${process.env.NEXT_PUBLIC_HOST}/instagram.svg`} />
            </TextContainer>
          </FullCard>
        </Container>
      {/* </Wrapper> */}
    </Link>
  )
}
