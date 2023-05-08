import React, { useEffect, useState } from "react";
import "./Right.css";

function Right() {
  //   let check = () => {
  //     if (!localStorage.getItem("selected-grp")) {
  //       setSelected(!isSelected);
  //     } else {
  //       setSelected(!isSelected);
  //     }
  //   };
  let temp = localStorage.getItem("selected-grp");
  let [isSelected, setSelected] = useState(true);
  useEffect(() => {
    // check();

    if (temp === null) {
      setSelected(true);
    } else {
      setSelected(false);
    }

    console.log("selected = ",isSelected);
    console.log("local = ",temp);
  }, [temp,isSelected]);

  return (
    <div className="right">
      {isSelected && (
        <div className="wrapper">
          <div className="up-imageAndCaptions">
            <img src="people.png" alt="" className="persons-right" />
            <div className="heading-wrapper">
              <h1 className="right-heading">Pocket Notes</h1>
            </div>
            <p className="right-captions">
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className="encrypted-text-icon">
            <img src="lock.png" alt="" className="lock" />
            <p className="encrypt-caption">end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Right;
