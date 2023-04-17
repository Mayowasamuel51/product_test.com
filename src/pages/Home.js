import axios from "axios";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, Link, defer, Await, useRouteLoaderData } from "react-router-dom";
import CategoriesList from "../components/Categorieslist";
import ProductList from "../components/ProductList";
import Loaderone from "../loaders/Loaderone";
import Loadertwo from "../loaders/Loadertwo";


function Home() {
    const { products, products_cart } = useRouteLoaderData('product-id')
    return (
        <>
            <div className='contain'>
                {/* <CategoriesList categories={data}/> */}

                <div className="d-flex justify-content-between mt-5" style={{margin:'auto', width:'50%'}}>
                    <div>
                        <button className="btn btn-dark">About Team</button>
                    </div>

                    <div>
                        <button className="btn btn-success">Product</button>
                    </div>
                </div>

                <br/>
                <Suspense fallback={<p className="text-center"><Loaderone/></p>}>
                    <Await resolve={(products_cart)}>
                        {abcd => <CategoriesList categories={abcd} />}
                    </Await>
                </Suspense>

                <Suspense fallback={<p className="text-center"><Loadertwo/></p>}>
                    <Await resolve={(products)}>
                        {products_cart => <ProductList products={products_cart} />}
                    </Await>
                </Suspense>


            </div>
        </>
    )
}

export default Home;

async function allProduct() {
    const response = await fetch('https://dummyjson.com/products?limit=9')
    if (!response.ok) {
        /// do something if there is an error
    }
    const data = await response.json();
    return data.products
}

async function loaderHome() {
    const response = await fetch('https://dummyjson.com/products/categories');
    if (!response.ok) {
        /// do something if there is an error
    }
    const resultData = await response.json();
    return resultData
}


export async function loader() {
    return defer({
        products_cart: loaderHome(),
        products: allProduct(),
    
    })
}



//  defer

//  Suspense from react

//  Await in react-router-dom
