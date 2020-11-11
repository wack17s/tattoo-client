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
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primaryButton.ACTIVE};
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.primaryButton.DISABLED : theme.colors.primaryButton.DEFAULT};
  &:hover {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.primaryButton.DISABLED : theme.colors.primaryButton.HOVER};
  }
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  &:active {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.primaryButton.DISABLED : theme.colors.primaryButton.ACTIVE};
  }
  color: white;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
