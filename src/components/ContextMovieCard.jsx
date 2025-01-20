import { MovieCard } from '../components/MovieCard.jsx';
import { get } from '../data/httppClient.jsx';
import { useEffect, useState } from 'react';

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   get('/discover/movies').then((data) => {
  //     setMovies(data.results);
  //     console.log(data)
  //   });
  // }, []);

  useEffect(() => {
    get('/discover/movie').then((data) => {
      console.log('Fetched data:', data);
      setMovies(data.results || []); 
    }).catch((error) => {
      console.error('Error fetching movies:', error);
      setMovies([]); 
    });
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-10 p-10 justify-items-center'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
