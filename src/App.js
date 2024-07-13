
import { useEffect, useState } from 'react';
import './App.css';
import MovieTitle from './MovieTitle';


function App() {

  const[movies, setMovies] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlkOGEzYjdmOTljZWQ2NWVlZDJjNzI0MjZjOTVlOCIsIm5iZiI6MTcyMDg4MDc4MS43MTkwMDUsInN1YiI6IjY2OTI4ZDEzYTQ0OTVjNThlZjVlOGZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eyj3rm8gZAcDlHTDo0bRwPldZ1Lsn96cagsj4cv9EiA'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => setMovies(json.results))
  .catch(err => console.error('error:' + err));
  })
  return (
    <div className="App">
      {

        movies.map(x=><MovieTitle key={x.id} movie_name={x.title} release_date={x.release_date} banner={x.poster_path}/>)
      }
      
    </div> 
  );
}

export default App;
