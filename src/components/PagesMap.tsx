import * as React from 'react';
import styled from 'styled-components';

interface IPagesMapProps {
  pageNames: string[];
}

export const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
`;

export const PagesMap: React.StatelessComponent<IPagesMapProps> = ({ pageNames }) => {
  return (
    <>
      <GreyText>
        {pageNames.join(' > ')}
      </GreyText>
    </>
  )
};
