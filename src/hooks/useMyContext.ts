import { useContext } from "react";
import { MyContext } from "../context/contex";
type Data = {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};
export const useMyContext = () => {
  return useContext(MyContext) as Data;
};

export default useMyContext;
