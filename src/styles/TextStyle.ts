import { createGlobalStyle } from 'styled-components';

export const TextStyle = createGlobalStyle`
  .H1 {
    font-family: 'Rubik' !important;
    font-size: 71px !important;
    line-height: 80px !important;
    letter-spacing: 0.01em !important;

    @media (max-width: 720px) {
      font-size: 42px !important;
      line-height: 52px !important;
    }
  }

  .H2 {
    font-family: 'Rubik' !important;
    font-size: 42px !important;
    line-height: 56px !important;

    @media (max-width: 720px) {
      font-size: 32px !important;
      line-height: 40px !important;
    }
  }

  .H3 {
    font-family: 'Rubik' !important;
    font-size: 24px !important;
    line-height: 34px !important;
    font-weight: 600 !important;
  }

  .H4 {
    font-family: 'Rubik' !important;
    font-size: 16px !important;
    line-height: 24px !important;
    font-weight: 600 !important;
  }

  .H5 {
    font-family: 'Rubik' !important;
    font-size: 14px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
  }

  .P1 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .P2 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 14px !important;
    line-height: 24px !important;

    @media (max-width: 720px) {
      font-size: 17px !important;
      line-height: 24px !important;
    }
  }

  .P3 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 10px !important;
    line-height: 16px !important;

    @media (max-width: 720px) {
      font-size: 16px !important;
      line-height: 24px !important;
      font-weight: 600 !important;
    }
  }

  .P4 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 12px !important;
    line-height: 20px !important;

    @media (max-width: 720px) {
      font-size: 14px !important;
      line-height: 24px !important;
    }
  }

  .P5 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 18px !important;
    line-height: 24px !important;
    font-weight: 600 !important;

    @media (max-width: 720px) {
      font-size: 14px !important;
      line-height: 20px !important;
    }
  }

  .P1Book {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 26px !important;
  }

  .P2Book {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 24px !important;
    line-height: 34px !important;
    font-weight: 600 !important;
  }

  .P3Book {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 24px !important;
    font-weight: 600 !important;
  }

  .P4Book {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px !important;
    line-height: 32px !important;
  }

  .P5Book {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 24px !important;
    line-height: 34px !important;
    font-weight: 300 !important;

    @media (max-width: 720px) {
      font-size: 18px !important;
      line-height: 30px !important;
    }
  }
`;
