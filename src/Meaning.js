import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div>
        <p>
          <strong>Definition:</strong> {props.meaning.definition}
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
          <br />
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
  );
}
