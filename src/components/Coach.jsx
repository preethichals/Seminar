import React from "react";

function Coach() {
  const coach = [
    {
      id: "001",
      num: "16",
      image: "icon-1.png",
      desc: "Years Of Experience In Training And Coaching",
    },
    {
      id: "002",
      num: "50M",
      image: "icon-1.png",
      desc: "Entrepreneurs Reached In The Last 6 Years",
    },
    {
      id: "003",
      num: "500+",
      image: "icon-1.png",
      desc: "Seminars And Workshops Conducted In The Last 6 Years",
    },
    {
      id: "004",
      num: "500K",
      image: "icon-1.png",
      desc: "Years Of Experience In Training And Coaching",
    },
    {
      id: "005",
      num: "100K",
      image: "icon-1.png",
      desc: "Paid Customers",
    },
    {
      id: "006",
      num: "18K+",
      image: "icon-1.png",
      desc: "Years Of Experience In Training And Coaching",
    },
    {
      id: "007",
      num: "30+",
      image: "icon-1.png",
      desc: "In-House Business Coaches",
    },
    {
      id: "008",
      num: "190+",
      image: "icon-1.png",
      desc: "Industries Worked With",
    },
  ];
  return (
    <>
      <div className=" container mt-5 pt-3 pb-3">
        <h1 className="text txt-color">Meet Your Coach</h1>

        <section>
          <div className="row">
            <img
              className=" col-md-2 col-sm-4 rounded-circle my-4"
              src={require(`../Images/Rajiv-Talreja.jpg`)}
              alt=""
            />
            <div className="col-md-10 col-sm-8 pt-5 mt-4">
              <h1 className="">Rajiv Talreja</h1>
              <p className="fw-normal  fs-5">
                Asia's Leading Business Success Coach
              </p>
            </div>
          </div>
        </section>

        <div className="row ">
          {coach &&
            coach.map((coach, index) => {
              return (
                <div
                  key={index}
                  className="card col-md-3 rounded-5 m-3"
                  style={{ width: "280px", boxShadow: "1px 1px 10px #8c8c8e" }}
                >
                  <div className="card-body">
                    <div className="row mb-4">
                      <h1 className="col-md-10">{coach.num}</h1>
                      <img
                        className="p-2 rounded-3 bg-grdntclr1"
                        src={require(`../Images/${coach.image}`)}
                        alt=""
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </div>

                    <p className="fw-normal" style={{ fontSize: "18px" }}>
                      {coach.desc}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Coach;
