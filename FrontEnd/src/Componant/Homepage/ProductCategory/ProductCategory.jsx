import React from "react";
import "./ProductCategory.css";
import img1 from "../../../Images/img2.png";
import img2 from "../../../Images/img3.png";
import img3 from "../../../Images/img4.png";
import img5 from "../../../Images/img5.png";
import img6 from "../../../Images/img6.png";
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
