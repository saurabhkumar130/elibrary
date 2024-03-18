import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import _, {get, isNil} from 'lodash';
import {useRoute} from '@react-navigation/native';
import {getImageURI} from '../helpers/utils';
import FastImage from 'react-native-fast-image';
import {bookDetailsStyles} from './styles';
import {useSelector} from 'react-redux';
import {toggleFavorite} from '../redux/booksSlice';
import {useDispatch} from 'react-redux';
import Favorite from '../assets/svg/heartFilled.svg';
import UnFavorite from '../assets/svg/heart.svg';
import {useNavigation} from '@react-navigation/native';

const BookDetailsScreen: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.books.favorites);
  const navigation = useNavigation();

  const book = get(route, 'params.book');
  const isFavorite = favorites.some(
    favoriteBook => favoriteBook.key === book.key,
  );

  const handleFavorite = () => {
    dispatch(toggleFavorite(book));
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={bookDetailsStyles.container}>
        <View style={bookDetailsStyles.coverImageContainer}>
          <FastImage
            style={bookDetailsStyles.coverImage}
            source={
              !isNil(book.coverId)
                ? {uri: getImageURI(book.coverId)}
                : require('../assets/book.png')
            }
            resizeMode="cover"
          />
          {/* Favorite button */}
          <TouchableOpacity
            style={[bookDetailsStyles.favoriteButton]}
            onPress={handleFavorite}>
            {isFavorite ? <Favorite height={60} /> : <UnFavorite height={60} />}
          </TouchableOpacity>
        </View>
        <Text style={bookDetailsStyles.title}>{book.title}</Text>
        <Text style={bookDetailsStyles.author}>
          By: {book?.authors?.join(', ')}
        </Text>
        <Text style={bookDetailsStyles.genre}>
          Genre: {book?.genre?.join(' , ')}
        </Text>
        <Text style={bookDetailsStyles.publicationYear}>
          Publication Year: {book?.publicationYear}
        </Text>
        <Text style={bookDetailsStyles.description}>
          Description: {book?.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default BookDetailsScreen;
