import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div key={props.index}>
        <p>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
  );
}
