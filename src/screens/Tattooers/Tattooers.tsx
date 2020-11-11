import * as React from 'react';
import styled from 'styled-components';

import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useCity } from '../../hooks/useCity';
import { useStyles } from '../../hooks/useStyles';
import { useTattooers } from '../../hooks/useTattooers';

import { Filters } from './components/Filters'
import { TattooerCard } from './components/TattooerCard'

interface ITattooersProps {
  // tattooers: ITattooerDTO[];
}

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;

  & > div {
    margin: 0px 16px 32px 16px;
  }
`;

export const Tattooers: React.StatelessComponent<ITattooersProps> = () => {
  const [selectedCity, setCity] = useCity();
  const [selectedStyles, selectStyle] = useStyles();

  const { tattooers } = useTattooers(selectedCity ? selectedCity.en : undefined, selectedStyles ? selectedStyles.map(item => item.en) : undefined);

  return (
    <Body selectedButton={HeaderMenuButton.TATTOOERS} headerFooter={<Filters onStyle={selectStyle} onCity={setCity} selectedStyles={selectedStyles} selectedCity={selectedCity} />}>
      <CardsContainer>
        {tattooers && tattooers.length ? tattooers.map(item => <TattooerCard tattooer={item} />) : null}
        {tattooers && tattooers.length ? tattooers.map(item => <TattooerCard tattooer={item} />) : null}
      </CardsContainer>
    </Body>
  )
}

export async function getServerSideProps() {
  // await initializeApp({
  //   credential: credential.cert({
  //     privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  //     projectId: process.env.GOOGLE_PROJECT_ID,
  //     clientEmail: process.env.GOOGLE_CLIENT_EMAIL
  //   })
  // });

  // const tattooers = await tattooersService.findAll();

  return {
    props: {
      // tattooers: JSON.stringify(tattooers)
    },
  }
}
