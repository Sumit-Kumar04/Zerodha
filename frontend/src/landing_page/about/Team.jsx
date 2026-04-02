import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Team() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="container mb-5">
        <h2 className="text-center mb-5">People</h2>

        <div className="row">
          <div className="col-1"></div>

          <div className="col-5 text-center">
            <img
              src="/media/images/nithinKamath.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />
            <p className="pt-2">Nithin Kamath</p>
            <p className="text-muted">Founder, CEO</p>
          </div>

          <div className="col-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>

            <p>
              Connect on{" "}
              <Link to="https://nithinkamath.me/">Homepage</Link> /{" "}
              <Link to="https://tradingqna.com/u/nithin/summary">
                TradingQnA
              </Link>{" "}
              / <Link to="https://x.com/Nithin0dha">X</Link>
            </p>
          </div>

          <div className="col-1"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Nikhil */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/Nikhil.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Nikhil Kamath</p>
            <p className="text-muted team-text">Founder</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio1"
                onClick={() => toggleOpen(1)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 1 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio1">
              <div>
                Nikhil is an astute and experienced investor and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </div>
            </div>
          </div>

          {/* Kailash */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/Kailash.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Dr. Kailash Nadh</p>
            <p className="text-muted team-text">CTO</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio2"
                onClick={() => toggleOpen(2)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 2 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio2">
              <div>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </div>
            </div>
          </div>

          {/* Venu */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/Venu.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Venu Madhav</p>
            <p className="text-muted team-text">COO</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio3"
                onClick={() => toggleOpen(3)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 3 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio3">
              <div>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring compliance with rules and regulations. Workouts,
                cycling and adventuring is what he does outside Zerodha.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Seema */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/Seema.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Seema Patil</p>
            <p className="text-muted team-text">Director</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio4"
                onClick={() => toggleOpen(4)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 4 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio4">
              <div>
                Seema who has led the quality team since the beginning of
                Zerodha is now a director. She is an extremely disciplined
                fitness enthusiast.
              </div>
            </div>
          </div>

          {/* Karthik */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/karthik.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Karthik Rangappa</p>
            <p className="text-muted team-text">Chief of Education</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio5"
                onClick={() => toggleOpen(5)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 5 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio5">
              <div>
                Karthik "Guru" Rangappa single handedly wrote Varsity,
                Zerodha's educational program. He heads investor education.
              </div>
            </div>
          </div>

          {/* Austin */}
          <div className="col text-center mb-4">
            <img
              src="/media/images/Austin.jpg"
              style={{ width: "70%", borderRadius: "50%" }}
              alt=""
            />

            <p className="pt-2">Austin Prakesh</p>
            <p className="text-muted team-text">Director Strategy</p>

            <p className="d-inline-flex gap-1">
              <Link
                className="text-muted"
                style={{ textDecoration: "none" }}
                data-bs-toggle="collapse"
                to="#bio6"
                onClick={() => toggleOpen(6)}
              >
                Bio{" "}
                <i
                  className={`fa-solid ${
                    openId === 6 ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </Link>
            </p>

            <div className="collapse" id="bio6">
              <div>
                Austin is a successful entrepreneur from Singapore. His area of
                specialty revolves around helping organisations grow by
                optimizing revenue streams and creating growth strategies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}