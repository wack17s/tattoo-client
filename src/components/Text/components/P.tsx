import styled from 'styled-components';

export const P1 = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const P2 = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.BLACK_400};

  @media (max-width: 720px) {
    color: ${({ theme }) => theme.colors.BLACK_900};
    font-size: 17px;
    line-height: 24px;
  }
`;

export const P3 = styled.p`
  font-size: 10px;
  line-height: 16px;

  @media (max-width: 720px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
  }
`;

export const P4 = styled.p`
  font-size: 12px;
  line-height: 20px;

  @media (max-width: 720px) {
    color: ${({ theme }) => theme.colors.BLACK_400};
    font-size: 14px;
    line-height: 24px;
  }
`;

export const P5 = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const P1Book = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

export const P2Book = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;
`;

export const P3Book = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const P4Book = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

export const P5Book = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;

  @media (max-width: 720px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
