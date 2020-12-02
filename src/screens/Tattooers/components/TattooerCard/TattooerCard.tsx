import * as React from 'react';
import { useRouter } from 'next/router'

import { ITattooerDTO } from '../../../../dto/tattooer.dto';
import { cities } from '../../../../cities';

import { DesktopTattooerCard } from './DesktopTattooerCard';
import { MobileTattooerCard } from './MobileTattooerCard';

interface ITattooerCardProps {
  tattooer: ITattooerDTO;
}

export const TattooerCard: React.FunctionComponent<ITattooerCardProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  const postURIs = tattooer.postURIs || [];

  const previewImage = postURIs[0];

  const [currentImage, setCurrentImage] = React.useState(previewImage);

  return tattooer ? (
    <>
      <DesktopTattooerCard
        postURIs={postURIs}
        city={cities.find(item => item.id === tattooer.city) ? cities.find(item => item.id === tattooer.city)[locale] : undefined}
        instagram={tattooer.instagram}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <MobileTattooerCard
        postURIs={postURIs}
        city={cities.find(item => item.id === tattooer.city) ? cities.find(item => item.id === tattooer.city)[locale] : undefined}
        instagram={tattooer.instagram}
      />
    </>
  ) : null;
}
