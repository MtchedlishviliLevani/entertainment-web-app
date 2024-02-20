import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login";
import { useState } from "react";
import Registration from "./components/Registration";

const App = () => {
  const [isRegistrired, setIsRegistrired] = useState(true)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<div>LOGIN</div>} />
        <Route path="/movies" element={<div>LOGIN1</div>} />
        <Route path="/series" element={<div>LOGIN2</div>} />
        <Route path="/bookmarks" element={<div>LOGIN3</div>} />
        <Route path="/auth" element={isRegistrired ? <Login setIsRegistrired={setIsRegistrired} /> : <Registration setIsRegistrired={setIsRegistrired} />} />
      </Route>
    ))




  return (
    <>
      <RouterProvider router={router}  >
      </RouterProvider></>
  );
};

export default App;
