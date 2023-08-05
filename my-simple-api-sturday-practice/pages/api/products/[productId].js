import { getById } from "@/services/products";

export default function handler(req,res){
  if (req.method === "GET") {
    const {productId} = req.query;
    const product = getById(productId);
    return res.status(200).json(product);
  }
  else if(req.method === "POST") {
    console.log(req.body);
    return res.status(200).json({});

  }
  return res.status(404).send();
}