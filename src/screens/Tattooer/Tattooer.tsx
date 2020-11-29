import * as React from 'react';
import styled from 'styled-components';
import lo from 'lodash';
import { useRouter } from 'next/router';

import { Body } from '../../components/Body'
import { BreadCrumb } from '../../components/BreadCrumb'
import { HeaderMenuButton } from '../../components/Header'
import { MasterInfoHeader } from '../../components/MasterInfoHeader'
import { Text } from '../../components/Text'
import { ITattooerDTO } from '../../dto/tattooer.dto';
import { PageName } from '../../types/pageName.enum';
import { getPageNames } from '../../utils/getLocalizedText';

import tattooers from '../../parameters/tattooers.json';

interface ITattooerProps {
  tattooer: ITattooerDTO | null;
}

const previewSize = 276;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BreadCrumbContainer = styled.div`
  margin: 40px 0px 0px 16px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;

  & > img {
    margin: 0px 16px 32px 16px;
  }
`;

const PreviewImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;

  border-radius: 8px;

  /* & :hover {
    transform: scale(1.5, 1.5);
  } */
`;

const InfoContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  width: ${previewSize}px;
  max-height: ${previewSize * 2 + 32}px;
  margin: 32px 16px;
  flex-direction: column;
  padding: 24px;
`;

const Divider = styled.div`
  opacity: 0.1;
  border-bottom: 0.5px solid #000000;
  width: 100%;

  margin: 24px 0px;
`;

const textStyle = {
  marginTop: 8,
  marginBottom: 24,
};

export const Tattooer: React.StatelessComponent<ITattooerProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  const pageNames = getPageNames(locale);

  return tattooer ? (
    <Body logoUri='../logo.png' innerContainerStyle={{ margin: 0 }} selectedButton={HeaderMenuButton.TATTOOERS}>
      <BreadCrumbContainer>
        <BreadCrumb pageNames={[pageNames[PageName.TATTOOERS], `${tattooer.instagram}`]} />
      </BreadCrumbContainer>
      <Container>
        <InfoContainer>
          <MasterInfoHeader city={tattooer.city} instagram={tattooer.instagram} instagramIconUri='../instagram.svg' />
          <Divider />
          <Text p5>Описание</Text>
          <Text style={textStyle} p1>{tattooer.about}</Text>
          {tattooer.styles && tattooer.styles.length ? (
            <>
              <Text p5>Стиль</Text>
              <Text style={textStyle} p1>{tattooer.styles.map(item => lo.capitalize(item)).join(', ')}</Text>
            </>
          ) : null}
        </InfoContainer>
        <CardsContainer>
          {tattooer && tattooer.postURIs && tattooer.postURIs.length ? tattooer.postURIs.map(src => <PreviewImage key={src} src={src} />).slice(0,5) : null}
        </CardsContainer>
      </Container>
    </Body>
  ) : null;
}

export async function getStaticProps(context) {
  // const res = await fetch('http://localhost:3001/tattooers', { method: 'GET', headers: { 'Content-Type': 'application/json' } });

  console.log('context', context)

  return {
    props: {
      tattooer: context.params.id ? tattooers.find(item => item.instagram === context.params.id) : null
    }
  }
}
