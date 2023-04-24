import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import { Product } from './product';
import { ProductCard } from './ProductCard';
import SearchIcon from './SearchIcon.svg'
import { FilterBar } from './FilterBar';

function App() {

  const [products, setProducts]=useState<Product[]>([]);
  const [filter, setFilter]=useState("");

  const searchProducts = async () => {
    try{
      await axios.get <Product[]>
      (`https://fakestoreapi.com/products`).then((response) => {setProducts(response.data)});
      console.log(products);
    } catch (error:any){
      return error;
    }
  }

  useEffect(() => {
    searchProducts();
  }, []);


  const filtered = products.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="app">

      <div className='banner'>
        <h1>Verkkokauppa</h1>
      </div>
      
      <div className='search'>
        <input placeholder='Etsi tuotteita...' value={filter} onChange={(ev)=>setFilter(ev.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={() => {}}/>
      </div>

      {products.length >0 ? 
        (<div className='container'>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>) :
        
        (<div className='empty'>
          <h2>Tuotteita ei löytynyt</h2>
        </div>)
      }
      
    </div>
  );
}

export default App;
