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
            <Link  to="/searchListing/headphone">
              <p className='footer-product'>Coats</p>
            </Link>
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Jeans</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Tops</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Sweaters</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Jackets</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Book Cover Printing</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Brand Printing</p>
            </Link>
            
            <Link  to="/searchListing/headphone">
            <p className='footer-product'>Business Card Printing</p>
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
            © 2021, Made with ❤️ by Digicenter Assam
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