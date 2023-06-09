import { Product } from "../types/product";
import '../styles/ProductCard.css';
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from "../redux/ProductSlice";


interface ProductCardProps {
    product:Product;
}

export function ProductCard({product} : ProductCardProps){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProceed = () => {
        dispatch(setSelectedProduct(product));
        navigate(`/${product.id}`);
    };

    
/*esimerkki tuote
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/

    return (
        <div className="productcard" onClick={()=> {handleProceed()}}>
            <div>
                <p>{product.price} €</p>
            </div>
            <div>
                <img src={product.image}/>
            </div>
            <div>
                <span>{product.category}</span>
                <h3>{product.title}</h3>
            </div>
        </div>
    )

}