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
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.BLACK_400};
  background-color: ${({ theme, selected }) => selected ? theme.colors.BLACK_200 : theme.colors.BLACK_100};
  color: ${({ theme, selected }) => selected ? theme.colors.CORAL_500 : theme.colors.BLACK_400};
  font-size: 14px;
  line-height: 24px;
  box-shadow: ${({ selected, theme }) => selected ? theme.coralBorderShadow : 'none'};
  &:hover {
    background-color: ${({ theme }) => theme.colors.BLACK_200};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.BLACK_200};
    color: ${({ theme }) => theme.colors.CORAL_300};
  }

  @media (max-width: 1024px) {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 18px;
  }
`;
