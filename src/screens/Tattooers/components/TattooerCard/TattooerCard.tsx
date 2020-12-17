import * as React from 'react';
import { useRouter } from 'next/router'

import { ITattooer } from '../../../../types/tattooer';

import { DesktopTattooerCard } from './DesktopTattooerCard';
import { MobileTattooerCard } from './MobileTattooerCard';

interface ITattooerCardProps {
  tattooer: ITattooer;
}

export const TattooerCard: React.FunctionComponent<ITattooerCardProps> = ({ tattooer }) => {
  const { locale } = useRouter();

  const posts = tattooer.posts || [];
  const postURIs = posts.map(item => item.uri);

  const previewImage = posts[0].uri;

  const [currentImage, setCurrentImage] = React.useState(previewImage);

  return tattooer ? (
    <>
      <DesktopTattooerCard
        postURIs={postURIs}
        city={tattooer.city ? tattooer.city[locale] : undefined}
        instagram={tattooer.instagram}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <MobileTattooerCard
        postURIs={postURIs}
        // city={cities.find(item => item.id === tattooer.city) ? cities.find(item => item.id === tattooer.city)[locale] : undefined}
        instagram={tattooer.instagram}
      />
    </>
  ) : null;
}
