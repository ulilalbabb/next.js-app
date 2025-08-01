// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const data = [
        {
            id: 1,
            name: "Hoodie",
            price: 100,
            size: "Small"
        },
        {
            id: 2,
            name: "Knit Wear",
            price: 200,
            size: "Large"
        }
    ]

  res.status(200).json({ status: true, statusCode: 200, data });
}
