import React from "react";

function Business() {
  //Seminar Curriculum
  const parts = [
    {
      id: "001",
      image: "plan.png",
      title: "PART 1 - 7 Foundational Activities",
      desc: "Get Action Packed Activities used by successful entrepreneurs to COPY & PASTE to build a STABLE AND SCALABLE BUSINESS",
    },
    {
      id: "002",
      image: "testing.png",
      title: "PART 2 - 3 ingredients of Business Growth",
      desc: "Get the 3 CORE Ingredients you need to build a business that can GROW without YOU on automation",
    },
    {
      id: "003",
      image: "growth.png",
      title: "PART 3 - Build Front Line of Leaders",
      desc: "Understand the step-by-step process of building your second line of leaders that you can implement immediately",
    },
    {
      id: "004",
      image: "analysis.png",
      title: "PART 4 - Retain those Leaders/Employees",
      desc: "Make sure you create an environment for employees to work longer so that you can focus on strategic business growth IN the LONG TERM",
    },
  ];
  return (
    <>
      <div className="bg-black pb-5">
        <div className="bg-black text-center ">
          <h4 className="txt-color2 heading2 p-5 ">
            Business Breakthrough Seminar Curriculum
          </h4>
        </div>
        <div className="row clearfix container justify-content-center align-items-center m-auto">
          {parts &&
            parts.map((m, index) => {
              return (
                <section className="col-md-6 clearfix" key={index}>
                  <div className="row bg-dark rounded-4 m-2 p-1">
                    <div className=" col m-auto">
                      <img
                        className="img-thumbnail float-start"
                        src={require(`../Images/${m.image}`)}
                        alt=""
                      />
                    </div>
                    <div className="col-9 m-auto">
                      <h5 className="text-white pt-4">{m.title}</h5>
                      <p
                        className="fw-medium txt-color3 card-text pb-5"
                        style={{ fontSize: "17px" }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Business;
