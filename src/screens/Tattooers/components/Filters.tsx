
import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { getTattooers } from '../../../utils/getLocalizedText';
import { Text } from '../../../components/Text';
import { Chip } from '../../../components/Chip';
import { CityPicker } from '../../../components/CityPicker';
import { Select } from '../../../components/Select';
import { ICity } from '../../../types/city';
import { IStyle } from '../../../types/style';
import { StylesPicker } from '../../../components/StylesPicker';

interface IFiltersProps {
  cities: ICity[];
  styles: IStyle[];

  selectedCity?: ICity;
  selectedStyles?: IStyle[];

  onStyle: (style: IStyle) => void;
  onCity: (city?: ICity) => void;

  hide?: boolean;
}

const Container = styled.div<{ hide?: boolean; }>`
  display: flex;
  flex-direction: row;
  border-top: ${({ hide }) => hide ? 0 : '0.5px solid rgba(0, 0, 0, 0.1)'};
  margin-top: ${({ hide }) => hide ? 0 : 16}px;
  padding-top: ${({ hide }) => hide ? 0 : 16}px;

  max-height: ${({ hide }) => hide ? 0 : 150}px;

  overflow: hidden;

  transition: max-height 0.3s ease-out;

  @media (max-width: 720px) {
    margin-top: 8px;
    padding-top: 8px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-right: 16px;

  @media (max-width: 720px) {
    flex: 5;
    margin-right: 8px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Title = styled(Text)`
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
    margin: 0px 8px 8px 0px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const StyledCitySelect = styled(Select)`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Filters: React.FunctionComponent<IFiltersProps> = ({ hide, cities, styles, selectedCity, selectedStyles, onCity, onStyle }) => {
  const { locale } = useRouter();

  const tattooersLocales = getTattooers(locale);

  const allCitiesOption = { value: '999', label: tattooersLocales.text.selectCityPlaceholder };

  const selectCity = ({ value }: { value: string; }) => {
    onCity(cities.find(item => item.id === value))
  }

  const citiesOptions = [allCitiesOption, ...cities.map(item => ({ value: item.id, label: item[locale] }))];

  const [cityPickerOpen, setCityPickerOpen] = React.useState(false);
  const [stylesPickerOpen, setStylesPickerOpen] = React.useState(false);

  return (
    <Container hide={hide}>
      <LeftContainer>
        <Title h5>{tattooersLocales.text.selectCity}</Title>
        <StyledCitySelect onChange={selectCity} value={selectedCity ? { value: selectedCity.id, label: selectedCity[locale] } : allCitiesOption} options={citiesOptions} />
        <CityPicker
          cities={cities}
          selectedCity={selectedCity ? selectedCity[locale] : undefined}
          small
          open={cityPickerOpen}
          onCity={onCity}
          setOpen={setCityPickerOpen}
        />
      </LeftContainer>
      <RightContainer>
        {Boolean(styles.length) && (
          <>
            <Title h5>{tattooersLocales.text.selectStyle}</Title>
            <StylesContainer>
              {styles.map(item => (
                <Chip key={`${item.id}_${item.en}`} selected={selectedStyles && selectedStyles.some(selectedStyle => selectedStyle.id === item.id)} onClick={onStyle.bind(null, item)}>{item[locale] || item.en}</Chip>
              ))}
            </StylesContainer>
            <StylesPicker
              styles={styles}
              selectedStyles={selectedStyles}
              small
              open={stylesPickerOpen}
              onStyle={onStyle}
              setOpen={setStylesPickerOpen}
            />
          </>
        )}
      </RightContainer>
    </Container>
  );
}
