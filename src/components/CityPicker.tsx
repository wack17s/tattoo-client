import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { getTattooers } from '../utils/getLocalizedText';
import { ICity } from '../types/city';
import { useCities } from '../hooks/useCities';

import { LeftArrow, RightArrow } from './Arrow';
import { Text } from './Text';

interface ICityPickerProps {
  open?: boolean;

  setOpen: (open?: boolean) => void;
  onCity: (city: ICity) => void;

  small?: boolean;

  selectedCity?: string;
}

interface IStyledProps {
  open?: boolean;
  small?: boolean;
}

const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.PICKER_BACKGROUND};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  background: ${({ theme }) => theme.colors.PICKER_BACKGROUND};

  z-index: 2;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding-top: 72px;
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  margin-left: 16px;
  padding: 20px 27px 20px 0;
`;

const ButtonContainer = styled.div<IStyledProps>`
  width: 206px;
  height: ${({ small }) => small ? '40px' : '56px'};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.BLACK_400};
  background: ${({ theme }) => theme.colors.BLACK_100};
  padding: ${({ small }) => small ? '8px 12px' : '20px 20px 20px 12px'};

  @media (max-width: 720px) {
    width: 100%;

    display: flex;
  }
`;

export const CityPicker: React.FunctionComponent<ICityPickerProps> = ({ open, setOpen, onCity, small, selectedCity }) => {
  const { locale } = useRouter();

  const tattooers = getTattooers(locale);

  const [cities] = useCities();

  return (
    <>
      <ButtonContainer small={small} onClick={() => { setOpen(true); }}>
        <Text p1={!small} p4={small}>{selectedCity || tattooers.text.selectCity}</Text>
        <RightArrow grey />
      </ButtonContainer>
      <Container open={open}>
        <Header>
          <CloseButton onClick={() => { setOpen(false); }}>
            <LeftArrow />
          </CloseButton>
          <Text p3>{tattooers.text.selectCity}</Text>
          <CloseButton />
        </Header>
        <ListContainer>
          {cities.map(city => <ListItem key={'city_picker' + city.id} onClick={() => { onCity(city); setOpen(false); }}><Text>{city[locale]}</Text><RightArrow grey /></ListItem>)}
        </ListContainer>
      </Container>
    </>
  )
}
