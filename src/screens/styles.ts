import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookList: {
    flexGrow: 1,
  },
  bookItem: {
    marginBottom: 15,
  },
});
export const bookDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  coverImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButton: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  favoriteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  coverImage: {
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
  },
  genre: {
    fontSize: 16,
    marginBottom: 10,
  },
  publicationYear: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
