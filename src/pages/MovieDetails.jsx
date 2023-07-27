import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../api/api';
import MovieCard from 'components/MovieCard/MovieCard';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import Loader from 'components/Loader/Loader';

const MovieDelails = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const data = await fetchMovieById(movieId);
        setSelectedMovie(data);
      } 
      
      catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
      <section>
        <GoBackButton/>

        <MovieCard movie={selectedMovie} />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
  );
};

export default MovieDelails;