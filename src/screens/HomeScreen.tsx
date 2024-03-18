import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import {fetchBooks, searchBooks} from '../services/api';
import {useSelector} from 'react-redux';
import BookCardSkeleton from '../components/BookCardSkeleton';
import {homeScreenStyles} from './styles';
import {
  setIsLoading,
  setIsLazyLoading,
  setRecommendedBooks,
  setSearchResults,
} from '../redux/booksSlice';
import {useDispatch} from 'react-redux';
import {debounce} from 'lodash';
import Loader from '../components/Loader';

const HomeScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(0);
  const searchResults = useSelector(state => state.books.searchResults);
  const books = useSelector(state => state.books.recommendedBooks);
  const isLoading = useSelector(state => state.books.isLoading);
  const isLazyLoading = useSelector(state => state.books.isLazyLoading);

  useEffect(() => {
    fetchBooksFromApi();
  }, []);
  const dispatch = useDispatch();

  const fetchBooksFromApi = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetchBooks();
      dispatch(setRecommendedBooks(response));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.error('Error fetching books:', error);
      dispatch(setIsLoading(false));
    }
  };

  const handleSearch = debounce(async (query, page = 1, limit = 10) => {
    try {
      setQuery(query);
      if (!query) {
        return dispatch(setSearchResults([]));
      }
      dispatch(setIsLoading(true));
      const books = await searchBooks(query, page, limit);
      dispatch(setIsLoading(false));
      dispatch(setSearchResults(books));
    } catch (error) {
      console.error('Error searching books:', error.message);
      dispatch(setIsLoading(false));
    }
  }, 1500);

  const fetchMoreBooks = async () => {
    try {
      dispatch(setIsLazyLoading(true));
      setPage(page => page + 1);
      const newBooks = await searchBooks(query, page, 10);
      dispatch(setIsLazyLoading(false));
      const uniqueNewBooks = newBooks.filter(
        newBook =>
          !searchResults.some(existingBook => existingBook.key === newBook.key),
      );
      dispatch(setIsLazyLoading(false));
      dispatch(setSearchResults([...searchResults, ...uniqueNewBooks]));
    } catch (error) {
      console.error('Error searching books:', error.message);
      dispatch(setIsLazyLoading(false));
    }
  };
  const renderBookItem = ({item}) => <BookCard book={item} />;

  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>List of Sci-Fi Books</Text>
      <SearchBar handleSearch={handleSearch} />
      {isLoading ? (
        <BookCardSkeleton />
      ) : (
        <>
          <FlatList
            data={searchResults.length > 0 ? searchResults : books}
            renderItem={renderBookItem}
            keyExtractor={item => item.key}
            onEndReached={searchResults.length > 0 && fetchMoreBooks}
            onEndReachedThreshold={0.1}
            contentContainerStyle={homeScreenStyles.bookList}
          />
          {isLazyLoading && (
            <>
              <Loader />
              <View style={{height: 50}} />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default HomeScreen;
