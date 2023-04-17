import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";


const Products = () => {
    const productUrl = 'https://dummyjson.com/products?limit=100';
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);


    const fetchSomthing = async () => {
        try {
            const response = await axios(productUrl)
            if (response.status === 200) {
                const data = await response.data.products
                console.log(data)
                setData(data)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        fetchSomthing()
    }, [])

    return (
        <>
            <div>
                {/* d-flex flex-wrap */}
                <div className="  " style={{ margin: '29px' }}>
                    <ProductList products={data}/>
                </div>

            </div>
        </>
    )
}
export default Products;


