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

    return (
        <div className="filterbar">
            <select name='categories'>
                <option value="cat">All categories</option>
                <option value="women">Women's clothing</option>
                <option value="men">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
            
            <input type='number' placeholder='All prices (€)'/>
        </div>
    )
}