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

export default HeaderComponent;
