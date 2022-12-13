import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useGetMovieDetails } from '../hooks';
import {
  ControlTabs,
  ErrorIndicator,
  LoadingIndicator,
  MovieDetails,
} from '../components';
import { colors, sizes } from '../theme';

const DetailsScreen = () => {
  const { params } = useRoute();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [movie, loading, error] = useGetMovieDetails(`/movie/${params.id}`);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <View style={styles.screenView}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: `https://www.themoviedb.org/t/p/w1280${movie.backdrop_path}`,
          }}
        />
        <View style={styles.posterContainer}>
          <Image
            style={styles.posterImage}
            source={{
              uri: `https://www.themoviedb.org/t/p/w1280${movie.poster_path}`,
            }}
          />
          <BlurView intensity={30} tint="dark" style={styles.ratingContainer}>
            <Feather name="star" size={24} color={colors.mainRating} />
            <Text style={styles.rating}>
              {Math.round(movie.vote_average * 10) / 10}
            </Text>
          </BlurView>
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <Text style={styles.iconText}>
          <Feather
            style={styles.icon}
            name="calendar"
            size={14}
            color={colors.secondText}
          />
          {'  '}
          {new Date(movie.release_date).getFullYear()}
        </Text>
        <Text style={styles.horizontalBar}>|</Text>
        <Text style={styles.iconText}>
          <AntDesign
            style={styles.icon}
            name="clockcircleo"
            size={14}
            color={colors.secondText}
          />
          {'  '}
          {movie.runtime} Minutes
        </Text>
        <Text style={styles.horizontalBar}>|</Text>
        <Text style={styles.iconText}>
          <Feather
            style={styles.icon}
            name="tag"
            size={14}
            color={colors.secondText}
          />
          {'  '}
          {movie?.genres && movie.genres[0].name}
        </Text>
      </View>
      <View style={styles.tabsContainer}>
        <ControlTabs
          onTabPress={(index) => {
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          values={['About Movie', 'Reviews', 'Cast']}
        />
        <>
          <MovieDetails
            selectedIndex={selectedIndex}
            movieDescription={movie.overview}
            id={params.id}
          />
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  },
  imagesContainer: {
    position: 'relative',
  },
  backgroundImage: {
    height: 240,
    borderBottomLeftRadius: sizes.mainRadius,
    borderBottomRightRadius: sizes.mainRadius,
  },
  posterContainer: {
    position: 'relative',
  },
  posterImage: {
    width: 95,
    height: 130,
    position: 'absolute',
    bottom: -130 / 2,
    left: 30,
    borderRadius: sizes.mainRadius,
  },
  ratingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: sizes.mainRadius - 5,
    overflow: 'hidden',
    right: 10,
    bottom: 10,
  },
  rating: {
    fontSize: sizes.fonts.subTitles,
    color: colors.mainRating,
    fontWeight: 'bold',
  },
  movieTitle: {
    position: 'absolute',
    top: 10,
    left: '34%',
    fontSize: sizes.fonts.titles,
    fontWeight: 'bold',
    color: colors.mainText,
    width: 200,
  },
  iconsContainer: {
    marginTop: sizes.mainMarginTop + 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  horizontalBar: {
    marginHorizontal: 10,
    color: colors.secondText,
  },
  icon: {
    paddingRight: 5,
    flex: 1,
  },
  iconText: {
    color: colors.secondText,
    fontSize: sizes.fonts.details + 2,
  },
  tabsContainer: {
    marginHorizontal: sizes.mainMarginHorizontal,
  },
});

export default DetailsScreen;
