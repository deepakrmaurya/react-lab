// Normal createElement
const heading = React.createElement(
  "h1",
  { xyz: "abc" },
  "Hello World from React...!"
);

//Nested createElement
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is the H1 tag")
//   )
// );

//Super Nested createElement
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is the H1 tag"),
//     React.createElement("h2", {}, "This is the H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is the H1 tag"),
//     React.createElement("h2", {}, "This is the H2 tag"),
//   ]),
// ]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
