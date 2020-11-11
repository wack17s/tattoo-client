import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router'

import { articles } from '../../articles'
import { Body } from '../../components/Body'
import { Header, HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'

export const Article: NextPage = () => {
  const { locale, query } = useRouter();

  const article = articles.find(item => String(item.id) === query.id);

  return (
    <Body logoUri='../logo.png' selectedButton={HeaderMenuButton.ARTICLES}>
      {article && article[locale] && (
        <>
          <Text title style={{ marginTop: 48, marginBottom: 48 }}>
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
