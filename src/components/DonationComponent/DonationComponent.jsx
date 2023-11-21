import React from "react";
import "./donationcomponent.css";
import Sprinkle from "../../assets/Sprinkle 1.png";
import master from '../../assets/Mastercard.png'
import paynow from '../../assets/PayNow.png'
import PayIcon from '../../assets/Icon Right.png'
import {useFormik} from 'formik';
import * as yup from 'yup';
function DonationComponent() {
  
  const onSubmit = () =>{
    console.log("valuess",values);
}
  const {values,handleBlur,handleChange,touched,errors,handleSubmit} = useFormik({

    initialValues:{
    name:'',
    email:'',
    tax_id:'',
    postal_code:'',
    unit_number:'',
    rep_tax_id:'',
    address:'',
    remark:'',

    },
    onSubmit

   });

  return (
    <div className="main-donation-container">
      <div className="donation-container">
        <div className="conatiner1">
          <div className="sub-heading">Donation</div>
          <div className="heading">
            Giving back to the community
            <img src={Sprinkle} alt="" />
          </div>
          <div className="support-heading">
            Giving money, goods, or resources to support causes, organizations,
            or individuals in need.
          </div>
        </div>
        <div className="donation-box">
          <div className="title">Let us know about you</div>
          <div className="entity-title">
            <div className="entity-type entity-1">
              <div className="title">
                {" "}
                <input type="checkbox" checked />
                Donate as an Individual
              </div>
              <div className="sub-title">Provide my personal data</div>
            </div>
            <div className="entity-type" >
              <div className="title">
                {" "}
                <input type="checkbox" />
                Donate as an Organisation
              </div>
              <div className="sub-title">Provide my Organisation data</div>
            </div>
            <div className="entity-type">
              <div className="title">
                {" "}
                <input type="checkbox"  />
                Donate as an Anonymously
              </div>
              <div className="sub-title">
                Provide my Optionally provide data
              </div>
            </div>
          </div>
          <div className="title-2">Let’s complete your information details</div>
          <div className="input-fields">
            <p className="title">
              <input type="checkbox" />
              wish to have tax deductio
            </p>
            <p className="sub-title">
              You are entitled to a tax-deduction of 2.5 times of your donation
              amount
            </p>
            <form className="form-inputs" onSubmit={handleSubmit}>
              <div className="form-section">
                <div className="section-1">
                  <input type="text" placeholder="Full Name" 
                  id="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  />

                  <div className="ids">
                    <select name="tax">
                      <option value='ID Type'>ID Type</option>
                      <option value="saab">ID Type</option>
                    </select>
  
                    <input  className="test" type="text" placeholder="Tax Recipient ID"
                    id="tax_id"
                    value={values.tax_id}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                  
                  </div>

                  <input type="text" placeholder="Postal Code"
                  id="postal_code"
                  value={values.postal_code} 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <input type="text" placeholder="Unit Number" />
                </div>

                <div className="section-2">
                  <input type="text" placeholder="Email Address" 
                  id="email"
                  value={values.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <input type="text" placeholder="Tax Recipient Full Name"
                  id="tax_rep_name"
                  value={values.tax_rep_name} 
                  onChange={handleChange}
                  onBlur={handleBlur} />
                  <input type="text" placeholder="Addreass"
                  id="address"
                  value={values.address} 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <input type="text" placeholder="Remarks"
                  id="remark"
                  value={values.remark} 
                  onChange={handleChange}
                  onBlur={handleBlur} />
                </div>
              </div>
              <div className="title-3">How much would you like to donate?</div>
              <div className="donation-amount">
                {" "}
                <input type="text" placeholder="Donation amount"  
                id="donation"
                onChange={handleChange}
                onBlur={handleBlur}/>
              </div>
              <div className="payandagree">
                <div className="pay-card"><img src={master}/> Credit Card</div>
                <div className="pay-card"><img src={paynow}/>PayNow</div>
              </div>
              <div className="agree-contaiter">
              <div className="agree">
              <input type="checkbox" />
                  I agree with the <span>terms and conditions</span>
                </div>
              </div>
             <div className="submit-btn">
             <button type="submit">Donate<img src={PayIcon}/></button>

             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationComponent;
