import React from 'react'
import './footercomponent.css'
import Logo from '../../assets/Logo.png'
import twitter from '../../assets/Social icon.png'
function FooterComponent() {
  return (
    <div className='footer-main-container'>
        <div className="footer-container">
            <div className="footer-container-1">
            <div className="logo-and-links">
                    <div className="logo-and-supporting-text">
                         <div className="logo">
                            <img src={Logo} alt="Logo" />
                         </div>
                         <div className="supporting-text">
                         We provide ways for you to help and give back for our community
                         </div>
                    </div>
                    <div className="footer-links">
                        <div>Home</div>
                        <div>Start Helping</div>
                        <div>About US</div>
                        <div>Contact Us</div>
                    </div>
                </div>
            </div>
            <div className="footer-container-2">
              <div className="footer-texts">© 2023 InterAktiv Technology Pte Ltd. Test purposes.</div>
              <div className="social-icons">
                <div><img src={twitter}/></div>
                <div><img src={twitter}/></div>
                <div><img src={twitter}/></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent