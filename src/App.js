import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {Register} from "./views/Register";
import {Write} from "./views/Write";
import {Post} from "./views/Post";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/post",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Post />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}