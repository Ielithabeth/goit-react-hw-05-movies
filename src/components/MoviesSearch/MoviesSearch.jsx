import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Form } from './MoviesSearch.styled'; 

const MoviesSearch = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault(); 

    const query = e.target.elements.query.value; 

    if (!query) {
      Notiflix.Notify.failure('Please enter something');
      return;
    }

    onSubmit(query); 
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="Search movies" />
      <button type="submit">🔍︎</button>
    </Form>
  );
};

MoviesSearch.propTypes = { onSubmit: PropTypes.func.isRequired };

export default MoviesSearch;