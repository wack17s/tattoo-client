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
import { pageTagDataUa } from '../../seo/pageTagDataUa';
import { PageName } from '../../types/pageName.enum';
import { Tags } from '../../seo/Tags';

export const Main: NextPage = () => {
  const { locale } = useRouter();

  const mainPage = getMainPage(locale);

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Tags
        description={(locale === 'ua' ? pageTagDataUa : pageTagData)[PageName.MAIN].description}
        title={(locale === 'ua' ? pageTagDataUa : pageTagData)[PageName.MAIN].title}
      />
      <Container>
        <InnerContainer>
          <Text h1>{mainPage.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: '3em' }}>{mainPage.text.text}</Text>
          <Link href='/choose-city' passHref>
            <a>
              <Button>
                {mainPage.text.button}
              </Button>
            </a>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src={`${process.env.NEXT_PUBLIC_HOST}/images/dog.svg`} />
        </InnerContainer>
      </Container>
    </Body>
  )
}
