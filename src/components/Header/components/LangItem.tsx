
import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ILangItemProps {
  label: string;
  selected?: boolean;
  href: string | object;
  locale: string;
  as?: any;
}

const Label = styled.p<Pick<ILangItemProps, 'selected'>>`
  margin: 0px 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.BLACK_900};
  font-weight: ${({ selected }) => selected ? 700 : 400};
  &:hover {
    color: ${({ theme }) => theme.colors.BLACK_300};
  }
`;

export const LangItem: React.FunctionComponent<ILangItemProps> = ({ selected, label, locale, href, as }) => (
  <Link locale={locale} href={href} as={as}>
    <Label selected={selected}>{label}</Label>
  </Link>
);
