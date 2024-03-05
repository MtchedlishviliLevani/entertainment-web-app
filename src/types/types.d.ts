interface Movie {
  id: number;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface Movie1 {
  id: number;
  title: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface Props {
  heading: string;
  data: Movie[] | undefined;
}

// interface Mn {
//   movies: {
//     movies: Movie[];
//   };
// }
