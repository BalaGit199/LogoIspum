import React from 'react'
import './volunteercomponent.css'
import Arrow from '../../assets/Icon Right (1).png'
import calender from '../../assets/Calendar.png'
import map from '../../assets/MapPin.png'
function VolunteerComponent() {
  return (
    <div className='volunteer-main-container'>
        <div className='volunteer-container'>
            <div className="heading-and-support-text">
                <div className="heading-and-sub-heading">
                    <div className='subheading'>Volunteer</div>
                    <div className='heading'>Assist the community</div>
                </div>
                <div className='support-container'>
                <div className="support-text">
                Offering time and effort willingly, without pay, to assist and 
                contribute to community or charitable activities.
                </div>
                </div>
                
            </div>



            <div className="volunteer-tabs">
                <div className="all-tabs">
                    <div className="tab">View All</div>
                    <div className="tab">Food Delivery</div>
                    <div className="tab">Teaching</div>
                    <div className="tab">Event Organizer</div>
                    <div className="tab">Helper</div>
                </div>
            </div>



            <div className="volunteer-items">
            <div className="volunteer-item">
                    <div className="vol-heading">
                        <div className="head-props"><p className='label'>Food Delivery</p>
                        <p className='opportunity'>View Opportunity<img src={Arrow}/></p></div>
                        <div className="title">Food From the Heart</div>
                    </div>
                    <div className="sub-heading-val">We’re looking for volunteers to deliver food to people in need</div>
                    <div className="location-date-val">
                        <div className="location"><img src={map}/>Bedok Place</div>
                        <div className="time"><img src={calender}/>25/10/1999</div>
                    </div>
                </div>
                <div className="volunteer-item">
                    <div className="vol-heading">
                        <div className="head-props"><p className='label'>Food Delivery</p>
                        <p className='opportunity'>View Opportunity<img src={Arrow}/></p></div>
                        <div className="title">Food From the Heart</div>
                    </div>
                    <div className="sub-heading-val">We’re looking for volunteers to deliver food to people in need</div>
                    <div className="location-date-val">
                        <div className="location"><img src={map}/>Bedok Place</div>
                        <div className="time"><img src={calender}/>25/10/1999</div>
                    </div>
                </div>
                <div className="volunteer-item">
                    <div className="vol-heading">
                        <div className="head-props"><p className='label'>Food Delivery</p>
                        <p className='opportunity'>View Opportunity<img src={Arrow}/></p></div>
                        <div className="title">Food From the Heart</div>
                    </div>
                    <div className="sub-heading-val">We’re looking for volunteers to deliver food to people in need</div>
                    <div className="location-date-val">
                        <div className="location"><img src={map}/>Bedok Place</div>
                        <div className="time"><img src={calender}/>25/10/1999</div>
                    </div>
                </div>
                <div className="volunteer-item">
                    <div className="vol-heading">
                        <div className="head-props"><p className='label'>Food Delivery</p>
                        <p className='opportunity'>View Opportunity<img src={Arrow}/></p></div>
                        <div className="title">Food From the Heart</div>
                    </div>
                    <div className="sub-heading-val">We’re looking for volunteers to deliver food to people in need</div>
                    <div className="location-date-val">
                        <div className="location"><img src={map}/>Bedok Place</div>
                        <div className="time"><img src={calender}/>25/10/1999</div>
                    </div>
                </div>
                <div className="volunteer-item">
                    <div className="vol-heading">
                        <div className="head-props"><p className='label'>Food Delivery</p>
                        <p className='opportunity'>View Opportunity<img src={Arrow}/></p></div>
                        <div className="title">Food From the Heart</div>
                    </div>
                    <div className="sub-heading-val">We’re looking for volunteers to deliver food to people in need</div>
                    <div className="location-date-val">
                        <div className="location"><img src={map}/>Bedok Place</div>
                        <div className="time"><img src={calender}/>25/10/1999</div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default VolunteerComponent