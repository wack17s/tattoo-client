
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ILangItemProps {
  label: string;
  selected?: boolean;
  href: string;
  locale: string;
}

const Label = styled.p<Pick<ILangItemProps, 'selected'>>`
  margin: 0px 4px;
  color: ${({ theme }) => theme.colors.primaryText.DEFAULT};
  font-weight: ${({ selected }) => selected ? 700 : 400};
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryText.HOVER};
  }
`;

export const LangItem: React.StatelessComponent<ILangItemProps> = ({ selected, label, locale, href }) => (
  <Link locale={locale} href={href}>
    <Label selected={selected}>{label}</Label>
  </Link>
);
