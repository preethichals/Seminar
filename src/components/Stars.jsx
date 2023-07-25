import React from "react";
import star from "../Images/5-star.svg";
import groupstar from "../Images/Group-3-1-3.svg";

function Stars() {
  const rightFor = [
    {
      id: "001",
      feedback:
        "Being in business for the last 18 years, but the kind of clarity on how to run the business, business model, hiring staff, getting every member of the team to achieve business aspirational goals has become very clear, and would love to thank Rajiv for this clarity. Loved to be on board for coaching.",
      name: "Sanjay Srivastav",
      comp: "A' Niche Infotech Solutions Pvt. Ltd. | Thane [Industry- IT]",
    },
    {
      id: "002",
      feedback:
        "Excellent. I am thankful to Mr. Rajiv as he has given me so much insight into the Business. He is working as a Catalyst in the lives of Small and Medium scale Entrepreneurs who are the backbone of the economy of our country. Thanks a lot to him. Thanks to Success Gyan",
      name: "JAGRUTI SHARMA",
      comp: "Greenplast Compostables | Vadodara [Industry- Import-Export]",
    },
    {
      id: "003",
      feedback:
        "Insightful and structured approach especially was relatable to all businesses at every stage. Was glad to be a part of it and hope I am able to do justice to this content and implement the entire process thoroughly in my business in the next 1 yr.",
      name: "Srishti Lakhotia",
      comp: "SRC Chemicals Pvt Ltd | Pune [Industry- Manufacturing]",
    },
    {
      id: "004",
      feedback:
        "I have had sleepless nights thinking, it will be great if I knew how to solve all my business-related problems. This program feels like a perfect destination to answer all my questions. Identifying department-wise goals and action points blew my mind. Pumped up to see results on June 30, 2023.",
      name: "Premnath Shanmugam",
      comp: "UITOUX Solutions Pvt Ltd | [Coimbatore Industry- IT]",
    },
    {
      id: "005",
      feedback:
        "Magically Custom-Tailored for SME's! A bird's eye holistic view of where you are and where you always wanted to be. Reflection of your past efforts, wins & failures, learnings, visions, and dreams culminated with a universe-calling answer. RAJIV IS HANDS-DOWN THE MENTOPRENEUR",
      name: "Dinesh Sajnani",
      comp: "Entertainment | Mumbai [Industry- Service Based]",
    },
    {
      id: "006",
      feedback:
        "It's was insightful, power-packed with knowledge, business is a science. In an approach towards this, we need to be more persistent than perfect. This myth Rajiv had broken, in the very first day. It's just not a business program, it's a self-evolution program. The combination of great content, theatrics, and follow-up is great.",
      name: "Sumitra Bohra",
      comp: "Vrinda Inc | Chennai [Industry- Service Based]",
    },
  ];
  return (
    <>
      <div className="pt-4 m-3">
        <section>
          <div className="d-flex flex-row justify-content-center p-4">
            <img
              className="my-auto"
              src={groupstar}
              alt="..."
              width={230}
              height={40}
            />
            <h4 className="heading2 text-center txt-color1">4.96/5 Stars</h4>
          </div>
          <h4 className="heading2 text-center txt-color1">
            71,250 Founders Rated This Seminar
          </h4>
        </section>
        <section className="pt-4">
          <div className="row gap-4 mx-5 justify-content-center">
            {rightFor &&
              rightFor.map((m, index) => {
                return (
                  <div
                    key={index}
                    className="card rounded-4"
                    style={{ width: "400px", backgroundColor: "#111111" }}
                  >
                    <div className="d-flex flex-column justify-content-center p-4">
                      <h5 className="text-white fw-normal fs-5 mt-2">
                        {m.feedback}
                      </h5>
                      <img
                        className="my-auto"
                        src={star}
                        alt="..."
                        width={120}
                        height={40}
                      />
                      <p className="text-white fs-4">{m.name}</p>
                      <p className="text-white fs-6">{m.comp}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Stars;
