import React from "react";
import "./WordDefinition.css";
import Meaning from "./Meaning";
export default function WordDefinition(props) {
  if (props.data) {
    return (
      <div className="WordDefinition">
        <section>
          <h1> {props.data.word}</h1>
          <h5> {props.data.phonetic}</h5>
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
