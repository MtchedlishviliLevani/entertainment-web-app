import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login";
import { useState } from "react";
import Registration from "./components/Registration";

const App = () => {
  const [isRegistrired, setIsRegistrired] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root isLoggedIn={isLoggedIn} />}>
        <Route index element={<div>LOGIN</div>} />
        <Route path="/movies" element={<div>LOGIN1</div>} />
        <Route path="/series" element={<div>LOGIN2</div>} />
        <Route path="/bookmarks" element={<div>LOGIN3</div>} />
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
