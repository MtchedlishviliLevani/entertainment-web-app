import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login";
import { useState } from "react";
import Registration from "./components/Registration";
import Home from "./pages/Home";
const App = () => {
  const [isRegistrired, setIsRegistrired] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<div>movies</div>} />
        <Route path="/series" element={<div>series</div>} />
        <Route path="/bookmarks" element={<div>bookmarks</div>} />
        <Route path="/auth" element={isRegistrired ? <Login setIsLoggedIn={setIsLoggedIn} setIsRegistrired={setIsRegistrired} /> : <Registration setIsRegistrired={setIsRegistrired} />} />
      </Route>
    ))




  return (
    <>
      <RouterProvider router={router}  >
      </RouterProvider></>
  );
};

export default App;
