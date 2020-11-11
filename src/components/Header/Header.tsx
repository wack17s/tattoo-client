import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

import { getPageNames } from '../../utils/getLocalizedText';
import { Language } from '../../localizations.types';
import { PageName } from '../../types/pageName.enum';
import { useTattooersQuery } from '../../hooks/useTattooersQuery';

import { MenuItem } from './components/MenuItem';
import { LangItem } from './components/LangItem';

export enum HeaderMenuButton {
  MAIN = 'HeaderMenuButton::MAIN',
  TATTOOERS = 'HeaderMenuButton::TATTOOERS',
  FOR_TATTOOERS = 'HeaderMenuButton::FOR_TATTOOERS',
  ARTICLES = 'HeaderMenuButton::ARTICLES',
  ABOUT = 'HeaderMenuButton::ABOUT',
}

interface IHeaderProps {
  selectedButton?: HeaderMenuButton;

  children?: any;

  logoUri?: string;
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Container = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Header: NextPage<IHeaderProps> = ({ selectedButton, children, logoUri }) => {
  const { locale, pathname } = useRouter();

  const pageNames = getPageNames(locale);

  const tattooerQuery = useTattooersQuery();

  return (
    <Container>
      <InnerContainer>
        <Logo src={logoUri || './logo.png'} />
        <Menu>
          <MenuItem label={pageNames[PageName.MAIN]} selected={selectedButton === HeaderMenuButton.MAIN} href='/' locale={locale} />
          <MenuItem label={pageNames[PageName.TATTOOERS]} selected={selectedButton === HeaderMenuButton.TATTOOERS} href={{
            pathname: '/tattooers',
            query: tattooerQuery,
          }} locale={locale} />
          <MenuItem label={pageNames[PageName.FOR_TATTOOERS]} selected={selectedButton === HeaderMenuButton.FOR_TATTOOERS} href='/for-tattooers' locale={locale} />
          <MenuItem label={pageNames[PageName.ARTICLES]} selected={selectedButton === HeaderMenuButton.ARTICLES} href='/articles' locale={locale} />
          <MenuItem label={pageNames[PageName.ABOUT]} selected={selectedButton === HeaderMenuButton.ABOUT} href='/about' locale={locale} />
        </Menu>
        <Menu>
          <LangItem label='Рус' selected={locale === Language.RU} locale={Language.RU} href={pathname} />
          <LangItem label='Укр' selected={locale === Language.UA} locale={Language.UA} href={pathname} />
          {/* <LangItem label='Eng' selected={locale === Language.EN} locale={Language.EN} href={pathname} /> */}
        </Menu>
      </InnerContainer>
      {children}
    </Container>
  )
};

Header.defaultProps = {
  selectedButton: HeaderMenuButton.MAIN
}
