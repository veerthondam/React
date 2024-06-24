import React from "react";
import ReactDOM from "react-dom";

/* 
const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "span",
    {
      class: "parent",
    },
    "Hello this is Parent Tagqqqq"
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

*/
const required = true;
const imgUrl = "https://www.mapsofindia.com/images2/india-map-2019.jpg";
const element = <img required={true} src={imgUrl} alt="Description of image" />;

console.log(element);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
