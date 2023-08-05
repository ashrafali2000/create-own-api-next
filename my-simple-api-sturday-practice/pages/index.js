import { getAll } from "@/services/products"
import AllProducts from "./allProducts";

export default function Home(props) {
  const { products} = props;
  console.log(products)
  if(!products) {
    return <div>
      Loading....
    </div>
  }
  return (
    <div>
{products.map(p =><AllProducts key={p.id} Ptitle={p.title}  img = {p.images[0]} />)}
    </div>
  )
}


export async function getStaticProps() {
  const data =  getAll()
  console.log(data);
  return {
    props : {
      products: data,
    }, 
    // revelicate: 10
  }
}
