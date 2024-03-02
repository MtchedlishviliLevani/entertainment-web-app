import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login";
import { useState } from "react";
import Registration from "./components/Registration";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarks from "./pages/Bookmarks";
// import data from "./data.json"
import { MyContextProvider } from "./contex";

// interface Data {
//   movies: Movie[]


//   setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
// }
// export const myContext = createContext<Data | null>(null)








const App = () => {

  const [isRegistrired, setIsRegistrired] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [movies, setMovies] = useState<Movie[]>(data.movies);





  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/auth" element={isRegistrired ? <Login setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} /> : <Registration setIsRegistrired={setIsRegistrired} />} />
      </Route>
    ))




  return (

    <MyContextProvider>
      <RouterProvider router={router}  >
      </RouterProvider>
    </MyContextProvider>
  );
};

export default App;
