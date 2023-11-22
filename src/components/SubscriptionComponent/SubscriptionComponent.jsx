import React from "react";
import "./subscriptioncomponent.css";

function SubscriptionComponent() {
  return (
    <div className="subcription-main-container">
      <div className="subcription-container">
        <div className="subscription-to-newsletter">
            <div className="newsletter-content">
              <div className="heading">Keep up to date with our newsletter</div>
              <div className="subheading">Stay in the loop for everything you need to kno</div>
            </div>
            <div className="input-content">
               <input type="text" placeholder="Email address" />   
               <button>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionComponent;
