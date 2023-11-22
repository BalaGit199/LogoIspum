import React from 'react'
import CommunityContainer from '../CommunityComponent/CommunityContainer'
import CommunityEvent from '../CommunityEvent/CommunityEvent'
import DonationComponent from '../DonationComponent/DonationComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import NavBar from '../NavBarComponent/NavBar'
import SubscriptionComponent from '../SubscriptionComponent/SubscriptionComponent'
import VolunteerComponent from '../VolunteerComponent/VolunteerComponent'


function HomeComponet() {
  return (
    <div>
        <NavBar/>
        <CommunityContainer/>
        <DonationComponent/>
        <VolunteerComponent/>
        <CommunityEvent/>
        <SubscriptionComponent/>
        <FooterComponent/>
    </div>
  )
}

export default HomeComponet