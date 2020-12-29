import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  min-height: 100%;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Image = styled.img`
  width: 40vw;
  height: 40vw;

  max-width: 445px;

  @media (max-width: 720px) {
    width: 64vw;
    height: 64vw;
  }
`;

export const ChipsContainer = styled.div<{ displayOnMobile?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0px 10px 10px 0px;
  }

  @media (max-width: 720px) {
    display: ${({ displayOnMobile }) => displayOnMobile ? 'flex' : 'none'};
  }
`;
