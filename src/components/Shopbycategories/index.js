import React from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";
import img from "../../assets/burnfitness.png";
import img1 from "../../assets/bag.png";
import img2 from "../../assets/PC case.png";
import img4 from "../../assets/laptop headphone keyboard.png";
import img3 from "../../assets/model 1.png";
import { IconContext } from "react-icons";

function Shopbycategories() {
  return (
    <div className="shopbycategories-wrapper">
      <div className="shopbycategories-heading">
        <div className="shopbycategories-heading-bold">
          <h1>CATEGORIES</h1>
        </div>
        <p>
          <span>
            <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
              <BsIcons.BsDash />
            </IconContext.Provider>
          </span>
          SHOP BY CATEGORIES
        </p>
      </div>
      <div className="shopbycategories-products">
        <div className="product-div1">
          <Link className="linkStyle" to="/listing/hardware">
            <img className="product-div1-img" src={img1} />
          </Link>
          <p className="categories-product-name">Handbags</p>
          <p className="categories-product-desc">FW 2020 Limited Edition</p>
        </div>
        <div className="product-div2">
          <div className="product-div-top">
            <div style={{ width: "80%", margin: "auto" }}>
              <Link className="linkStyle" to="/listing/hardware">
                <img className="product-div-top-img" src={img2} />
              </Link>
              <p className="categories-product-name">
                IT and Computer Accessories
              </p>
              <p className="categories-product-desc">
                3CE 2019 Limited Edition
              </p>
            </div>
          </div>
          <div className="product-div-bottom">
            <Link className="linkStyle" to="/listing/machinary">
              <img className="product-div-bottom-img" src={img4} />
            </Link>
            <p className="categories-product-name">Electronics</p>
            <p className="categories-product-desc">
              Limited Edition Headphones
            </p>
          </div>
        </div>
        <div className="product-div3">
          <Link className="linkStyle" to="/listing/hardware">
            <img className="product-div3-img" src={img3} />
          </Link>
          <p className="categories-product-name">Jumpers & Cardigans</p>
          <p className="categories-product-desc">Cable Knitted Neck Sweater</p>
        </div>
      </div>
    </div>
  );
}

export default Shopbycategories;
