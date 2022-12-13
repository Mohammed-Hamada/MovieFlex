import { FlatList } from 'react-native';
import React from 'react';
import { useGetResults } from '../hooks';
import LoadingIndicator from './LoadingIndicator';
import MovieImageCard from './MovieImageCard';
import ErrorIndicator from './ErrorIndicator';

const MoviesList = ({
  url,
  style,
  width,
  height,
  numColumns,
  moviesNumbers,
  horizontal,
}) => {
  const [movies, loading, error] = useGetResults(url);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;
  return (
    <FlatList
      numColumns={numColumns || null}
      data={movies}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal || null}
      style={{ ...style }}
      renderItem={({ item, index }) => (
        <MovieImageCard
          style={{ flex: 1 }}
          movieId={item.id}
          imageUrl={item.poster_path}
          width={width}
          height={height}
          movieNumber={moviesNumbers && index + 1}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MoviesList;
