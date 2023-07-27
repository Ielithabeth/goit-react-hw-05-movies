import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from '../../pages/MoviesList.styled';

const TredingMovieList = ({ trendingMovies }) => {
  return (
    <section>
      <h1>Trending today</h1>

      <List>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w400/${trendingMovie.poster_path}`} alt={`poster off ${trendingMovie.title}`} width="300"/>
              {trendingMovie.img}{trendingMovie.title}
            </Link>
          </li>
        ))}
      </List>
    </section>
  );
};

export default TredingMovieList;

TredingMovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};