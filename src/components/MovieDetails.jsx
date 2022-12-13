import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { colors, sizes } from '../theme';
import { useGetResults } from '../hooks';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';
import MovieImageCard from './MovieImageCard';

const MovieDetails = ({ selectedIndex, movieDescription, id }) => {
  const [reviews, reviewsLoading, reviewsError] = useGetResults(
    `/movie/${id}/reviews`
  );
  const [cast, castLoading, castError] = useGetResults(`/movie/${id}/credits`);

  if (reviewsLoading) return <LoadingIndicator />;
  if (reviewsError) return <ErrorIndicator />;

  if (selectedIndex === 0)
    return (
      <View style={styles.view}>
        <ScrollView
          style={{
            height: 230,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.movieDescription}>{movieDescription}</Text>
        </ScrollView>
      </View>
    );

  if (selectedIndex === 1) {
    return (
      <View style={[styles.view, styles.reviewsContainer]}>
        {reviews.length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reviews}
            renderItem={({ item }) => {
              return (
                <View style={styles.reviewCard}>
                  <View style={styles.avatarContainer}>
                    <Image
                      style={styles.authorAvatar}
                      source={
                        item.author_details.avatar_path
                          ? {
                              uri: `https://www.themoviedb.org/t/p/w1280${item.author_details.avatar_path}`,
                            }
                          : require('../../assets/default-avatar.png')
                      }
                    />
                    <Text style={styles.ratingCount}>
                      {item.author_details.rating}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.authorName}>{item.author}</Text>
                    <Text style={styles.reviewContent}>{item.content}</Text>
                  </View>
                </View>
              );
              ˇ;
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.noReviewsView}>
            <Octicons name="no-entry" size={50} color={colors.mainText} />
            <Text style={styles.noReviewsText}>No Reviews</Text>
          </View>
        )}
      </View>
    );
  }
  if (selectedIndex === 2)
    return (
      <View style={styles.view}>
        <FlatList
          numColumns={2}
          data={cast}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.castView}>
                <Image
                  style={styles.castImage}
                  source={{
                    uri: `https://www.themoviedb.org/t/p/w1280${item.profile_path}`,
                  }}
                />
                <Text style={styles.castName}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  movieDescription: {
    color: colors.mainText,
    lineHeight: 22,
    fontSize: sizes.fonts.subTitles,
  },
  view: {
    marginTop: 20,
    paddingHorizontal: sizes.mainMarginHorizontal,
  },
  reviewsContainer: {
    marginBottom: 200,
  },
  reviewCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#95959570',
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginBottom: 10,
  },
  ratingCount: {
    color: colors.activeTab,
    textAlign: 'center',
  },
  authorName: {
    color: colors.mainText,
    fontSize: sizes.fonts.titles,
    fontWeight: 'bold',
  },
  reviewContent: {
    color: colors.mainText,
    width: 300,
  },
  noReviewsView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReviewsText: {
    color: colors.mainText,
    marginTop: 20,
  },
  castView: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  castImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 10,
  },
  castName: {
    color: colors.mainText,
    fontWeight: 'bold',
  },
});

export default MovieDetails;
