import { getAll } from "@/services/products";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const products = [
]

export default function handler(req, res) {
  if(req.method === "GET"){
    getAll()
    res.status(200).json(products)
  }
  return res.status(404).send();
}





