import * as React from 'react';
import styled from 'styled-components';

interface IBreadCrumbProps {
  pageNames: string[];
}

export const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
`;

const Container = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
`;

export const BreadCrumb: React.StatelessComponent<IBreadCrumbProps> = ({ pageNames }) => {
  return (
    <Container>
      <GreyText>
        {pageNames.join(' > ')}
      </GreyText>
    </Container>
  )
};
