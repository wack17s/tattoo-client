import * as React from 'react';

import styled from 'styled-components';
import { Text } from './Text';

interface ITattooersTextProps {
  title: string;
  text: string;
  leftColTexts?: { title: string; text: string; }[];
  rightColTexts?: { title: string; text: string; }[];

  showMoreButtonText: string;
}

const Wrapper = styled.div`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.BLACK_100};
  overflow: hidden;

  @media (max-width: 720px) {
    margin: 0 8px;
  }
`;

const Container = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    padding: 8px 0px;
  }
`;

const Column = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 720px) {
    padding: 0px 16px;
  }
`;

const Title = styled(Text)`
  margin: 16px 0 8px 0;
  font-weight: 900;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.BLACK_400};
`;

const SubTitle = styled(Text)`
  margin: 16px 0 8px 0;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.BLACK_400};
`;

const StyledText = styled(Text)`
  font-size: 10px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.BLACK_400};
`;

const ShowMore = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 130px;
`;

const ShowMoreGradient = styled.div`
  width: 100%;
  height: 50%;
  background-image: linear-gradient(180deg, rgba(244, 244, 244, 0) , rgba(244, 244, 244, 1));
`;

const ShowMoreButton = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.BLACK_100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShowMoreButtonText = styled(Text)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.CORAL_500};

  @media (max-width: 720px) {
    font-size: 12px;
  }
`;

export const TattooersText: React.FunctionComponent<ITattooersTextProps> = ({
  title,
  text,
  leftColTexts,
  rightColTexts,
  showMoreButtonText
}) => {
  const [showFull, setShowFull] = React.useState(false);

  const showMore = React.useCallback(() => {
    setShowFull(true);
  }, [])

  return (
    <Wrapper>
      <Container style={!showFull ? { maxHeight: 270 } : {}}>
        <Column>
          <Title h1>{title}</Title>
          <StyledText>{text}</StyledText>
          {leftColTexts ? leftColTexts.map(item => [
            <SubTitle h2 key={item.title}>{item.title}</SubTitle>,
            <StyledText key={item.text}>{item.text}</StyledText>,
          ]) : null}
        </Column>
        {rightColTexts ? (
          <Column>
            {rightColTexts.map(item => [
              <SubTitle h2 key={item.title}>{item.title}</SubTitle>,
              <StyledText key={item.text}>{item.text}</StyledText>,
            ])}
          </Column>
        ) : null}
      </Container>
      {!showFull && (
        <ShowMore onClick={showMore}>
          <ShowMoreGradient />
          <ShowMoreButton>
            <ShowMoreButtonText>
              {showMoreButtonText}
            </ShowMoreButtonText>
          </ShowMoreButton>
        </ShowMore>
      )}
    </Wrapper>
  )
}
