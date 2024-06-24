import React from "react";
import ReactDOM from "react-dom/client";
const TitleName = "This is Main Heading";

const Title = () => <h1> {TitleName} </h1>;

const HeaderComponent = () => (
  <div className="container">
    <div className="title">
      <Title />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
