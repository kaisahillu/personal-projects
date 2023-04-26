import { Product } from "../types/product"
import '../styles/ProductCard.css';


interface ProductCardProps {
    product:Product;
}

export function ProductCard({product} : ProductCardProps){

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
        <div className="productcard">
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