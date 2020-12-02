import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';

import { getMainPage } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';

import { Image, Container, InnerContainer } from './components';

export const Main: NextPage = () => {
  const { locale } = useRouter();

  const mainPage = getMainPage(locale);

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Container>
        <InnerContainer>
          <Text h1>{mainPage.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: '3em' }}>{mainPage.text.text}</Text>
          <Link href='choose-city'>
            <Button>
              {mainPage.text.button}
            </Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/dog.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
