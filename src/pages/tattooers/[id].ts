import { Tattooer, getStaticProps } from '../../screens/Tattooer';

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/tattooers/alka_tattoo',
      // Object variant:
      { params: { id: 'alka_tattoo' } },
    ],
    fallback: true,
  }
}

export default Tattooer;
