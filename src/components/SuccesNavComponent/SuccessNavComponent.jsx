import React from 'react'
import './successnavcomponent.css'
import Logo from '../../assets/Logo (1).png'

function SuccessNavComponent() {
  return (
    <div className='success-nav-main-container'>
      <div className="success-nav-container">
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <div className="donate-buttons">
          <div className='return'>Return To HomeScreen</div>
          <div className='donate'>Donate Again</div>
        </div>
      </div>
    </div>
  )
}

export default SuccessNavComponent