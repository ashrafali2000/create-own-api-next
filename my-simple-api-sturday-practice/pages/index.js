import { getAll } from "@/services/products"
import MyCard from "./MyCard";

export default function Home(props) {
  const { products} = props;
  if(!products) {
    return <div>
      Loading....
    </div>
  }
  return (
    <div>
{products.map(p => <MyCard key={p.id} Ptitle={p.title}  img = {p.images[0]} />)}
    </div>
  )
}


export async function getStaticProps() {
  const data = await getAll()
console.log(data)
  return {
    props : {
      products: data,
    }, 
  }
}
