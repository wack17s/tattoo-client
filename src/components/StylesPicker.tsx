import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { getTattooers } from '../utils/getLocalizedText';
// import { useCities } from '../hooks/useCities';

import { LeftArrow, RightArrow } from './Arrow';
import { Chip } from './Chip';
import { Text } from './Text';
import { IStyle } from '../types/style';
import { Button } from './Button';

interface IStylesPickerProps {
  open?: boolean;

  setOpen: (open?: boolean) => void;
  onStyle: (style: IStyle) => void;

  small?: boolean;

  selectedStyles?: IStyle[];

  styles: IStyle[];
}

interface IStyledProps {
  open?: boolean;
  small?: boolean;
}

const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.PICKER_BACKGROUND};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  position: fixed;

  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  background: ${({ theme }) => theme.colors.PICKER_BACKGROUND};
  overflow: hidden;

  z-index: 2;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
  width: 90%;

  & > div {
    margin: 0px 10px 10px 0px;
  }
`;

const ButtonContainer = styled.div<IStyledProps>`
  width: 206px;
  height: ${({ small }) => small ? '40px' : '56px'};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.BLACK_400};
  background: ${({ theme }) => theme.colors.BLACK_100};
  padding: ${({ small }) => small ? '8px 12px' : '20px 20px 20px 12px'};

  @media (max-width: 720px) {
    width: 100%;

    display: flex;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  width: 90%;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.CORAL_500};
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.05em;
  margin-right: 4px;
`;

const Row = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const StylesPicker: React.FunctionComponent<IStylesPickerProps> = ({ styles, open, setOpen, onStyle, small, selectedStyles }) => {
  const { locale } = useRouter();

  const tattooersLocale = getTattooers(locale);

  const close = () => {
    setOpen(false);
  }

  return (
    <>
      <ButtonContainer small={small} onClick={() => { setOpen(true); }}>
        <Text p1={!small} p4={small}>{selectedStyles && selectedStyles.length ? (selectedStyles[0][locale] || selectedStyles[0].en) : tattooersLocale.text.selectStyle}</Text>
        <Row>
          {Boolean(selectedStyles && selectedStyles.length > 1) && (<Circle>
            {`+${selectedStyles.length - 1}`}
          </Circle>)}
          <RightArrow grey />
        </Row>
      </ButtonContainer>
      <Container open={open}>
        <Header>
          <CloseButton onClick={close}>
            <LeftArrow />
          </CloseButton>
          <Text p3>{tattooersLocale.text.selectStyle}</Text>
          <CloseButton />
        </Header>
        <ChipsContainer>
          {styles.map(style => (
            <Chip
              key={`${style.id}_${style.en}`}
              selected={selectedStyles.some(item => item.id === style.id)}
              onClick={() => { onStyle(style); }}
            >
              {style[locale] || style.en}
            </Chip>
          ))}
        </ChipsContainer>
        <StyledButton disabled={!selectedStyles || !selectedStyles.length} onClick={selectedStyles && selectedStyles.length ? close : undefined}>
          {tattooersLocale.text.select}
        </StyledButton>
      </Container>
    </>
  )
}
