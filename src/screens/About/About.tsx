import styled from 'styled-components';
import { useRouter } from 'next/router'

import { getAbout } from '../../utils/getLocalizedText';
import { Body } from '../../components/Body'
import { Header, HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const InnerContainer = styled(Container)`
  padding-right: 5%;
  padding-top: 5%;
`;

const HalfContainer = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  margin-bottom: 10%;
`;

export const About = () => {
  const { locale } = useRouter();

  const about = getAbout(locale);

  return (
    <Body>
      <Header selectedButton={HeaderMenuButton.ABOUT} />
      <Container>
        <InnerContainer>
          <Text title>{about.text.title}</Text>
          <Text style={{ marginTop: 24, width: '50%' }}>{about.text.text1}</Text>
        </InnerContainer>
        <HalfContainer>
          <InnerContainer>
            <Text subTitle>{about.text.subtitle1}</Text>
            <Text style={{ marginTop: 16 }}>{about.text.text2}</Text>
          </InnerContainer>
          <InnerContainer>
            <Text subTitle>{about.text.subtitle2}</Text>
            <Text style={{ marginTop: 16 }}>{about.text.text3}</Text>
          </InnerContainer>
        </HalfContainer>
      </Container>
    </Body>
  )
}
