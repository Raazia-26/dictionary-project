import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import WordDefinition from "./WordDefinition";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setwordData] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setwordData(response.data);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "dfd604f6396ftb7o693bf0062e2334aa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h4 className="mb-5"> What word do you want to look up?</h4>
      <section>
        <form onSubmit={search}>
          <input
            className="search_txt"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <input className="btn btn-outline-primary ms-3" type="submit" />
        </form>
      </section>
      <WordDefinition data={wordData} />
    </div>
  );
}
