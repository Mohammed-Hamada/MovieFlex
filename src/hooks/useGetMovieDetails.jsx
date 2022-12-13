import axios from 'axios';
import { useEffect, useState } from 'react';
import { theMovieDB } from '../api';

export default (url) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let source = axios.CancelToken.source();

  useEffect(() => {
    const getMovie = async (url) => {
      try {
        setLoading(true);
        const response = await theMovieDB.get(url, {
          cancelToken: source.token,
        });
        setMovie(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setMovie({});
        setLoading(false);
        setError(true);
      }
    };

    getMovie(url);

    return () => {
      source.cancel();
    };
  }, []);

  return [movie, loading, error];
};
