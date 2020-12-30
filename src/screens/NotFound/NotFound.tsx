import styled from 'styled-components';
import Link from 'next/link';

import { Body } from '../../components/Body'
import { Text } from '../../components/Text'
import { getNotFound } from '../../utils/getLocalizedText';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';

const Label = styled.p`
  /* margin: 0px 20px; */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.CORAL_500};
  &:hover {
    color: ${({ theme }) => theme.colors.CORAL_700};
  }

  @media (max-width: 720px) {
    margin: 24px 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  flex: 1;

  padding: 0 7vw;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 0;
    /* align-items: center; */
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  width: 40vw;
  height: 40vw;

  max-width: 445px;

  @media (max-width: 720px) {
    width: 64vw;
    height: 64vw;
  }
`;

export const NotFound = () => {
  const { locale } = useRouter();
  const notFoundLocales = getNotFound(locale);

  return (
    <Body hideHeader>
      <Container>
      <InnerContainer>
          <Text h1>{notFoundLocales.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: 72 }}>{notFoundLocales.text.text}</Text>
          <Link href='/' locale={locale}>
            <Button>{notFoundLocales.text.link}</Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/images/404.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
