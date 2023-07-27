import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchMovieCast } from '../../api/api'; 
import { List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {cast.length ? (
        <List>
          {cast.map(actor => (
            <li className="cast-card" key={actor.id}>

              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) 
              : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>
          ))}
        </List>
      ) 
      : (<p>We don't have any information about the cast yet.</p>)}
    </div>
  );
};

export default Cast;