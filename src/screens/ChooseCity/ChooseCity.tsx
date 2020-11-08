import { NextPage } from 'next';
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getSortedCities } from '../../utils/getSortedCities';
import { getChooseCity, getPageNames } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { Header, HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Chip } from '../../components/Chip';
import { Button } from '../../components/Button';
import { PagesMap } from '../../components/PagesMap';
import { PageName } from '../../types/pageName.enum';
import { useCity } from '../../hooks/useCity';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 445px;
  height: 475px;
`;

const CitiesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0px 10px 10px 0px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const ChooseCity: NextPage = () => {
  const { locale } = useRouter();

  const chooseCity = getChooseCity(locale);
  const pageNames = getPageNames(locale);

  const [selectedCity, setCity] = useCity();

  return (
    <Body>
      <Header selectedButton={HeaderMenuButton.MAIN} />
      <Container>
        <InnerContainer>
          <PagesMap pageNames={[pageNames[PageName.MAIN], chooseCity.name]} />
          <Text style={{ marginTop: 16 }} subTitle>{chooseCity.text.title}</Text>
          <Text style={{ marginTop: 16, marginBottom: 48 }}>{chooseCity.text.text}</Text>
          <CitiesContainer>
            {getSortedCities(locale).map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedCity && selectedCity[locale] === item[locale]} onClick={setCity.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </CitiesContainer>
          <Link href='choose-style' locale={locale}>
            <Button style={{ marginTop: 48 }}>
              {selectedCity ? chooseCity.text.chooseButton : chooseCity.text.button}
            </Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/croco.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
