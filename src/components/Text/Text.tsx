import * as React from 'react';

import { H1, H2, H3, H4, H5 } from './components/H';
import { P1, P2, P3, P4, P5 } from './components/P';

interface ITextProps {
  children: any;
  className?: string;

  style?: any;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  p4?: boolean;
  p5?: boolean;
}

export const Text: React.FunctionComponent<ITextProps> = ({ h1, h2, h3, h4, h5, p1, p2, p3, p4, p5, children, style, className }) => {
  if (h1) {
    return (
      <H1 className={className} style={style}>
        {children}
      </H1>
    )
  }

  if (h2) {
    return (
      <H2 className={className} style={style}>
        {children}
      </H2>
    )
  }

  if (h3) {
    return (
      <H3 className={className} style={style}>
        {children}
      </H3>
    )
  }

  if (h4) {
    return (
      <H4 className={className} style={style}>
        {children}
      </H4>
    )
  }

  if (h5) {
    return (
      <H5 className={className} style={style}>
        {children}
      </H5>
    )
  }

  if (p1) {
    return (
      <P1 className={className} style={style}>
        {children}
      </P1>
    )
  }

  if (p2) {
    return (
      <P2 className={className} style={style}>
        {children}
      </P2>
    )
  }

  if (p3) {
    return (
      <P3 className={className} style={style}>
        {children}
      </P3>
    )
  }

  if (p4) {
    return (
      <P4 className={className} style={style}>
        {children}
      </P4>
    )
  }

  if (p5) {
    return (
      <P5 className={className} style={style}>
        {children}
      </P5>
    )
  }

  return <p className={className} style={style}>{children}</p>
};
