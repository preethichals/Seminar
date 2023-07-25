import React from "react";

function Ceo() {
  //Icons
  const FeaturedIn = [
    {
      id: "001",
      image: "Icons-1.png",
    },
    {
      id: "002",
      image: "Icons-2.png",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="bg-seminar b1-radius p-4 fs-1 text-center txt-color2">
            This action-packed seminar will teach you how the top 1% CEOs and
            Founders approach Business Management.
          </h3>
        </div>
        <h5 className="fs-3 mt-3 txt-color">Featured In:</h5>
        <div className="container mt-4 mb-5">
          <div className="row">
            {FeaturedIn &&
              FeaturedIn.map((m, index) => {
                return (
                  <>
                    <div key={index} className="col">
                      <img
                        className="img-fluid m-0 p-1"
                        src={require(`../Images/${m.image}`)}
                        alt="logo"
                        style={{
                          minWidth: "17rem",
                          minHeight: "5rem",
                        }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ceo;
