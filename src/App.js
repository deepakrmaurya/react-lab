import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Error from "./Components/Error";
import Cartpage from "./Components/Cartpage";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => (
  <div id="container">
    <Header />
    <Outlet />
    {/* <h1>Hello this is React Component</h1> */}
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Page Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cartpage",
        element: <Cartpage />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// //createElemet using JSX
// // JSX -> React.createElement -> ReactElement-JS Object -> HTML Element(render)
// const Title = () => (
//     <h1
//       className="heading"
//       tabIndex="5
//     "
//     >
//       This is JSX Heading
//     </h1>
//   );
