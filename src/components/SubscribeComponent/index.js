import React from "react";
import './SubscribeComponent.css'

function SubscribeComponent() {
  return (
    <div className="subscribe_parent">
      <div className="subscribe_child">
          <p id="subscribe-1stLine">Lets stay in touch</p>
          <p id="subscribe-2ndLine">Enjoy 15% off your first order when you join our mailing list.</p>
          <div className="subscribe-btn">
              <input id="subscribe-btnInput"></input>
              <button id="subscribe-btnSubmit">Subscribe</button>
          </div>
          <p>We respect your privacy, so we never share your info.</p>
      </div>
    </div>
  );
}

export default SubscribeComponent;
