import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateTicket() {

  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      icon: "fa-circle-plus",
      title: "Account Opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary"
      ]
    },
    {
      icon: "fa-user",
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General"
      ]
    },
    {
      icon: "fa-indian-rupee-sign",
      title: "Funds",
      links: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates"
      ]
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4">

      {items.map((item, index) => (

        <div className="row mb-3" key={index}>
          <div className="col">

            <div
              onClick={() => toggle(index)}
              className="d-flex align-items-center border p-3 ms-5"
              style={{ width: "88%", cursor: "pointer" }}
            >

              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#f2f4f7"
                }}
              >
                <i className={`fa-solid ${item.icon} text-primary fs-4`}></i>
              </div>

              <h5 className="ms-4 mb-0"><Link style={{textDecoration:'none'}}>{item.title}</Link></h5>

              <i
                className={`fa-solid ${
                  openIndex === index
                    ? "fa-chevron-up"
                    : "fa-chevron-down"
                } ms-auto`}
              ></i>

            </div>


            {openIndex === index && (

              <div
                className="border border-top-0 ms-5 p-4"
                style={{ width: "88%" }}
              >

                <ul>

                  {item.links.map((link, i) => (

                    <li key={i} className="mb-3">

                      <Link
                        to=""
                        className="text-decoration-none text-primary"
                      >
                        {link}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

            )}

          </div>
        </div>

      ))}

    </div>
  );
}