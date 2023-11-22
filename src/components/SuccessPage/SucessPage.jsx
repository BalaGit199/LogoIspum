import React from 'react'
import DonationSuccess from '../DonationSuccess/DonationSuccess'
import SuccessNavComponent from '../SuccesNavComponent/SuccessNavComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

function SucessPage() {
  return (
    <div>
      <SuccessNavComponent/>
      <DonationSuccess/>
      <FooterComponent/>
    </div>
  )
}

export default SucessPage