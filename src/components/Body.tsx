import * as React from 'react';
import styled from 'styled-components';

import { Header, IHeaderProps } from './Header';

interface IBodyProps extends IHeaderProps {
  children: any;

  innerContainerStyle?: any;
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  width: 100%;
  min-height: 100%;

  color: ${({ theme }) => theme.colors.primaryText.DEFAULT};

  justify-content: center;

  display: flex;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1232px;
  min-height: 100%;

  margin: 32px 64px;

  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    margin: 16px 8px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0px 16px;

  @media (max-width: 720px) {
    margin: 0px 8px;
  }
`;

export const Body: React.StatelessComponent<IBodyProps> = ({ children, innerContainerStyle, ...props }) => (
  <Background>
    <Container>
      <Header {...props} />
      <InnerContainer style={innerContainerStyle}>
        {children}
      </InnerContainer>
    </Container>
  </Background>
)