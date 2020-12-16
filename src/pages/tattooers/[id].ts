import { Tattooer, getStaticProps } from '../../screens/Tattooer';
import tattooers from '../../parameters/tattooers.json';

export { getStaticProps };

export async function getStaticPaths() {
  return {
    paths: tattooers.map(tattooer => ({
      params: { id: tattooer.instagram }
    })),
    fallback: true,
  }
}

export default Tattooer;
