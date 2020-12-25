import styled from 'styled-components';

import { Body } from '../../components/Body'
import { Text } from '../../components/Text'
import { getNotFound } from '../../utils/getLocalizedText';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  flex: 1;

  padding: 0 10vw;

  @media (orientation:portrait) {
    flex-direction: column-reverse;
    align-items: center;
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

  @media (orientation:portrait) {
    width: 64vw;
    height: 64vw;
  }
`;

export const NotFound = () => {
  const notFoundLocales = getNotFound();

  return (
    <Body hideHeader>
      <Container>
      <InnerContainer>
          <Text h1>{notFoundLocales.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: '3em' }}>{notFoundLocales.text.text}</Text>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/404.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
