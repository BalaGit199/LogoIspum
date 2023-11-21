import React from "react";
import "./communitycomponent.css";
import Donation from "../../assets/Donation.png";
import Community from "../../assets/Community.png";
import Volunteer from "../../assets/Volunteer.png";
function CommunityContainer() {
  return (
    <div className="mainCommunityContainer">
      <div className="communityContainer">
        <div className="communityHeader">
          <label>Start Helping</label>
          <h2>We provide ways for you to help</h2>
          <p>
            There are numerous ways to contribute to your community beyond just
            donating money or volunteering your time
          </p>
        </div>
        <div className="communityMember">
          <div className="card Donation">
            <p>Donation</p>
            <img src={Donation} alt="Donation" />
          </div>
          <div className="card Volunteer">
            <p>Volunteer</p>
            <img src={Volunteer} alt="Donation" />
          </div>
          <div className="card Community">
            <p>Community</p>
            <img src={Donation} alt="Community" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityContainer;
