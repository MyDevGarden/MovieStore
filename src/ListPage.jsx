import React from 'react'
import MovieTitle from './MovieTitle';
import { useFetch } from './useFetch';

export default function ListPage() {
    let {movies,loading} = useFetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');

    return (
      <div className="App">
        {
          loading ? <h1>loading</h1> :
          movies.map(x=><MovieTitle key={x.id} movie_name={x.title} release_date={x.release_date} banner={x.poster_path}/>)
        }
        
      </div> 
    );
}
