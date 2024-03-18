import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Function to get the cover image URI based on coverId.
 * @param {number} coverId - The ID of the cover image.
 * @returns {string} - The URI of the cover image.
 */
export const getImageURI = coverId => {
  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
};

/**
 * Function to store favorite books in AsyncStorage.
 * @param {Array<Object>} books - The array of favorite books to be stored.
 * @returns {Promise<void>} - A Promise that resolves when the books are stored successfully.
 */
export const storeFavoriteBooks = async books => {
  try {
    const jsonValue = JSON.stringify(books);
    await AsyncStorage.setItem('favoriteBooks', jsonValue);
  } catch (error) {
    console.error('Error storing favorite books:', error);
  }
};

/**
 * Function to retrieve favorite books from AsyncStorage.
 * @returns {Promise<Array<Object>>} - A Promise that resolves with an array of favorite books,
 *                                       or an empty array if there are no favorite books or if there is an error.
 */
export const getFavoriteBooks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('favoriteBooks');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error getting favorite books:', error);
    return [];
  }
};
