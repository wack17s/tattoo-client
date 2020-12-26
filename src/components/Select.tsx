import * as React from 'react';
import ReactSelect from 'react-select'
import styled from 'styled-components';

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  options: IOption[];
  onChange: (value: IOption) => void;
  value: IOption;
  className?: string;
}

const StyledSelect = styled(ReactSelect)`
  all: initial;
  & .Select__value-container,
    .Select__container {
    width: 204px;
    height: 40px;
  }
  & .Select__indicator-separator {
    display: none;
  }
  & .Select__value-container,
    .Select__container,
    .Select__control,
    .Select__indicators,
    .Select__indicators-container,
    .Select__indicator,
    .Select__dropdown-indicator,
    .Select__menu {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.BLACK_100};
      border: 0;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.BLACK_400};
  }
  & .Select__single-value {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.BLACK_400};
  }
  & .Select__control--menu-is-opened,
    .Select__control--is-focused {
    border-color: transparent;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  & .Select__control--menu-is-opened,
    .Select__control--is-focused > div > div {
    color: ${({ theme }) => theme.colors.CORAL_500};
  }
  & .Select__indicator:hover {
    color: ${({ theme }) => theme.colors.CORAL_500};
  }
  
  /* menu */
  & .Select__option,
    .Select__option:active {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.BLACK_100};
      color: ${({ theme }) => theme.colors.BLACK_400};
      border-radius: 8px;
      font-size: 14px;
      line-height: 24px;
  }
  & .Select__option:active,
    .Select__option--is-selected {
      cursor: pointer;
      font-size: 14px;
      line-height: 24px;
  }
  & .Select__option:hover,
    .Select__option:active,
    .Select__option--is-selected {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.BLACK_200};
      font-size: 14px;
      line-height: 24px;
  }
`;

export const Select: React.FunctionComponent<ISelectProps> = ({ options, onChange, value, className }) => {
  return (
    <StyledSelect className={className} isFocused={false} classNamePrefix={'Select'} options={options} value={value} onChange={onChange} />
  )
};
