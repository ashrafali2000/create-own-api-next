export default function handler(req,res){
  if (req.method === "GET") {
    const {productId} = req.query;
    return res.status(200).json(productId);
  }
  return res.status(404).send();
}