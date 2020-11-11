import { tattooersService } from '../../../services/tattooers.service'

export default async (req, res) => {
  const {
    query: { tid },
  } = req

  const tattooer = await tattooersService.getOne(tid);

  res.statusCode = 200
  res.json(tattooer)
}
