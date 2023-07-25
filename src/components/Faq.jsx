import React from "react";

function Faq() {
  const faq = [
    {
      id: "001",
      faq: "How will I get the link to attend the program?",
    },
    {
      id: "002",
      faq: "What if I have questions about registration, attending, etc?",
    },
    {
      id: "003",
      faq: "Why does this program cost only ₹99?",
    },
    {
      id: "004",
      faq: "Will I get the recording of the program?",
    },
    {
      id: "005",
      faq: "If I miss attending this time can I attend this again?",
    },
    {
      id: "006",
      faq: "What do I need to keep handy during the webinar?",
    },
    {
      id: "007",
      faq: "Can I attend this program along with my business partner(s)?",
    },
    {
      id: "008",
      faq: "Is this applicable to my industry?",
    },
  ];
  return (
    <>
      <div className="container-fluid bg-black pb-4">
        <div className="container text-center">
          <h4 className="txt-color2 heading2 pt-5 pb-3 ">
            Frequently Asked Questions
          </h4>
          {faq &&
            faq.map((m, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="text-white d-flex flex-row my-4 align-content-center justify-content-between border border-1 border-secondary p-4 rounded-3"
                    style={{ backgroundColor: "#161b22" }}
                  >
                    <h4>{m.faq}</h4>
                    <button
                      className="bg-black border rounded-circle fs-4 text-white  m-1 text-center fw-medium "
                      style={{ width: "35px", height: "35px" }}
                    >
                      <span> + </span>
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Faq;
