import * as React from 'react';
import styled from 'styled-components';
import { NextPageContext } from 'next';

import { tattooerService } from '../../services/tattooer.service';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useSelectedCity } from '../../hooks/useSelectedCity';
import { useSelectedStyles } from '../../hooks/useSelectedStyles';

import { Filters } from './components/Filters'
import { TattooerCard } from './components/TattooerCard'
import { ITattooer } from '../../types/tattooer';

interface ITattooersProps {
  tattooers: ITattooer[];
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

  @media (max-width: 720px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 24px;
    padding: 0 8px;

    & > div {
      margin: 0px 0px 8px 0px;
    }
  }
`;

export const Tattooers: React.FunctionComponent<ITattooersProps> = ({ tattooers }) => {
  const [selectedCity, setCity] = useSelectedCity();
  const [selectedStyles, selectStyle] = useSelectedStyles();

  let tatts = [...tattooers];

  if (selectedCity) {
    tatts = [...tatts.filter(item => item.city && item.city.id === selectedCity.id)];
  }

  if (selectedStyles && selectedStyles.length) {
    tatts = [...tatts.filter(item => {
      return item.styles && item.styles.length && item.styles.some(style => selectedStyles.some(item => item.id === style.id))
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
  const tattooers = await tattooerService.getTattooers();

  return {
    props: {
      tattooers
    }
  }
}
