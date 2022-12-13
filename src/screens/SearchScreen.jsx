import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { LoadingIndicator, MovieImageCard, SearchBar } from './../components';
import { useSearchMovies } from '../hooks';
import { colors, sizes } from '../theme';
import { NoSearchData } from '../../assets/svg';
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, searchMovies, searchLoading] = useSearchMovies();
  console.log(searchMovies);
  return (
    <View>
      <SearchBar
        onSearchTermChange={setSearchTerm}
        searchTerm={searchTerm}
        onSearchTermSubmit={() => {
          searchApi(searchTerm);
        }}
        onFocus={null}
      />
      <View
        style={
          searchMovies.length
            ? styles.moviesContainer
            : {
                height: 500,
                justifyContent: 'center',
                alignItems: 'center',
              }
        }
      >
        {searchMovies.length ? (
          !searchLoading ? (
            <FlatList
              data={searchMovies}
              renderItem={({ item }) => (
                <View style={styles.movieCard}>
                  <MovieImageCard
                    style={styles.movieImage}
                    height={120}
                    width={95}
                    movieId={item.id}
                    imageUrl={item.poster_path}
                  />
                  <View style={styles.movieDetails}>
                    <Text style={[styles.movieTitle, styles.movieText]}>
                      {item.title}
                    </Text>
                    <Text style={styles.movieRating}>
                      <Feather
                        name="star"
                        size={14}
                        color={colors.mainRating}
                      />
                      {'  '}
                      {Math.round(item.vote_average * 10) / 10}
                    </Text>
                    <Text style={styles.movieRelease}>
                      <Feather
                        style={styles.icon}
                        name="calendar"
                        size={14}
                        color={colors.secondText}
                      />
                      {'  '}
                      {new Date(item.release_date).getFullYear()}
                    </Text>
                    <Text style={styles.moviePopularity}>
                      <Ionicons
                        name="md-people-outline"
                        size={14}
                        color={colors.secondText}
                      />
                      {'  '}
                      {Math.round(item.popularity * 10) / 10}
                    </Text>
                  </View>
                </View>
              )}
            />
          ) : (
            <LoadingIndicator />
          )
        ) : (
          <View style={{ alignItems: 'center' }}>
            <NoSearchData />
            <Text
              style={{
                color: colors.mainText,
                fontSize: sizes.fonts.titles,
                width: 240,
                textAlign: 'center',
                marginTop: 10,
              }}
            >
              we are sorry, we can not find the movie :(
            </Text>
            <Text
              style={{
                color: colors.secondText,
                fontSize: sizes.fonts.tabs,
                width: 240,
                textAlign: 'center',
                marginTop: 10,
              }}
            >
              Find your movie by Type title, categories, years, etc{' '}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  moviesContainer: {
    marginBottom: 140,
  },
  movieCard: {
    flexDirection: 'row',
  },
  movieImage: {
    flex: 0,
    alignItems: 'center',
  },
  movieDetails: {
    width: 280,
  },
  movieText: {
    color: colors.mainText,
  },
  movieTitle: {
    fontSize: sizes.fonts.titles,
    marginBottom: 10,
  },
  movieRating: {
    color: colors.mainRating,
  },
  movieRelease: {
    color: colors.secondText,
  },
  moviePopularity: {
    color: colors.activeTab,
  },
});

export default SearchScreen;
