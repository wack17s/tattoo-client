import * as React from 'react';

interface IImageProps {
  uri?: string;
  renderComponent: (props: { src: string; onError: () => void; }) => any;
}

export const DOG_SRC = 'dog.svg';

export const ImageWrapper: React.FunctionComponent<IImageProps> = ({ uri, renderComponent }) => {
  const [src, setSrc] = React.useState(uri);

  React.useEffect(() => {
    if (!uri) {
      setDogSrc()
    }
  }, [])

  const setDogSrc = () => {
    setSrc(DOG_SRC);
  }

  return renderComponent({ src, onError: setDogSrc });
}
