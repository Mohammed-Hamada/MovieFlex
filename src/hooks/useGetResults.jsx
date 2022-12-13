import axios from 'axios';
import { useEffect, useState } from 'react';
import { theMovieDB } from '../api';

export default (url) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let source = axios.CancelToken.source();

  useEffect(() => {
    const getResults = async (url) => {
      try {
        setLoading(true);
        const response = await theMovieDB.get(url, {
          cancelToken: source.token,
        });
        if (response.data.results) setResults(response.data.results);
        if (response.data.cast) setResults(response.data.cast);
        setLoading(false);
        setError(false);
      } catch (error) {
        setResults([]);
        setLoading(false);
        setError(true);
      }
    };

    getResults(url);

    return () => {
      source.cancel();
    };
  }, []);

  return [results, loading, error];
};
