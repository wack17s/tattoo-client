import * as React from 'react';

import { H1, H2, H3, H4, H5 } from './components/H';
import { P1, P2, P3, P4, P5, P1Book, P2Book, P3Book, P4Book, P5Book } from './components/P';

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
  p1book?: boolean;
  p2book?: boolean;
  p3book?: boolean;
  p4book?: boolean;
  p5book?: boolean;

  styleAs?: 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P1Book' | 'P2Book' | 'P3Book' | 'P4Book' | 'P5Book' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
}

export const Text: React.FunctionComponent<ITextProps> = ({
  h1, h2, h3, h4, h5,
  p1, p2, p3, p4, p5,
  p1book, p2book, p3book, p4book, p5book,
  children, style, className, styleAs
}) => {
  if (h1) {
    return (
      <H1 className={`${styleAs} ${className}`} style={style}>
        {children}
      </H1>
    )
  }

  if (h2) {
    return (
      <H2 className={`${styleAs} ${className}`} style={style}>
        {children}
      </H2>
    )
  }

  if (h3) {
    return (
      <H3 className={`${styleAs} ${className}`} style={style}>
        {children}
      </H3>
    )
  }

  if (h4) {
    return (
      <H4 className={`${styleAs} ${className}`} style={style}>
        {children}
      </H4>
    )
  }

  if (h5) {
    return (
      <H5 className={`${styleAs} ${className}`} style={style}>
        {children}
      </H5>
    )
  }

  if (p1) {
    return (
      <P1 className={`${styleAs} ${className}`} style={style}>
        {children}
      </P1>
    )
  }

  if (p2) {
    return (
      <P2 className={`${styleAs} ${className}`} style={style}>
        {children}
      </P2>
    )
  }

  if (p3) {
    return (
      <P3 className={`${styleAs} ${className}`} style={style}>
        {children}
      </P3>
    )
  }

  if (p4) {
    return (
      <P4 className={`${styleAs} ${className}`} style={style}>
        {children}
      </P4>
    )
  }

  if (p5) {
    return (
      <P5 className={`${styleAs} ${className}`} style={style}>
        {children}
      </P5>
    )
  }

  if (p1book) {
    return (
      <P1Book className={`${styleAs} ${className}`} style={style}>
        {children}
      </P1Book>
    )
  }

  if (p2book) {
    return (
      <P2Book className={`${styleAs} ${className}`} style={style}>
        {children}
      </P2Book>
    )
  }

  if (p3book) {
    return (
      <P3Book className={`${styleAs} ${className}`} style={style}>
        {children}
      </P3Book>
    )
  }

  if (p4book) {
    return (
      <P4Book className={`${styleAs} ${className}`} style={style}>
        {children}
      </P4Book>
    )
  }

  if (p5book) {
    return (
      <P5Book className={`${styleAs} ${className}`} style={style}>
        {children}
      </P5Book>
    )
  }

  return <p className={`${styleAs} ${className}`} style={style}>{children}</p>
};
