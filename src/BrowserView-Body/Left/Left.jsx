import React, { useState, useRef, useEffect } from "react";
import "./Left.css";

// localStorage.setItem("grp-name",JSON.stringify([]));
let count = 1;
export default function Left() {
  let temp = JSON.parse(localStorage.getItem("grp-names"));
  let refGroup = useRef(null);
  let [arr, setArr] = useState(temp);
  useEffect(() => {
    //     localStorage.setItem("grp-names", JSON.stringify([]));
    localStorage.setItem("grp-names", JSON.stringify(arr));
  }, [arr]);
  let [pop, setPop] = useState(false);
  let [groupName, setGroupName] = useState("");
  let [colorGroup, setColorGroup] = useState("");
  let [isSelect, setSelect] = useState(false);
  let onClickAddGroup = () => {
    setPop(!pop);
    // refLeft.current.style.backgroundColor = 'background: rgba(47, 47, 47, 0.75)';
  };

  let onClickCreateGroup = () => {
    setPop(!pop);
    let obj = {};
    let splittedName = groupName.split(" ");
    let initial = "";
    initial = initial.concat(splittedName[0][0]);

    if (splittedName.length >= 2)
      initial = initial.concat(splittedName[splittedName.length - 1][0]);
    
    obj.id = count;  
    obj.initial = initial;
    obj.colorGroup = colorGroup;
    obj.groupName = groupName;
    setArr([...arr, obj]);
    count++;
  };
  return (
    <div
      className="left"
      onLoad={() => {
        localStorage.setItem("grp-names", JSON.stringify([]));
      }}
    >
      {pop && (
        <div className="pop-up-box">
          <h1 className="heading-popup">Create New Notes group</h1>
          <div className="enter-name">
            <p className="grp-name-popup">Group Name</p>
            <input
              type="text"
              className="enter-grp-name"
              placeholder="Enter your group name...."
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
          </div>
          <div className="choose-color">
            <p className="choose-color-popup">Choose colour</p>
            <div
              className="col-1"
              onClick={() => {
                setColorGroup("#B38BFA");
              }}
            ></div>
            <div
              className="col-2"
              onClick={() => {
                setColorGroup("#FF79F2");
              }}
            ></div>
            <div
              className="col-3"
              onClick={() => {
                setColorGroup("#43E6FC");
              }}
            ></div>
            <div
              className="col-4"
              onClick={() => {
                setColorGroup("#B38BFA");
              }}
            ></div>
            <div
              className="col-5"
              onClick={() => {
                setColorGroup("#0047FF");
              }}
            ></div>
            <div
              className="col-6"
              onClick={() => {
                setColorGroup("#6691FF");
              }}
            ></div>
          </div>
          <div className="button-pop-up" onClick={() => onClickCreateGroup()}>
            <button className="create-grp-pop">Create</button>
          </div>
        </div>
      )}

      <div className="heading">Pocket Notes</div>
      <div className="action-button" onClick={() => onClickAddGroup()}>
        <p className="plus-icon">+</p>
        <p className="content-left">Create Notes group</p>
      </div>
      <div className="groups">
        {arr != null &&
          arr.map((option) => (
            <>
              <div className="a-grp" 
              ref={refGroup}
              onClick={(event) => {
                setSelect(true);
                if (isSelect === true) refGroup.current.style.backgroundColor = null;

                if (event.currentTarget.style.backgroundColor){
                    event.currentTarget.style.backgroundColor = null;
                }
                else{
                    event.currentTarget.style.backgroundColor = '#F7ECDC';
                    event.currentTarget.style.borderRadius = '3.2rem 0px 0px 3.2rem';
                }
              }}>
                <div
                  className="circle"
                  style={{ backgroundColor: option.colorGroup }}
                >
                  <p className="grp-initial">{option.initial}</p>
                </div>
                <p className="grp-name">{option.groupName}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
