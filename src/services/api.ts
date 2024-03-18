export const fetchBooks = async () => {
  try {
    const response = await fetch(
      'https://openlibrary.org/subjects/sci-fi.json?details=true',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    const books = data.works.map(work => ({
      key: work.key,
      title: work.title,
      authors: work.authors.map(author => author.name),
      coverId: work?.cover_id,
      genre: work?.subject,
      publicationYear: work?.first_publish_year,
      // description:,
    }));
    return books;
  } catch (error) {
    throw new Error('Error fetching books: ' + error.message);
  }
};

export const searchBooks = async (query, page, limit = 10) => {
  console.log('page', page);
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(
        query,
      )}&page=${page}&limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error('Failed to search books');
    }
    const data = await response.json();
    // Extract relevant book details from the response and format them as needed
    const books = data.docs.map(book => ({
      key: book.key,
      title: book.title,
      authors: book.author_name || [],
      coverId: book?.cover_i,
      genre: book?.subject,
      publicationYear: book?.first_publish_year,
    }));
    return books;
  } catch (error) {
    throw new Error('Error searching books: ' + error.message);
  }
};
