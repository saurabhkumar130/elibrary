export interface Author {
  name: string;
}

export interface Book {
  key: string;
  title: string;
  authors: string[];
  coverId?: number;
  genre?: string[];
  publicationYear?: number;
  description?: string;
}

export interface BookCardProps {
  book: Book;
}

export interface SearchBarProps {
  handleSearch: (query: string, page?: number, limit?: number) => void;
}

export interface Comment {
  userName: string;
  comment: string;
}

export interface CommentProps {
  comments: Comment[];
  newComment: string;
  setNewComment: (comment: string) => void;
  handleSubmitComment: () => void;
}
