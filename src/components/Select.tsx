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
      background-color: ${({ theme }) => theme.colors.secondaryButton.DEFAULT};
      border: 0;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
  }
  & .Select__single-value {
    color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
  }
  & .Select__control--menu-is-opened,
    .Select__control--is-focused {
    border-color: transparent;
    box-shadow: ${({ theme }) => theme.colors.secondaryButton.BOX_SHADOW};
  }
  & .Select__control--menu-is-opened,
    .Select__control--is-focused > div > div {
    color: ${({ theme }) => theme.colors.primaryText.FOCUSED};
  }
  & .Select__indicator:hover {
    color: ${({ theme }) => theme.colors.primaryText.FOCUSED};
  }
  
  /* menu */
  & .Select__option,
    .Select__option:active {
      background-color: ${({ theme }) => theme.colors.secondaryButton.DEFAULT};
      color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
      border-radius: 8px;
  }
  & .Select__option:hover,
    .Select__option:active,
    .Select__option--is-selected {
      color: ${({ theme }) => theme.colors.primaryText.FOCUSED};
      border-radius: 8px;
  }
`;

export const Select: React.StatelessComponent<ISelectProps> = ({ options, onChange, value, className }) => {
  return (
    <StyledSelect className={className} isFocused={false} classNamePrefix={'Select'} options={options} value={value} onChange={onChange} />
  )
};
