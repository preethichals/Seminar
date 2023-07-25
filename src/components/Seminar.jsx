import React from "react";

function Seminar() {
  const success = [
    {
      id: "001",
      image: "Growth-1.webp",
    },
    {
      id: "001",
      image: "Growth-1.webp",
    },
    {
      id: "001",
      image: "Growth-1.webp",
    },
  ];
  const rightFor = [
    {
      id: "001",
      list: "Build a Success Mindset To Run Your Business Like The Top 1%",
    },
    {
      id: "002",
      list: "Improve Your Business With Right Systems & Processes",
    },
    {
      id: "003",
      list: "Manage Your Employees Like A True Leader",
    },
    {
      id: "004",
      list: "Make Your Employees Take Ownership & Responsibilities",
    },
    {
      id: "005",
      list: "Most Important! Go From Debt To Positive Cashflow, And From Positive Cashflow To High Scale Business Growth",
    },
  ];
  return (
    <>
      <div className="bg-black pt-5">
        <h4 className=" container heading2 text-center text-white">
          Growth Experienced By Entrepreneurs After
          <br /> Attending This Seminar
        </h4>
        <div className=" container d-flex pt-4">
          <div className="justify-content-center align-items-center mx-auto ">
            {/* Images */}
            {success &&
              success.map((m, index) => {
                return (
                  <img
                    key={index}
                    className="img-fluid m-1 border border-dark rounded-4"
                    src={require(`../Images/${m.image}`)}
                    alt="logo"
                    style={{
                      minWidth: "17rem",
                      minHeight: "7rem",
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="bg-black pb-5">
        <div className="container bg-black pt-5">
          <h4 className="txt-color2 heading2 pt-5 pb-4 ">
            After this Seminar, You'll...
          </h4>
          {rightFor &&
            rightFor.map((m, index) => {
              return (
                <div
                  key={index}
                  className="card bg-dark my-4 rounded-3 border border-2 border-dark-subtle"
                >
                  <div className="d-flex flex-row p-4">
                    <img
                      className="my-auto"
                      src={require(`../Images/Arrow-1.png`)}
                      alt="..."
                      width={30}
                      height={30}
                    />
                    <p className="card-text text-white fs-4 mx-4">{m.list}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Seminar;
