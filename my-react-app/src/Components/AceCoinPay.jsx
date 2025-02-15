import React from "react";
import "./AceCoinPay.css";

const AceCoinPay = () => {
  return (
    <div className="payment-container">
      {/* Left Side: Form */}
      <div className="payment-left">
        <div className="payment-header">
          <div className="logo">
            🔵 <span>AceCoinPay</span>
          </div>
          <div className="timer">
            <span>0</span> <span>1</span> : <span>1</span> <span>9</span>
          </div>
        </div>

        <div className="payment-form">
          <label>Card Number</label>
          <div className="input-group">
            <input type="text" value="2412  -  7512  -  3412  -  3456" disabled />
            <span className="edit-icon">✎</span>
          </div>

          <label>CVV Number</label>
          <div className="input-group">
            <input type="text" value="327" disabled />
          </div>

          <label>Expiry Date</label>
          <div className="expiry-group">
            <input type="text" value="09" disabled />
            /
            <input type="text" value="22" disabled />
          </div>

          <label>Password</label>
          <div className="input-group">
            <input type="password" value="••••••••" disabled />
          </div>

          <button className="pay-button">Pay Now</button>
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="payment-right">
        <div className="card-preview">
          <p>Jonathan Michael</p>
          <p>•••• 3456</p>
          <p>09/22</p>
        </div>
        <div className="order-details">
          <p><strong>Company:</strong>Apple</p>
          <p><strong>Order Number:</strong> 1266201</p>
          <p><strong>Product:</strong> MacBook Air</p>
          <p><strong>VAT (20%):</strong> $100.00</p>
          
        </div>
      </div>
    </div>
  );
};

export default AceCoinPay;
