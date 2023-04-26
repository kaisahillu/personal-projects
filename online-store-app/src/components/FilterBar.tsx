import '../styles/FilterBar.css';

export function FilterBar() {

    /*
    <select name='price'>
                <option value="pricing">All price ranges</option>
                <option value="1">1 - 50 €</option>
                <option value="2">51 - 100 €</option>
                <option value="3">101 - 150 €</option>
                <option value="4">151 - 200 €</option>
                <option value="5">Over 200 €</option>
            </select>

    */


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
        <div className="filterbar">
            <select name='categories'>
                <option value="cat">All categories</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>

            <input type='number' placeholder='All prices (€)'/>
        </div>
    )
}