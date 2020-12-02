
import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { ICity } from '../../../cities.types';
import { IStyle } from '../../../styles.types';
import { getTattooers } from '../../../utils/getLocalizedText';
import { Button } from '../../../components/Button';
import { Chip } from '../../../components/Chip';
import { CityPicker } from '../../../components/CityPicker';
import { Select } from '../../../components/Select';
import { getSortedStyles } from '../../../utils/getSortedStyles';
import { cities } from '../../../cities';

interface IFiltersProps {
  selectedCity?: ICity;
  selectedStyles?: IStyle[];

  onStyle: (style: IStyle) => void;
  onCity: (city?: ICity) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

const Title = styled.p`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 12px;

  @media (max-width: 720px) {
    display: none;
  }
`;

const StylesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin-right: 8px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const StyledSelect = styled(Select)`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Filters: React.StatelessComponent<IFiltersProps> = ({ selectedCity, selectedStyles, onCity, onStyle }) => {
  const { locale } = useRouter();

  const tattooers = getTattooers(locale);

  const allCitiesOption = { value: '999', label: tattooers.text.selectCityPlaceholder };

  const selectCity = ({ value }: { value: string; }) => {
    onCity(cities.find(item => item.id === value))
  }

  const citiesOptions = [allCitiesOption, ...cities.map(item => ({ value: item.id, label: item[locale] }))];

  const [cityPickerOpen, setCityPickerOpen] = React.useState(false);

  return (
    <Container>
      <InnerContainer>
        <Title>{tattooers.text.selectCity}</Title>
        <StyledSelect onChange={selectCity} value={selectedCity ? { value: selectedCity.id, label: selectedCity[locale] } : allCitiesOption} options={citiesOptions} />
        <Button onClick={() => { setCityPickerOpen(true); }}>
          {selectedCity ? selectedCity.en : 'Choose City'}
        </Button>
      </InnerContainer>
      <InnerContainer>
        <Title>{tattooers.text.selectStyle}</Title>
        <StylesContainer>
          {getSortedStyles().map(item => (
            <Chip key={`${item.id}_${item.en}`} selected={selectedStyles && selectedStyles.some(selectedStyle => selectedStyle.id === item.id)} onClick={onStyle.bind(null, item)}>{item[locale] || item.en}</Chip>
          ))}
        </StylesContainer>
      </InnerContainer>
      <CityPicker open={cityPickerOpen} onCity={city => { selectCity({ value: city.id }) }} close={() => { setCityPickerOpen(false) }} />
    </Container>
  );
}
