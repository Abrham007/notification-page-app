import React from "react";

function Item(props) {
  return (
    <div
      className="item"
      style={props.online ? { backgroundColor: "#F7FAFD" } : {}}
    >
      <img className="item__img" src={props.avatar} alt="avatar"></img>
      <div className="item__info">
        <div className="item__text">
          <span className="item__name">{props.name} </span>
          <span className="item__action">{props.action} </span>
          <span className="item__post">{props.post} </span>
          <span className="item__group">{props.group} </span>
          {props.online ? (
            <span className="item__live-dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="#F65552"
              >
                <circle cx="4" cy="4" r="4" />
              </svg>
            </span>
          ) : (
            ""
          )}
        </div>
        <p className="item__elapsed-time">{props.elapsedTime}</p>
        {props.message && <p className="item__message">{props.message}</p>}
      </div>
      {props.postedImg && (
        <img
          className="item__posted-img"
          src={props.postedImg}
          alt="posted"
        ></img>
      )}
    </div>
  );
}

export default Item;
