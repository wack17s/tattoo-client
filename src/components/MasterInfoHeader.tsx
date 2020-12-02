import * as React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

interface IMasterInfoHeaderProps {
  profileIconUri?: string;
  instagram: string;
  city?: string;

  instagramIconUri: string;
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
  display: flex;
  flex-direction: column;
`;

export const MasterInfoHeader: React.FunctionComponent<IMasterInfoHeaderProps> = ({ profileIconUri, instagram, city, instagramIconUri }) => (
  <Container>
    {profileIconUri ? <ProfileIcon src={profileIconUri} /> : null}
    <TextContainer>
      <Text p5>{instagram}</Text>
      <Text p2>{city || ''}</Text>
    </TextContainer>
    <a href={`https://instagram.com/${instagram}`} target="_blank">
      <InstagramIcon src={instagramIconUri} />
    </a>
  </Container>
)