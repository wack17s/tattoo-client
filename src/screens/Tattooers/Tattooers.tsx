import * as React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import Head from 'next/head'

// import { tattooerService } from '../../services/tattooer.service';
import { Body } from '../../components/Body'
import { HeaderMenuButton } from '../../components/Header'
import { useSelectedStyles } from '../../hooks/useSelectedStyles';

import { TattooerCard } from './components/TattooerCard'
import { ITattooer } from '../../types/tattooer';
import { ICity } from '../../types/city';
import { IStyle } from '../../types/style';

interface ITattooersProps {
  cities: ICity[];
  styles: IStyle[];

  city?: ICity;

  tattooers: ITattooer[];

  descriptionTag?: string;
  titleTag?: string;
}

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;
  padding-top: 230px;
  overflow: hidden;

  & > div {
    margin: 0px 16px 32px 16px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 24px;
    padding: 0 8px;
    padding-top: 120px;

    & > div {
      margin: 0px 0px 20px 0px;
    }
  }
`;

const PER_PAGE = 30;

export const Tattooers: React.FunctionComponent<ITattooersProps> = ({ tattooers, city, styles, cities, descriptionTag, titleTag }) => {
  const { push, locale } = useRouter();

  const [hideFilter, setHideFilter] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = (event) => {
      if (window.innerWidth <= 720) {
        if (hideFilter) {
          setHideFilter(false);
        }

        return;
      }

      if (window.pageYOffset < 50) {
        setHideFilter(false);

        return;
      }

      if (!hideFilter) {
        setHideFilter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const [tattooersPortioned, setTattooersPortioned] = React.useState([]);

  const { selectedStyles, setStyle, setStyles } = useSelectedStyles();
  const tatts = [...tattooers.filter(item => {
    if (!selectedStyles || !selectedStyles.length) {
      return true;
    }

    return item.styles && item.styles.length && item.styles.some(style => (selectedStyles || []).some(item => item.id === style.id))
  })];

  React.useEffect(() => {
    setTattooersPortioned(tatts.slice(0, PER_PAGE));
  }, [selectedStyles, city]);

  const onCity = (city: ICity) => {
    push(city ? city.name : 'tattooers');
    setStyles([]);
  }

  const addPortion = () => {
    if (tatts.length > tattooersPortioned.length) {
      setTattooersPortioned([...tattooersPortioned, ...tatts.slice(tattooersPortioned.length, tattooersPortioned.length + PER_PAGE)]);
    }
  }

  const [cityPickerOpen, setCityPickerOpen] = React.useState(false);
  const [stylesPickerOpen, setStylesPickerOpen] = React.useState(false);

  return (
    <Body
      innerContainerStyle={{ margin: 0 }}
      selectedButton={HeaderMenuButton.TATTOOERS}
      disableScroll={cityPickerOpen || stylesPickerOpen}
      stickyHeader
      discardStyles={() => { setStyles([]); }}
      selectedCity={city}
      selectedStyles={selectedStyles}
      minimizeFilter={hideFilter}
      openFilters={() => { setHideFilter(false); }}
      filterProps={{
        cityPickerOpen: cityPickerOpen,
        setCityPickerOpen: setCityPickerOpen,
        setStylesPickerOpen: setStylesPickerOpen,
        stylesPickerOpen: stylesPickerOpen,
        onStyle: setStyle,
        onCity: onCity,
        selectedStyles: selectedStyles,
        selectedCity: city,
        cities: cities,
        styles: styles,
      }}
    >
      <Head>
        <title>{titleTag}</title>
        <meta name="description" content={descriptionTag} />
        <meta httpEquiv="content-language" content={locale} />
      </Head>
      <StyledInfiniteScroll
        dataLength={tattooersPortioned.length} //This is important field to render the next data
        next={addPortion}
        hasMore={tatts.length > tattooersPortioned.length}
        loader={null}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality
        // refreshFunction={() => {}}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {tattooersPortioned && tattooersPortioned.length ? tattooersPortioned.map(item => <TattooerCard key={item.instagram} tattooer={item} />) : null}
      </StyledInfiniteScroll>
      {/* <CardsContainer>
        
      </CardsContainer> */}
    </Body>
  )
}
