import { selectSelectedProduct } from "../redux/ProductSlice";
import '../styles/ProductPage.css'
import {useSelector} from "react-redux";

export function ProductPage(){

    const product=useSelector(selectSelectedProduct)

    return (
        <div className="product-page">

            <div className="column-one">
                <h1>{product.title}</h1>
                <h2>{product.category}</h2>
                <p>{product.description}</p>
                <h2>{product.price} €</h2>
            </div>

            <div className="column-two">
                <img src={product.image} />
            </div>

        </div>
    )
}