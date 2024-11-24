import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search() {
    let apiKey = "f675a384aa40tc5a0420348fddabad0o";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    //alert(`Defining ${keyword}`);
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What would you like to define?</h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            suggested words: sunset, coffee, forest, friend...
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
