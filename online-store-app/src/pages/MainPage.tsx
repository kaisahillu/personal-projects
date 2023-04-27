import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard';
import SearchIcon from '../images/SearchIcon.svg'
import { FilterBar } from '../components/FilterBar';
import { useSelector } from 'react-redux/es/exports';
import { setProducts } from '../redux/ProductSlice';
import { useDispatch } from 'react-redux/es/exports';
import { store } from '../redux/ProductStore';
import { ProductPage } from './ProductPage';

export function MainPage() {

  const [localProducts, setLocalProducts]=useState<Product[]>([]);
  const [filter, setFilter]=useState("");

  const dispatch = useDispatch();

  /* Tee HTTP kutsu suoraan storeen ja ota sieltä tuotelista
  const getAll= async () => {
    try{
      await axios.get <Product[]>
      (`https://fakestoreapi.com/products`).then((response) => {store.dispatch(setProducts(response))});
    } catch (error:any){
      return error;
    }
  }

  useEffect(() => {
    getAll();
    ??? useSelector<Product []>(state => setLocalProducts(state))
    console.log(localProducts);
  }, []);



  */


  const searchProducts = async () => {
    try{
      await axios.get <Product[]>
      (`https://fakestoreapi.com/products`).then((response) => {setLocalProducts(response.data)});
      console.log(localProducts);
    } catch (error:any){
      return error;
    }
  }
  
  //lisää kategoria, hinta, tms. muuttujat
  useEffect(() => {
    searchProducts();
    dispatch(setProducts(localProducts));
  }, []);
  
  const filtered = localProducts.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()));

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
          <h2>Tuotteita ei löytynyt</h2>
        </div>)
      }
      
    </>

  );
}

