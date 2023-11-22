import React from "react";
import "./communityevent.css";
import Broom from '../../assets/Broom.png'
import Arrow from '../../assets/Icon Right (1).png'
import shootStar from '../../assets/ShootingStar.png'
import tree from '../../assets/TreePalm.png'
import speaker from '../../assets/SpeakerLow.png'

function CommunityEvent() {
  return (
    <div className="community-main-event-container">
      <div className="community-event-container">
        <div className="community-heading-and-support">
          <div className="heading-and-support">
            <div className="subheading">Community Events</div>
            <div className="heading">Engage with the community</div>
          </div>
          <div className="supporting-text">
            Gatherings organized to engage and connect residents, fostering a
            sense of unity and shared experiences
          </div>
        </div>
        <div className="community-card-container">
        <div className="community-card">
          <div className="community-card-icon">
            <div className="icon-background"></div>
            <div className="blur-icon">
                <img src={Broom} alt="icon" />
            </div>
          </div>
          <div className="community-card-content">
            <div className="heading">Clean-Up day</div>
            <div className="subheading">By Weekly</div>
            <div className="read-more">Read More <img src={Arrow}/></div>
          </div>
        </div>
        <div className="community-card">
          <div className="community-card-icon">
            <div className="icon-background"></div>
            <div className="blur-icon">
                <img src={shootStar} alt="icon" />
            </div>
          </div>
          <div className="community-card-content">
            <div className="heading">Street Fair</div>
            <div className="subheading">Monthly</div>
            <div className="read-more">Read More <img src={Arrow}/></div>
          </div>
        </div>
        <div className="community-card">
          <div className="community-card-icon">
            <div className="icon-background"></div>
            <div className="blur-icon">
                <img src={speaker} alt="icon" />
            </div>
          </div>
          <div className="community-card-content">
            <div className="heading">WorkShops</div>
            <div className="subheading">Weekly</div>
            <div className="read-more">Read More <img src={Arrow}/></div>
          </div>
        </div>
        <div className="community-card">
          <div className="community-card-icon">
            <div className="icon-background"></div>
            <div className="blur-icon">
                <img src={tree} alt="icon" />
            </div>
          </div>
          <div className="community-card-content">
            <div className="heading">Garden Day</div>
            <div className="subheading">Monthly</div>
            <div className="read-more">Read More <img src={Arrow}/></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityEvent;
