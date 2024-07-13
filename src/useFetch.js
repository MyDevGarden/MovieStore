import {useState, useEffect} from 'react';

export function useFetch(url){
    const[movies, setMovies] = useState([]);
  const[loading, setLoading] = useState(false);

  function load()
  {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjlkOGEzYjdmOTljZWQ2NWVlZDJjNzI0MjZjOTVlOCIsIm5iZiI6MTcyMDg4MDc4MS43MTkwMDUsInN1YiI6IjY2OTI4ZDEzYTQ0OTVjNThlZjVlOGZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eyj3rm8gZAcDlHTDo0bRwPldZ1Lsn96cagsj4cv9EiA'}
    };
    setLoading(true);
    fetch(url, options)
      .then(res => res.json())
      .then(json => {setMovies(json.results);
      setLoading(false)})
      .catch(err => console.error('error:' + err));
  }

  useEffect(() => {
    
    load();
    // eslint-disable-next-line
  },[])

  return{movies, loading};
}