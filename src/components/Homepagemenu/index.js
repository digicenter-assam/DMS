import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import "./homepagestyle.css";
import img1 from "../../assets/cup.png";
import img2 from "../../assets/printing paper.png";
import img3 from "../../assets/capFinal.png";
import heart_img from "../../assets/heart.png";
import love_icon from "../../assets/loveicon.png";
import { db } from "../../config/firebase";
import { IconContext } from "react-icons";

function Homepagemenu() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [heart, setHeart] = useState(false);
  const showHeart = () => setHeart(!heart);

  useEffect(() => {
    db.ref("printing service").on("value", (snap) => {
      setItems(Object.values(snap.val()));
      console.log(Object.values(snap.val())[0]);
      // console.log(Object.values(element.val()));
      setIsLoaded(true);
    });
  }, []);

  let product_1 = 1; // here 1 is the id of the first product.
  let product_2 = 2; // here 2 is the id of the second product.
  let product_3 = 3; // here 3 is the id of the third product.

  if (!isLoaded) return <div>Loading</div>;
//   console.log(items[product_3 - 1].name);

  return (
    <>
      <div className="menu">
        <div className="menu-heading">
          <div className="menu-heading-bold">
            <h1>PRINTING</h1>
            <p>
              <span>
                <IconContext.Provider
                  value={{ color: "#32436b", size: "50px" }}
                >
                  <BsIcons.BsDash />
                </IconContext.Provider>
              </span>
              PRINTING SERVICES
            </p>
          </div>

          <p className="menu-view">
            <Link className="linkStyle" to="/listing/Printing Service">
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
                {/* <img src={heart_img} className="heartImg" /> */}
                {heart ? <img src={love_icon} className="loveImg" onClick={showHeart} /> 
                        : <img src={heart_img} className="heartImg" onClick={showHeart} /> }
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
              <Link to={`/info/Printing Service/${product_1}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
          <div className="menu-product">
            <div className="menu-product-img-background">
              <div className="heartImgContainer">
                {/* <img src={heart_img} className="heartImg" /> */}
                {heart ? <img src={love_icon} className="loveImg" onClick={showHeart} /> 
                        : <img src={heart_img} className="heartImg" onClick={showHeart} /> }
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
              <Link to={`/info/Printing Service/${product_2}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
          <div className="menu-product">
            <div className="menu-product-img-background">
              <div className="heartImgContainer">
                <img src={heart_img} className="heartImg" />
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
              <Link to={`/info/Printing Service/${product_3}`}>
                <button className="menu-btn">VIEW NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepagemenu;
