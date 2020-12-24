import * as React from 'react';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

// import { tattooerService } from '../../services/tattooer.service';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useSelectedStyles } from '../../hooks/useSelectedStyles';

import { Filters } from './components/Filters'
import { TattooerCard } from './components/TattooerCard'
import { ITattooer } from '../../types/tattooer';
import { ICity } from '../../types/city';
import { IStyle } from '../../types/style';
import { useSelectedCity } from '../../hooks/useSelectedCity';

interface ITattooersProps {
  cities: ICity[];
  styles: IStyle[];

  city?: ICity;

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

export const Tattooers: React.FunctionComponent<ITattooersProps> = ({ tattooers, city, styles, cities }) => {
  const { push } = useRouter();

  const [selectedStyles, selectStyle, removeStyles] = useSelectedStyles();

  const onCity = (city: ICity) => {
    removeStyles();
    push(city ? city.name : 'tattooers');
  }

  let tatts = [...tattooers];

  if (selectedStyles && selectedStyles.length) {
    tatts = [...tatts.filter(item => {
      return item.styles && item.styles.length && item.styles.some(style => selectedStyles.some(item => item.id === style.id))
    })];
  }

  return (
    <Body
      innerContainerStyle={{ margin: 0 }}
      selectedButton={HeaderMenuButton.TATTOOERS}
      headerFooter={(
        <Filters
          onStyle={selectStyle}
          onCity={onCity}
          selectedStyles={selectedStyles}
          selectedCity={city}
          cities={cities}
          styles={styles}
        />
      )}
    >
      <CardsContainer>
        {tatts && tatts.length ? tatts.map(item => <TattooerCard key={item.instagram} tattooer={item} />) : null}
      </CardsContainer>
    </Body>
  )
}
