import React from "react";
import "./BestSellerComponent.css";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

function BestSellerComponent() {
  return (
    <>
      <div className="best-seller-wrapper">
        <div className="bestS_parent-heading">
          <div className="bestS_parent-heading-bold">
            <h1>BEST</h1>
          </div>
          <p>
            <span>
              <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
                <BsIcons.BsDash />
              </IconContext.Provider>
            </span>
            BEST SELLERS
          </p>
        </div>
        <div className="bestS_parent">
        <div className="bestS_childBottom_parent">
          <Link  to="/listing/mug printing machine" className="bestS_childBottom" id="bestS_headphone">
            <div >
              <p style={{fontSize:".9rem"}}>
                <strong> —— MUG PRINTING MACHINE</strong>
              </p>
            </div>
          </Link>

          <Link  className="bestS_childBottom2" id="bestS_pccase" to="/listing/tshirt printing machine">
            <div >
              <p className="second-pro" style={{fontSize:"1.1rem", marginBottom:"8rem", marginLeft:"23rem", color:"black"}}>
                <strong> —— T-SHIRT PRINTING MACHINE</strong>
              </p>
            </div>
          </Link>
        </div>

        <div className="bestS_childTop">
          <div className="bestS_childTop_child">
            <div id="bestS-sa">
              <p>SA</p>
            </div>

            <div id="bestS-le">
              <p>LE</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default BestSellerComponent;
