import { useLoaderData, useParams } from "react-router-dom";
import ProductList from "./ProductList";


const Item = () => {
    const { items } = useParams();
    const itemlist = items;
    const categoriesloader = useLoaderData()
    return (
        <>
            <div className="" style={{ margin:'auto',width: '90%' , }}>
                <div>
                    <h3 className="text-center text-success">Currently on  {itemlist} page   </h3>
                </div>
                <ProductList products={categoriesloader} />

            </div>

        </>
    )
}


export async function itemloader({ request, params }) {
    const item = params.items

    const response = await fetch('https://dummyjson.com/products/category/' + item)
    if (!response.ok) {
        /// do something if there is an error
    }
    const data = await response.json();
    return data.products
}

export default Item;