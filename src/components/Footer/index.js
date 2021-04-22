import React from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <>
      <div className="footer_parent">
        <div className="footer_parent1">
          <div className="footer_child1">
            <p className="footer_child1_heading">Contact Info</p>
            <div className="contact-desc">
              <p>Phone: +91 70022 80187</p>

              <p>
                Address: DMNSE Office, <br></br>
                Ganeshguri, Guwahati
              </p>
            </div>
          </div>
          <div className="footer_child1">
            <p className="footer_child1_heading">Get Help</p>
            <p>Delivery Information</p>
            <p>Sale Terms & Conditions</p>
            <p>Returns & Refunds</p>
            <p>Privacy Notice</p>
            <p>Shopping FAQs</p>
          </div>
          <div className="footer_child1">
            <p className="footer_child1_heading">Popular Categories</p>
            <Link  to="/listing/sublimation cushion">
              <p className='footer-product'>Sublimation Cushion</p>
            </Link>
            <Link  to="/listing/sublinova sublimation ink">
            <p className='footer-product'>Sublinova Sublimation Ink</p>
            </Link>
            
            <Link  to="/listing/lamination machine">
            <p className='footer-product'>Lamination Machine</p>
            </Link>
            
            <Link  to="/listing/badge machine">
            <p className='footer-product'>Badge Machine</p>
            </Link>
            
            <Link  to="/listing/lanyard machine">
            <p className='footer-product'>Lanyard Machine</p>
            </Link>
            
            <Link  to="/listing/wall clock">
            <p className='footer-product'>Wall Clock</p>
            </Link>
            
            <Link  to="/listing/sublimation tiles">
            <p className='footer-product'>Sublimation Tiles</p>
            </Link>
            
            <Link  to="/listing/cushion">
            <p className='footer-product'>Cushion</p>
            </Link>
            
          </div>
          <div className="footer_child1">
            <p className="footer_child1_heading">Let's stay in touch</p>

            <div className="footer-btn">
              <input id="footer-btnInput"></input>
              <button id="footer-btnSubmit">SUBMIT</button>
            </div>

            <p>
              Keep up to date with our latest news <br></br>and special offers.
            </p>
          </div>
          <hr></hr>
        </div>

        <div className="footer_parent2">
        
          <div className="footer_child2">

            <p>© 2021, Made with ❤️ by <a href="https://www.digicenterassam.com">Digicenter Assam</a></p>
        
          </div>
        
          <div
            className="footer_child2"
            style={{
              textAlign: "right",
            }}
          >
            All Rights Reserved
          </div>
        </div>
      </div>
      <div className="responsive-footer">
        {/* <div className="contact-heading">
          <p>Contact Info</p>
        </div>
        <div className="contact-info">
          <p>
            Phone:<span>+91-7002280187</span>
          </p>
          <p>
            Address:<span>DNSNE Office, Ganeshguri, Guwahati.</span>
          </p>
        </div> */}
        <div className="copyright-tag">
          <p>© 2021, Made with ❤️ by Digicenter Assam. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
