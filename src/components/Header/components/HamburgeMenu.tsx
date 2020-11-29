import * as React from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

interface IHamburgerMenuProps {
  open?: boolean;

  setOpen: (open?: boolean) => void;
}

interface IStyledProps {
  open?: boolean;
}

const StyledMenu = styled.nav<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  /* display: ${({ open }) => open ? 'flex' : 'none'}; */
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-200%)'};
  text-align: left;
  position: absolute;
  top: 96px;
  left: 64px;
  right: 64px;

  border-top: 0.5px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 720px) {
    top: 80px;
    left: 8px;
    right: 8px;
  }

  transition: transform 0.5s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const Menu: React.StatelessComponent<IHamburgerMenuProps> = ({ open, children }) => {
  return (
    <StyledMenu open={open}>
      {children}
    </StyledMenu>
  )
}

const StyledBurger = styled.button<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 2px;
    background: #0D0C1D;
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

export const Burger: React.StatelessComponent<IHamburgerMenuProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};
