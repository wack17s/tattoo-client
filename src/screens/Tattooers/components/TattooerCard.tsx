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

  /* & :hover {
    transform: scale(1.115, 1.355) translate(0, 30px);
  } */
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
  /* flex-direction: column; */
  background-color: white;
  /* justify-content: center; */
  padding: 8px 16px;
  /* width: 378px; */
  height: ${TextContainerHeight}px;
  border-radius: 0px 0px 8px 8px;
`;

const Title = styled.p`
  font-weight: 600;
  /* transform: scale(0.885, 0.645) translate(0, -30px); */
`;

const Text = styled.p`
  /* transform: scale(0.885, 0.645) translate(0, -30px); */
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

export const TattooerCard: React.StatelessComponent<ITattooerCardProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  return tattooer ? (
    <Link href="/tattooers/[instagram]" as={`tattooers/${tattooer.instagram}`}>
      <Container>
        {tattooer.postURIs && tattooer.postURIs.length ? <PreviewImage src={tattooer.postURIs[0]} /> : null}
        <FullCard>
          <FullImage src={tattooer.postURIs[0]} />
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
