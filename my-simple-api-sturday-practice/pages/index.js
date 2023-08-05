import { getAll } from "@/services/products"
import AllProducts from "./allProducts";

export default function Home(props) {
  const {title, products} = props;
  if(!products) {
    return <div>
      Loading....
    </div>
  }
  const productsList = products.map(product => {<AllProducts key={product.id} Ptitle= {product.title}  img = {product.images[0]}> </AllProducts>
  })
  return (
    <>
   {productsList}
    </>
  )
}


export async function getStaticProps() {
  const data =  getAll()
  console.log(data);
  return {
    props : {
      products: data,
    }
  }
}
