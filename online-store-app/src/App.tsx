import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/App.css';
import { Product } from './types/product';
import { ProductCard } from './components/ProductCard';
import SearchIcon from './images/SearchIcon.svg'
import { FilterBar } from './components/FilterBar';

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
        <h1>Shopify</h1>
        <FilterBar />
      </div>
      
      <div className='search'>
        <input placeholder='Search products...' value={filter} onChange={(ev)=>setFilter(ev.target.value)}/>
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
