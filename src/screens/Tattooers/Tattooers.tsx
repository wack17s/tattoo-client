import * as React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { NextPageContext } from 'next';

import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useCity } from '../../hooks/useCity';
import { useStyles } from '../../hooks/useStyles';
import { useTattooers } from '../../hooks/useTattooers';
import { ITattooerDTO } from '../../dto/tattooer.dto';
import { encodeQueryData } from '../../utils/encodeQueryData';
import { fetcher } from '../../utils/fetcher';

import tattooers from '../../parameters/tattooers.json';

import { Filters } from './components/Filters'
import { TattooerCard } from './components/TattooerCard'

interface ITattooersProps {
  tattooers: ITattooerDTO[];
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;

  & > div {
    margin: 0px 16px 32px 16px;
  }
`;

export const Tattooers: React.StatelessComponent<ITattooersProps> = ({ tattooers }) => {
  const [selectedCity, setCity] = useCity();
  const [selectedStyles, selectStyle] = useStyles();

  let tatts = [...tattooers];

  if (selectedCity) {
    tatts = [...tatts.filter(item => item.city === selectedCity.id)];
  }

  if (selectedStyles && selectedStyles.length) {
    tatts = [...tatts.filter(item => {
      return item.styles && item.styles.length && item.styles.some(style => selectedStyles.some(item => item.id === style))
    })];
  }

  return (
    <Body innerContainerStyle={{ margin: 0 }} selectedButton={HeaderMenuButton.TATTOOERS} headerFooter={<Filters onStyle={selectStyle} onCity={setCity} selectedStyles={selectedStyles} selectedCity={selectedCity} />}>
      <CardsContainer>
        {tatts && tatts.length ? tatts.map(item => <TattooerCard key={item.instagram} tattooer={item} />) : null}
      </CardsContainer>
    </Body>
  )
}

export async function getStaticProps(context: NextPageContext) {
  // const res = await fetch('http://localhost:3001/tattooers', { method: 'GET', headers: { 'Content-Type': 'application/json' } });

  return {
    props: {
      tattooers
    }
  }
}
