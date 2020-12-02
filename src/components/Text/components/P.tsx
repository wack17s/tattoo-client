import styled from 'styled-components';

export const P1 = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const P2 = styled.p`
  font-size: 14px;
  line-height: 20px;
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
