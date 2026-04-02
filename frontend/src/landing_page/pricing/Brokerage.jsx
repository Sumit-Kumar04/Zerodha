import React from "react";
import { Link } from "react-router-dom";
export default function Brokerage() {
  return (
    <>
      <div className="container  p-5">
        <h3>Charges for account opening</h3>
        <div className="row border m-5">
          <table class="table table-borderless">
            <thead>
              <tr className="border">
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <button className="custom_Pricing">FREE</button>
                </td>
              </tr>
              <tr>
                <td>Online account</td>
                <td>
                  <button className=" custom_Pricing">FREE</button>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>

              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <h3>Demat AMC (Annual Maintenance Charge)</h3>
        <div className="row border m-5 mb-0">
          <table class="table table-borderless">
            <thead>
              <tr className="border">
                <th scope="col">Value of holdings</th>
                <th scope="col">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <button className="custom_Pricing">FREE</button>
                </td>
              </tr>
             
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
              </tr>

              <tr>
                <td>
                  Above ₹10 lakh
                </td>
                <td>₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
         
          
        </div>
        <div className="row ps-5 pe-5 mb-5 pb-5"> <p>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <Link to="">click here</Link>.</p></div>

        <div className="row pb-5 mb-5">
            <h6>Disclaimer</h6>
            <p className="text-muted">

For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
        <div className="row   text-center">
          <div className="col">
            <h2>Open a Zerodha account</h2>
            <p>
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>

            <Link to="/signup">
              <button
                className="p-2 mt-4 btn btn-primary"
                style={{ width: "30%", margin: "0 auto" }}
              >
                Create account
              </button>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
