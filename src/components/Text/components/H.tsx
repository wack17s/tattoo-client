import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Rubik';
  font-size: 71px;
  line-height: 80px;
  letter-spacing: 0.01em;

  @media (max-width: 720px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Rubik';
  font-size: 42px;
  line-height: 56px;

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const H4 = styled.h4`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const H5 = styled.h5`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  @media (max-width: 720px) {
    display: none;
  }
`;
