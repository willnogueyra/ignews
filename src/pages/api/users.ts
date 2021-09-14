import {NextApiRequest, NextApiResponse} from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'William'},
    { id: 2, name: 'Lucas'},
    { id: 3, name: 'João'},
  ]

  return response.json(users)
}