import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import BookCard from '../components/BookCard';
import {homeScreenStyles} from './styles';

const FavoritesScreen: React.FC = () => {
  const favorites = useSelector(state => state.books.favorites);
  const renderBookItem = ({item}) => <BookCard book={item} />;

  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>Your Favorites</Text>
      <FlatList
        data={favorites.length > 0 ? favorites : []}
        renderItem={renderBookItem}
        keyExtractor={item => item.key}
        contentContainerStyle={homeScreenStyles.bookList}
      />
    </View>
  );
};

export default FavoritesScreen;
