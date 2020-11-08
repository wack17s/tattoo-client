import * as React from 'react';

import { Body } from '../../components/Body'
import { Header, HeaderMenuButton } from '../../components/Header'
import { useCity } from '../../hooks/useCity';
import { useStyles } from '../../hooks/useStyles';

import { Filters } from './components/Filters'
// import { tattooersService } from '../../services/tattooers.service';
import { ITattooerDTO } from '../../dto/tattooer.dto';

interface ITattooersProps {
  tattooers: ITattooerDTO[];
}

export const Tattooers: React.StatelessComponent<ITattooersProps> = ({ tattooers }) => {
  const [selectedCity, setCity] = useCity();
  const [selectedStyles, selectStyle] = useStyles();

  return (
    <Body>
      <Header selectedButton={HeaderMenuButton.TATTOOERS}>
        <Filters onStyle={selectStyle} onCity={setCity} selectedStyles={selectedStyles} selectedCity={selectedCity} />
      </Header>
      {JSON.stringify(process.env.GOOGLE_PRIVATE_KEY)}
    </Body>
  )
}

export async function getServerSideProps() {
  // await initializeApp({
  //   credential: credential.cert({
  //     privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  //     projectId: process.env.GOOGLE_PROJECT_ID,
  //     clientEmail: process.env.GOOGLE_CLIENT_EMAIL
  //   })
  // });

  // const tattooers = await tattooersService.findAll();

  return {
    props: {
      // tattooers: JSON.stringify(tattooers)
    },
  }
}
