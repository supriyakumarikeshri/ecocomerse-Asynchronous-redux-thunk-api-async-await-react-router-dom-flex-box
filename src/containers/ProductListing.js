import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions"
import ProductComponent from "../containers/ProductComponent";
const ProductListing = () => {
    // const products = useSelector((state) => state);
    //console.log(products)
    const dispatch = useDispatch();
    // const fetchProducts = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products").catch((err) => {
    //         console.log("Err", err);
    //     })

    //     const data = await response.json()
    //     //  console.log(data)
    //     dispatch(setProducts(data))
    // }
    useEffect(() => {
        const asyncFn = () => {
            var data = dispatch(fetchProducts())
            // var newData = data.json()
            console.log("new data", data)
        };
        asyncFn();
        // var data = dispatch(fetchProducts())
        // // const ndata = await data.json()
        // console.log("new data", data)
        // // fetchProducts()
    }, [])
    return (
        <div className="product-listing">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;