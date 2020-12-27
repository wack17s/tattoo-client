import * as React from 'react';
import styled from 'styled-components';
import lo from 'lodash';
import { useRouter } from 'next/router';
import linkify from 'linkifyjs/html';
import Head from 'next/head'

import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { BreadCrumb } from '../../components/BreadCrumb'
import { MasterInfoHeader } from '../../components/MasterInfoHeader'
import { Text } from '../../components/Text'
import { PageName } from '../../types/pageName.enum';
import { getPageNames, getTattooer } from '../../utils/getLocalizedText';
import { ITattooer } from '../../types/tattooer';
import { Button } from '../../components/Button';
import { telify } from '../../utils/telify';

import { ImageWrapper, PLACEHOLDER_SRC } from '../../components/ImageWrapper';

interface ITattooerProps {
  tattooer: ITattooer | null;

  descriptionTag?: string;
  titleTag?: string;
}

const previewSize = 276;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 140px;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 0 8px;
  }
`;

const BreadCrumbContainer = styled.div`
  margin: 120px 0px 0px 16px;
  position: fixed;
  background: ${({ theme }) => theme.colors.BACKGROUND};
  padding: 4px;
  border-radius: 4px;

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

  margin-left: 300px;

  @media (max-width: 720px) {
    flex-wrap: nowrap;
    margin-top: 80px;
    margin-bottom: 24px;
    overflow: scroll;
    width: 100%;
    margin-left: 0;

    & > img {
      margin: 0px 16px 0px 0px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  width: ${previewSize}px;
  margin: 32px 16px;
  flex-direction: column;
  padding: 24px;

  position: fixed;

  @media (max-width: 720px) {
    position: initial;
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

const Description = styled(Text) `
  margin-top: 8px;
  margin-bottom: 24px;
`;

const DescriptionText = styled.div`
  a {
    color: ${({ theme }) => theme.colors.CORAL_500};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;
  background: ${({ theme }) => theme.colors.BLACK_100};

  border-radius: 8px;
  object-fit: ${({ src }) => src === PLACEHOLDER_SRC ? 'scale-down' : 'cover'};
  background: white;

  @media (max-width: 720px) {
    width: 85%;
    height: 327px;
  }
`;

export const Tattooer: React.FunctionComponent<ITattooerProps> = ({ tattooer, titleTag, descriptionTag }) => {
  const { locale, push, reload, back } = useRouter();

  const pageNames = getPageNames(locale);
  const tattooerLocales = getTattooer(locale);

  const breadCrumbs = [
    {
      label: pageNames[PageName.TATTOOERS],
      onPress: () => {
        push('/tattooers');
      }
    },
    {
      label: `${tattooer.instagram}`,
      onPress: () => {
        reload();
      }
    },
  ];

  return tattooer ? (
    <Body selectedButton={HeaderMenuButton.TATTOOERS} logoUri='../logo.png' innerContainerStyle={{ margin: 0 }}>
      <Head>
        <title>{titleTag}</title>
        <meta name="description" content={descriptionTag} />
      </Head>
      <BreadCrumbContainer>
        <BreadCrumb items={breadCrumbs} />
      </BreadCrumbContainer>
      <Container>
        <InfoContainer>
          <MasterInfoHeader small profileIconUri={tattooer.profilePic} city={tattooer.city ? tattooer.city[locale] : undefined} instagram={tattooer.instagram} instagramIconUri='instagram.svg' />
          <Divider />
          <Text p5>{tattooerLocales.text.description}</Text>
          <Description p1>
            <DescriptionText dangerouslySetInnerHTML={{
              __html: telify(linkify(tattooer.about || '', {
                defaultProtocol: 'https'
              }))
            }} />
          </Description>
          {tattooer.styles && tattooer.styles.length ? (
            <>
              <Text p5>{tattooerLocales.text.style}</Text>
              <Description p1>{tattooer.styles.map(item => lo.capitalize(item.en)).join(', ')}</Description>
            </>
          ) : null}
          <a style={{ textDecoration: 'none' }} href={`https://instagram.com/${tattooer.instagram}`} target="_blank">
            <Button style={{ width: '100%' }}>
              {tattooerLocales.text.contact}
            </Button>
          </a>
        </InfoContainer>
        <CardsContainer>
          {tattooer && tattooer.posts && tattooer.posts.length ? tattooer.posts.map(post => (
            <ImageWrapper
              key={post.uri}
              uri={post.uri}
              renderComponent={({ src, onError }) => <StyledImage src={src} onError={onError} />}
            />
          )) : null}
        </CardsContainer>
      </Container>
    </Body>
  ) : null;
}
