import React from "react";

function RightFor() {
  const rightFor = [
    {
      id: "001",
      img: "Director.png",
      role: "Directors, Partners, Sole Proprietors Of Companies, LLPs, Partnerships, Etc.",
    },
    {
      id: "002",
      img: "owner.png",
      role: "Owners Of Service Based Businesses & Agencies Etc.",
    },
    {
      id: "003",
      img: "consultation.png",
      role: "Consultants & Professionals Like Architects, Doctors, Lawyers",
    },
    {
      id: "004",
      img: "analyst.png",
      role: "Retailers, Manufacturers, Distributors, Wholesalers, Franchise Owners Etc",
    },
    {
      id: "005",
      img: "founder.png",
      role: "Business & Startup Founders, Entrepreneurs, CEOs, CMOs, CXOs, Etc.",
    },
    {
      id: "006",
      img: "entrepreneur.png",
      role: "SMEs, MSMEs (Small, Micro, Medium Unit Owners)",
    },
  ];
  return (
    <>
      <div className="bg-black pb-5">
        <div className="container bg-black pt-2 pb-4">
          <h4 className="txt-color2 heading2 pt-5 pb-4 ">
            This Seminar is right for...
          </h4>
          <div className="row gap-3 justify-content-center">
            {rightFor &&
              rightFor.map((m, index) => {
                return (
                  <div
                    key={index}
                    className=" col-md-5 bg-light rounded-3 border border-2 border-dark-subtle"
                  >
                    <div className="d-flex flex-row justify-content-center p-4">
                      <img
                        className="my-auto"
                        src={require(`../Images/${m.img}`)}
                        alt="..."
                        width={100}
                        height={100}
                      />
                      <p className="card-text fs-5 ms-4">{m.role}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default RightFor;
