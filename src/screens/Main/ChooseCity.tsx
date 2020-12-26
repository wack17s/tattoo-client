import { NextPage } from 'next';
import * as React from 'react';
// import Link from 'next/link';
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
import { dataService } from '../../services/data.service';
import { ICity } from '../../types/city';

import { Image, InnerContainer, Container, ChipsContainer } from './components';
import { ITattooer } from '../../types/tattooer';
import { IStyle } from '../../types/style';

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

interface IChooseCityProps {
  cities?: ICity[];
  styles: IStyle[];
  tattooers: ITattooer[];
}

export const ChooseCity: NextPage<IChooseCityProps> = ({ cities, styles, tattooers }) => {
  const { locale, push, reload } = useRouter();

  const chooseCity = getChooseCity(locale);
  const pageNames = getPageNames(locale);

  const [selectedCity, setCity] = useSelectedCity();

  const [cityPickerOpen, setCityPickerOpen] = React.useState(false);

  const navigate = async () => {
    const filteredTattooers = tattooers.filter(item => !selectedCity || item.city_id === selectedCity.id);
    const filteredStyles = styles.filter(style => 
      filteredTattooers.some(tattooer => tattooer.style_ids && tattooer.style_ids.includes(style.id))
    );

    if (filteredStyles.length) {
      push('choose-style')
    } else {
      push(selectedCity ? selectedCity.name : 'tattooers')
    }
  }

  const breadCrumbs = [
    {
      label: pageNames[PageName.MAIN],
      onPress: () => {
        push('/');
      }
    },
    {
      label: chooseCity.name,
      onPress: () => {
        reload();
      }
    },
  ];

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Container>
        <InnerContainer>
          <BreadCrumb items={breadCrumbs} />
          <Title h2>{chooseCity.text.title}</Title>
          <StyledText>{chooseCity.text.text}</StyledText>
          <ChipsContainer>
            {sortByLang(locale, cities).map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedCity && selectedCity[locale] === item[locale]} onClick={setCity.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </ChipsContainer>
          <CityPicker
            cities={cities}
            selectedCity={selectedCity ? selectedCity[locale] : undefined}
            open={cityPickerOpen} onCity={setCity}
            setOpen={setCityPickerOpen}
          />
          {/* <Link href={{ pathname: 'choose-style' }} locale={locale}> */}
            <StyledButton onClick={navigate}>
              {selectedCity ? chooseCity.text.chooseButton : chooseCity.text.button}
            </StyledButton>
          {/* </Link> */}
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/croco.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}

export async function getStaticProps() {
  await dataService.init();
  const { usedCities, usedStyles, allTattooers } = dataService.getData();

  return {
    props: JSON.parse(JSON.stringify({
      cities: usedCities,
      styles: usedStyles,
      tattooers: allTattooers
    }))
  }
}
