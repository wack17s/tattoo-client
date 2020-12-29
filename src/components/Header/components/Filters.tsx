
import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { getTattooers } from '../../../utils/getLocalizedText';
import { Text } from '../../Text';
import { Chip } from '../../Chip';
import { CityPicker } from '../../CityPicker';
import { Select } from '../../Select';
import { ICity } from '../../../types/city';
import { IStyle } from '../../../types/style';
import { StylesPicker } from '../../StylesPicker';

export interface IFiltersProps {
  cities: ICity[];
  styles: IStyle[];

  selectedCity?: ICity;
  selectedStyles?: IStyle[];

  onStyle: (style: IStyle) => void;
  onCity: (city?: ICity) => void;

  hide?: boolean;

  cityPickerOpen?: boolean;
  setCityPickerOpen: (cityPickerOpen?: boolean) => void;
  setStylesPickerOpen: (stylesPickerOpen?: boolean) => void;
  stylesPickerOpen?: boolean;
  discardStyles?: () => void;
}

const Container = styled.div<{ hide?: boolean; }>`
  max-height: ${({ hide }) => hide ? 0 : 400}px;

  opacity: ${({ hide }) => hide ? 0 : 1};

  transition: ${({ hide }) => hide ? 'opacity 0.2s, max-height 0.2s' : 'opacity 0.2s, max-height 0.2s'};;
`;

const InnerTopContainer = styled.div`
  padding-top: 16px;

  @media (max-width: 720px) {
    padding-top: 8px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 720px) {
    padding-top: 8px;
  }
`;

const LeftContainer = styled.div`
  margin-right: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    margin-right: 8px;
  }
`;

const RightContainer = styled.div`
  margin-right: 40px;

  @media (max-width: 720px) {
    flex: 1;
    margin-right: 0;
  }
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

const Discard = styled.p`
  margin: 0px 20px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.CORAL_500};
  &:hover {
    color: ${({ theme }) => theme.colors.CORAL_700};
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Filters: React.FunctionComponent<IFiltersProps> = ({ discardStyles, setCityPickerOpen, stylesPickerOpen, setStylesPickerOpen, cityPickerOpen, hide, cities, styles, selectedCity, selectedStyles, onCity, onStyle }) => {
  const { locale } = useRouter();

  const tattooersLocales = getTattooers(locale);

  const allCitiesOption = { value: '999', label: tattooersLocales.text.selectCityPlaceholder };

  const selectCity = ({ value }: { value: string; }) => {
    onCity(cities.find(item => item.id === value))
  }

  const citiesOptions = [allCitiesOption, ...cities.map(item => ({ value: item.id, label: item[locale] }))];

  return (
    <Container hide={hide}>
      <InnerTopContainer>
        <InnerContainer>
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
                <Row>
                  <Title h5>{tattooersLocales.text.selectStyle}</Title>
                  {Boolean(selectedStyles && selectedStyles.length) && (<Discard onClick={discardStyles}>{tattooersLocales.text.discard}</Discard>)}
                </Row>
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
        </InnerContainer>
      </InnerTopContainer>
    </Container>
  );
}
