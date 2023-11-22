import React from "react";
import "./donationcomponent.css";
import Sprinkle from "../../assets/Sprinkle 1.png";
import master from "../../assets/Mastercard.png";
import paynow from "../../assets/PayNow.png";
import PayIcon from "../../assets/Icon Right.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setUser} from '../../../redux/userSlicer'
function DonationComponent() {
  const [payment, setpayment] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(setUser(values))
    navigate("/successPage"); 
  };
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Enter the proper email")
      .required("This field is required"),
    postal_code: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
    unit_number: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
    postal_code: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
    tax_id: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
    donationAmount: yup
      .number()
      .positive()
      .integer()
      .required("This field is required"),
    address: yup.string().required("address is Required"),
    remark: yup.string().required("remark is Required"),
    // tax: yup.string().required("Name is Required"),
    agree: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      postal_code: "",
      unit_number: "",
      email: "",
      tax_rep_name: "",
      remark: "",
      tax_id: "",
      address: "",
      donationAmount: "",
      agree: false,
      // tax: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  console.log("errors", errors);

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
                <input type="checkbox" defaultChecked />
                Donate as an Individual
              </div>
              <div className="sub-title">Provide my personal data</div>
            </div>
            <div className="entity-type">
              <div className="title">
                {" "}
                <input type="checkbox" disabled />
                Donate as an Organisation
              </div>
              <div className="sub-title">Provide my Organisation data</div>
            </div>
            <div className="entity-type">
              <div className="title">
                {" "}
                <input type="checkbox" disabled />
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
              wish to have tax deduction
            </p>
            <p className="sub-title">
              You are entitled to a tax-deduction of 2.5 times of your donation
              amount
            </p>
            <form className="form-inputs" onSubmit={handleSubmit}>
              <div className="form-section">
                <div className="section-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    className={errors.full_name && "error"}
                    value={values.full_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="ids">
                    <select
                      name="tax"
                      id="tax"
                      value={values.tax}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                    >
                      <option value="ID Type">NRIC</option>
                    </select>
                    <div className="id-type">ID Type</div>
                    <input
                      type="text"
                      placeholder="Tax Recipient ID"
                      id="tax_id"
                      value={values.tax_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.tax_id && "error"}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Postal Code"
                    id="postal_code"
                    className={errors.postal_code && "error"}
                    value={values.postal_code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <input
                    type="text"
                    placeholder="Unit Number"
                    id="unit_number"
                    value={values.unit_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.unit_number && "error"}
                  />
                </div>

                <div className="section-2">
                  <input
                    type="text"
                    placeholder="Email Address"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && "error"}
                  />
                  <input
                    type="text"
                    placeholder="Tax Recipient Full Name"
                    id="tax_rep_name"
                    value={values.tax_rep_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.tax_rep_name && "error"}
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.address && "error"}
                  />
                  <input
                    type="text"
                    placeholder="Remarks"
                    id="remark"
                    value={values.remark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.remark && "error"}
                  />
                </div>
              </div>
              <div className="title-3">How much would you like to donate?</div>
              <div className="donation-amount">
                {" "}
                <input
                  type="text"
                  placeholder="$$"
                  id="donationAmount"
                  value={values.donationAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.donationAmount && "error"}
                />
                <div className="donation-amount-val">Donation amount</div>
              </div>
              <div className="payandagree">
                <div className="pay-card">
                  <img src={master} /> Credit Card
                </div>
                <div className="pay-card">
                  <img src={paynow} />
                  PayNow
                </div>
              </div>
              <div className="agree-contaiter">
                <div className="agree">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    value={values.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  I agree with the <span>terms and conditions</span>
                </div>
              </div>
              {errors.agree && <p className="agree-message">{errors.agree}!</p>}
              <div className="submit-btn">
                <button type="submit">
                  Donate
                  <img src={PayIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationComponent;
