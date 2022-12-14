import React from 'react'
import Axios from "axios";
import { useEffect ,useState } from 'react';
import style from "./movie.module.css"
export default function Movie() {
    const imgSrc ="https://image.tmdb.org/t/p/w500";
    let [movies , setMovies]= useState([])
    async function getmovies(){
       let {data}=await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ad6a99d4a561224de85963f48507fb49`);
        setMovies(data.results)
    }
    useEffect(()=>{
        getmovies();
    },[])
  return (
    <div className={style.movieBackground}>
        <div className="container">
        <h2 className='text-center text-white'>Trending Movies</h2>
            <div className={`${style.width20} my-4 mx-auto d-flex justify-content-between align-items-center`}>
        <div className={`${style.line}`}></div>
        <svg class={`star-icon text-white ${style.width10}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
        <div className={`${style.line}`}></div>
        </div>
        <div className="row gy-3">
            {movies.map((movies,index)=><div key={index} className='col-md-6 col-lg-3'>
                <div className="shadow-lg rounded">
                    <img src={imgSrc+movies.poster_path} className="w-100 p-2" alt="" />
                    <h4 className='text-white'>{movies.title}</h4>
                    <p className='text-white'><small className='fw-bolder text-white'>Overview:</small> {movies.overview.split(" ").slice(0,6).join(" ")}</p>
                    <small className='text-white'>Release Date:{movies.release_date}</small>
                </div>
            </div>)}
            </div>
        </div>    
    </div>
  )
}
