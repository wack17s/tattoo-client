import * as React from 'react';
import styled from 'styled-components';

import { RightArrow } from './Arrow';

interface IBreadCrumbProps {
  items: { label: string; onPress?: () => void; }[];
}

const Label = styled.p<{ selected?: boolean; }>`
  /* margin-left: 12px; */
  margin-right: 8px;
  cursor: pointer;
  color: ${({ selected, theme }) => selected ? theme.colors.CORAL_500 : theme.colors.BLACK_400};
  &:hover {
    color: ${({ theme }) => theme.colors.CORAL_700};
  }

  @media (max-width: 720px) {
    margin: 24px 0px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (orientation: portrait) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledArrow = styled(RightArrow)`
  margin-right: 12px;
`;

export const BreadCrumb: React.FunctionComponent<IBreadCrumbProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Row key={`${item.label}_${index}`}>
          <Label selected={index >= items.length - 1} onClick={item.onPress}>
            {item.label}
          </Label>
          {Boolean(index < items.length - 1) && (
            <StyledArrow grey slim />
          )}
        </Row>
      ))}
    </Container>
  )
};
