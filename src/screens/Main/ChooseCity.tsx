import { NextPage } from 'next';
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getSortedCities } from '../../utils/getSortedCities';
import { getChooseCity, getPageNames } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Chip } from '../../components/Chip';
import { Button } from '../../components/Button';
import { BreadCrumb } from '../../components/BreadCrumb';
import { PageName } from '../../types/pageName.enum';
import { useCity } from '../../hooks/useCity';

import { Image, InnerContainer, Container, ChipsContainer } from './components';

export const ChooseCity: NextPage = () => {
  const { locale } = useRouter();

  const chooseCity = getChooseCity(locale);
  const pageNames = getPageNames(locale);

  const [selectedCity, setCity] = useCity();

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Container>
        <InnerContainer>
          <BreadCrumb pageNames={[pageNames[PageName.MAIN], chooseCity.name]} />
          <Text style={{ marginTop: 16 }} subTitle>{chooseCity.text.title}</Text>
          <Text style={{ marginTop: 16, marginBottom: 48 }}>{chooseCity.text.text}</Text>
          <ChipsContainer>
            {getSortedCities(locale).map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedCity && selectedCity[locale] === item[locale]} onClick={setCity.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </ChipsContainer>
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
