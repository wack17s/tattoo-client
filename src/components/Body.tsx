import * as React from 'react';
import styled from 'styled-components';

import { Header, IHeaderProps } from './Header';

interface IBodyProps extends IHeaderProps {
  children: any;

  innerContainerStyle?: any;

  hideHeader?: boolean;
  stickyHeader?: boolean;

  disableScroll?: boolean;
}

const Background = styled.div<{ disableScroll?: boolean; }>`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  width: 100%;
  min-height: 100%;

  color: ${({ theme }) => theme.colors.BLACK_900};

  justify-content: center;
  overflow: ${({ disableScroll }) => disableScroll ? 'hidden' : 'base'};
  height: ${({ disableScroll }) => disableScroll ? '100%' : undefined};

  display: flex;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1232px;
  min-height: 100%;

  overflow-x: hidden;
  overflow: hidden;

  margin: 32px 64px;

  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    margin: 16px 8px;

    padding-bottom: 50px;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  justify-content: center;

  height: 500px;
  pointer-events: none;

  display: flex;
  z-index: 10;
`;

const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  min-height: 100%;

  overflow-x: hidden;

  margin: 0px 64px;

  @media (max-width: 720px) {
    margin: 0px 8px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0px 16px;
  margin-top: 64px;

  @media (max-width: 720px) {
    margin: 0px 8px;
    margin-top: 64px;
  }
`;

export const Body: React.FunctionComponent<IBodyProps> = ({ disableScroll, children, innerContainerStyle, hideHeader, stickyHeader = true, ...props }) => (
  <Background disableScroll={disableScroll}>
    <Container>
      {!hideHeader && (
        stickyHeader ? (
          <HeaderContainer>
            <HeaderInnerContainer>
              <Header {...props} />
            </HeaderInnerContainer>
          </HeaderContainer>
        ) : <Header {...props} />
      )}
      <InnerContainer style={innerContainerStyle}>
        {children}
      </InnerContainer>
    </Container>
  </Background>
)

Body.defaultProps = {
  stickyHeader: true
};
