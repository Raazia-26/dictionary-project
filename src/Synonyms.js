import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <em> Synonyms:</em>
        {props.synonyms.map(function (synonyms, index) {
          return (
            <span key={index}>
              {" "}
              <em>{synonyms} </em>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
