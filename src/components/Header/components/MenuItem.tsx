
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IMenuItemProps {
  label: string;
  selected?: boolean;
  href: any;
  locale: string;
}

const Label = styled.p<Pick<IMenuItemProps, 'selected'>>`
  margin: 0px 20px;
  cursor: pointer;
  color: ${({ selected, theme }) => selected ? theme.colors.primaryText.FOCUSED : theme.colors.primaryText.DEFAULT};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryText.HOVER};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryText.ACTIVE};
  }

  @media (orientation:portrait) {
    margin: 24px 0px;
  }
`;

export const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ selected, label, href, locale }) => (
  <Link href={href} locale={locale}>
    <Label selected={selected}>{label}</Label>
  </Link>
);
