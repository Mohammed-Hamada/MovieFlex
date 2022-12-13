import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Svg, Text } from 'react-native-svg';
import { colors, sizes } from '../theme';
import LoadingIndicator from './LoadingIndicator';
import { useNavigation } from '@react-navigation/native';

const MovieImageCard = ({
  imageUrl,
  movieId,
  movieNumber,
  loading,
  width,
  height,
  style,
}) => {
  const navigation = useNavigation();

  if (loading) return <LoadingIndicator />;

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        ...styles.imageView,
        ...style,
      }}
      onPress={() => {
        navigation.navigate('Details', {
          id: movieId,
        });
      }}
    >
      <Image
        style={{ width, height, ...styles.movieImage }}
        source={{
          uri: `https://www.themoviedb.org/t/p/w1280${imageUrl}`,
        }}
      />
      <Svg style={styles.numberText}>
        {movieNumber && (
          <Text
            fill={colors.main}
            stroke={colors.activeTab}
            fontSize={100}
            fontWeight="bold"
            x={25}
            y={78}
          >
            {movieNumber}
          </Text>
        )}
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageView: {
    paddingBottom: 20,
    position: 'relative',
    marginHorizontal: sizes.mainMarginHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    borderRadius: sizes.mainRadius,
  },
  numberText: {
    position: 'absolute',
    right: 40,
    top: 160,
  },
});
export default MovieImageCard;
