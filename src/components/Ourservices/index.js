import React from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";
import * as BsIcons from "react-icons/bs";
import img from "../../assets/burnfitness.png";
import { IconContext } from "react-icons";

function Ourservices() {
  return (
    <div className="service">
      <div className="service-heading">
        <div className="service-heading-bold">
          <h1>SERVICES</h1>
        </div>
        <p>
          <span>
            <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
              <BsIcons.BsDash />
            </IconContext.Provider>
          </span>
          OUR SERVICES
        </p>
      </div>
      <div className="service-wrapper">
        <Link className="div-left" to="/listing/hardware">
          {/* <div className=''> */}
          <div className="service-dec">
            <p>PRINTING SERVICES</p>
          </div>
          {/* </div> */}
        </Link>
        <div className="div-right">
          <div className="div-top">
            <Link className="div-top-left" to="/listing/photo and plate">
              {/* <div className='div-top-left'> */}
              <div className="service-dec">
                <p>PHOTO AND PLATE</p>
              </div>
              {/* </div> */}
            </Link>
            <Link className="div-top-right" to="/listing/sublimation tiles">
              {/* <div className='div-top-right'> */}
              <div className="service-dec">
                <p>SUBLIMATION TILES</p>
              </div>
              {/* </div> */}
            </Link>
          </div>
          <div className="div-bottom">
            <Link className="div-bottom-left" to="/listing/cushion">
              {/* <div className='div-bottom-left'> */}
              <div className="service-dec">
                <p>CUSHION</p>
              </div>
              {/* </div> */}
            </Link>
            <Link className="div-bottom-right" to="/listing/sublinova sublimation ink">
              {/* <div className='div-bottom-right'> */}

              <div className="service-dec">
                <p>SUBLINOVA SUBLIMATION INK</p>
              </div>

              {/* </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
