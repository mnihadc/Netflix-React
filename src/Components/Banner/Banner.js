import React from 'react'
import { useEffect } from 'react';
import "./Banner.css";
import { API_KEY, imageUrl } from '../../constant/constant'
import axios from '../../axios';
import { useState } from 'react';
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomMovie = response.data.results[randomIndex];
      setMovie(randomMovie)
    })
  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fide-bottom">
      </div>
    </div>
  )
}

export default Banner
