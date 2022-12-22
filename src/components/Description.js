import React from "react";
import CasaMadrigal from "./images/theOne.jpg";

function Description() {
  return (
    <div
      style={{
        backgroundImage: `url(${CasaMadrigal})`,
        background: "no repeat center center fixed",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* <img src={CasaMadrigal} alt="casa madrigal from the movie Encanto"></img> */}
      <p>
        Walt Disney Animation Studios’ “Encanto," featuring all-new songs by
        award-winning songwriter Lin-Manuel Miranda, tells the tale of the
        Madrigals, an extraordinary family living in a magical house in the
        Colombian mountains. But when Mirabel, the only ordinary family member,
        discovers the magic surrounding their home is in danger, she may be her
        family’s last hope.
      </p>
    </div>
  );
}

export default Description;
