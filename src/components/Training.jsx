import React from "react";
import Ceo from "./Ceo";
import groupstar from "../Images/Group-3-1-3.svg";

function Training() {
  return (
    <>
      <div className="container bg-training">
        <div className="row clearfix pt-5">
          {/* Section-01 */}
          <section className="col-lg-6 pt-2">
            <span className="fw-semibold fs-4 bg-black text-white px-3 py-2">
              4-hour Training
            </span>
            <p className="mt-3 fs-4">
              Stuck In Day to Day Activities & Feel Stressed?
            </p>
            <p className="fs-1 fw-medium txt-color">
              Learn the Action Plan to...
            </p>
            <p className="heading1 fw-medium txt-color">
              Grow Your Business &
              <br />
              Profit Without You
            </p>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column mb-3 w-25">
                <p className="fw-semibold">DURATION</p>
                <p>4 Hours (with Q&A Session)</p>
              </div>
              <div className="d-flex flex-column mb-3 w-25">
                <p className="fw-semibold">DATE & TIME</p>
                <p>24th May</p>
                <p>9 AM to 1 PM</p>
              </div>
              <div className="d-flex flex-column mb-3 w-25">
                <p className="fw-semibold">LANGUAGE</p>
                <p>English (you can ask doubts in Hindi)</p>
              </div>
            </div>
            <div className="bg-color1 border border-1 p-3 fs-3 text-white text-center rounded-4">
              Sign Up to Attend (₹999/- ₹99/-)
              <br />
              Get 100% Refund Security
            </div>
          </section>

          {/* Section - 02 */}
          <section className="col-lg-6 pt-2">
            <div className="d-flex container-01 align-items-center flex-column clearfix">
              <img
                src={require("../Images/Rajiv-Talreja.jpg")}
                alt=""
                className="rounded-4 img-fluid"
                width={"auto"}
                height={"auto"}
                style={{ minWidth: "500px" }}
              />
              <div className="overlay-01 d-flex w-75 flex-column justify-content-center align-items-center shadow bg-white border border-1 px-3 py-2 fs-5 text-black fw-medium text-center b1-radius">
                <img
                  className="my-auto"
                  src={groupstar}
                  alt="..."
                  width={130}
                  height={30}
                />
                <span>
                  71,250 Founders Rated This Seminar
                  <br /> | 4.96/5 Stars
                </span>
              </div>
            </div>

            <div className="ms-5">
              <h4 className="fw-medium fs-2 pt-5">Rajiv Talreja</h4>
              <h5 className="fs-4 lh-lg">Asia's Leading Business Coach</h5>
              <ul className="fs-5 lh-base">
                <li>Founder of 5 Businesses & 1 Celebrity Sports Team</li>
                <li>Annual Revenue of ₹100+ Crore</li>
                <li>Hired & Managed 2000+ Employees</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Ceo />
    </>
  );
}

export default Training;
