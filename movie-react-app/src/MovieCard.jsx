import React, { useEffect } from 'react';
import PlaceholdPic from './film-reel-movie-icon.jpg'

export function MovieCard({movieExample}){
    return(
        <div className='movie'>
          <div>
            <p>{movieExample.Year}</p>
          </div>
          <div>
            <img src={movieExample.Poster !=='N/A' ? movieExample.Poster : PlaceholdPic}/>
          </div>
          <div>
            <span>{movieExample.Type}</span>
            <h3>{movieExample.Title}</h3>
          </div>
        </div>        
    )
} 

//export default