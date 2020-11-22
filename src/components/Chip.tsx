import styled from 'styled-components';

interface IChipProps {
  children: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Chip = styled.div<IChipProps>`
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primaryButton.ACTIVE};
  background-color: ${({ theme, selected }) => selected ? theme.colors.secondaryButton.HOVER : theme.colors.secondaryButton.DEFAULT};
  color: ${({ theme, selected }) => selected ? theme.colors.primaryText.FOCUSED : theme.colors.secondaryText.DEFAULT};
  font-size: 14px;
  line-height: 24px;
  box-shadow: ${({ selected, theme }) => selected ? theme.colors.secondaryButton.BOX_SHADOW : 'none'};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryButton.HOVER};
    color: ${({ theme }) => theme.colors.secondaryText.DEFAULT};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryButton.HOVER};
    color: ${({ theme }) => theme.colors.primaryText.ACTIVE};
  }

  @media (max-width: 1024px) {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 18px;
  }
`;
