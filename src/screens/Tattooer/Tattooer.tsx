import * as React from 'react';
import styled from 'styled-components';
import lo from 'lodash';
import { useRouter } from 'next/router';

import { Body } from '../../components/Body'
import { BreadCrumb } from '../../components/BreadCrumb'
import { HeaderMenuButton } from '../../components/Header'
import { MasterInfoHeader } from '../../components/MasterInfoHeader'
import { Text } from '../../components/Text'
import { PageName } from '../../types/pageName.enum';
import { getPageNames } from '../../utils/getLocalizedText';
import { ITattooer } from '../../types/tattooer';

interface ITattooerProps {
  tattooer: ITattooer | null;
}

const previewSize = 276;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 0 8px;
  }
`;

const BreadCrumbContainer = styled.div`
  margin: 40px 0px 0px 16px;

  @media (max-width: 720px) {
    display: none;
  }
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

  @media (max-width: 720px) {
    flex-wrap: nowrap;
    margin-top: 16px;
    margin-bottom: 24px;
    overflow: scroll;
    width: 100%;

    & > img {
      margin: 0px 16px 0px 0px;
    }
  }
`;

const Image = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;

  border-radius: 8px;

  @media (max-width: 720px) {
    width: 85%;
    height: 327px;
  }
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


  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
  }
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

export const Tattooer: React.FunctionComponent<ITattooerProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  const pageNames = getPageNames(locale);

  return tattooer ? (
    <Body logoUri='../logo.png' innerContainerStyle={{ margin: 0 }} selectedButton={HeaderMenuButton.TATTOOERS}>
      <BreadCrumbContainer>
        <BreadCrumb pageNames={[pageNames[PageName.TATTOOERS], `${tattooer.instagram}`]} />
      </BreadCrumbContainer>
      <Container>
        <InfoContainer>
          <MasterInfoHeader city={tattooer.city ? tattooer.city[locale] : undefined} instagram={tattooer.instagram} instagramIconUri='../instagram.svg' />
          <Divider />
          <Text p5>Описание</Text>
          <Text style={textStyle} p1>{tattooer.about}</Text>
          {tattooer.styles && tattooer.styles.length ? (
            <>
              <Text p5>Стиль</Text>
              <Text style={textStyle} p1>{tattooer.styles.map(item => lo.capitalize(item.en)).join(', ')}</Text>
            </>
          ) : null}
        </InfoContainer>
        <CardsContainer>
          {tattooer && tattooer.posts && tattooer.posts.length ? tattooer.posts.map(post => <Image key={post.uri} src={post.uri} />) : null}
        </CardsContainer>
      </Container>
    </Body>
  ) : null;
}
