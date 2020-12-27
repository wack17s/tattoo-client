import * as React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { ImageWrapper } from './ImageWrapper';

interface IMasterInfoHeaderProps {
  profileIconUri?: string;
  instagram: string;
  city?: string;

  instagramIconUri: string;

  small?: boolean;
}

const PLACEHOLDER_SRC = '/images/dog.svg';

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
  object-fit: ${({ src }) => src === PLACEHOLDER_SRC ? 'scale-down' : 'cover'};

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
        placeholderUri={PLACEHOLDER_SRC}
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