import { tattooersService } from '../../../services/tattooers.service'

export default async (req, res) => {
  const {
    query
  } = req;

  let tattooers;

  if (query && (query.city || query.styles)) {
    tattooers = await tattooersService.findQuery({ city: query.city, styles: query.styles });
  } else {
    tattooers = await tattooersService.findAll();
  }

  res.statusCode = 200
  res.json(tattooers)
}
