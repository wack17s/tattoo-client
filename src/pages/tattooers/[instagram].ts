import { tattooerService } from '../../services/tattooer.service';
import { Tattooer, getStaticProps } from '../../screens/Tattooer';

export { getStaticProps };

export async function getStaticPaths() {
  const tattooers = await tattooerService.getTattooers();

  return {
    paths: tattooers.map(tattooer => ({
      params: { instagram: tattooer.instagram }
    })),
    fallback: true,
  }
}

export default Tattooer;
