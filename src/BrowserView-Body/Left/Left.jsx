import React, { useState, useRef, useEffect } from "react";
import "./Left.css";
import "../Right/Right.css";

// localStorage.setItem("grp-name",JSON.stringify([]));
if (!localStorage.getItem("dms"))
  localStorage.setItem("dms", JSON.stringify([]));

function Left() {
  let temp = JSON.parse(localStorage.getItem("grp-names"));
  let temp2 = JSON.parse(localStorage.getItem("dms"));
  let refGroup = useRef(null);
  let [arr, setArr] = useState(temp);
  let [dmArr, setDmArr] = useState(temp2);
  let [count, setCount] = useState(0);
  let [dm, setDM] = useState("");
  let refTextArea = useRef(null);
  let [isGroupSelect,setIsGroupSelect] = useState(false);
  useEffect(() => {
    //     localStorage.setItem("grp-names", JSON.stringify([]));
    localStorage.setItem("grp-names", JSON.stringify(arr));
    let a = localStorage.getItem("selected-groupName");
    let b = JSON.parse(localStorage.getItem("dms"));

    for(let i = 0; i < b.length; i++){
      if (a === b[i].name) setIsGroupSelect(!isGroupSelect);
      else setColorGroup(!isGroupSelect);
    }

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
    setCount(count++);
  };

  let onClickSendMsg = () => {
    refTextArea.current.value = "";
    var d = new Date(),
      minutes =
        d.getMinutes().toString().length === 1
          ? "0" + d.getMinutes()
          : d.getMinutes(),
      hours =
        d.getHours().toString().length === 1
          ? "0" + d.getHours()
          : d.getHours(),
      ampm = d.getHours() >= 12 ? " Pm" : " Am",
      months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

    let local_msg = JSON.parse(localStorage.getItem("dms"));
    let obj = {};
    console.log(dm);
    obj.name = localStorage.getItem("selected-groupName");
    obj.msg = dm;
    obj.time = hours + ":" + minutes + ampm;
    obj.date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    local_msg.push(obj);
    localStorage.setItem("dms", JSON.stringify(local_msg));
    setDmArr([...dmArr, obj]);
  };
  return (
    <>
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
                <div
                  className="a-grp"
                  ref={refGroup}
                  onClick={(event) => {
                    localStorage.setItem(
                      "selected-groupName",
                      option.groupName
                    );
                    localStorage.setItem(
                      "selected-colorGroup",
                      option.colorGroup
                    );
                    localStorage.setItem("selected-initial", option.initial);

                    setSelect(true);
                    if (isSelect === true)
                      refGroup.current.style.backgroundColor = null;

                    if (event.currentTarget.style.backgroundColor) {
                      event.currentTarget.style.backgroundColor = null;
                    } else {
                      event.currentTarget.style.backgroundColor = "#F7ECDC";
                      event.currentTarget.style.borderRadius =
                        "3.2rem 0px 0px 3.2rem";
                    }
                  }}
                >
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
      <div className="right">
        {!isSelect && (
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
        {isSelect && (
          <div className="message-section">
            <img
              src="send.png"
              alt=""
              className="send-icon"
              onClick={() => onClickSendMsg()}
            />
            <div className="header">
              <div
                className="circle"
                style={{
                  backgroundColor: localStorage.getItem("selected-colorGroup"),
                }}
              >
                <p className="grp-initial">
                  {localStorage.getItem("selected-initial")}
                </p>
              </div>
              <p className="grp-name">
                {localStorage.getItem("selected-groupName")}
              </p>
            </div>

            <div className="wrapper-message">
              {dmArr.map((obj) => (
                <>
                  {isGroupSelect && <div className="messages">
                    <div className="dateAndTime">
                      <p className="time">{obj.time}</p>
                      <p className="date">{obj.date}</p>
                    </div>
                    <div className="p-wrapper">
                      <p className="msg">{obj.msg}</p>
                    </div>
                  </div>}
                </>
              ))}
            </div>
            <div className="send-dm">
              <textarea
                ref={refTextArea}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your text here..........."
                className="input-text-area"
                onChange={(e) => {
                  setDM(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.keyCode === 13 && e.shiftKey === false) {
                    onClickSendMsg();
                    refTextArea.current.value = "";
                  }
                }}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Left;
