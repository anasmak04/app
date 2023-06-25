import React from "react";
import Feminine from "../../assets/Feminine.png";
import "./Section1.css";
function Section1() {
  return (
    <div className="container">
      <div className="parent">
        <div className="box-1">
          <img src={Feminine} alt="" />
        </div>

        <div className="box-2">
          <h1>Baby follow up</h1>

          <p class="circle-text">
            Congratulations on becoming a parent! As a new parent, you may have
            a lot of questions about how to take care of your baby, especially
            during the first few months. That's why we've created Baby
            Follow-Up, a page dedicated to helping you monitor your baby's
            growth and development. Our goal is to provide you with useful
            information and tips on how to ensure your baby is healthy and
            happy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
