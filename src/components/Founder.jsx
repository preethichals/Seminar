import React from "react";

function Founder() {
  return (
    <>
      <div className="container mt-5 pb-4">
        <h4 className="heading2 text-center txt-color1 txt-clr1">Founder of</h4>
        <div className="row justify-content-around align-items-center py-2">
          <section className="col-md-4">
            <p className="text-center txt-color1 fs-3 fw-medium txt-clr1 mb-5 mt-3">
              5 Successful Businesses
            </p>
            <img
              src={require(`../Images/Companies.png`)}
              alt=""
              className="mx-auto d-block img-fluid"
              style={{ maxWidth: "450px" }}
            />
          </section>
          <section className="col-md-4 ">
            <p className="text-center txt-color1 fs-3 fw-medium txt-clr1  mb-5 mt-3">
              Celebrity Sports Team
            </p>
            <img
              src={require(`../Images/Sports.jpg`)}
              alt=""
              className="mx-auto d-block"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Founder;
