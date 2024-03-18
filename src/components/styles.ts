import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const bookCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  coverImage: {
    width: 80,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    color: '#888',
  },
});

export const serachBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export const horizontalLinestyles = StyleSheet.create({
  horizontalLine: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
});

export const commentStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  commentButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#6666ff',
    padding: 10,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  commentsContainer: {
    marginBottom: 20,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentItem: {
    padding: 10,
    borderRadius: 4,
  },
  commentUserName: {
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: -5,
  },
  lightGrayBackground: {
    backgroundColor: '#F0F0F0',
  },
  midGrayBackground: {
    backgroundColor: '#D3D3D3',
  },
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentSection: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
});
