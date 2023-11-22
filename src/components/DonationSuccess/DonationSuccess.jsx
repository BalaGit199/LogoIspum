import React from "react";
import "./donationsuccess.css";
import download from "../../assets/Icon Right (2).png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
function DonationSuccess() {
  const [selector, setSelector] = useState({});
  const value = useSelector((state) => state.user);

  useEffect(()=> {
    setSelector((prev) => prev = value);
  },[])
  console.log("state", selector);
  return (
    <div className="donation-successful-main-container">
      <div className="donation-successful-container">
        <div className="header">
          <div className="header-text">Thank you for your donation!</div>
        </div>
        <div className="content">
          <div className="id-and-date">
            <div className="id-container">
              <div className="subheading">Donation No</div>
              <div className="id-label">
                <div className="id">#2308-1234</div>
                <div className="label">RECEIVED</div>
              </div>
            </div>
            <div className="date-container">
              <div className="subheading">Donation Date</div>
              <div className="date">12/08/2023</div>
            </div>
          </div>
          <div className="donation-information">
            <div className="details">
              <div className="title">Name</div>
              <div className="data">{selector.name}</div>
            </div>
            <div className="details">
              <div className="title">Email Address</div>
              <div className="data">{selector.email}</div>
            </div>
            <div className="details">
              <div className="title">Postal Code</div>
              <div className="data">{selector.postal_code}</div>
            </div>
            <div className="details">
              <div className="title">Unit Number</div>
              <div className="data">{selector.unit_number}</div>
            </div>
            <div className="details">
              <div className="title">Address</div>
              <div className="data">{selector.address}</div>
            </div>
            <div className="details">
              <div className="title">Reamark</div>
              <div className="data">{selector.remark}</div>
            </div>
          </div>
          <div className="deduction-infomation">
            <div className="decution-heading">Tax Deduction Information</div>
            <div className="deduction-content">
              <div className="tax-recipient-name-conainter">
                <div className="tax-recipient-heading">
                  Tax Recipient Full Name
                </div>
                <div className="tax-recipient-name">{selector.name}</div>
              </div>
              <div className="tax-recipient-id-container">
                <div className="tax-recipient-heading">Tax Recipient Id</div>
                <div className="tax-recipient-id">{selector.tax_id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="receipt-container">
          <div className="heading">
            You can share your donation or download the receipt
          </div>
          <div className="donation-share-btn">
            <div className="share-donation">Share Donation</div>
            <div className="download-pdf">
              Download PDF <img src={download} alt="download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSuccess;
