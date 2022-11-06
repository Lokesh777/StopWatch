import React from "react";
import "./All.css";

export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      आरंभ
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        पुनःप्रारम्भ
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "पुनःआरंभ" : "विराम"}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
