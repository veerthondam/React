import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => <h1> {TitleName} </h1>;

/*

Header
body
footer

*/
const HeaderComponent = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <i className="material-icons">search</i>
              &nbsp;Search
            </a>
          </li>
          <li>
            <a href="#about">
              <div className="offer-img">
                <img src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png" />
              </div>
              &nbsp;Offers
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="material-icons">help</i>
              &nbsp;Help
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="material-icons">login</i>
              &nbsp;login
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="material-icons">shopping_cart</i>
              &nbsp;cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

/* Creating Body Component */

const BodyComponent = () => (
  <main>
    <section className="product-listing">
      <ProductsComponent
        title="Meghana Foods"
        description=" This is a description of Meghana Foods."
        price="350"
      />
      <ProductsComponent
        title="KFC"
        description=" This is a description for KFC."
        price="600"
      />
    </section>
  </main>
);

/* Product container */
const ProductsComponent = (props) => {
  const { title, description, price } = props;
  //console.log(props);

  return (
    <article className="plist">
      <div className="product-item">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tfbnpd65irvhp9iwhbtk"
          alt="Product 1"
          className="product-image"
        />
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <span className="product-price">$ {price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </article>
  );
};
const FooterComponent = () => <footer>This is Footer</footer>;

const Template = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Template />);
