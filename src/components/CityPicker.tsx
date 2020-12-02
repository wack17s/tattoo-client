import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { cities } from '../cities';
import { ICity } from '../cities.types';
import { getTattooers } from '../utils/getLocalizedText';

import { Text } from './Text';

interface ICityPickerProps {
  open?: boolean;

  close: () => void;
  onCity: (city: ICity) => void;
}

interface IStyledProps {
  open?: boolean;
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
  overflow: scroll;

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
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background: red;
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

export const CityPicker: React.FunctionComponent<ICityPickerProps> = ({ open, close, onCity }) => {
  const { locale } = useRouter();

  const tattooers = getTattooers(locale);

  return (
    <Container open={open}>
      <Header>
        <CloseButton onClick={() => { close(); }} />
        <Text p3>{tattooers.text.selectCity}</Text>
        <CloseButton onClick={() => { close(); }} />
      </Header>
      {cities.map(city => <ListItem onClick={() => { onCity(city); close(); }}><Text>{city[locale]}</Text></ListItem>)}
    </Container>
  )
}
