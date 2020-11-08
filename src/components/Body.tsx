import styled from 'styled-components';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  width: 100%;
  min-height: 100%;

  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryText.DEFAULT};

  justify-content: center;

  display: flex;
`;

const InnerContainer = styled.div`
  width: 1232px;
  min-height: 100%;

  padding: 32px 0px;

  display: flex;
  flex-direction: column;
`;

export const Body = ({ children }) => (
  <Background>
    <InnerContainer>
      {children}
    </InnerContainer>
  </Background>
)