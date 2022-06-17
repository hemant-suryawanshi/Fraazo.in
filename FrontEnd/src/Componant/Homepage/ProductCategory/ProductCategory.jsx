import React from "react";
import "./ProductCategory.css";
import img1 from "../../../Images/mangoes.png";
import img2 from "../../../Images/fruits.png";
import img3 from "../../../Images/vegetables.png";
import img5 from "../../../Images/dry-fruits.png";
import img6 from "../../../Images/kitchen-saples.png";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  return (
    <div className="MainContainer">
      <Link to="/product/mangos">
        <div className="Container11">
          <img src={img1} alt="img" />
        </div>
      </Link>
      <Link to="/product/fruits">
        <div className="Container11">
          <img src={img2} alt="img" />
        </div>{" "}
      </Link>
      <Link to="/product/vegitables">
        <div className="Container11">
          <img src={img3} alt="img" />
        </div>{" "}
      </Link>
      <Link to="/product/dryfruits">
        <div className="Container11">
          <img src={img5} alt="img" />
        </div>{" "}
      </Link>
      <Link to="/product/kitchenstaples">
        <div className="Container11">
          <img src={img6} alt="img" />
        </div>{" "}
      </Link>
    </div>
  );
};

export default ProductCategory;
