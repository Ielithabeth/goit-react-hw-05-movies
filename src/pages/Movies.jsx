import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchMovieByName } from '../api/api';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import { List } from './MoviesList.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          Notiflix.Notify.failure('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } 
      
      catch (error) {
        Notiflix.Notify.failure(error.message);
        setMovies([]);
      }
    };

      getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
      <section>
        <MoviesSearch onSubmit={handleSubmit} />

        <List>
          {movies.map(movie => (
            <li key={movie.id}>

              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={`poster off ${movie.title}`} />
                {movie.title}
              </Link>
            </li>
          ))}
        </List>
      </section>
  );
};

export default Movies;