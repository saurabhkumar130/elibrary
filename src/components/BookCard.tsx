import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {isNil} from 'lodash';
import {useNavigation} from '@react-navigation/native';

import {bookCardStyles} from './styles';
import {getImageURI} from '../helpers/utils';
import {BookCardProps} from '../helpers/types';

const BookCard: React.FC<BookCardProps> = ({book}) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('BookDetailsScreen', {book});
  };

  return (
    <Pressable onPress={onPressHandler} style={bookCardStyles.card}>
      <FastImage
        style={bookCardStyles.coverImage}
        source={
          !isNil(book.coverId)
            ? {uri: getImageURI(book.coverId)}
            : require('../assets/book.png')
        }
        resizeMode="cover"
      />
      <View style={bookCardStyles.detailsContainer}>
        <Text style={bookCardStyles.title}>{book.title}</Text>
        <Text style={bookCardStyles.author}>By: {book.authors.join(', ')}</Text>
      </View>
    </Pressable>
  );
};

export default BookCard;
