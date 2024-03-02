import { ReactNode, createContext, useContext, useState } from "react";
import data from "./data.json"


type ComponentProps = {
  children: ReactNode;
  // other props...
};

interface Data {
  movies: Movie[]
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}
const MyContext = createContext<Data | null>(null);
export const useMyContext = () => {
  return useContext(MyContext);
};



export const MyContextProvider = ({ children }: ComponentProps) => {
  // Your context provider logic here
  const [movies, setMovies] = useState<Movie[]>(data.movies);

  return (
    <MyContext.Provider value={{ movies, setMovies }}>
      {children}
    </MyContext.Provider>
  );
};
