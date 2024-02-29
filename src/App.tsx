import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login";
import { createContext, useState } from "react";
import Registration from "./components/Registration";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import data from "./data.json"

interface Movie {
  id: number;
  title: string;
  thumbnail: {
    trending: {
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

interface MoviesContextProps {
  movies: Movie[];
}

const MoviesContext = createContext<MoviesContextProps | null>(null);



const App = () => {
  const [movies, setMovies] = useState(data)

  const [isRegistrired, setIsRegistrired] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route path="/bookmarks" element={<div>bookmarks</div>} />
        <Route path="/auth" element={isRegistrired ? <Login setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} /> : <Registration setIsRegistrired={setIsRegistrired} />} />
      </Route>
    ))




  return (

    <MoviesContext.Provider value={{ movies, setMovies }}>
      <RouterProvider router={router}  >
      </RouterProvider>
    </MoviesContext.Provider>
  );
};

export default App;
