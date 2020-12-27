import * as React from 'react';

interface IImageProps {
  uri?: string;
  renderComponent: (props: { src: string; onError: () => void; }) => any;
  placeholderUri?: string;
}

export const PLACEHOLDER_SRC = 'snake.svg';

export const ImageWrapper: React.FunctionComponent<IImageProps> = ({ uri, renderComponent, placeholderUri }) => {
  const [src, setSrc] = React.useState(uri);

  React.useEffect(() => {
    if (!uri) {
      setPlaceholderSrc()
    }

    if (uri !== src) {
      setSrc(uri);
    }
  }, [uri])

  const setPlaceholderSrc = () => {
    setSrc(placeholderUri || PLACEHOLDER_SRC);
  }

  return renderComponent({ src, onError: setPlaceholderSrc });
}
