import * as React from 'react';
import styled from 'styled-components';

interface IBurgerMenuProps {
  open?: boolean;

  setOpen: (open?: boolean) => void;
}

interface IStyledProps {
  open?: boolean;
}

const StyledBurgerMenu = styled.nav<IStyledProps>`
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  /* display: ${({ open }) => open ? 'flex' : 'none'}; */
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-200%)'};
  text-align: left;
  position: absolute;
  top: 96px;
  left: 64px;
  right: 64px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 720px) {
    top: 64px;
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

export const BurgerMenu: React.FunctionComponent<IBurgerMenuProps> = ({ open, children, setOpen }) => {
  const menuRef = React.useRef(null);

  // useOnClickOutside(menuRef, () => { setOpen(false); });

  return (
    <StyledBurgerMenu ref={menuRef} open={open}>
      {children}
    </StyledBurgerMenu>
  )
}

export const useOnClickOutside = (ref, handler) => {
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
