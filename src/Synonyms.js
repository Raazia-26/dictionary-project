import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <span key={index}>{synonyms}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
