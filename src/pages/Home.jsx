import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../api/api';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } 
      
      catch (error) {
        setError(true);
      } 
      
      finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (<Loader/>) : error 
      ? (<p>Sorry, we could not fetch the trending movies. Please try again later.</p>) 
      : (<TrendingMoviesList trendingMovies={trendingMovies} />)}
    </>
  );
};

export default Home;