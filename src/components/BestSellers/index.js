import React from "react";
import "./BestSellerComponent.css";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";

function BestSellerComponent() {
  return (
    <>
    <div className='best-seller-wrapper'>
      <div className="bestS_parent-heading">
          <div className='bestS_parent-heading-bold'>
              <h1>BEST</h1>
          </div>
        <p>
          <span>
            <IconContext.Provider value={{ color: "#32436b", size: "50px", }}>
              <BsIcons.BsDash />
            </IconContext.Provider>
          </span>
          BEST SELLERS
        </p>
    </div>
    <div className="bestS_parent">
      <div className="bestS_childBottom_parent">
        <div className="bestS_childBottom" id="bestS_headphone">

          <p><strong>  —— HEADPHONE</strong></p>
        </div>

        <div className="bestS_childBottom" id="bestS_pccase">

        <p><strong>  —— PC CASE</strong></p>
        </div>
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
