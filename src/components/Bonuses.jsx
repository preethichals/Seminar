import React from "react";

function Bonuses() {
  const bonus = [
    {
      id: "001",
      title: "Bonus 1 Value 999/-",
      decs: "How to Build a Win Win Win Team",
    },
    {
      id: "002",
      title: "Bonus 2 Value 999/-",
      decs: "Strategies to Expand Your Business",
    },
    {
      id: "003",
      title: "Bonus 3 Value 999/-",
      decs: "How to Create Work-Life Balance",
    },
    {
      id: "004",
      title: "Bonus 4 Value 999/-",
      decs: "Top 4 Sales Strategies to Skyrocket your Sales",
    },
    {
      id: "005",
      title: "Bonus 5 Value 999/-",
      decs: "How to Beat Competition & Test Your Business Model",
    },
    {
      id: "006",
      title: "Bonus 6 Value 999/-",
      decs: "5 Areas to invest in your business to get best ROI",
    },
    {
      id: "007",
      title: "Bonus 7 Value 999/-",
      decs: "7 Strategies to Hire the Best Talent for Your Business",
    },
    {
      id: "008",
      title: "Bonus 8 Value 999/-",
      decs: "Rajiv Talreja's Personal Money Discipline Strategy",
    },
  ];
  return (
    <>
      <div className="bg-black pb-5">
        <div className="container bg-black pt-5">
          {/* Section-01 */}
          <section className="container">
            <h4 className="heading2 text-center">
              <span className="text-white">FREE BONUSES </span>
              <span className="txt-color1">(Worth ₹7,992/-)</span>
            </h4>
            <h4 className="heading2 text-center txt-color1">
              Video Solution Course Blueprints
            </h4>
          </section>

          {/* Section-02 */}
          <section className="row justify-content-center align-items-center">
            {bonus &&
              bonus.map((m, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="g-1 card m-2 border border-2 border-dark rounded-3 text-center bg-black"
                      style={{ width: "300px" }}
                    >
                      <h5 className="bg-color4 py-3 rounded-top-3 ">
                        {m.title}
                      </h5>
                      <h5 className="text-white fs-6 fw-medium px-3 py-1 lh-base">
                        {m.decs}
                      </h5>
                    </div>
                  </>
                );
              })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Bonuses;
