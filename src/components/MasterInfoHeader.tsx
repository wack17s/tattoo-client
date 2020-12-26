import * as React from 'react';
import styled from 'styled-components';
import { ImageWrapper } from './ImageWrapper';

import { Text } from './Text';

interface IMasterInfoHeaderProps {
  profileIconUri?: string;
  instagram: string;
  city?: string;

  instagramIconUri: string;

  small?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: 'scale-down';

  margin-right: 16px;
`;

const InstagramIcon = styled.img`
  width: 22px;
  height: 22px;

  &:hover {
    opacity: 0.5;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled<any>(Text)`
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: ${({ small }) => small ? '140px' : '180px'};

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const MasterInfoHeader: React.FunctionComponent<IMasterInfoHeaderProps> = ({ profileIconUri, instagram, city, instagramIconUri, small }) => (
  <Container>
    {profileIconUri ? (
      <ImageWrapper
        uri={profileIconUri}
        renderComponent={({ src, onError }) => <ProfileIcon src={src} onError={onError} />}
      />
    ) : null}
    <TextContainer>
      <Title small={small} p1>{instagram}</Title>
      <Text p2>{city || ''}</Text>
    </TextContainer>
    <a href={`https://instagram.com/${instagram}`} target="_blank">
      <InstagramIcon src={instagramIconUri} />
    </a>
  </Container>
)