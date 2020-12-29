
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
  color: ${({ selected, theme }) => selected ? theme.colors.CORAL_500 : theme.colors.BLACK_400};
  &:hover {
    color: ${({ theme }) => theme.colors.CORAL_700};
  }

  @media (max-width: 720px) {
    margin: 24px 0px;
  }
`;

export const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ selected, label, href, locale }) => (
  <Link href={href} locale={locale}>
    <Label selected={selected}>{label}</Label>
  </Link>
);
