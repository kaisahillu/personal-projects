import '../styles/FilterBar.css';
import { useEffect, useState } from 'react';
import { store } from '../redux/ProductStore';
import { setProducts, setSelectedCategory, setSelectedPrice } from '../redux/ProductSlice';

export function FilterBar() {

    const [category, changeCat]= useState("");
    const [price, changePrice]=useState({});

    //store.dispatch(setProducts(response)


    return (
        <div className="filterbar">
            <select name='categories' onChange={(ev)=> {store.dispatch(setSelectedCategory(ev.target.value))}}>
                <option value="all cats">All categories</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>

            <input type='number' onChange={(ev)=> {store.dispatch(setSelectedPrice(ev.target.value))}} placeholder='All prices (€)'/>
        </div>
    )
}