import { MovieCard } from '../components/MovieCard.jsx';
import { get } from '../data/httppClient.jsx';
import { useEffect, useState } from 'react';

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   get('/discover/movies').then((data) => {
  //     setMovies(data.results);
  //   });
  // }, []);

  useEffect(() => {
    get('/discover/movie').then((data) => {
      setMovies(data.results || []); 
    }).catch((error) => {
      console.error('Error fetching movies:', error);
      setMovies([]); 
    });
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
