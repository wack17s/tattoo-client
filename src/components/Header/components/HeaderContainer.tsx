
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
