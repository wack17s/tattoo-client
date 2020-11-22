import * as React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { NextPageContext } from 'next';

import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useCity } from '../../hooks/useCity';
import { useStyles } from '../../hooks/useStyles';
import { useTattooer } from '../../hooks/useTattooer';
import { ITattooerDTO } from '../../dto/tattooer.dto';
import { encodeQueryData } from '../../utils/encodeQueryData';
import { fetcher } from '../../utils/fetcher';

import tattooers from '../../parameters/tattooers.json';

import { Filters } from './components/Filters'
import { TattooerCard } from './components/TattooerCard'

interface ITattooerProps {
  tattooer: ITattooerDTO | null;
}

const previewSize = 276;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;

  justify-content: center;

  & > img {
    margin: 0px 16px 32px 16px;
  }
`;

const PreviewImage = styled.img`
  width: ${previewSize}px;
  height: ${previewSize}px;

  border-radius: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  width: ${previewSize}px;
  height: 500px;
  margin: 32px 16px;
  flex-direction: column;
  padding: 24px;

`;

const Title = styled.p`
  font-weight: 600;
  /* transform: scale(0.885, 0.645) translate(0, -30px); */
`;

const Text = styled.p`
  /* transform: scale(0.885, 0.645) translate(0, -30px); */
  margin: 16px 0;
`;

export const Tattooer: React.StatelessComponent<ITattooerProps> = ({ tattooer }) => {
  return tattooer ? (
    <Body logoUri='../logo.png' innerContainerStyle={{ margin: 0 }} selectedButton={HeaderMenuButton.TATTOOERS}>
      <Container>
        <InfoContainer>
          <Title>{tattooer.instagram}</Title>
          <Text>{tattooer.city}</Text>
          <Title>Описание</Title>
          <Text>{tattooer.about}</Text>
          {tattooer.styles && tattooer.styles.length ? (
            <>
              <Title>Стили</Title>
              <Text>{tattooer.styles}</Text>
            </>
          ) : null}
        </InfoContainer>
        <CardsContainer>
          {tattooer && tattooer.postURIs && tattooer.postURIs.length ? tattooer.postURIs.map(src => <PreviewImage key={src} src={src} />) : null}
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
