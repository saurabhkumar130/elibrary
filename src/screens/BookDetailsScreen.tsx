import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import _, {get, isNil} from 'lodash';
import {useRoute} from '@react-navigation/native';
import {getImageURI} from '../helpers/utils';
import FastImage from 'react-native-fast-image';
import {bookDetailsStyles} from './styles';
import {useSelector} from 'react-redux';
import {toggleFavorite} from '../redux/booksSlice';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalLine from '../components/HorizontalLine';
import {Comment} from '../helpers/types';
import {DefaultComments} from '../helpers/data';
import Comments from '../components/Comments';

const BookDetailsScreen: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.books.favorites);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(DefaultComments);

  const book = get(route, 'params.book');
  const isFavorite = favorites.some(
    favoriteBook => favoriteBook.key === book.key,
  );

  const handleFavorite = () => {
    dispatch(toggleFavorite(book));
  };
  const handleSubmitComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [
        {userName: 'guestUser', comment: newComment},
        ...comments,
      ];
      setComments(updatedComments);
      setNewComment('');
    }
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
          <TouchableOpacity
            style={[bookDetailsStyles.actionButton]}
            onPress={handleFavorite}>
            {/* Favorite button */}
            <MaterialCommunityIcon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={50}
              color={'red'}
              suppressHighlighting
            />
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
        <HorizontalLine />
        <Comments
          comments={comments}
          handleSubmitComment={handleSubmitComment}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      </View>
    </ScrollView>
  );
};

export default BookDetailsScreen;
