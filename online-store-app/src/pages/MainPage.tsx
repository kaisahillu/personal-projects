import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard';
import SearchIcon from '../images/SearchIcon.svg'
import { FilterBar } from '../components/FilterBar';
import { useSelector } from 'react-redux/es/exports';
import { selectSelectedCat, selectSelectedPrice, setProducts } from '../redux/ProductSlice';
import { useDispatch } from 'react-redux/es/exports';
import { store } from '../redux/ProductStore';
import { ProductPage } from './ProductPage';

export function MainPage() {

  const dispatch = useDispatch();

  const [localProducts, setLocalProducts]=useState<Product[]>([]);
  const [filter, setFilter]=useState("");
  let category=useSelector(selectSelectedCat);
  let price=useSelector(selectSelectedPrice); 

  const searchProducts = async () => {
    try{
      await axios.get <Product[]>
      (`https://fakestoreapi.com/products`).then((response) => {setLocalProducts(response.data)});
      console.log(localProducts);
    } catch (error:any){
      return error;
    }
  }
  
  useEffect(() => {
    searchProducts();
    dispatch(setProducts(localProducts));
  }, []);

  
  let filtered = localProducts.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()));

  //muokkaa niin että toimii ristiin eri hakujen (sana, hinta) kanssa, defaulttina all
  //tee apufunktio test filters
  
  if (category === "all cats"){
    filtered=filtered;
  } else {
    filtered=filtered.filter((p) => p.category === category);
  }
  
  return (

    <>
      <div className='banner'>
        <h1>Shopify</h1>
        <FilterBar />
      </div>
      
      <div className='search'>
        <input placeholder='Search products...' value={filter} onChange={(ev)=>setFilter(ev.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={() => {}}/>
      </div>

      {localProducts.length >0 ? 
        (<div className='container'>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>) :
        
        (<div className='empty'>
          <h2>Couldn't find products...</h2>
        </div>)
      }
      
    </>

  );
}

