const ImageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

/* Product container */
const ProductsComponent = (listData) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } =
    listData.resData?.info;

  return (
    <article className="plist">
      <div className="product-item">
        <img
          src={`${ImageUrl}${cloudinaryImageId}`}
          alt="Product 1"
          className="product-image"
        />
        <h2 className="product-title">{name}</h2>
        <p className="product-cusines">{cuisines.join(",")}</p>
        <div className="product-price"> {areaName}</div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </article>
  );
};

export default ProductsComponent;
