import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { getPageNames, getTattooers } from '../../utils/getLocalizedText';
import { Language } from '../../localizations.types';
import { PageName } from '../../types/pageName.enum';

import { MenuItem } from './components/MenuItem';
import { Burger } from './components/Burger';
import { BurgerMenu } from './components/BurgerMenu';
import { LangItem } from './components/LangItem';
import { Filters, IFiltersProps } from './components/Filters';
import { ICity } from '../../types/city';
import { Chip } from '../Chip';
import { IStyle } from '../../types/style';
import { BottomArrow } from '../Arrow';

export enum HeaderMenuButton {
  MAIN = 'HeaderMenuButton::MAIN',
  TATTOOERS = 'HeaderMenuButton::TATTOOERS',
  FOR_TATTOOERS = 'HeaderMenuButton::FOR_TATTOOERS',
  ARTICLES = 'HeaderMenuButton::ARTICLES',
  ABOUT = 'HeaderMenuButton::ABOUT',
}

export interface IHeaderProps {
  selectedButton?: HeaderMenuButton;

  filterProps?: IFiltersProps;
  minimizeFilter?: boolean;
  openFilters?: () => void;

  selectedCity?: ICity;
  selectedStyles?: IStyle[];
  discardStyles?: () => void;
}

const InnerWrapper = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;

const MenuContainer = styled.div<{ visible?: boolean; }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: ${({ visible }) => !visible ? 0 : '40px'};
  opacity: ${({ visible }) => !visible ? 0 : 1};

  transition: ${({ visible }) => !visible ? 'opacity 0.2s, height 0s linear 0.2s' : 'opacity 0.2s linear 0.2s, height 0s linear 0.2s'};

  @media (max-width: 720px) {
    display: none;
  }
`;

const MiniFilterContainer = styled.div<{ visible?: boolean; }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  height: ${({ visible }) => !visible ? 0 : '40px'};
  opacity: ${({ visible }) => !visible ? 0 : 1};

  transition: ${({ visible }) => !visible ? 'opacity 0.2s, height 0s linear 0.2s' : 'opacity 0.2s linear 0.2s, height 0s linear 0.2s'};

  @media (max-width: 720px) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: flex;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  &:hover {
    opacity: 0.6;
  }
`;

const Container = styled.div<{ hamburgerOpen?: boolean; }>`
  background-color: white;
  width: 100%;
  display: flex;
  pointer-events: auto;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
  border-radius: ${({ hamburgerOpen }) => hamburgerOpen ? '8px 8px 0px 0px' : '8px 8px 8px 8px'};

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

const CityChip = styled<any>(Chip)`
  margin-right: ${({ marginRight }) => marginRight ? '8px' : 0};
`;

const OpenButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Header: NextPage<IHeaderProps> = ({ discardStyles, selectedCity, selectedStyles, selectedButton, filterProps, minimizeFilter, openFilters }) => {
  const { locale, pathname, query } = useRouter();

  const pageNames = getPageNames(locale);

  const tattooersLocales = getTattooers(locale);

  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  const menuButtons = [
    <MenuItem label={pageNames[PageName.MAIN]} key={pageNames[PageName.MAIN]} selected={selectedButton === HeaderMenuButton.MAIN} href='/' locale={locale} />,
    <MenuItem label={pageNames[PageName.TATTOOERS]} key={pageNames[PageName.TATTOOERS]} selected={selectedButton === HeaderMenuButton.TATTOOERS} href={{
      pathname: selectedCity ? selectedCity.name : '/tattooers',
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
        <Link href='/tattooers'>
          <Logo src={`${process.env.NEXT_PUBLIC_HOST}/logo.png`} />
        </Link>
        <BurgerContainer>
          <Burger open={hamburgerOpen} setOpen={setHamburgerOpen} />
        </BurgerContainer>
        <InnerWrapper>
          <MenuContainer visible={!(filterProps && minimizeFilter)}>
            {menuButtons}
          </MenuContainer>
          <MiniFilterContainer visible={filterProps && minimizeFilter}>
            <CityChip marginRight={true}>
              {selectedCity ? selectedCity[locale] : tattooersLocales.text.allCities}
            </CityChip>
            {Boolean(selectedStyles && selectedStyles.length) ? (
              <Chip>
                {selectedStyles.length > 1 ? `${selectedStyles[0].en} +${selectedStyles.length - 1}` : selectedStyles[0].en}
              </Chip>
            ) : (
              <Chip>
                {tattooersLocales.text.allStyles}
              </Chip>
            )}
          </MiniFilterContainer>
        </InnerWrapper>
        <InnerWrapper>
          <MenuContainer visible={!(filterProps && minimizeFilter)}>
            {langButtons}
          </MenuContainer>
          <MiniFilterContainer visible={filterProps && minimizeFilter}>
            <OpenButton onClick={openFilters}>
              <BottomArrow grey />
            </OpenButton>
          </MiniFilterContainer>
        </InnerWrapper>
      </InnerContainer>
      {filterProps && <Filters {...filterProps} discardStyles={discardStyles} hide={minimizeFilter} />}
    </Container>
  )
};

// Header.defaultProps = {
//   selectedButton: HeaderMenuButton.MAIN
// }
