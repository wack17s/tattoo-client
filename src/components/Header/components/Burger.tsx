import * as React from 'react';
import styled from 'styled-components';

interface IBurgerProps {
  open?: boolean;

  setOpen: (open?: boolean) => void;
}

interface IStyledProps {
  open?: boolean;
}

const StyledBurger = styled.button<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 2px;
    background-color: #0D0C1D;
    border-radius: 17px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Burger: React.FunctionComponent<IBurgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => { setOpen(!open); }}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
