import { getAll } from "@/services/products"

export default function Home(props) {
  const {title, products} = props;
  if(!products) {
    return <div>
      Loading....
    </div>
  }
  const productsList = products.map(product => {
    return (<li key={product.id}>
      <p>{product.title}</p>
    </li>)
  })
  return (
    <>
   <h1>It is my API projects</h1>
   <h2>{title}</h2>
   {productsList}
    </>
  )
}


export async function getStaticeProps() {
  const data =  getAll()
  console.log(data);
  return {
    props : {
      title: "hello",
      products: data,

    }
  }
}
