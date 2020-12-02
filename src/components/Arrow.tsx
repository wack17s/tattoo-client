import styled from 'styled-components';
import * as React from 'react';

interface IArrowProps {
  className?: string;
  grey?: boolean;
}

const Horizontal = styled.div`
  width: 9px;
  height: 2px;
  border-radius: 4.5px;
  position: absolute;
`;

const Vertical = styled.div`
  width: 2px;
  height: 9px;
  border-radius: 4.5px;
  position: absolute;
`;

const ArrowContainer = styled.div<IArrowProps>`
  width: 9px;
  height: 9px;
  overflow: hidden;

  & > div {
    background: ${({ theme, grey }) => grey ? theme.colors.BLACK_400 : theme.colors.BLACK_900};
  }
`;

const LeftArrowContainer = styled(ArrowContainer)`
  transform: rotate(-45deg);
`;

const RightArrowContainer = styled(ArrowContainer)`
  transform: rotate(135deg);
`;

export const LeftArrow: React.FunctionComponent<IArrowProps> = ({ className, grey }) => (
  <LeftArrowContainer className={className} grey={grey}>
    <Horizontal />
    <Vertical />
  </LeftArrowContainer>
);

export const RightArrow: React.FunctionComponent<IArrowProps> = ({ className, grey }) => (
  <RightArrowContainer className={className} grey={grey}>
    <Horizontal />
    <Vertical />
  </RightArrowContainer>
);
