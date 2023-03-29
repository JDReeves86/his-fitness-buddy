import type { NextApiRequest, NextApiResponse } from "next";
const wgerURL = 'https://wger.de/api/v2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req)
    }
    catch(err) {
        res.status(400).json({ message: 'Somethign went wrong with the request' })
    }
}
