import styled from 'styled-components';
import linkify from 'linkifyjs/html';
import { useRouter } from 'next/router'

import { getAbout } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { htmlString } from '../../utils/htmlString';

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled(Text)`
  margin-top: 64px;

  @media (max-width: 720px) {
    margin-top: 24px;
  }
`;

const Description = styled(Text)`
  margin-top: 24px;
  margin-bottom: 48px;
  width: 50%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`;

const RowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media (orientation:portrait) {
    flex-direction: column;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;

  @media (orientation:portrait) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 25vw;
  height: 25vw;

  max-width: 445px;

  @media (orientation:portrait) {
    width: 64vw;
    height: 64vw;
  }
`;

const DescriptionText = styled.div`
  a {
    color: ${({ theme }) => theme.colors.CORAL_500};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const About = () => {
  const { locale } = useRouter();

  const about = getAbout(locale);

  return (
    <Body selectedButton={HeaderMenuButton.ABOUT}>
      <Container>
        <Title h1>{about.text.title}</Title>
        <Description>{about.text.text1}</Description>
        <Row>
          <Image src='puma.svg' />
          <InnerContainer>
            <Text style={{ marginTop: 16 }} h2>{about.text.subtitle3}</Text>
            <Text style={{ marginTop: 24, marginBottom: 48 }}>
              <DescriptionText dangerouslySetInnerHTML={{
                __html: htmlString(about.text.text3)
              }} />
            </Text>
          </InnerContainer>
        </Row>
        <RowReverse>
          <Image src='dober.svg' />
          <InnerContainer>
            <Text style={{ marginTop: 16 }} h2>{about.text.subtitle1}</Text>
            <Text style={{ marginTop: 24, marginBottom: 48 }}>{about.text.text1}</Text>
          </InnerContainer>
        </RowReverse>
        <Row>
          <Image src='dog.svg' />
          <InnerContainer>
            <Text style={{ marginTop: 16 }} h2>{about.text.subtitle2}</Text>
            <Text style={{ marginTop: 24, marginBottom: 48 }}>
              <DescriptionText dangerouslySetInnerHTML={{
                __html: linkify(about.text.text2, {
                  defaultProtocol: 'https'
                })
              }} />
            </Text>
          </InnerContainer>
        </Row>
      </Container>
    </Body>
  )
}
