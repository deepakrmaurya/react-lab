import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const AppLayout = () => (
  <div id="container">
    <Header />
    <Body />
    {/* <h1>Hello this is React Component</h1> */}
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

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
