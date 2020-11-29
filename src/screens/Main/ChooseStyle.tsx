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
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';
import { BreadCrumb } from '../../components/BreadCrumb';
import { useStyles } from '../../hooks/useStyles';
import { useTattooersQuery } from '../../hooks/useTattooersQuery';

import { Image, Container, InnerContainer, ChipsContainer } from './components';

export const ChooseStyle: NextPage = () => {
  const { locale } = useRouter();

  const chooseStyle = getChooseStyle(locale);
  const pageNames = getPageNames(locale);

  const [selectedStyles, selectStyle] = useStyles();

  const tattooerQuery = useTattooersQuery();

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Container>
        <InnerContainer>
          <BreadCrumb pageNames={[pageNames[PageName.MAIN], pageNames[PageName.CHOOSE_CITY], chooseStyle.name]} />
          <Text style={{ marginTop: 16 }} h2>{chooseStyle.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: 48 }}>{chooseStyle.text.text}<br />{chooseStyle.text.text2}</Text>
          <ChipsContainer>
            {getSortedStyles().map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedStyles && selectedStyles.some(selectedStyle => selectedStyle.id === item.id)} onClick={selectStyle.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </ChipsContainer>
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
