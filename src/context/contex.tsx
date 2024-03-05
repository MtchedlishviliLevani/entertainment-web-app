import { ReactNode, createContext, useState } from "react";
import data from "../data.json"


type ComponentProps = {
  children: ReactNode;
};

interface Data {
  movies: Movie[]
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}
export const MyContext = createContext<Data | null>(null);


export const MyContextProvider = ({ children }: ComponentProps) => {
  const [movies, setMovies] = useState<Movie[]>(data.movies);

  return (
    <MyContext.Provider value={{ movies, setMovies }}>
      {children}
    </MyContext.Provider>
  );
};
