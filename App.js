const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "span",
    {
      class: "parent",
    },
    "Hello this is Parent Tag"
  ),
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement(
          "h1",
          {
            id: "childern1",
          },
          "This is children1"
        ),
        React.createElement(
          "h2",
          {
            id: "childern2",
          },
          "This is children2"
        ),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
