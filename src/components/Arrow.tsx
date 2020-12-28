import styled from 'styled-components';
import * as React from 'react';

interface IArrowProps {
  className?: string;
  grey?: boolean;
  slim?: boolean;
}

const Horizontal = styled.div<IArrowProps>`
  width: 9px;
  height: ${({ slim }) => slim ? 1 : 2}px;
  border-radius: 4.5px;
  position: absolute;
`;

const Vertical = styled.div<IArrowProps>`
  width: ${({ slim }) => slim ? 1 : 2}px;
  height: 9px;
  border-radius: 4.5px;
  position: absolute;
`;

const ArrowContainer = styled.div<IArrowProps>`
  width: 9px;
  height: 9px;
  overflow: hidden;

  & > div {
    background-color: ${({ theme, grey }) => grey ? theme.colors.BLACK_400 : theme.colors.BLACK_900};
  }
`;

const LeftArrowContainer = styled(ArrowContainer)`
  transform: rotate(-45deg);
`;

const RightArrowContainer = styled(ArrowContainer)`
  transform: rotate(135deg);
`;

export const LeftArrow: React.FunctionComponent<IArrowProps> = ({ className, grey, slim }) => (
  <LeftArrowContainer className={className} grey={grey}>
    <Horizontal slim={slim} />
    <Vertical slim={slim} />
  </LeftArrowContainer>
);

export const RightArrow: React.FunctionComponent<IArrowProps> = ({ className, grey, slim }) => (
  <RightArrowContainer className={className} grey={grey}>
    <Horizontal slim={slim} />
    <Vertical slim={slim} />
  </RightArrowContainer>
);
