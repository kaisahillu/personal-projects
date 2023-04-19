import './App.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import { MovieCard } from './MovieCard';


function App() {

  const API_URL = 'http://www.omdbapi.com?apikey=88dd52d7'
  const [movies, setMovies]=useState([]);
  const [filter, changeFilter]=useState("");
  
  
  const searchMovies = async (title) =>  {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  const rows = movies.map(movie => <MovieCard key={movie.imdbID} movieExample={movie} />)

  return (
    <div className="app">
      <h1>Tervetuloa</h1>

      <div className='search'>
        <input placeholder='Etsi elokuvia...' value={filter} onChange={(ev)=>changeFilter(ev.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(filter)}/>
      </div>
      {
        movies?.length > 0 ?(
        <div className='container'>
          {movies.map(movie => <MovieCard key={movie.imdbID} movieExample={movie} />)}
        </div>
      ):(
        <div className='empty'>
          <h2>Elokuvia ei löytynyt</h2>
        </div>

      )
      }
    </div>
  );
}

export default App;
