import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router';

import { getMainPage } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { Header, HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 445px;
  height: 521px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Main: NextPage = () => {
  const { locale } = useRouter();

  const mainPage = getMainPage(locale);

  return (
    <Body>
      <Header selectedButton={HeaderMenuButton.MAIN} />
      <Container>
        <InnerContainer>
          <Text title>{mainPage.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: 56 }}>{mainPage.text.text}<br />{mainPage.text.text2}</Text>
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
