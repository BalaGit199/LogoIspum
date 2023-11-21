import React from 'react'
import CommunityContainer from '../CommunityComponent/CommunityContainer'
import DonationComponent from '../DonationComponent/DonationComponent'
import NavBar from '../NavBarComponent/NavBar'
import VolunteerComponent from '../VolunteerComponent/VolunteerComponent'


function HomeComponet() {
  return (
    <div>
        <NavBar/>
        <CommunityContainer/>
        <DonationComponent/>
        <VolunteerComponent/>
    </div>
  )
}

export default HomeComponet