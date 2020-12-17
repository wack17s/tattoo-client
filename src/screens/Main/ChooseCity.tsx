import { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getChooseCity, getPageNames } from '../../utils/getLocalizedText';
import { sortByLang } from '../../utils/sortByLang';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { CityPicker } from '../../components/CityPicker'
import { Chip } from '../../components/Chip';
import { Button } from '../../components/Button';
import { BreadCrumb } from '../../components/BreadCrumb';
import { PageName } from '../../types/pageName.enum';
import { useSelectedCity } from '../../hooks/useSelectedCity';
// import { useTattooersQuery } from '../../hooks/useTattooersQuery';
import { useCities } from '../../hooks/useCities';

import { Image, InnerContainer, Container, ChipsContainer } from './components';

const StyledButton = styled(Button)`
  margin-top: 48px;

  @media (max-width: 720px) {
    margin-top: 38px;
  }
`;

const Title = styled(Text)`
  margin-top: 16px;
`;

const StyledText = styled(Text)`
  margin-top: 16px;
  margin-bottom: 48px;
`;

export const ChooseCity: NextPage = () => {
  const { locale } = useRouter();

  const chooseCity = getChooseCity(locale);
  const pageNames = getPageNames(locale);

  const [selectedCity, setCity] = useSelectedCity();
  const [cities] = useCities();

  const [cityPickerOpen, setCityPickerOpen] = React.useState(false);

  // const tattooerQuery = useTattooersQuery();

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Container>
        <InnerContainer>
          <BreadCrumb pageNames={[pageNames[PageName.MAIN], chooseCity.name]} />
          <Title h2>{chooseCity.text.title}</Title>
          <StyledText>{chooseCity.text.text}</StyledText>
          <ChipsContainer>
            {sortByLang(locale, cities).map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedCity && selectedCity[locale] === item[locale]} onClick={setCity.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </ChipsContainer>
          <CityPicker selectedCity={selectedCity ? selectedCity[locale] : undefined} open={cityPickerOpen} onCity={setCity} setOpen={setCityPickerOpen} />
          <Link href={{ pathname: 'choose-style' }} locale={locale}>
            <StyledButton>
              {selectedCity ? chooseCity.text.chooseButton : chooseCity.text.button}
            </StyledButton>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/croco.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
