import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import "./relatedproduct.css";
import img1 from "../../assets/cup.png";
import img2 from "../../assets/printing paper.png";
import img3 from "../../assets/capFinal.png";
import heart from "../../assets/heart.png";
import { db } from "../../config/firebase";
import { IconContext } from "react-icons";

function Relatedproduct({ product_category, product_id }) {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    db.ref(`${product_category}`).on("value", (snap) => {
      setItems(Object.values(snap.val()));
      console.log(Object.values(snap.val())[0]);
      // console.log(Object.values(element.val()));
      setIsLoaded(true);
    });
  }, []);

  console.log(items.id);

  let product_loop = items.length - 3;
  console.log(product_loop);

  let product_1;
  let product_2;
  let product_3;

  if (product_id == product_loop + 1) {
    product_1 = product_id + 1;
    product_2 = product_id + 2;
    product_3 = 1;
  } else if (product_id == product_loop + 2) {
    product_1 = product_id + 1;
    product_2 = 1;
    product_3 = 2;
  } else if (product_id == product_loop + 3) {
    product_1 = 1;
    product_2 = 2;
    product_3 = 3;
  } else {
    product_1 = product_id + 1; // here 1 is the id of the first product.
    product_2 = product_id + 2; // here 2 is the id of the second product.
    product_3 = product_id + 3; // here 3 is the id of the third product.
  }

  if (!isLoaded) return <div>Loading</div>;
  //   console.log(items[product_3 - 1].name);
  console.log(items.length);

  return (
    <>
      <div className="menu">
        <div className="menu-heading">
          <div className="menu-heading-related-product-bold">
            <h1>RELATED</h1>
            <p>
              <span>
                <IconContext.Provider
                  value={{ color: "#32436b", size: "50px" }}
                >
                  <BsIcons.BsDash />
                </IconContext.Provider>
              </span>
              PRODUCT
            </p>
          </div>

          <p className="menu-view">
            <Link className="linkStyle" to={`/listing/${product_category}`}>
              View All
            </Link>
            <span>
              <IconContext.Provider value={{ color: "#32436b", size: "25px" }}>
                <FiIcons.FiArrowRight />
              </IconContext.Provider>
            </span>
          </p>
        </div>
        <div className="menu-products">
          <div className="menu-product">
            <div className="menu-product-img-background">
              <div className="heartImgContainer">
                <img src={heart} className="heartImg" />
              </div>
              <div className="menu-product-img">
                <img src={items[product_1 - 1].img} />
              </div>
              <div className="menu-product-name">
                {/* <p>Sublimation Magic Mug</p> */}
                <p>{items[product_1 - 1].name}</p>
              </div>
            </div>
            <div className="manu-product-btn">
              <Link to={`/info/${product_category}/${product_1}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
          <div className="menu-product">
            <div className="menu-product-img-background">
              <div className="heartImgContainer">
                <img src={heart} className="heartImg" />
              </div>
              <div className="menu-product-img">
                <img src={items[product_2 - 1].img} />
              </div>
              <div className="menu-product-name">
                {/* <p>Printing Paper</p> */}
                <p>{items[product_2 - 1].name}</p>
              </div>
            </div>
            <div className="manu-product-btn">
              <Link to={`/info/${product_category}/${product_2}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
          <div className="menu-product">
            <div className="menu-product-img-background">
              <div className="heartImgContainer">
                <img src={heart} className="heartImg" />
              </div>
              <div className="menu-product-img">
                <img src={items[product_3 - 1].img} />
              </div>
              <div className="menu-product-name">
                {/* <p>Sublimation Cap</p> */}
                <p>{items[product_3 - 1].name}</p>
              </div>
            </div>
            <div className="manu-product-btn">
              <Link to={`/info/${product_category}/${product_3}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Relatedproduct;
