import { useLocation, Link } from 'react-router-dom'; 
import { Wrapper, List } from './MovieCard.styled'; 
import Loader from 'components/Loader/Loader';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } = movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <Loader />;
  }

  return (
    <>
      <Wrapper>
        <img src={posterUrl} alt={`${title} poster`} width="400"/>

        <div>
          <h1>{title ?? 'Unknown'} ({releaseYear})</h1>
          <p>User Score: <span>{userScore}</span></p>
          <p>Overview: <span>{overview}</span></p>

          {genres && genres.length > 0 && (
            <p>
              Genres: <span>{genres.map(genre => genre.name).join(', ')}</span>
            </p>
          )}
        </div>

      </Wrapper>

      <div>
        <h2>Additional information</h2>

        <List>
          <li>
            <Link
              to="cast"
              state={{ from: location?.state?.from ?? '/' }} 
            >
              Cast
            </Link>
          </li>

          <li>
            <Link
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </List>

      </div>
    </>
  );
};

export default MovieCard;