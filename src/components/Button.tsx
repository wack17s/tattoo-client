import styled from 'styled-components';

interface IButtonProps {
  disabled?: boolean;
  children: string;
}

export const Button = styled.div<IButtonProps>`
  width: 206px;
  height: 56px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.CORAL_300 : theme.colors.CORAL_500};
  &:hover {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.CORAL_300 : theme.colors.CORAL_700};
  }
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  &:active {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.CORAL_300 : theme.colors.CORAL_500};
  }
  color: white;
  font-weight: 600;

  @media (max-width: 720px) {
    width: 100%;
  }
`;
