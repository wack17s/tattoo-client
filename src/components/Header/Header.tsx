import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

import { getPageNames } from '../../utils/getLocalizedText';
import { Language } from '../../localizations.types';
import { PageName } from '../../types/pageName.enum';
// import { useTattooersQuery } from '../../hooks/useTattooersQuery';

import { MenuItem } from './components/MenuItem';
import { Burger } from './components/Burger';
import { BurgerMenu } from './components/BurgerMenu';
import { LangItem } from './components/LangItem';
import { ICity } from '../../types/city';
// import { useSelectedCity } from '../../hooks/useSelectedCity';

export enum HeaderMenuButton {
  MAIN = 'HeaderMenuButton::MAIN',
  TATTOOERS = 'HeaderMenuButton::TATTOOERS',
  FOR_TATTOOERS = 'HeaderMenuButton::FOR_TATTOOERS',
  ARTICLES = 'HeaderMenuButton::ARTICLES',
  ABOUT = 'HeaderMenuButton::ABOUT',
}

export interface IHeaderProps {
  selectedButton?: HeaderMenuButton;

  headerFooter?: any;

  logoUri?: string;

  selectedCity?: ICity;
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (orientation:portrait) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  display: none;

  @media (orientation:portrait) {
    display: flex;
  }
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Container = styled.div<{ hamburgerOpen?: boolean }>`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: ${({ hamburgerOpen }) => hamburgerOpen ? '8px 8px 0px 0px' : '8px 8px 8px 8px'};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 720px) {
    padding: 8px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 720px) {
    padding: 8px 16px;
  }
`;

const BurgeLangContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
`;

export const Header: NextPage<IHeaderProps> = ({ selectedCity, selectedButton, headerFooter, logoUri }) => {
  const { locale, pathname, query } = useRouter();

  const pageNames = getPageNames(locale);

  // const [selectedCity] = useSelectedCity();

  // const tattooerQuery = useTattooersQuery();

  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  const menuButtons = [
    <MenuItem label={pageNames[PageName.MAIN]} key={pageNames[PageName.MAIN]} selected={selectedButton === HeaderMenuButton.MAIN} href='/' locale={locale} />,
    <MenuItem label={pageNames[PageName.TATTOOERS]} key={pageNames[PageName.TATTOOERS]} selected={selectedButton === HeaderMenuButton.TATTOOERS} href={{
      pathname: selectedCity ? selectedCity.name : 'tattooers',
      // query: tattooerQuery,
    }} locale={locale} />,
    // <MenuItem label={pageNames[PageName.FOR_TATTOOERS]} key={pageNames[PageName.FOR_TATTOOERS]} selected={selectedButton === HeaderMenuButton.FOR_TATTOOERS} href='/for-tattooers' locale={locale} />,
    <MenuItem label={pageNames[PageName.ARTICLES]} key={pageNames[PageName.ARTICLES]} selected={selectedButton === HeaderMenuButton.ARTICLES} href='/articles' locale={locale} />,
    <MenuItem label={pageNames[PageName.ABOUT]} key={pageNames[PageName.ABOUT]} selected={selectedButton === HeaderMenuButton.ABOUT} href='/about' locale={locale} />
  ];

  const langButtons = [
    <LangItem
      label='Рус'
      selected={locale === Language.RU}
      locale={Language.RU}
      key={Language.RU}
      href={{ pathname, query: { superslug: query.superslug } }}
      as={query.superslug || query.id || pathname}
    />,
    <LangItem
      label='Укр'
      selected={locale === Language.UA}
      locale={Language.UA}
      key={Language.UA}
      href={{ pathname, query: { superslug: query.superslug } }}
      as={query.superslug || query.id || pathname}
    />,
    // <LangItem label='Eng' selected={locale === Language.EN} locale={Language.EN} key={Language.EN} href={pathname} />
  ];

  return (
    <Container hamburgerOpen={hamburgerOpen}>
      <BurgerMenu open={hamburgerOpen} setOpen={setHamburgerOpen}>
        {menuButtons}
        <BurgeLangContainer>
          {langButtons}
        </BurgeLangContainer>
      </BurgerMenu>
      <InnerContainer>
        <Logo src={logoUri || './logo.png'} />
        <BurgerContainer>
          <Burger open={hamburgerOpen} setOpen={setHamburgerOpen} />
        </BurgerContainer>
        <MenuContainer>
          {menuButtons}
        </MenuContainer>
        <MenuContainer>
          {langButtons}
        </MenuContainer>
      </InnerContainer>
      {headerFooter}
    </Container>
  )
};

Header.defaultProps = {
  selectedButton: HeaderMenuButton.MAIN
}
