
import styled from 'styled-components';

import { Text } from '../components/Text';

export const Body = styled.div`
  max-width: 700px;
  padding-bottom: 80px;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
`;

export const Description = styled(Text)`
  margin: 24px 0;
`;

export const SubTitle = styled<any>(Text)`
  margin-top: 40px;
  max-width: ${({ small }) => small ? '300px' : '100%'};
`;

export const SmallSubTitle = styled<any>(Text)`
  margin-bottom: 16px;
`;

export const TextBlock = styled<any>(Text)`
  margin-top: ${({ noMargin }) => noMargin ? 0 : 24}px;
`;

export const Info = styled(Text)`
  color: ${({ theme }) => theme.colors.BLACK_400};
`;
