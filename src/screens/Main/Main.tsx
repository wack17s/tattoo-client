import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head'

import { getMainPage } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';

import { Image, Container, InnerContainer } from './components';
import { pageTagData } from '../../seo/pageTagData';
import { PageName } from '../../types/pageName.enum';

export const Main: NextPage = () => {
  const { locale } = useRouter();

  const mainPage = getMainPage(locale);

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Head>
        <title>{pageTagData[PageName.MAIN].title}</title>
        <meta name="description" content={pageTagData[PageName.MAIN].description} />
      </Head>
      <Container>
        <InnerContainer>
          <Text h1>{mainPage.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: '3em' }}>{mainPage.text.text}</Text>
          <Link href='/choose-city'>
            <Button>
              {mainPage.text.button}
            </Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/images/dog.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
