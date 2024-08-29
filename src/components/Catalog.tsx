import React, { useEffect, useState } from 'react'
import MyNav from './MyNav'
import axios from 'axios';

interface Movie{
  Title:string,
  Runtime:string,
  Year:string,
  Poster:string
}

export default function Catalog() {

const [movies ,setMovies] = useState<Movie[]>([]);
  useEffect(
  ()=>{
axios.get(
  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
  .then(res => setMovies(res.data));
}
);



  return (
    <div>
         <MyNav />
         <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Runtime</th>
      <th scope="col">Year</th>
      <th scope="col">Poster</th>
    </tr>
  </thead>
  <tbody>
    {movies.map(eachMovie =>(
      <tr>
      <td>{eachMovie.Title}</td>
      <td>{eachMovie.Runtime}</td>
      <td>{eachMovie.Year}</td>
      <td>
        <img width="200px" height="250px" src={eachMovie.Poster} />
        </td>
    </tr>
   
    ))}
    
  </tbody>
</table>
        
        
        </div>
  )
}
