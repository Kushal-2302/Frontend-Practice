const heading1 = React.createElement(
  "h2",
  { id: "head1" },
  "Hello, World! from React"
);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading1);

//Creating nested elements
const parent = React.createElement(
  //ReactElement(Object) ==> HTML(Browser Understands)
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am H1 tag"),
    React.createElement("h2", { id: "h2" }, "I am H2 tag"),
    React.createElement("h3", { id: "h3" }, "I am H3 tag"),
  ])
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);
