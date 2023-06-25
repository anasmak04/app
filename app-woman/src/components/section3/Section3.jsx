import React from "react";
import acti from "../../assets/acti.png";
import child from "../../assets/child.jpg";
import "./Section3.css";
function Section3() {
  return (
    <div>
      <div className="sec">
        <img src={acti} alt="" />
        <h1>activities for your baby:</h1>

        <div className="sec-parent">
          <div className="box-child">
            <img src={child} alt="" />
          </div>

          <div className="box-content">
            <p>
              {" "}
              Exercise regularly, such as bcbrisk walking or prenatal yoga (with
              the approval of your healthcare provider)
            </p>
          </div>
        </div>

        <div className="content">
        <h1 className="content-p">
          Yoga can be a great way for pregnant women to stay fit, reduce stress,
          and prepare for childbirth. However, it's important to approach yoga
          practice during pregnancy with caution and to follow certain
          guidelines to ensure the safety of both mother and baby. Here are some
          general tips and poses that can be beneficial for pregnant women
          practicing yoga:
        </h1>
        </div>
      </div>
    </div>
  );
}

export default Section3;
