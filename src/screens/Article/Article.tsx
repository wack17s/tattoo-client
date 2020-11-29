import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import { articles } from '../../articles'
import { Body } from '../../components/Body'
import { BreadCrumb } from '../../components/BreadCrumb'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { getPageNames } from '../../utils/getLocalizedText';
import { PageName } from '../../types/pageName.enum';

const BreadCrumbContainer = styled.div`
  margin: 40px 0px 0px 16px;
`;

export const Article: NextPage = () => {
  const { locale, query } = useRouter();

  const pageNames = getPageNames(locale);

  const article = articles.find(item => String(item.id) === query.id);

  return (
    <Body logoUri='../logo.png' selectedButton={HeaderMenuButton.ARTICLES}>
      <BreadCrumbContainer>
        <BreadCrumb pageNames={article && article[locale] ? [pageNames[PageName.ARTICLES], article[locale].name] : [pageNames[PageName.ARTICLES]]} />
      </BreadCrumbContainer>
      {article && article[locale] && (
        <>
          <Text h1 style={{ marginTop: 48, marginBottom: 48 }}>
            {article[locale].name}
          </Text>
          <Text>
            {article[locale].text}
          </Text>
        </>
      )}
    </Body>
  )
}
