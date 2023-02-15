import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Home} from "./views/Home";
import {Login} from "./views/Login";
import {Register} from "./views/Register";
import {WritePost} from "./views/WritePost";
import {Posts} from "./views/Posts";
import {SinglePost} from "./views/SinglePost";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/post",
          element: <Posts />
        },
        {
          path: "/post/:id",
          element: <SinglePost />
        },
        {
          path: "/write",
          element: <WritePost />
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

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}