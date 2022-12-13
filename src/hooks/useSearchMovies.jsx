import { useState } from 'react';
import { theMovieDB } from '../api';

export default () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await theMovieDB.get('/search/movie', {
        params: {
          query: searchTerm,
          page: 1,
        },
      });
      setMovies(response.data.results);
      setLoading(false);
      setError(false);
    } catch (error) {
      setMovies([]);
      setLoading(false);
      setError(true);
    }
  };

  return [searchApi, movies, loading, error];
};
