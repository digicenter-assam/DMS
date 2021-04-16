import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

import { SideBySideMagnifier } from "react-image-magnifiers";
import "./index.css";

import paperCutterImg from "../../assets/paper cutter_min.jpg";
import paperCutterImgZoomed from "../../assets/paper cutter1.jpg";
import loader from "../../assets/loading-200px.gif";

import star_hollow from "../../star_hollow.svg";

import star_filled from "../../star_filled.svg";
import Relatedproduct from "../Relatedproduct";

function Info({ category, data, isLoaded }) {
  // window.scrollTo({ top: 0, behavior: "smooth" });

  const [currentImage, setCurrentImage] = useState("");
  const [currentZoomedImage, setCurrentZoomedImage] = useState("");
  const [productDetails, setproductDetails] = useState([]);
  const [loading, setloading] = useState(false);


  // console.log(Object.keys(data.product_details));
  // console.log(Object.values(data.product_details));
    
  useEffect(() => {
    let productDetailsKey = Object.keys(data.product_details)
    let productDetailsValue = Object.values(data.product_details)
    let newArr = []
    for(let i =0; i<productDetailsKey.length; i++)
    {
        newArr.push(productDetailsKey[i]+" :  "+productDetailsValue[i]+ "");
    }
    console.log(data);
    setproductDetails(newArr);
    setloading(true);
  }, [data])
  
  // console.log(productDetails)
  // let productDetails = Object.assign(productDetailsKey, productDetailsValue);
  // console.log(productDetails)


  // let ownerInfo = 'ownerinfo';
  const [ownerInfo, setownerInfo] = useState("ownerinfo");

  let ownerinfoFun = () => {
    // ownerInfo = "ownerinfo-active";
    setownerInfo("ownerinfo-active");
    console.log("hello");
  };
  // useEffect(() => {
  // }, []);

  useEffect(() => {
    setCurrentImage(data.img);
  }, [data.img]);

  const changeImage = (clickedImage) => {
    setCurrentImage(clickedImage);
    setCurrentZoomedImage(clickedImage);
  };

  function hollowStars(params) {
    var x = Array(params)
      .fill()
      .map((curr, i) => {
        return <img src={star_filled} className="ratingStars" />;
      });
    var y = Array(5 - params)
      .fill()
      .map((curr, i) => {
        return <img src={star_hollow} className="ratingStars" />;
      });

    return x.concat(y);
  }
  if (!isLoaded && !loading)
    return (
      <div>
        {" "}
        <img src={loader} alt="Loading..." />{" "}
      </div>
    );

  return (
    <>
      <div className="productMain_parent">
        <div class="productMain_left">
          <div className="productMain-img" id="productMain-il">
            {window.innerWidth > 450 ? (
              <SideBySideMagnifier
                fillAvailableSpace={true}
                imageSrc={currentImage}
                imageAlt="Example"
                largeImageSrc={currentZoomedImage} // Optional
              />
            ) : (
              <img src={currentImage} />
            )}
          </div>
          <div className="productMain-divSmall">
            <img
              className="productMain-imgSmall"
              id="productMain-is1"
              // src="https://firebasestorage.googleapis.com/v0/b/dmsne-test.appspot.com/o/categories%2Fprinting_services%2Fpillow2.jpg?alt=media&token=a58a3a03-c9ff-43e3-a12e-823ab5909861"
              src={data.img}
              onClick={() =>
                changeImage(
                  // "https://firebasestorage.googleapis.com/v0/b/dmsne-test.appspot.com/o/categories%2Fprinting_services%2Fpillow2.jpg?alt=media&token=a58a3a03-c9ff-43e3-a12e-823ab5909861"
                  data.img
                )
              }
            ></img>
            <img
              className="productMain-imgSmall"
              id="productMain-is2"
              // src="https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg"
              src={data.img2}
              onClick={() =>
                changeImage(
                  // "https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg"
                  data.img2
                )
              }
            ></img>
            <img
              className="productMain-imgSmall"
              id="productMain-is3"
              // src="https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70"
              src={data.img3}
              onClick={() =>
                changeImage(
                  // "https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70"
                  data.img3
                )
              }
            ></img>
          </div>
        </div>

        <div className="productMain_Right">
          <div>
            <h2 className="prod-heading">{data.name}</h2>
            <div className="prc-2ndLine">
              <h3>
                {" "}
                RATINGS:
                {hollowStars(4)}
              </h3>
              <div className="prc-2ndLine-left">
                <p className="blueFont" id="ratings">
                  {" "}
                  {data.total_ratings} Rating
                </p>
                <p
                  className={"bar1"}
                  style={{
                    textAlign: "center",
                    color: "#3858a2",
                    marginLeft: ".2%",
                    marginRight: ".2%",
                  }}
                >
                  |
                </p>
                <p className="blueFont" id="comments">
                  {data.total_comment} Comment
                </p>
              </div>
            </div>
            <hr></hr>
            <h3 className="prod_desc_info">Product Description</h3>
            {/* <p>mklmkknnn</p> */}
            <div className="prc-4thLine">
              {/* <p>kotkookkok</p> */}
              {productDetails.map(val => 
                  <div className="blueFont-div">
                          <p className="blueFont">
                            {val}
                          </p>
                  </div>
              )}
              {/* <div className="blueFont-div">
                <p className="blueFont">
                  BRAND: <span>{data.brand}</span>
                </p>
              </div>
              <div className="blueFont-div">
                <p className="blueFont">
                  CATEGORY: <span>{data.category}</span>
                </p>
              </div> */}
            </div>

            <div className="productInfo">{data.product_desc}</div>

            <p className="originalPrice">
              M.R.P : &nbsp; &nbsp;<del>{data.mrp}</del>{" "}
            </p>
            <p className="ourPrice">
              Our Price: RS 899 <span>({data.offer}% OFF)</span>
            </p>

            <button className="btnContactUs" onClick={ownerinfoFun}>
              CONTACT US
            </button>
            <br></br>
            <div className="ownerInfo-div">
              <p className={ownerInfo}>
                To Buy This Product contact: 7002280187 or 9435481533
              </p>
            </div>
          </div>

          <div className="review-section">
            <hr className="after2ndline"></hr>
            <div className="prod-customerReview">
              <h3 className="prod-cust_review">
                Customer Reviews ({data.ratings})
              </h3>

              <div className="prod-singleReview">
                <p>{data.reviews.review1.desc}</p>
                <div className="prod-reviewDetails">
                  <div className="prod-reviewDetails-nameDate">
                    <p>{data.reviews.review1.name} |&nbsp;</p>
                    <p> {data.reviews.review1.date}</p>
                  </div>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
              <hr className="prod-hr-reviews"></hr>
            </div>

            <div className="prod-singleReview">
              <p>{data.reviews.review2.desc}</p>
              <div className="prod-reviewDetails">
                <div className="prod-reviewDetails-nameDate">
                  <p>{data.reviews.review2.name} |&nbsp;</p>
                  <p> {data.reviews.review2.date}</p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <hr className="prod-hr-reviews"></hr>
          </div>
        </div>
      </div>
      <Relatedproduct
        product_category={category}
        product_id={data.id}
      />
    </>
  );
}

export default Info;
