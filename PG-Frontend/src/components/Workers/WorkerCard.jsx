import React from "react";
import "./PGCard.css";
// import { useNavigate } from "react-router-dom";
import defaultPic from "./worker.png";
import StarRating from "../productpage/StarRating";
// import { useSelector } from "react-redux";
import swal from "sweetalert";
// function capitalizeEachWord(sentence) {
//   // Split the sentence into an array of words
//   const words = sentence.split(" ");

//   // Capitalize the first letter and lowercase the rest for each word
//   const capitalizedWords = words.map((word) => {
//     const firstLetter = word.charAt(0).toUpperCase();
//     const restLetters = word.slice(1).toLowerCase();
//     return firstLetter + restLetters;
//   });
//   const capitalizedSentence = capitalizedWords.join(" ");

//   return capitalizedSentence;
// }
const WorkerCard = ({ pg }) => {
//   const user = useSelector((state) => state.user);
//   const coverImage = pg.images[0] || defaultPic;
//   const navigate = useNavigate();
//   const goTo = () => {
//     navigate("/pg", { state: pg });
//     window.scrollTo(0, 0);
//   };
//   const pgTypeDisplayName = {
//     male: "Male",
//     female: "Female",
//     coLiving: "Co-Living",
//   };
//   const sharingoption = pg.sharing.slice(0, 2).map((el) => {
//     const share = {
//       1: "Single",
//       2: "Double",
//       3: "Triple",
//       4: "Four",
//       5: "Five",
//     };
//     let sharing = `${share[el.occupancy]} sharing`;
//     if (el.ac) sharing += " with AC";
//     return { sharing, price: `Rs.${el.price}` };
//   });
//   const amenities = Object.keys(pg.pgAmenities[0]).filter(
//     (key) => pg.pgAmenities[0][key] === true
//   );
//   const mainAmenities =
//     amenities.length > 5 ? amenities.slice(0, 5) : amenities;

//   const showContactInfo = () => {
//     if (!user) {
//       swal({ text: "Please Login To See Contact Info" });
//     } else {
//       let msg = document.createElement("div");

//       let line1 = document.createElement("p");
//       line1.classList.add("swal-text");
//       line1.textContent = `Contact  - 1232456980`;

//       let line2 = document.createElement("p");
//       line2.classList.add("swal-text");
//       line2.textContent = `Email ID - abc@gmail.com`;

//       msg.appendChild(line1);
//       msg.appendChild(line2);
//       swal({ title: "PG Contact Info", content: msg, buttons: false });
//     }
//   };

function copyTextToClipboard(text) {
    // Use the Clipboard API if available
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard successfully:', text);
                swal("Copied!", `${text} copied to clipboard successfully`, "success")
            })
            .catch((error) => {
                console.error('Unable to copy text to clipboard:', error);
            });
    } else {
        // Fallback to using a textarea element
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';  // Ensure it's not visible
        document.body.appendChild(textarea);
        textarea.select();
        try {
            var successful = document.execCommand('copy');
            var message = successful ? `Text copied to clipboard successfully` : 'Unable to copy text to clipboard';
            console.log(message);
            swal("Copied!", `${text} copied to clipboard successfully`, "success")
        } catch (error) {
            console.error('Unable to copy text to clipboard:', error);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

  return (
    <section className="pg-card" style={{ backgroundColor: "#ffffff" }}>
      <div className="container px-0">
        <div className="full-card col-md-12 col-xl-10">
          <div className="card shadow-0 border ">
            <div className="card-body">
              <div className="row">
                <div
                  className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 cardImage"
                //   onClick={goTo}
                >
                  <div className="ripple ripple-surface">
                    <img src={defaultPic} className="w-100" alt="product" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 col-xl-6 cardDetails"
                //   onClick={goTo}
                >
                  {/* <div class={`banner banner-${pg.pgType}`}>
                    {pgTypeDisplayName[pg.pgType]}
                  </div> */}
                  <h5>
                    {pg.name}
                    <p className="locality">
                      {pg.skill}
                    </p>
                  </h5>
                  <p className="description">
                    {pg.about > 110
                      ? pg.about.slice(0, 110) + "..."
                      : pg.about}
                  </p>
                  {/* <hr /> */}
                  <StarRating rating={4} />

                  <div className="li"></div>

                  <div class="sharing">
                    <div class="left-side">
                      {/* <div class="text">
                        <p className="sharing-text">
                          {sharingoption[0].sharing}
                        </p>
                        <p className="sharing-price">
                          {sharingoption[0].price}
                        </p>
                      </div> */}
                    </div>

                    {/* {sharingoption.length > 1 && (
                      <div class="right-side">
                        <div class="line"></div>
                        <div class="text">
                          <p className="sharing-text">
                            {sharingoption[1].sharing}
                          </p>
                          <p className="sharing-price">
                            {sharingoption[1].price}
                          </p>
                        </div>
                      </div>
                    )} */}
                  </div>
                  {/* <div className="li"></div>

                  <div className="mt-1 mb-0 text-muted small">
                    <div className="amenities-group">
                      {mainAmenities.map((el) => {
                        return (
                          <>
                            <span className="amenities">
                              {" "}
                              • {el.toUpperCase()}
                            </span>
                          </>
                        );
                      })}
                    </div>

                    <div className="li"></div>

                    <br />
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">{pg.location}</p> */}
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">Rs.{pg.price}</h4>
                    <span className="text-success">
                      <s>Onwards</s>
                    </span>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <button
                      className="btn btn-primary py-2 blue_bg button"
                      type="button"
                      onClick={() => {copyTextToClipboard(pg.phone)}}
                      >
                      Copy Phone Number
                    </button>
                    <button
                      className="btn btn-outline-primary py-2 mt-2 blue_bg_1 button"
                      type="button"
                      onClick={() => {copyTextToClipboard(pg.email)}}
                    //   onClick={showContactInfo}
                    >
                      Copy Email address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkerCard;
