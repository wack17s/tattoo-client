import * as React from 'react';
import styled from 'styled-components';

interface ITextProps {
  title?: boolean;
  subTitle?: boolean;
  children: any;

  style?: any;
}

export const Title = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-size: 71px;
  line-height: 76px;
  letter-spacing: -0.01em;
  
  @media (max-width: 720px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-size: 42px;
  line-height: 48px;

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Text: React.StatelessComponent<ITextProps> = ({ title, subTitle, children, style }) => {
  if (title) {
    return (
      <Title style={style}>
        {children}
      </Title>
    )
  }

  if (subTitle) {
    return (
      <SubTitle style={style}>
        {children}
      </SubTitle>
    )
  }

  return <p style={style}>{children}</p>
};
