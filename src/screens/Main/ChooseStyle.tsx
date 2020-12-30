import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getChooseStyle, getPageNames } from '../../utils/getLocalizedText';
import { PageName } from '../../types/pageName.enum';
import { Body } from '../../components/Body'
import { Chip } from '../../components/Chip'
import { HeaderMenuButton } from '../../components/Header'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button';
import { BreadCrumb } from '../../components/BreadCrumb';
import { useSelectedStyles } from '../../hooks/useSelectedStyles';
// import { useTattooersQuery } from '../../hooks/useTattooersQuery';

import { Image, Container, InnerContainer, ChipsContainer } from './components';
import { useSelectedCity } from '../../hooks/useSelectedCity';
import { IStyle } from '../../types/style';
import { dataService } from '../../services/data.service';
import { ITattooer } from '../../types/tattooer';

interface IChooseStyleProps {
  styles: IStyle[];
  tattooers: ITattooer[];
}

export const ChooseStyle: NextPage<IChooseStyleProps> = ({ styles, tattooers }) => {
  const { locale, push, pathname, reload } = useRouter();

  const chooseStyle = getChooseStyle(locale);
  const pageNames = getPageNames(locale);

  const { selectedStyles, setStyle } = useSelectedStyles();
  const [selectedCity] = useSelectedCity();

  const filteredTattooers = tattooers.filter(item => !selectedCity || item.city_id === selectedCity.id);
  const filteredStyles = styles.filter(style => 
    filteredTattooers.some(tattooer => tattooer.style_ids && tattooer.style_ids.includes(style.id))
  );

  const breadCrumbs = [
    {
      label: pageNames[PageName.MAIN],
      onPress: () => {
        push('/');
      }
    },
    {
      label: pageNames[PageName.CHOOSE_CITY],
      onPress: () => {
        push('/choose-city');
      }
    },
    {
      label: chooseStyle.name,
      onPress: () => {
        reload();
      }
    },
  ];

  return (
    <Body selectedButton={HeaderMenuButton.MAIN}>
      <Head>
        <link rel="canonical" href={`${locale === 'ua' ? '/ua' : ''}${pathname}`} />
      </Head>
      <Container>
        <InnerContainer>
          <BreadCrumb items={breadCrumbs} />
          <Text style={{ marginTop: 16 }} h2>{chooseStyle.text.title}</Text>
          <Text style={{ marginTop: 24, marginBottom: 48 }}>{chooseStyle.text.text}</Text>
          <ChipsContainer displayOnMobile>
            {filteredStyles.map(item => (
              <Chip key={`${item.id}_${item.en}`} selected={selectedStyles && selectedStyles.some(selectedStyle => selectedStyle.id === item.id)} onClick={setStyle.bind(null, item)}>{item[locale] || item.en}</Chip>
            ))}
          </ChipsContainer>
          <Link href={{ pathname: selectedCity ? selectedCity.name : 'tattooers' }} locale={locale}>
            <Button style={{ marginTop: 48 }}>
              {selectedStyles.length ? chooseStyle.text.chooseButton : chooseStyle.text.button}
            </Button>
          </Link>
        </InnerContainer>
        <InnerContainer style={{ alignItems: 'center' }}>
          <Image src="/images/buffalo.svg" />
        </InnerContainer>
      </Container>
    </Body>
  )
}

export async function getStaticProps() {
  await dataService.init();
  const { usedStyles, allTattooers } = dataService.getData();

  return {
    props: JSON.parse(JSON.stringify({
      styles: usedStyles,
      tattooers: allTattooers
    }))
  }
}
