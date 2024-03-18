import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  recommendedBooks: [],
  searchResults: [],
  favorites: [],
  isLoading: false,
  isLazyLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setRecommendedBooks(state, action) {
      state.recommendedBooks = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsLazyLoading(state, action) {
      state.isLazyLoading = action.payload;
    },
    toggleFavorite(state, action) {
      const {key} = action.payload;
      const index = state.favorites.findIndex(book => book.key === key);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {
  setRecommendedBooks,
  setSearchResults,
  setIsLoading,
  setIsLazyLoading,
  toggleFavorite,
} = booksSlice.actions;
export default booksSlice.reducer;
