import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getSortedStyles } from '../../utils/getSortedStyles';
import { getChooseStyle, getPageNames } from '../../utils/getLocalizedText';
import { PageName } from '../../types/pageName.enum';
import { Body } from '../../components/Body'
import { Chip } from '../../components/Chip'
import { Header, HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';
import { PagesMap } from '../../components/PagesMap';
import { useStyles } from '../../hooks/useStyles';
import { useTattooersQuery } from '../../hooks/useTattooersQuery';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 445px;
  height: 489px;
`;

const StylesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0px 10px 10px 0px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const ChooseStyle: NextPage = () => {
  const { locale } = useRouter();

  const chooseStyle = getChooseStyle(locale);
  const pageNames = getPageNames(locale);

  const [selectedStyles, selectStyle] = useStyles();

  const tattooerQuery = useTattooersQuery();

  return (
    <Body>
      <Header selectedButton={HeaderMenuButton.MAIN} />
      <Container>
        <InnerContainer>
          <PagesMap pageNames={[pageNames[PageName.MAIN], pageNames[PageName.CHOOSE_CITY], chooseStyle.name]} />
          <Text style={{ marginTop: 16 }} subTitle>{chooseStyle.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: 48 }}>{chooseStyle.text.text}<br />{chooseStyle.text.text2}</Text>
          <StylesContainer>
            {getSortedStyles().map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedStyles && selectedStyles.some(selectedStyle => selectedStyle.id === item.id)} onClick={selectStyle.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </StylesContainer>
          <Link href={{ pathname: 'tattooers', query: tattooerQuery }} locale={locale}>
            <Button style={{ marginTop: 48 }}>
              {selectedStyles.length ? chooseStyle.text.chooseButton : chooseStyle.text.button}
            </Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/buffalo.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}
